import type { Meta, StoryObj } from "@storybook/react"
import { BellIcon } from "lucide-react"
import { Button } from "@ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover"

const meta: Meta<typeof Popover> = {
  title: "Popover",
  component: Popover,
  tags: ["autodocs"],

  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Popover>

/**
 * Tabs with default style
 */
export const Default: Story = {
  render: () => (
    <Popover>
      {/* trigger */}
      <PopoverTrigger>
        <Button rounded="full" variant="outline">
          <BellIcon className="h-6 w-6" />
        </Button>
      </PopoverTrigger>
      {/* content */}
      <PopoverContent className="w-80">
        <div className="h-64 w-full bg-accent"></div>
      </PopoverContent>
    </Popover>
  ),
}
