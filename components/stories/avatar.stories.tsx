import type { Meta, StoryObj } from "@storybook/react"
import { SampleAvatar } from "../samples/avatar.sample"

const meta: Meta<typeof SampleAvatar> = {
  title: "Avatar",
  component: SampleAvatar,
  tags: ["autodocs"],

  argTypes: {},
}
export default meta

type Story = StoryObj<typeof SampleAvatar>

/**
 * Default button style
 */
export const Default: Story = {
  args: {},
}
