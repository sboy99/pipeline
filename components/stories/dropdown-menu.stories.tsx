import type { Meta, StoryObj } from "@storybook/react"
import { SampleDropdownMenu } from "../samples/dropdown-menu.sample"

const meta: Meta<typeof SampleDropdownMenu> = {
  title: "Dropdown Menu",
  component: SampleDropdownMenu,
  tags: ["autodocs"],

  argTypes: {},
}
export default meta

type Story = StoryObj<typeof SampleDropdownMenu>

/**
 * Default button style
 */
export const Default: Story = {
  args: {},
}
