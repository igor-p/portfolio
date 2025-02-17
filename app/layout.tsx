import type { Metadata } from "next/";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";



import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";



import "./globals.css";
import { Toaster } from "@/components/ui/toaster";





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Igor.nyc - Frontend Developer",
  description: "Full stack developer portfolio showcasing projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="min-h-screen bg-background flex flex-col">
              <Header />
              <main className="container m-auto flex-1 px-4 md:px-6 scroll-mt-6 ">
                {children}
              </main>
              <Footer />
              <Toaster />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
