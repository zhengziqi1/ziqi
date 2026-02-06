'use client';

import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1faee] to-[#a8dadc] dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#e63946] dark:text-white">
            管理后台
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#1d3557] dark:text-gray-300">
              欢迎访问管理后台
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => alert('退出登录功能正在开发中，敬请期待！')}
            >
              退出登录
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-[#1d3557] dark:text-white mb-4">
              仪表盘概览
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">总用户数</span>
                <span className="text-xl font-bold text-[#e63946] dark:text-white">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">今日活跃</span>
                <span className="text-xl font-bold text-[#e63946] dark:text-white">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">系统状态</span>
                <span className="text-green-600 dark:text-green-400">正常</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-[#1d3557] dark:text-white mb-4">
              快速操作
            </h2>
            <div className="space-y-3">
              <Button className="w-full justify-start bg-[#e63946] hover:bg-[#c1121f]">
                用户管理
              </Button>
              <Button variant="outline" className="w-full justify-start border-[#1d3557] text-[#1d3557] hover:bg-[#f1faee]">
                内容管理
              </Button>
              <Button variant="outline" className="w-full justify-start border-[#1d3557] text-[#1d3557] hover:bg-[#f1faee]">
                系统设置
              </Button>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-[#1d3557] dark:text-white mb-4">
              系统信息
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">版本</span>
                <span className="text-[#1d3557] dark:text-white">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">最后更新</span>
                <span className="text-[#1d3557] dark:text-white">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">状态</span>
                <span className="text-green-600 dark:text-green-400">运行中</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
