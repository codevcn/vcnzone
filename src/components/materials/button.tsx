import { cn } from "@/lib/utils"

type TButtonProps = React.ComponentProps<"button">

const Button = ({ children, className, ...props }: TButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "flex gap-2 px-4 py-2 justify-center items-center rounded border-2 border-regular-blue-cl",
        className,
      )}
    >
      {children}
    </button>
  )
}

export { Button }
