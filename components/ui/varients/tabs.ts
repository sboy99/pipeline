import { cva } from "class-variance-authority"

export const tabsListVarient = cva("inline-flex items-center", {
  variants: {
    varient: {
      default: "rounded-md bg-muted text-muted-foreground p-1 h-10",
      underline: "rounded-md text-muted-foreground border-b border-muted",
      rectangular: "rounded-md text-muted-foreground",
    },
    align: {
      col1: "w-full grid grid-cols-1",
      col2: "w-full grid grid-cols-2",
      col3: "w-full grid grid-cols-3",
    },
  },
  defaultVariants: {
    varient: "default",
  },
})

export const tabsTriggerVarient = cva(
  "inline-flex items-center justify-center disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap ",
  {
    variants: {
      varient: {
        default:
          "rounded-sm px-3 py-1.5 ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        underline:
          "px-3 py-1 border-b-2 border-transparent data-[state=active]:border-accent-foreground data-[state=active]:text-accent-foreground mb-[-2px] h-10",
        rectangular:
          "px-4 py-1 border rounded-md mx-0.5 data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=active]:font-medium",
      },
      textSize: {
        xs: "text-xs font-normal",
        sm: "text-sm font-medium",
        md: "text-base font-medium",
      },
    },
    defaultVariants: {
      varient: "default",
      textSize: "sm",
    },
  }
)
