'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Technology {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  features: string[];
}

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const technologies: Technology[] = [
  {
    id: 1,
    title: '传统制糕工艺',
    description: '传承百年的长涂硬糕制作工艺，采用纯手工制作，保留原始风味',
    image: 'https://ts1.tc.mm.bing.net/th/id/OIP-C.oXSaCjRhk8kPFBj_9IBN3AHaEY?rs=1&pid=ImgDetMain&o=7&rm=3',
    category: '制作工艺',
    features: [
      '纯手工制作',
      '传统木模成型',
      '自然晾晒工艺',
      '百年配方传承'
    ]
  },
  {
    id: 2,
    title: '原料精选技术',
    description: '严格筛选优质糯米、芝麻等原料，确保每一块硬糕的品质',
    image: 'https://ts2.tc.mm.bing.net/th/id/OIP-C.7_wYqw8rg5Yi2HHx8iedrgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    category: '原料技术',
    features: [
      '优质糯米精选',
      '芝麻筛选工艺',
      '配料比例控制',
      '原料储存技术'
    ]
  },
  {
    id: 3,
    title: '烘焙技术',
    description: '传统烘焙工艺与现代技术相结合，确保硬糕口感酥脆',
    image: 'https://img.alicdn.com/i2/2200592611688/O1CN01SnzfR01OL9EgklJmM_!!2200592611688.jpg',
    category: '烘焙工艺',
    features: [
      '传统烘焙工艺',
      '温度精准控制',
      '烘焙时间掌握',
      '口感调试技术'
    ]
  },
  {
    id: 4,
    title: '包装保鲜技术',
    description: '采用现代化包装技术，保持硬糕新鲜口感的同时延长保质期',
    image: 'https://ts2.tc.mm.bing.net/th/id/OIP-C.FZMa-0ZJnOSPuXVf86tsOwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
    category: '包装技术',
    features: [
      '真空包装技术',
      '防潮保鲜处理',
      '传统包装设计',
      '保质期延长技术'
    ]
  }
];

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: '炒米',
    description: '将优质糯米炒制至金黄色，散发香味',
    icon: '🍚'
  },
  {
    id: 2,
    title: '磨粉',
    description: '将炒好的糯米磨成细腻的米粉',
    icon: '🌾'
  },
  {
    id: 3,
    title: '配料',
    description: '按照祖传秘方准备糖、芝麻等配料',
    icon: '🧂'
  },
  {
    id: 4,
    title: '细拌',
    description: '将米粉与配料充分搅拌均匀',
    icon: '🥣'
  },
  {
    id: 5,
    title: '杆粉',
    description: '将拌好的粉料杆压成均匀的厚度',
    icon: '🖌️'
  },
  {
    id: 6,
    title: '印块',
    description: '使用传统木模将粉料压制成型',
    icon: '🪵'
  },
  {
    id: 7,
    title: '两次水蒸',
    description: '将成型的硬糕进行两次水蒸工序',
    icon: '💨'
  },
  {
    id: 8,
    title: '两次火焙',
    description: '将蒸好的硬糕进行两次火焙，使其变硬成型',
    icon: '🔥'
  },
  {
    id: 9,
    title: '包装成品',
    description: '将制作完成的硬糕进行包装，确保品质和新鲜度',
    icon: '📦'
  }
];

