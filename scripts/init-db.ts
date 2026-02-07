import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Initializing database...');

  // Create default environment
  const defaultEnvironment = await prisma.environment.findFirst({
    where: {
      isDefault: true,
    },
  });

  if (!defaultEnvironment) {
    console.log('Creating default environment...');
    await prisma.environment.create({
      data: {
        name: '默认环境',
        description: '系统默认环境',
        isDefault: true,
      },
    });
  }

  // Create test environment
  const testEnvironment = await prisma.environment.findFirst({
    where: {
      name: '测试环境',
    },
  });

  if (!testEnvironment) {
    console.log('Creating test environment...');
    await prisma.environment.create({
      data: {
        name: '测试环境',
        description: '用于测试的环境',
        isDefault: false,
      },
    });
  }

  // Create admin user
  const adminUser = await prisma.user.findFirst({
    where: {
      email: 'admin@example.com',
    },
  });

  if (!adminUser) {
    console.log('Creating admin user...');
    const defaultEnv = await prisma.environment.findFirst({
      where: {
        isDefault: true,
      },
    });

    if (defaultEnv) {
      await prisma.user.create({
        data: {
          name: '管理员',
          email: 'admin@example.com',
          password: await bcrypt.hash('admin123', 10),
          role: 'ADMIN',
          environmentId: defaultEnv.id,
        },
      });
    }
  }

  // Create test user
  const testUser = await prisma.user.findFirst({
    where: {
      email: 'user@example.com',
    },
  });

  if (!testUser) {
    console.log('Creating test user...');
    const defaultEnv = await prisma.environment.findFirst({
      where: {
        isDefault: true,
      },
    });

    if (defaultEnv) {
      await prisma.user.create({
        data: {
          name: '测试用户',
          email: 'user@example.com',
          password: await bcrypt.hash('user123', 10),
          role: 'USER',
          environmentId: defaultEnv.id,
        },
      });
    }
  }

  console.log('Database initialization completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
