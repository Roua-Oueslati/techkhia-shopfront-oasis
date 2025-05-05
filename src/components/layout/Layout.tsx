
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f0e6]">
      <Navbar />
      <ScrollArea className="flex-1">
        <main>
          {children}
        </main>
        <Footer />
      </ScrollArea>
    </div>
  );
}
