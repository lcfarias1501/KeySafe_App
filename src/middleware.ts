import { NextRequest, NextResponse } from 'next/server';
import { decryptSession } from '@/libs/auth';

export async function middleware(req: NextRequest) {
  const cookie = req.cookies.get('session')?.value;
  const session = cookie ? await decryptSession(cookie).catch(() => null) : null;

  // Se tentar ir para o dashboard sem sessão
  if (req.nextUrl.pathname.startsWith('/dashboard') && !session) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  // Se já estiver logado e tentar ir para login/register
  if ((req.nextUrl.pathname === '/auth') && session) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

// Define quais rotas o middleware deve vigiar
export const config = {
  matcher: ['/dashboard/:path*', '/auth'],
};