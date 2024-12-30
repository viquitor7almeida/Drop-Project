import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header 
    style={{backgroundColor: "#000000 "}} //cor de fundo
    className="relative bg-black">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/*link para redirecionamento home*/}
        <Link href="/" className="text-2xl font-bold"> 
          <Image
          src="/imagens/camaleao.png"
          alt="Home"
          width={50}
          height={50}
          ></Image>
          <h1 className="text-2xl font-thin font-mono text-blue-400">DROP</h1>
        </Link>

        {/* navegação */}
        <nav className="flex space-x-9 text-lg font-thin font-mono font-bold text-gray-300">
        <Link href="" className="flex items-center hover:text">
          <Image
            src="/imagens/leaf.png"
            alt="folha"
            width={20} 
            height={20} 
            className="mr-2" // espaço entre o ícone e o texto
          />
            PLANOS
          </Link>

          <Link href="" className="flex items-center hover:text">
          <Image
            src="/imagens/leaf.png"
            alt="folha"
            width={20} 
            height={20} 
            className="mr-2" // espaço entre o ícone e o texto
          />
            ORÇAMENTO
          </Link> 

          <Link href="" className="flex items-center hover:text">
          <Image
            src="/imagens/leaf.png"
            alt="folha"
            width={20} 
            height={20} 
            className="mr-2" // espaço entre o ícone e o texto
          />
            SOBRE NÓS
          </Link> 

        </nav>
      </div>

        {/* Efeito de luz suave */}
        <div className="absolute inset-x-0 -bottom-6 h-5 mx-auto blur-md">
        <div className="h-2 w-full rounded-full bg-gradient-to-b from-purple-800 via-purple-500 to-transparent opacity-50"></div>
      </div>

    </header>

    
  );
};

export default Header; 
