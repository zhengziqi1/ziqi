import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET /api/products/[id] - Get a single product
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
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

    const { id } = params;
    const product = await db.product.findUnique({
      where: {
        id,
        environmentId,
      },
    });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}

// PUT /api/products/[id] - Update a product
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.environmentId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;
    const { name, description, price, image, category } = await request.json();

    // Check if product exists in current environment
    const existingProduct = await db.product.findUnique({
      where: {
        id,
        environmentId: session.user.environmentId,
      },
    });

    if (!existingProduct) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Update product
    const updatedProduct = await db.product.update({
      where: {
        id,
        environmentId: session.user.environmentId,
      },
      data: {
        name,
        description,
        price,
        image,
        category,
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

// DELETE /api/products/[id] - Delete a product
export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.environmentId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;

    // Check if product exists in current environment
    const existingProduct = await db.product.findUnique({
      where: {
        id,
        environmentId: session.user.environmentId,
      },
    });

    if (!existingProduct) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Delete product
    await db.product.delete({
      where: {
        id,
        environmentId: session.user.environmentId,
      },
    });

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
