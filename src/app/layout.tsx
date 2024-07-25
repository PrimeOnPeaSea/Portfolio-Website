import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarComp } from "@/components/global/sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parth Singh",
  description:
    "I'm a full-stack developer with a passion for building beautiful and functional web applications. I specialize in React, Next.js, and Tailwind CSS. I'm currently looking for new opportunities, so feel free to reach out to me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-dvh w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarComp>{children}</SidebarComp>
        </ThemeProvider>
      </body>
    </html>
  );
}
