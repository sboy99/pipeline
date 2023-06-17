import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs"

export function SampleTabs() {
  return (
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
  )
}
