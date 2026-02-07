import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/environments - Get all environments
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

// POST /api/environments - Create a new environment
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
