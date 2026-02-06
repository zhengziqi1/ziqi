'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // 简单的客户端验证
    if (email === '' || password === '') {
      setError('请填写邮箱和密码');
      return;
    }

    // 模拟登录成功
    alert('登录功能正在开发中，敬请期待！');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f1faee] to-[#a8dadc] dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-[#e63946] dark:text-white mb-6">
          登录后台
        </h1>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md dark:bg-red-900 dark:text-red-200">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1d3557] dark:text-gray-300 mb-1">
              邮箱
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#1d3557] dark:text-gray-300 mb-1">
              密码
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="your password"
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-[#e63946] hover:bg-[#c1121f]">
            登录
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-[#1d3557] dark:text-gray-400">
            还没有账号？{' '}
            <a href="/register" className="text-[#457b9d] dark:text-blue-400 hover:underline">
              立即注册
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
