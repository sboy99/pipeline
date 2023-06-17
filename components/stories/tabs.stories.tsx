import type { Meta, StoryObj } from "@storybook/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs"

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],

  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Tabs>

/**
 * Tabs with default style
 */
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="max-w-xl">
      <TabsList className="w-full" align="col3">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="w-full rounded-lg">
          <p>Account: Desc</p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="w-full rounded-lg">
          <p>Password: Desc</p>
        </div>
      </TabsContent>
      <TabsContent value="other">
        <div className="w-full rounded-lg">
          <p>Other: Desc</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

/**
 * Tabs with underline style
 */
export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="account" className="">
      <TabsList className="w-full" varient="underline">
        <TabsTrigger value="account" varient="underline" textSize="md">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" varient="underline" textSize="md">
          Password
        </TabsTrigger>
        <TabsTrigger value="other" varient="underline" textSize="md">
          Other
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="w-full rounded-lg">
          <p>Account: Desc</p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="w-full rounded-lg">
          <p>Password: Desc</p>
        </div>
      </TabsContent>
      <TabsContent value="other">
        <div className="w-full rounded-lg">
          <p>Other: Desc</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

/**
 * Tabs with rectangular style
 */
export const Rectangular: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <TabsList className="w-full" varient="rectangular">
        <TabsTrigger value="account" varient="rectangular" textSize="sm">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" varient="rectangular" textSize="sm">
          Password
        </TabsTrigger>
        <TabsTrigger value="other" varient="rectangular" textSize="sm">
          Other
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="w-full rounded-lg">
          <p>Account: Desc</p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="w-full rounded-lg">
          <p>Password: Desc</p>
        </div>
      </TabsContent>
      <TabsContent value="other">
        <div className="w-full rounded-lg">
          <p>Other: Desc</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}
