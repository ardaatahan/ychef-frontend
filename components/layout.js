import Link from "next/link";
import Head from "next/head";

import Logo from "../public/logo.svg";

const Layout = ({ children, title, description }) => (
  <>
    <Head>
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
    <header className="text-gray-700 bg-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="/">
            <a className="mr-5 nav-link">Ürünlerimiz</a>
          </Link>
          <Link href="/about">
            <a className="mr-5 nav-link">Hakkımızda</a>
          </Link>
          <Link href="/order">
            <a className="mr-5 nav-link">İletişim</a>
          </Link>
        </nav>
        <Link href="/">
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <Logo className="logo" />
            <span className="ml-3 text-xl"></span>
          </a>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
      </div>
    </header>
    <main className="min-h-screen">
      <div className="container mx-auto px-3 xl:px-20">{children}</div>
    </main>
  </>
);

export default Layout;
