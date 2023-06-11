import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@ui/button"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    size: "default",
    rounded: "default",
  },
  argTypes: {
    variant: {
      options: ["default", "secondary", "outline", "destructive", "ghost", "link"],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm", "lg", "auto"],
      control: { type: "select" },
    },
    rounded: {
      options: ["default", "full"],
      control: { type: "select" },
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

/**
 * Default button style
 */
export const Default: Story = {
  args: {
    variant: "default",
  },
}
/**
 * Secondary button style
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
}
/**
 * Outline button style
 */
export const Outline: Story = {
  args: {
    variant: "outline",
  },
}
/**
 * Destructive button style
 */
export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
}
/**
 * Ghost button style
 */
export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
}
/**
 * Link button style
 */
export const Link: Story = {
  args: {
    variant: "link",
  },
}
