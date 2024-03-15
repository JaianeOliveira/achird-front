import { ConfigProvider } from "@/contexts/ConfigContext";
import { ModalProvider } from "@/contexts/ModalContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import { Raleway } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
