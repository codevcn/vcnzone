import { cn } from "@/lib/utils"

type TCardProps = React.ComponentProps<"div">

const Card = ({ className, ref, ...props }: TCardProps) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props}
  />
)
Card.displayName = "Card"

type TCardHeaderProps = React.ComponentProps<"div">

const CardHeader = ({ className, ref, ...props }: TCardHeaderProps) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
)
CardHeader.displayName = "CardHeader"

type TCardTitleProps = React.ComponentProps<"div">

const CardTitle = ({ className, ref, ...props }: TCardTitleProps) => (
  <div
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
)
CardTitle.displayName = "CardTitle"

type TCardDescriptionProps = React.ComponentProps<"div">

const CardDescription = ({ className, ref, ...props }: TCardDescriptionProps) => (
  <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
)
CardDescription.displayName = "CardDescription"

type TCardContentProps = React.ComponentProps<"div">

const CardContent = ({ className, ref, ...props }: TCardContentProps) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
)
CardContent.displayName = "CardContent"

type TCardFooterProps = React.ComponentProps<"div">

const CardFooter = ({ className, ref, ...props }: TCardFooterProps) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
