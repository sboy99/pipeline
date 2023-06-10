import type { Meta, StoryObj } from "@storybook/react"
import { SampleMenuBar } from "../samples/menu-bar.sample"

const meta: Meta<typeof SampleMenuBar> = {
  title: "Menu Bar",
  component: SampleMenuBar,
  tags: ["autodocs"],

  argTypes: {},
}
export default meta

type Story = StoryObj<typeof SampleMenuBar>

/**
 * Default button style
 */
export const Default: Story = {
  args: {},
}
