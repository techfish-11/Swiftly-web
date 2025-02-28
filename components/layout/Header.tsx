import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image 
            src="https://sakana11.org/public/swiftly-icon.png" 
            alt="Swiftly" 
            width={32} 
            height={32} 
            className="rounded-full"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            Swiftly
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#features">機能</NavLink>
          <NavLink href="#stats">統計</NavLink>
          <NavLink href="#commands">コマンド</NavLink>
          <NavLink href="#board">掲示板</NavLink>
        </nav>

        <div>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1310198598213963858"
            className="inline-flex items-center px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:scale-90 transition-all duration-200 hover:shadow-blue-500/25"
          >
            導入する
          </a>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-gray-600 hover:text-blue-600 transition-colors"
  >
    {children}
  </Link>
);