const TechnologyPage: React.FC = () => {
  const [activeTech, setActiveTech] = useState<number>(1);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
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

  const currentTech = technologies.find(tech => tech.id === activeTech) || technologies[0];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" ref={containerRef}>
      {/* 动态背景 */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
        {/* 粒子效果 */}
        <div className="absolute inset-0" id="particles-js"></div>
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">工艺科技</span>
            </h1>
            <p className={`text-xl text-center text-gray-300 mt-4 ${isLoaded ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
              传承百年的长涂硬糕制作工艺与现代技术相结合
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* 技术展示 */}
          <section className={`mb-24 ${isLoaded ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">核心技术</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* 技术详情 */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{currentTech.title}</h3>
                  <p className="text-gray-300 mb-6">{currentTech.description}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {currentTech.features.map((feature, index) => (
                      <span key={index} className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    了解更多
                  </Button>
                </div>
                
                {/* 技术切换 */}
                <div className="space-y-4">
                  {technologies.map((tech) => (
                    <div 
                      key={tech.id}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${activeTech === tech.id ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50' : 'bg-white/5 border border-white/10 hover:border-blue-500/30'}`}
                      onClick={() => setActiveTech(tech.id)}
                    >
                      <h4 className="font-bold mb-2">{tech.title}</h4>
                      <p className="text-sm text-gray-400">{tech.description.substring(0, 100)}...</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 技术演示 */}
              <div className="relative h-[500px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                <img 
                  src={currentTech.image} 
                  alt={currentTech.title} 
                  className="w-full h-full object-cover transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-8">
                    <span className="text-sm text-blue-400 mb-2 block">{currentTech.category}</span>
                    <h4 className="text-xl font-bold mb-2">{currentTech.title}</h4>
                    <p className="text-gray-300 text-sm">{currentTech.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 工艺流程图 */}
          <section className={`mb-24 ${isLoaded ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">工艺流程</span>
            </h2>
            
            <div className="mb-12 text-center">
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                倭井潭硬糕制作始于清光绪年间，采用祖传秘方，经炒米、磨粉、配料、细拌、杆粉、印块、两次水蒸、两次火焙等工序，使糖、粉和辅料完美地溶胶在一起，成为外表腊黄莹色的硬糕。
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
                浙江黄岩人林纪法到岱山县长涂岛做换糖生意时，发现岱山渔业繁华，渔民在捕捞中需要不易变质的食品充饥，于是抓住这一商机，从制作黄岩糕着手制成了不易损坏的硬糕。同时，为纪念传说中长涂抗倭英雄"三姐妹"而取名"倭井潭硬糕"。
              </p>
            </div>
            
            <div className="relative">
              {/* 连接线 */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
              
              {/* 流程步骤 */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
                {processSteps.map((step) => (
                  <div key={step.id} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 工艺优势 */}
          <section className={`mb-24 ${isLoaded ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">工艺优势</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-4">传统工艺</h3>
                <p className="text-gray-300 mb-6">传承百年的制作工艺，保留原始风味和文化底蕴</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-sm text-gray-400">百年配方传承</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-sm text-gray-400">纯手工制作</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-sm text-gray-400">传统木模成型</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">�</span>
                </div>
                <h3 className="text-xl font-bold mb-4">优质原料</h3>
                <p className="text-gray-300 mb-6">精选优质糯米、芝麻等原料，确保每一块硬糕的品质</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-sm text-gray-400">优质糯米精选</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-sm text-gray-400">芝麻筛选工艺</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-sm text-gray-400">配料比例控制</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">�</span>
                </div>
                <h3 className="text-xl font-bold mb-4">现代技术</h3>
                <p className="text-gray-300 mb-6">传统工艺与现代技术相结合，提升品质和生产效率</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-sm text-gray-400">温度精准控制</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-sm text-gray-400">真空包装技术</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-sm text-gray-400">品质检测系统</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 工艺设备 */}
          <section className={`mb-24 ${isLoaded ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">工艺设备</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center justify-center text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <span className="text-4xl mb-4">🪵</span>
                <h3 className="text-lg font-bold mb-2">传统木模</h3>
                <p className="text-sm text-gray-400">手工雕刻的木质模具，保留传统图案</p>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center justify-center text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <span className="text-4xl mb-4">🔥</span>
                <h3 className="text-lg font-bold mb-2">烘焙设备</h3>
                <p className="text-sm text-gray-400">传统与现代结合的烘焙设备</p>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center justify-center text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <span className="text-4xl mb-4">�️</span>
                <h3 className="text-lg font-bold mb-2">晾晒系统</h3>
                <p className="text-sm text-gray-400">自然晾晒与控温烘干相结合</p>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center justify-center text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <span className="text-4xl mb-4">�</span>
                <h3 className="text-lg font-bold mb-2">包装设备</h3>
                <p className="text-sm text-gray-400">现代化真空包装设备</p>
              </div>
            </div>
          </section>

          {/* 工艺咨询 */}
          <section className={`${isLoaded ? 'animate-fade-in animation-delay-700' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">工艺咨询</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                我们传承百年的长涂硬糕制作工艺，结合现代技术，为您提供最正宗的硬糕产品。
                欢迎联系我们，了解更多工艺细节和合作方式。
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                联系我们
              </Button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="container mx-auto text-center text-gray-400">
            <p>© 2024 海魂硬糕. 传承百年工艺，打造正宗长涂硬糕.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TechnologyPage;