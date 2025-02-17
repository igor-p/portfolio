import { URL_GITHUB } from "@/content/links"
import IconGithub from "@/icons/IconGitHub.svg"

import { IconLink } from "./IconLink"

export function Footer() {
  return (
    <footer className="border-t flex justify-between gap-2 w-full shrink-0 items-center px-4 py-6 md:px-6">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2025 Igor Pokryshevskiy. All rights reserved.
      </p>
      <IconLink
        name="GitHub"
        url={URL_GITHUB}
        Icon={IconGithub}
        variant="ghost"
      />
    </footer>
  )
}
