import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// GET /dashboard/environments - Get all environments
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const environments = await db.environment.findMany();
    return NextResponse.json(environments);
  } catch (error) {
    console.error('Error fetching environments:', error);
    return NextResponse.json({ error: 'Failed to fetch environments' }, { status: 500 });
  }
}

// POST /dashboard/environments - Create a new environment
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, description, isDefault } = await request.json();

    // If this is the default environment, update all others to not be default
    if (isDefault) {
      await db.environment.updateMany({
        where: {
          isDefault: true,
        },
        data: {
          isDefault: false,
        },
      });
    }

    const environment = await db.environment.create({
      data: {
        name,
        description,
        isDefault,
      },
    });

    return NextResponse.json(environment, { status: 201 });
  } catch (error) {
    console.error('Error creating environment:', error);
    return NextResponse.json({ error: 'Failed to create environment' }, { status: 500 });
  }
}

export default async function EnvironmentsPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    return <div>Unauthorized</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">环境管理</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">创建新环境</h2>
        <form id="environment-form" className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">环境名称</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-2">环境描述</label>
            <textarea
              id="description"
              className="w-full p-2 border rounded"
              rows={3}
            ></textarea>
          </div>
          <div>
            <label htmlFor="isDefault" className="block mb-2">设为默认环境</label>
            <input
              type="checkbox"
              id="isDefault"
              className="mr-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            创建环境
          </button>
        </form>

        <h2 className="text-xl font-semibold mt-8 mb-4">现有环境</h2>
        <div id="environments-list" className="space-y-4">
          {/* Environments will be loaded here */}
        </div>
      </div>
    </div>
  );
}

// Client-side script
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', async () => {
    // Load environments
    const loadEnvironments = async () => {
      const response = await fetch('/dashboard/environments');
      const environments = await response.json();
      
      const list = document.getElementById('environments-list');
      if (list) {
        list.innerHTML = environments.map((env: any) => `
          <div className="border p-4 rounded ${env.isDefault ? 'bg-yellow-50' : ''}">
            <h3 className="font-semibold">${env.name}</h3>
            <p className="text-sm text-gray-600">${env.description || '无描述'}</p>
            <p className="text-xs mt-2 ${env.isDefault ? 'text-yellow-600' : 'text-gray-500'}">
              ${env.isDefault ? '默认环境' : '普通环境'}
            </p>
          </div>
        `).join('');
      }
    };

    // Submit form
    const form = document.getElementById('environment-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const description = (document.getElementById('description') as HTMLTextAreaElement).value;
        const isDefault = (document.getElementById('isDefault') as HTMLInputElement).checked;

        const response = await fetch('/dashboard/environments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, description, isDefault }),
        });

        if (response.ok) {
          // Reload environments
          await loadEnvironments();
          // Reset form
          form.reset();
        }
      });
    }

    // Initial load
    await loadEnvironments();
  });
}
