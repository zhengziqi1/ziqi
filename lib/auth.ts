import { NextAuthOptions, User, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

// Extend the User type to include role and environment
declare module 'next-auth' {
  interface User {
    role: string;
    environmentId: string;
    environment: {
      id: string;
      name: string;
      description: string | null;
      isDefault: boolean;
    };
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
      environmentId: string;
      environment: {
        id: string;
        name: string;
        description: string | null;
        isDefault: boolean;
      };
    };
  }
}

// Extend the JWT type to include role and environment
declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    email: string | null | undefined;
    name: string | null | undefined;
    role: string | null | undefined;
    environmentId: string | null | undefined;
    environment: {
      id: string;
      name: string;
      description: string | null;
      isDefault: boolean;
    } | null | undefined;
  }
}

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'your@email.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'your password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
          include: {
            environment: true,
          },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          environmentId: user.environmentId,
          environment: user.environment,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.environmentId = user.environmentId;
        token.environment = user.environment;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.role = token.role as string;
        session.user.environmentId = token.environmentId as string;
        session.user.environment = token.environment as any;
      }
      return session;
    },
  },
};
