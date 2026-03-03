'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  // 状态管理
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 页面加载和粒子效果初始化
  useEffect(() => {
    // 页面加载动画
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);

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
                  value: '#e63946'
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
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: '#1d3557',
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
                  'grab': {
                    'distance': 140,
                    'line_linked': {
                      'opacity': 1
                    }
                  },
                  'push': {
                    'particles_nb': 4
                  }
                }
              },
              retina_detect: true
            });
          }
        };
        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
      } catch (error) {
        console.error('粒子效果初始化失败:', error);
      }
    };

    initParticles();
  }, []);

  // 产品数据
  const products = [
    {
      id: '1',
      name: '传统硬糕',
      price: '28.00',
      image: 'https://n.sinaimg.cn/sinacn16/474/w800h474/20180920/0696-hhuhism4152243.jpg',
      description: '经典传统口味，采用百年配方制作，口感酥脆，甜而不腻'
    },
    {
      id: '2',
      name: '小包装硬糕',
      price: '30.00',
      image: 'https://img.alicdn.com/i2/2200592611688/O1CN01oD2QJV1OL9EeFfic8_!!2200592611688.jpg',
      description: '便捷小包装，适合随身携带，随时随地享受传统美味'
    },
    {
      id: '3',
      name: '礼盒装硬糕',
      price: '29.00',
      image: 'https://ts4.tc.mm.bing.net/th/id/OIP-C.yyGtgPJNEA61vMc7Jgd01wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      description: '精美礼盒包装，内含多种口味，是送礼的绝佳选择'
    },
    {
      id: '4',
      name: '精品硬糕',
      price: '31.00',
      image: 'https://n.sinaimg.cn/sinacn16/474/w800h474/20180920/0696-hhuhism4152243.jpg',
      description: '精选原料，精致工艺，品质上乘，适合送礼'
    },
    {
      id: '5',
      name: '长涂硬糕',
      price: '27.00',
      image: 'https://img.alicdn.com/i2/2200592611688/O1CN01oD2QJV1OL9EeFfic8_!!2200592611688.jpg',
      description: '正宗长涂硬糕，传统工艺制作，地道舟山风味'
    },
    {
      id: '6',
      name: '倭井潭硬糕',
      price: '32.00',
      image: 'https://ts2.tc.mm.bing.net/th/id/OIP-C.4m7WVzB309r8jq3iXUo8dQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
      description: '正宗倭井潭硬糕，历史悠久，工艺精湛，风味独特'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1faee] to-[#a8dadc] dark:from-gray-900 dark:to-gray-800 overflow-hidden" ref={containerRef}>
      {/* 动态背景 */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f1faee] to-[#a8dadc] dark:from-gray-900 dark:to-gray-800"></div>
        {/* 粒子效果 */}
        <div className="absolute inset-0" id="particles-js"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-md dark:bg-gray-900/90 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#e63946] dark:text-white">海魂硬糕</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#1d3557] dark:text-white hover:text-[#e63946] dark:hover:text-[#e63946] font-medium transition-colors duration-300">首页</Link>
              <Link href="/technology" className="text-[#1d3557] dark:text-white hover:text-[#e63946] dark:hover:text-[#e63946] font-medium transition-colors duration-300">工艺科技</Link>
              <Link href="/gallery" className="text-[#1d3557] dark:text-white hover:text-[#e63946] dark:hover:text-[#e63946] font-medium transition-colors duration-300">展示中心</Link>
              <Link href="/effects" className="text-[#1d3557] dark:text-white hover:text-[#e63946] dark:hover:text-[#e63946] font-medium transition-colors duration-300">倭井潭历史</Link>
              <Button className="bg-[#e63946] hover:bg-[#c1121f] text-white">立即购买</Button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <span className="text-2xl">☰</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="py-24 md:py-28 lg:py-32 pt-32 md:pt-36 lg:pt-40 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#e63946] dark:text-white mb-6 leading-tight">
              海魂硬糕
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1d3557] dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
              传承百年的舟山传统美食，源自岱山长涂岛的特色糕点
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button size="lg" className="px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-[#e63946] hover:bg-[#c1121f] transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                立即购买
              </Button>
              <Button variant="outline" size="lg" className="px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 border-[#1d3557] text-[#1d3557] hover:bg-[#1d3557] hover:text-white transform transition-all duration-300 hover:scale-105">
                了解更多
              </Button>
            </div>
            <div className="mt-12 sm:mt-16 md:mt-24">
              <div className="w-16 sm:w-20 h-1 bg-[#e63946] mx-auto mb-4 sm:mb-6 rounded-full"></div>
              <p className="text-sm sm:text-lg text-[#1d3557] dark:text-gray-400">
                浙江省非物质文化遗产 • 浙江老字号
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#e63946] dark:text-white mb-4">
            产品系列
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-[#1d3557] dark:text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto">
            精选优质原料，传统工艺制作，为您带来正宗的海岛风味
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="bg-[#f1faee] dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 sm:p-6 w-full">
                      <p className="text-white text-sm">
                        点击查看详情
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#e63946] text-white text-sm font-bold px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                    ¥{product.price}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1d3557] dark:text-white mb-4">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-[#1d3557] to-[#457b9d] hover:from-[#19304a] hover:to-[#3a6b8a] text-white transition-all duration-300">
                    加入购物车
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1d3557] to-[#457b9d] relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-12 sm:mb-16">
            为什么选择海魂硬糕
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-md dark:bg-gray-800/80 p-6 sm:p-8 rounded-xl shadow-xl border border-white/20 transform transition-all duration-500 hover:-translate-y-4">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#e63946] rounded-full flex items-center justify-center mb-6 sm:mb-8 mx-auto">
                <span className="text-white text-2xl sm:text-3xl">🎯</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 text-center">
                百年传承
              </h3>
              <p className="text-gray-200 text-center leading-relaxed">
                始创于1885年，至今已有近140年的历史，是舟山群岛传统糕点的代表之一
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-md dark:bg-gray-800/80 p-6 sm:p-8 rounded-xl shadow-xl border border-white/20 transform transition-all duration-500 hover:-translate-y-4">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#e63946] rounded-full flex items-center justify-center mb-6 sm:mb-8 mx-auto">
                <span className="text-white text-2xl sm:text-3xl">🌾</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 text-center">
                优质原料
              </h3>
              <p className="text-gray-200 text-center leading-relaxed">
                选用优质糯米、芝麻、花生等原料，传统工艺制作，品质保证
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-md dark:bg-gray-800/80 p-6 sm:p-8 rounded-xl shadow-xl border border-white/20 transform transition-all duration-500 hover:-translate-y-4">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#e63946] rounded-full flex items-center justify-center mb-6 sm:mb-8 mx-auto">
                <span className="text-white text-2xl sm:text-3xl">🏆</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 text-center">
                荣誉认证
              </h3>
              <p className="text-gray-200 text-center leading-relaxed">
                浙江老字号，非物质文化遗产，浙江省工业旅游示范基地
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-[#f1faee] dark:bg-gray-700 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#e63946] dark:text-white mb-12 sm:mb-16">
            客户评价
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl">
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div className="text-[#e63946] text-3xl sm:text-4xl">
                  ★★★★★
                </div>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-center text-[#1d3557] dark:text-gray-300 mb-6 sm:mb-8 italic">
                "海魂硬糕真的是太好吃了！口感酥脆，甜而不腻，完全保留了传统的味道。作为舟山人，我从小就吃这个，现在在外地工作，每次回家都会带几盒走。"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#e63946] rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white text-xl sm:text-2xl">👤</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#1d3557] dark:text-white">
                    张先生
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    忠实客户
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with New Images */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#e63946] dark:text-white mb-12 sm:mb-16">
            关于我们
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* Image 1: Traditional Production */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4">
              <img 
                src="https://n.sinaimg.cn/sinacn16/474/w800h474/20180920/0696-hhuhism4152243.jpg"
                alt="传统制作工艺"
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="p-6 sm:p-8 bg-[#f1faee] dark:bg-gray-700">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1d3557] dark:text-white mb-3">
                  传统制作工艺
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  传承百年的手工制作工艺，经炒米、磨粉、配料、细拌、杆粉、印块、两次水蒸、两次火焙等多道工序
                </p>
              </div>
            </div>
            
            {/* Image 2: Raw Materials */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4">
              <img 
                src="https://img.alicdn.com/i2/2200592611688/O1CN01oD2QJV1OL9EeFfic8_!!2200592611688.jpg"
                alt="优质原料"
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="p-6 sm:p-8 bg-[#f1faee] dark:bg-gray-700">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1d3557] dark:text-white mb-3">
                  优质原料
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  严格筛选优质糯米、芝麻等原料，确保每一块硬糕的品质和口感
                </p>
              </div>
            </div>
            
            {/* Image 3: Baking Process */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4">
              <img 
                src="https://ts1.tc.mm.bing.net/th/id/R-C.69526b46fb8e9efd9a20ce808eda482c?rik=3CB5V3vkeWy2RA&riu=http%3a%2f%2fimg2.zjolcdn.com%2fpic%2f0%2f14%2f58%2f02%2f14580260_952147.jpg&ehk=aGY%2boKsQkI5RCi0GRdzmL3Uffwtj5As1KNr8aCUL7%2bo%3d&risl=&pid=ImgRaw&r=0"
                alt="烘焙工艺"
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="p-6 sm:p-8 bg-[#f1faee] dark:bg-gray-700">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1d3557] dark:text-white mb-3">
                  烘焙工艺
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  传统烘焙工艺与现代技术相结合，确保硬糕口感酥脆，甜而不腻
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-[#e63946] to-[#1d3557] relative z-10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            立即品尝百年传统美食
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-3xl mx-auto">
            海魂硬糕，传承百年的舟山特色美食，让您品味正宗的海岛风味。现在下单，享受限时优惠！
          </p>
          <Button size="lg" className="px-8 sm:px-10 lg:px-12 py-4 sm:py-6 lg:py-8 bg-white text-[#e63946] hover:bg-[#f1faee] transform transition-all duration-300 hover:scale-110 shadow-lg">
            立即购买
          </Button>
          <div className="mt-8 sm:mt-12 text-white opacity-80">
            <p className="text-sm sm:text-base">全国包邮 • 7天无理由退换 • 假一赔十</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d3557] text-white py-12 sm:py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#e63946]">
                海魂硬糕
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6">
                传承百年的舟山传统美食，源自岱山长涂岛的特色糕点
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-colors duration-300">
                  <span>📱</span>
                </div>
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-colors duration-300">
                  <span>📧</span>
                </div>
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-colors duration-300">
                  <span>🌐</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                快速链接
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-[#e63946] transition-colors duration-300">首页</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#e63946] transition-colors duration-300">产品中心</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#e63946] transition-colors duration-300">关于我们</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#e63946] transition-colors duration-300">联系我们</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#e63946] transition-colors duration-300">常见问题</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                联系我们
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start text-gray-300">
                  <span className="mr-3 mt-1">📍</span>
                  <span className="text-sm sm:text-base">浙江省舟山市岱山县长涂岛</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-3">📞</span>
                  <span>13115805828</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-3">📧</span>
                  <span className="text-sm sm:text-base">271042082@qq.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">© 2024 海魂硬糕. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
