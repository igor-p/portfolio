import { URL_GITHUB } from "@/content/links"
import IconGithub from "@/icons/IconGitHub.svg"

import { IconLink } from "./IconLink"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Igor.nyc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <IconLink
            name="GitHub"
            url={URL_GITHUB}
            Icon={IconGithub}
            variant="ghost"
          />
        </nav>
      </div>
    </footer>
  )
}
