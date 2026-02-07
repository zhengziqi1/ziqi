import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET /api/products - Get all products for current environment
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    let environmentId;
    
    if (session?.user?.environmentId) {
      // Logged in user: use their environment
      environmentId = session.user.environmentId;
    } else {
      // Anonymous user: use default environment
      const defaultEnvironment = await db.environment.findFirst({
        where: {
          isDefault: true,
        },
      });
      
      if (!defaultEnvironment) {
        return NextResponse.json({ error: 'No default environment found' }, { status: 500 });
      }
      
      environmentId = defaultEnvironment.id;
    }

    const products = await db.product.findMany({
      where: {
        environmentId,
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

// POST /api/products - Create a new product in current environment
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.environmentId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, description, price, image, category } = await request.json();

    const product = await db.product.create({
      data: {
        name,
        description,
        price,
        image,
        category,
        environmentId: session.user.environmentId,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
