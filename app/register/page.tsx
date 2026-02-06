'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // 简单的客户端验证
    if (name === '' || email === '' || password === '') {
      setError('请填写所有字段');
      return;
    }

    if (password.length < 6) {
      setError('密码长度至少为6位');
      return;
    }

    // 模拟注册成功
    setSuccess('注册成功！请登录。');
    
    // 2秒后清空表单
    setTimeout(() => {
      setSuccess('');
      setName('');
      setEmail('');
      setPassword('');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f1faee] to-[#a8dadc] dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-[#e63946] dark:text-white mb-6">
          注册账号
        </h1>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md dark:bg-red-900 dark:text-red-200">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md dark:bg-green-900 dark:text-green-200">
            {success}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#1d3557] dark:text-gray-300 mb-1">
              姓名
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your name"
              required
              className="w-full"
            />
          </div>
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
              minLength={6}
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-[#e63946] hover:bg-[#c1121f]">
            注册
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-[#1d3557] dark:text-gray-300">
            已有账号？{' '}
            <a href="/login" className="text-[#457b9d] dark:text-blue-400 hover:underline">
              立即登录
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}