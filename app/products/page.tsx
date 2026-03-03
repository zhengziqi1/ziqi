'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  // 产品数据
  const products = [
    {
      id: '1',
      name: '芝麻糕',
      price: '28.00',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20sesame%20cake%20package%20with%20traditional%20design%20showing%20people%20making%20cakes%20in%20a%20traditional%20workshop&image_size=square',
      description: '精选优质芝麻，传统工艺制作，口感酥脆，香气四溢',
      features: ['精选芝麻', '传统工艺', '口感酥脆', '香气四溢'],
      flavor: '香甜',
      texture: '酥脆',
      weight: '250g',
      origin: '岱山长涂岛'
    },
    {
      id: '2',
      name: '海苔糕',
      price: '30.00',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20seaweed%20cake%20package%20with%20traditional%20design%20showing%20people%20making%20cakes%20in%20a%20traditional%20workshop&image_size=square',
      description: '添加天然海苔，咸香可口，营养丰富',
      features: ['天然海苔', '咸香可口', '营养丰富', '海岛特色'],
      flavor: '咸香',
      texture: '酥脆',
      weight: '250g',
      origin: '岱山长涂岛'
    },
    {
      id: '3',
      name: '高粱糕',
      price: '29.00',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20sorghum%20cake%20package%20with%20traditional%20design%20showing%20people%20making%20cakes%20in%20a%20traditional%20workshop&image_size=square',
      description: '选用优质高粱，口感软糯，甜度适中',
      features: ['优质高粱', '口感软糯', '甜度适中', '健康营养'],
      flavor: '清甜',
      texture: '软糯',
      weight: '250g',
      origin: '岱山长涂岛'
    },
    {
      id: '4',
      name: '黄豆糕',
      price: '31.00',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20soybean%20cake%20package%20with%20traditional%20design%20showing%20people%20making%20cakes%20in%20a%20traditional%20workshop&image_size=square',
      description: '精选黄豆，富含蛋白质，口感细腻',
      features: ['精选黄豆', '富含蛋白质', '口感细腻', '营养健康'],
      flavor: '淡香',
      texture: '细腻',
      weight: '250g',
      origin: '岱山长涂岛'
    }
  ];

  useEffect(() => {
    // 页面加载动画
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // 滚动动画
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // 初始化粒子效果
    const initParticles = async () => {
      try {
        // 动态加载粒子效果库
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.onload = () => {
          const particlesJS = (window as any).particlesJS;
          if (particlesJS) {
            particlesJS('particles-js', {
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: '#ffffff'
                },
                shape: {
                  type: 'circle',
                  stroke: {
                    width: 0,
                    color: '#000000'
                  }
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: '#ffffff',
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: 'none',
                  random: false,
                  straight: false,
                  out_mode: 'out',
                  bounce: false
                }
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onhover: {
                    enable: true,
                    mode: 'grab'
                  },
                  onclick: {
                    enable: true,
                    mode: 'push'
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 140,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  push: {
                    particles_nb: 4
                  }
                }
              },
              retina_detect: true
            });
          }
        };
        document.body.appendChild(script);
      } catch (error) {
        console.error('Failed to initialize particles:', error);
      }
    };

    initParticles();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 切换产品
  const nextProduct = () => {
    setActiveProduct((prev) => (prev + 1) % products.length);
    setShowDetails(false);
  };

  const prevProduct = () => {
    setActiveProduct((prev) => (prev - 1 + products.length) % products.length);
    setShowDetails(false);
  };

  // 3D旋转效果
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX - rotation.x, y: e.clientY - rotation.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setRotation({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 动态背景 */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
        {/* 粒子效果 */}
        <div className="absolute inset-0" id="particles-js"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="container mx-auto">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                产品3D展示
              </span>
            </h1>
            <p className={`text-xl text-center text-gray-300 mt-4 ${isLoaded ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
              探索海魂硬糕的精致工艺与独特风味
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* 3D产品展示 */}
          <section className={`mb-20 ${isLoaded ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* 3D产品 */}
              <div className="lg:w-1/2">
                <div 
                  className="relative w-full h-[500px] flex items-center justify-center"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  {/* 3D产品容器 */}
                  <div 
                    className="relative w-[300px] h-[400px]"
                    style={{
                      transform: `perspective(1000px) rotateX(${rotation.y * 0.1}deg) rotateY(${rotation.x * 0.1}deg)`,
                      transition: isDragging ? 'none' : 'transform 0.3s ease'
                    }}
                  >
                    {/* 产品卡片 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                      <div className="p-6">
                        <div className="w-full h-64 bg-gray-800 rounded-xl overflow-hidden mb-6">
                          <img 
                            src={products[activeProduct].image} 
                            alt={products[activeProduct].name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{products[activeProduct].name}</h2>
                        <p className="text-xl font-semibold text-blue-400 mb-4">¥{products[activeProduct].price}</p>
                        <p className="text-gray-300 text-sm mb-6">{products[activeProduct].description}</p>
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={() => setShowDetails(!showDetails)}
                        >
                          {showDetails ? '收起详情' : '查看详情'}
                        </Button>
                      </div>
                    </div>
                    {/* 3D效果阴影 */}
                    <div className="absolute -bottom-4 -right-4 w-full h-full bg-black/30 rounded-2xl blur-xl transform rotate-3"></div>
                  </div>
                  
                  {/* 科技感装饰 */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 border border-blue-500/30 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-purple-500/30 rounded-full animate-pulse animation-delay-1000"></div>
                </div>
              </div>

              {/* 产品详情 */}
              <div className={`lg:w-1/2 space-y-6 ${showDetails ? 'animate-slide-in-right' : ''}`}>
                <h2 className="text-3xl font-bold">
                  {products[activeProduct].name}
                  <span className="ml-4 text-sm font-normal text-gray-400">{products[activeProduct].flavor}</span>
                </h2>
                
                {/* 产品特性 */}
                <div className="grid grid-cols-2 gap-4">
                  {products[activeProduct].features.map((feature, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                      <p className="text-center">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* 产品信息 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <p className="text-gray-400 text-sm">口感</p>
                    <p className="text-xl font-semibold">{products[activeProduct].texture}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <p className="text-gray-400 text-sm">重量</p>
                    <p className="text-xl font-semibold">{products[activeProduct].weight}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <p className="text-gray-400 text-sm">产地</p>
                    <p className="text-xl font-semibold">{products[activeProduct].origin}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <p className="text-gray-400 text-sm">价格</p>
                    <p className="text-xl font-semibold text-blue-400">¥{products[activeProduct].price}</p>
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-white/30 hover:bg-white/10"
                    onClick={prevProduct}
                  >
                    上一个
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    立即购买
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-white/30 hover:bg-white/10"
                    onClick={nextProduct}
                  >
                    下一个
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* 产品轮播 */}
          <section className="mb-20 scroll-reveal">
            <h2 className="text-3xl font-bold mb-10 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                产品系列
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${index === activeProduct ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => {
                    setActiveProduct(index);
                    setShowDetails(false);
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <p className="text-sm text-blue-300">¥{product.price}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-300 mb-4">{product.description}</p>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm">
                      查看详情
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 科技感数据展示 */}
          <section className="mb-20 scroll-reveal">
            <h2 className="text-3xl font-bold mb-10 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                品牌数据
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 数据卡片 */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">139</div>
                <p className="text-gray-300">年品牌历史</p>
                <div className="mt-4 h-1 w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">8</div>
                <p className="text-gray-300">经典口味</p>
                <div className="mt-4 h-1 w-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse animation-delay-500"></div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6">
                <div className="text-4xl font-bold text-pink-400 mb-2">10000+</div>
                <p className="text-gray-300">年销量(盒)</p>
                <div className="mt-4 h-1 w-full bg-gradient-to-r from-pink-600 to-blue-600 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="container mx-auto text-center text-gray-400">
            <p>© 2024 海魂硬糕. 传承百年工艺，品质保证.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
