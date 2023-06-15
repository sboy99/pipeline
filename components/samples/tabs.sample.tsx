import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs"

export function SampleTabs() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="h-64 w-full rounded-lg bg-slate-100 p-4">
          <p>Account: Desc</p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="h-64 w-full rounded-lg bg-slate-100 p-4">
          <p>Password: Desc</p>
        </div>
      </TabsContent>
      <TabsContent value="other">
        <div className="h-64 w-full rounded-lg bg-slate-100 p-4">
          <p>Other: Desc</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
