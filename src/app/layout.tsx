import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

import { ConfigProvider } from "@/contexts/ConfigContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ModalProvider } from "@/contexts/ModalContext";
import { Toaster } from "sonner";

const raleway = Raleway({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Achird",
  description: "Gere seu site portfólio de forma fácil!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.className} scroll-smooth`}>
        <ThemeProvider>
          <ConfigProvider>
            <ModalProvider>
              {children}
              <Toaster richColors position="top-right" />
            </ModalProvider>
          </ConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
