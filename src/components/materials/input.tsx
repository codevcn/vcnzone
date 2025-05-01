import { cn } from "@/lib/utils"

type TInputProps = React.ComponentProps<"input">

const Input = ({ className, type, ref, ...props }: TInputProps) => {
  return (
    <input
      {...props}
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-regular-blue-cl focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      ref={ref}
    />
  )
}
Input.displayName = "Input"

type TUnderlineInputProps = Partial<{
  className: string
  inputProps: React.ComponentProps<"input">
  ref: React.Ref<HTMLInputElement>
}>

const UnderlineInput = ({ className, inputProps, ref }: TUnderlineInputProps) => {
  return (
    <>
      <div className={cn("text-base relative", className)}>
        <input
          {...inputProps}
          ref={ref}
          className={cn(
            "peer/input py-1 bg-transparent outline-none text-inherit placeholder:text-regular-placeholder-cl",
            inputProps?.className,
          )}
        />
        <span className="block absolute top-full left-0 z-10 w-full border border-regular-input-underline-cl"></span>
        <span className="block scale-x-0 peer-focus/input:scale-100 transition-transform absolute top-full left-0 z-20 w-full border border-regular-blue-cl"></span>
      </div>
    </>
  )
}

export { Input, UnderlineInput }
