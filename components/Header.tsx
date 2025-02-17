import Link from "next/link"

import { ThemeToggle } from "@/components/ThemeToggle"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="px-4 md:px-6 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center font-bold gap-2" href="/">
            <Avatar className="size-10">
              <AvatarImage src="/images/avatar-jcd.jpg" alt="Avatar" />
            </Avatar>
            Igor.nyc
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="#about" className={linkStyles}>
              About
            </Link>
            <Link href="#projects" className={linkStyles}>
              Projects
            </Link>
            <Link href="#tech" className={linkStyles}>
              Tech
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <Link href="/files/resume.pdf" target="_blank">
            <Button variant="outline">Resume</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

const linkStyles = "transition-colors hover:text-foreground/80"
