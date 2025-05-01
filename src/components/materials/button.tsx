type TButtonProps = React.ComponentProps<"button">

const Button = ({ children, className, ...props }: TButtonProps) => {
  return (
    <button
      {...props}
      className={`${className} flex gap-2 justify-center items-center px-4 py-2 rounded border-2 border-regular-blue-cl`}
    >
      {children}
    </button>
  )
}

export { Button }
