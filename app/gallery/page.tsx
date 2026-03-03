'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface Layout {
  id: string;
  title: string;
  icon: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: '传统硬糕',
    description: '传统芝麻口味，香酥可口，回味无穷',
    image: 'https://ts1.tc.mm.bing.net/th/id/OIP-C.v6_J9imjkriDhcNE-SEwAwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    category: '经典口味'
  },
  {
    id: 2,
    title: '小包装硬糕',
    description: '便捷小包装，适合随身携带，随时随地享受传统美味',
    image: 'https://img.alicdn.com/i2/2200592611688/O1CN01ogDdca1OL9EmhA0e4_!!2200592611688.jpg',
    category: '经典口味'
  },
  {
    id: 3,
    title: '礼盒装硬糕',
    description: '精美礼盒包装，内含多种口味，是送礼的绝佳选择',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01cqxgWW1VZzSJkBXua_!!2212171062668-0-cib.310x310.jpg',
    category: '高端礼盒'
  },
  {
    id: 4,
    title: '传统包装硬糕',
    description: '传统纸包装，经典怀旧，地道风味',
    image: 'https://img.alicdn.com/i2/2200592611688/O1CN01oD2QJV1OL9EeFfic8_!!2200592611688.jpg',
    category: '传统包装'
  },
  {
    id: 5,
    title: '精品硬糕',
    description: '精选原料，精致工艺，品质上乘',
    image: 'https://ts1.tc.mm.bing.net/th/id/R-C.a1749a0a346193c90f1418fff4804ddc?rik=aIIUPoSEGQjcCw&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn16%2f474%2fw800h474%2f20180920%2f0696-hhuhism4152243.jpg&ehk=iBMPdy5tQM0nrCeCURGNGQe%2b0jCptqO7WygnPgADFMs%3d&risl=&pid=ImgRaw&r=0',
    category: '高端礼盒'
  },
  {
    id: 6,
    title: '长涂硬糕',
    description: '正宗长涂硬糕，传统工艺制作，地道舟山风味',
    image: 'https://ts3.tc.mm.bing.net/th/id/OIP-C.DRAm-O2URJgJ6XVnThSEUgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    category: '经典口味'
  },
  {
    id: 7,
    title: '倭井潭硬糕',
    description: '正宗倭井潭硬糕，历史悠久，工艺精湛',
    image: 'https://ts2.tc.mm.bing.net/th/id/OIP-C.7_wYqw8rg5Yi2HHx8iedrgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    category: '经典口味'
  },
  {
    id: 8,
    title: '传统包装硬糕',
    description: '传统纸包装，保持原始风味',
    image: 'https://img.alicdn.com/i2/2200592611688/O1CN01SnzfR01OL9EgklJmM_!!2200592611688.jpg',
    category: '传统包装'
  },
  {
    id: 9,
    title: '精品礼盒',
    description: '高档礼盒包装，适合送礼',
    image: 'https://ts1.tc.mm.bing.net/th/id/R-C.866e0c258c42dda60063c0b613234dc7?rik=K73uEvhH%2bowvhw&riu=http%3a%2f%2fimg2.zjolcdn.com%2fpic%2f0%2f14%2f50%2f75%2f14507541_648292.jpg&ehk=0R5tzFfZtKPJUH1BDxPciMZ%2bc93n9sNuNWjCji4Qgqs%3d&risl=&pid=ImgRaw&r=0',
    category: '高端礼盒'
  }
];

const layouts: Layout[] = [
  { id: 'grid', title: '网格布局', icon: '📊', description: '整齐划一的网格排列，视觉清晰' },
  { id: 'masonry', title: '瀑布流', icon: '🌊', description: '错落有致的布局，视觉层次感强' },
  { id: 'carousel', title: '轮播展示', icon: '🎠', description: '动态轮播效果，焦点突出' }
];

const categories = ['全部', '经典口味', '高端礼盒', '传统包装'];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 页面加载动画
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // 滚动效果
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // 初始化粒子效果
    const initParticles = async () => {
      try {
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
      } catch (error) {
        console.error('Failed to initialize particles:', error);
      }
    };

    initParticles();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const filteredItems = activeCategory === '全部' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" onMouseMove={handleMouseMove} ref={containerRef}>
      {/* 动态背景 */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
        {/* 粒子效果 */}
        <div className="absolute inset-0" id="particles-js"></div>
        {/* 鼠标跟随光效 */}
        <div className="absolute w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 pointer-events-none" style={{ left: `${mousePosition.x - 128}px`, top: `${mousePosition.y - 128}px`, transition: 'left 0.1s ease, top 0.1s ease' }}></div>
      </div>

      <div className="relative z-10">
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
        
        {/* Header */}
        <header className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="container mx-auto">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">展示中心</span>
            </h1>
            <p className={`text-xl text-center text-gray-300 mt-4 ${isLoaded ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
              长涂硬糕产品展示，多种口味任您选择
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">


          {/* 分类筛选 */}
          <section className={`mb-16 ${isLoaded ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button key={category} variant={activeCategory === category ? 'default' : 'outline'} className={`px-6 py-3 transition-all duration-300 ${activeCategory === category ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'border-white/30 hover:bg-white/10'}`} onClick={() => setActiveCategory(category)}>
                  {category}
                </Button>
              ))}
            </div>
          </section>

          {/* 瀑布流布局 */}
          <section className={`mb-20 ${isLoaded ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="break-inside-avoid mb-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-blue-400">{item.category}</span>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">查看详情</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>


        </main>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="container mx-auto text-center text-gray-400">
            <p>© 2024 海魂硬糕. 展示正宗长涂硬糕，传统工艺制作.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default GalleryPage;