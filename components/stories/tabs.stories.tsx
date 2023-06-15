import type { Meta, StoryObj } from "@storybook/react"
import { SampleTabs } from "../samples/tabs.sample"

const meta: Meta<typeof SampleTabs> = {
  title: "Tabs",
  component: SampleTabs,
  tags: ["autodocs"],

  argTypes: {},
}
export default meta

type Story = StoryObj<typeof SampleTabs>

/**
 * Default button style
 */
export const Default: Story = {
  args: {},
}
