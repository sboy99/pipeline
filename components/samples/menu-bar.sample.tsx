import { Command, Layout, LucideIcon, PlusSquare, Printer, Share2 } from "lucide-react"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@ui/menu-bar"

interface ContentItem {
  icon: LucideIcon
  name: string
  action?(): void
  shortcut?: string
}
interface MenuBarItem {
  title: string
  contents: Array<Array<ContentItem>>
}

const MenuBar: MenuBarItem[] = [
  {
    title: "File",
    contents: [
      //   first segment
      [
        {
          icon: PlusSquare,
          name: "New Tab",
          action: () => console.log("New Tab Selected"),
          shortcut: "⌘+T",
        },
        {
          icon: Layout,
          name: "New Window",
          action: () => console.log("New Window Selected"),
          shortcut: "⌘+N",
        },
      ],
      //   second segment
      [
        {
          icon: Share2,
          name: "Share",
          action: () => console.log("Share Selected"),
        },
      ],
      //   third segment
      [
        {
          icon: Command,
          name: "Export",
        },
        {
          icon: Printer,
          name: "Print",
        },
      ],
    ],
  },
]

export function SampleMenuBar() {
  return (
    <Menubar>
      {MenuBar.map((menu, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger>{menu.title}</MenubarTrigger>
          <MenubarContent>
            {menu.contents.map((menuSegment, sIndex) => (
              <span key={sIndex}>
                {menuSegment.map((item, itemIndex) => (
                  <MenubarItem key={itemIndex} onClick={item.action}>
                    <item.icon className="mr-2 h-4 w-4" /> {item.name}{" "}
                    {item?.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
                  </MenubarItem>
                ))}
                {sIndex < menu.contents.length - 1 && <MenubarSeparator />}
              </span>
            ))}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  )
}
