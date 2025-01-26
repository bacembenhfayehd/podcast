import Image from "next/image";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="relative w-full h-screen">
        <div className=""><Image src='/images/pexels-george-milton-6953672.jpg' fill alt="podcast" className="object-cover object-center"/></div>
        {children}
      </main>
    );
  }
  