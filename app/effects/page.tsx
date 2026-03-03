'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface HistoryPageProps {
  params?: { id?: string };
  searchParams?: Record<string, string>;
}

const HistoryPage: React.FC<HistoryPageProps> = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative">
          <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
                倭井潭硬糕的历史与文化
              </h1>
              <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                传承百年的传统工艺，承载着长涂岛的历史记忆
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-16">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/2">
                    <img
                      className="w-full h-full object-cover"
                      src="https://ts2.tc.mm.bing.net/th/id/OIP-C.x8eRHupUfZ-7-kRQJJ6D-wHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
                      alt="倭井潭硬糕历史"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">历史背景</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      倭井潭硬糕起源于清朝末年，由长涂岛倭井潭村的糕点师傅所创。当时，长涂岛是海上丝绸之路的重要节点，商贸往来频繁，硬糕因其易于保存、口感独特而成为船员和商人的必备食品。
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      经过百余年的发展，倭井潭硬糕已经成为舟山群岛的特色传统食品，被列入非物质文化遗产保护名录。其制作工艺严谨，选料考究，具有浓郁的地方特色。
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <img
                    className="w-full h-64 object-cover"
                    src="https://ts3.tc.mm.bing.net/th/id/OIP-C.e70nMv7-q7LYtUWZCfjOgQHaFC?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="制作工艺"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">传统制作工艺</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      倭井潭硬糕采用优质糯米、白糖、芝麻等原料，经过浸泡、磨粉、蒸制、压制、烘烤等多道工序精心制作而成。整个过程全手工操作，注重火候和时间的掌握，确保硬糕的口感和品质。
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <img
                    className="w-full h-64 object-cover"
                    src="https://ts2.tc.mm.bing.net/th/id/OIP-C.FZMa-0ZJnOSPuXVf86tsOwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="文化意义"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">文化传承</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      倭井潭硬糕不仅是一种美食，更是长涂岛历史文化的重要载体。它见证了长涂岛从传统渔村到现代城镇的发展历程，承载着一代又一代长涂人的记忆和情感。如今，倭井潭硬糕已成为舟山群岛的文化符号之一。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-16">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">产品展示</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <img
                        className="w-full h-48 object-cover rounded-md mb-4"
                        src="https://ts1.tc.mm.bing.net/th/id/R-C.1631ca258f0b26e2e6c2d278516f96a7?rik=fg3uZCe%2bQbyZeA&riu=http%3a%2f%2fimg2.zjolcdn.com%2fpic%2f0%2f14%2f41%2f88%2f14418800_269646.jpg&ehk=qJcdHwosan976njKBDiCvRh4djNH1qXWPfzhK84vTSM%3d&risl=&pid=ImgRaw&r=0"
                        alt="传统硬糕"
                      />
                      <h4 className="font-medium text-gray-900 dark:text-white">传统硬糕</h4>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <img
                        className="w-full h-48 object-cover rounded-md mb-4"
                        src="https://static.huanbaike.com/images/2024/01/12/1921522_f09e46049d174cf3981d1ee586387dcb~noop_xsbajgirktb.jpg"
                        alt="芝麻硬糕"
                      />
                      <h4 className="font-medium text-gray-900 dark:text-white">芝麻硬糕</h4>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <img
                        className="w-full h-48 object-cover rounded-md mb-4"
                        src="https://ts2.tc.mm.bing.net/th/id/OIP-C.UPIl8zodGnznKOcLQOscogAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
                        alt="花生酥"
                      />
                      <h4 className="font-medium text-gray-900 dark:text-white">花生酥</h4>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <img
                        className="w-full h-48 object-cover rounded-md mb-4"
                        src="https://img95.699pic.com/photo/50124/3825.jpg_wh860.jpg"
                        alt="五谷杂粮"
                      />
                      <h4 className="font-medium text-gray-900 dark:text-white">五谷杂粮</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-8 mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">制作工艺流程</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/50 mb-4">
                      <span className="text-xl font-bold text-amber-600 dark:text-amber-300">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">选料浸泡</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      精选优质糯米，洗净后浸泡4-6小时，使米粒充分吸水软化。
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/50 mb-4">
                      <span className="text-xl font-bold text-amber-600 dark:text-amber-300">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">磨粉蒸制</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      将浸泡好的糯米磨成细粉，加入适量白糖和水，搅拌均匀后蒸制成糕团。
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/50 mb-4">
                      <span className="text-xl font-bold text-amber-600 dark:text-amber-300">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">压制烘烤</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      将糕团压制成薄片状，放入烤炉中低温烘烤，使其变硬成型。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">文化遗产保护</h2>
                  <div className="max-w-3xl mx-auto">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      为了保护和传承倭井潭硬糕的制作技艺，当地政府和相关部门采取了一系列措施：
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                      <li>将倭井潭硬糕制作技艺列入非物质文化遗产保护名录</li>
                      <li>建立传统制作工艺传习所，培养年轻传承人</li>
                      <li>举办硬糕文化节，弘扬传统饮食文化</li>
                      <li>加强品牌建设，推动倭井潭硬糕走向更广阔的市场</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-300">
                      如今，倭井潭硬糕不仅在当地广受欢迎，还远销国内外，成为舟山群岛的一张文化名片。它承载着长涂岛的历史记忆，见证着传统工艺的生命力，是中华饮食文化的瑰宝之一。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">联系我们</h3>
              <p className="text-gray-600 dark:text-gray-300">
                地址：浙江省舟山市岱山县长涂镇<br />
                电话：0580-xxxxxxx<br />
                邮箱：info@changtucake.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">首页</Link></li>
                <li><Link href="/gallery" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">产品展示</Link></li>
                <li><Link href="/technology" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">制作工艺</Link></li>
                <li><Link href="/effects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">倭井潭历史</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">关于我们</h3>
              <p className="text-gray-600 dark:text-gray-300">
                长涂硬糕是舟山群岛的传统特色食品，传承百年工艺，口感独特，营养丰富。我们致力于保护和弘扬这一传统美食文化，为消费者提供最正宗的倭井潭硬糕。
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2024 长涂硬糕. 保留所有权利.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HistoryPage;