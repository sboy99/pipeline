import { getFallbackName } from "@lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar"

export function SampleAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>{getFallbackName("Sagar Bera")}</AvatarFallback>
    </Avatar>
  )
}
