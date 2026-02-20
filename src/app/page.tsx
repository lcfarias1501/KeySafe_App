import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(217,91%,35%)] to-[hsl(173,80%,40%)] p-4">
      <div className="max-w-2xl w-full">
        {/* Logo/Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
            <Image
              src='/images/logo_keysafe.png'
              alt='logo'
              width={60}
              height={60}
            />
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-4">
            KeySafe
          </h1>
          
          <p className="text-xl text-white/90 mb-2">
            Gerencie suas senhas com segurança
          </p>
          
          <p className="text-white/70 max-w-md mx-auto">
            Armazene, organize e acesse suas senhas de forma segura em qualquer lugar. 
            Proteção de nível militar para suas informações mais importantes.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="white" 
                className="w-6 h-6"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" 
                />
              </svg>
            </div>
            
            <h3 className="text-white font-semibold mb-1">Seguro</h3>
            <p className="text-white/70 text-sm">Criptografia de ponta a ponta</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="white" 
                className="w-6 h-6"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" 
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-1">Organizado</h3>
            <p className="text-white/70 text-sm">Categorias e etiquetas</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="white" 
                className="w-6 h-6"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-1">Fácil</h3>
            <p className="text-white/70 text-sm">Interface intuitiva</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/auth" 
            className="inline-flex items-center gap-2 bg-white text-[hsl(217,91%,35%)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Entrar na sua conta
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
              />
            </svg>
          </Link>
          
          <p className="text-white/60 text-sm mt-4">
            Não tem uma conta? <Link href="/auth" className="text-white underline hover:text-white/80">Criar conta</Link>
          </p>
        </div>
      </div>
    </main>
  );
}