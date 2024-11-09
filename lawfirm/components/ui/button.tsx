import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 disabled:pointer-events-none disabled:opacity-50 group",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black border border-gold-300 hover:bg-gold-50 hover:border-gold-400 focus:ring-gold-500",
        primary:
          "bg-gold-600 text-white hover:bg-gold-700 hover:shadow-md focus:ring-gold-500",
        secondary:
          "bg-gold-100 text-gold-800 hover:bg-gold-200 focus:ring-gold-500",
        outline:
          "border border-gold-300 bg-transparent text-gold-700 hover:bg-gold-50 hover:border-gold-400",
        ghost: 
          "text-gold-700 hover:bg-gold-100 focus:ring-gold-500",
        link: 
          "text-gold-700 underline-offset-4 hover:text-gold-900 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10 p-0 justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
