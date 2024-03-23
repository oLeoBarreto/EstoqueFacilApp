import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/logo.png';

export default function Header() {
    return (
        <header className="w-full h-28 bg-seasalt font-roboto">
            <div className="max-w-screen-xl flex justify-center md:justify-between items-center h-28 m-auto mx-5 lg:mx-auto">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="logo Estoque Facil"
                        quality={100}
                        priority
                        className="w-full"
                        width={120}
                        height={120}
                    />
                </Link>
                <nav className="justify-center items-center gap-3 text-hunter-green-600 font-medium hidden md:flex">
                    <Link href="/products" className="hover:font-bold">
                        Produtos
                    </Link>
                    <Link href="/inbounds" className="hover:font-bold">
                        Entradas
                    </Link>
                    <Link href="/outbounds" className="hover:font-bold">
                        Saidas
                    </Link>
                </nav>
                <div className="hidden md:flex justify-center items-center gap-3">
                    <Link
                        href="/register"
                        className="px-6 py-3 bg-cambridge-blue rounded-lg font-bold text-seasalt-300 hover:bg-cambridge-blue-600"
                    >
                        Registrar
                    </Link>

                    <Link
                        href="/login"
                        className="px-6 py-3 bg-hunter-green rounded-lg font-bold text-seasalt-300 hover:bg-hunter-green-600"
                    >
                        Entrar
                    </Link>
                </div>
            </div>
        </header>
    );
}
