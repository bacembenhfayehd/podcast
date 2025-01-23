import LeftSidebar from "@/components/LeftSidebar";
import Mobilenav from "@/components/Mobilenav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
        <main className="relative flex  bg-black-3">
            <LeftSidebar/>
            <section className=" border border-red-500 flex min-h-screen flex-1 flex-col px-4 sm:px-14">
              <div className=" border border-red-500 mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                <div className=" border border-yellow-500 flex h-16 justify-between items-center md:hidden">
                  <Image src='icons/logo (1).svg' width={30} height={30} alt="menu"/>
                  <Mobilenav/>
                </div>
                <div className="flex flex-col md:pb-14">
                  Toaster
                  {children}
                </div>
              </div>
            </section>
            <RightSidebar/>
        </main>
    </div>
  );
}
