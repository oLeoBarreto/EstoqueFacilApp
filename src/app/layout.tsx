import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";

const roboto = Roboto({
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Estoque Fácil",
    description: "Criando para facilitar sua vida e descoblicar seu estoque",
    keywords: ["estoque", "controle de estoque", "warehouse", "armazem"],
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            noimageindex: true,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={roboto.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
