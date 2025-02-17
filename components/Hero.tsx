"use client"

import { Mail } from "lucide-react"

import { IconLink } from "@/components/IconLink"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  EMAIL,
  URL_GITHUB,
  URL_LINKEDIN,
  URL_TELEGRAM,
  URL_X,
} from "@/content/links"
import { useToast } from "@/hooks/use-toast"
import IconGithub from "@/icons/IconGitHub.svg"
import IconLinkedIn from "@/icons/IconLinkedIn.svg"
import IconTelegram from "@/icons/IconTelegram.svg"
import IconX from "@/icons/IconX.svg"

export function Hero() {
  const { toast } = useToast()

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    toast({
      description: `Copied ${EMAIL} to clipboard`,
    })
  }

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Igor Pokryshevskiy
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Building digital experiences with modern technologies. Focused on
            creating elegant solutions to complex problems.
          </p>
        </div>
        <div className="flex gap-4">
          {URL_GITHUB && (
            <IconLink name="GitHub" url={URL_GITHUB} Icon={IconGithub} />
          )}
          {URL_LINKEDIN && (
            <IconLink name="LinkedIn" url={URL_LINKEDIN} Icon={IconLinkedIn} />
          )}
          {URL_X && <IconLink name="LinkedIn" url={URL_X} Icon={IconX} />}
          {URL_TELEGRAM && (
            <IconLink name="LinkedIn" url={URL_TELEGRAM} Icon={IconTelegram} />
          )}
          {EMAIL && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={copyEmail}>
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">"Email</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Copy "{EMAIL}" to clipboard</TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  )
}
