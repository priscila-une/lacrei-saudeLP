import type { Metadata } from "next";
import GlobalStyle from './styles/global'
import { Nunito } from 'next/font/google'
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeClient from "./lib/themeClient";


export const metadata: Metadata = {
  title: "Lacrei Saúde ",
  description: "Projeto de estudo para Voluntariado.",
};

const nunito = Nunito({
  weight: ['200', '300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
        <ThemeClient>
          <Header />
          {children}
          <Footer />
          <GlobalStyle />
        </ThemeClient>
      </body>
    </html>
  );
}
