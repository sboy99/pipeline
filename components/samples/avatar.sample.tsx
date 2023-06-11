import { getFallbackName } from "@lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar"

export function SampleAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/86586277?v=4" alt="@sboy99" />
      <AvatarFallback>{getFallbackName("Sagar Bera")}</AvatarFallback>
    </Avatar>
  )
}
