"use client"

import { useRef } from "react"

type TAutosizeTextFieldProps = Partial<{
  id: string
  className: string
  name: string
  placeholder: string
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  minHeight: number
  maxHeight: number
}>

const AutosizeTextField = ({
  placeholder,
  className,
  id,
  name,
  onBlur,
  onChange,
  onFocus,
  maxHeight = 400,
  minHeight = 150,
}: TAutosizeTextFieldProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const adjustHeight = () => {
    const textarea = textareaRef.current!
    // Đặt lại chiều cao để tính toán chính xác
    textarea.style.height = "auto"
    // Giới hạn chiều cao trong khoảng minHeight và maxHeight
    textarea.style.height = `${Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight)}px`
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight()
    if (onChange) {
      onChange(e) // Gọi hàm onChange nếu có
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (onBlur) {
      onBlur(e) // Gọi hàm onBlur nếu có
    }
  }

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (onFocus) {
      onFocus(e) // Gọi hàm onFocus nếu có
    }
  }

  return (
    <div className="flex z-10 relative bg-regular-input-underline-cl p-[1.5px] rounded">
      <textarea
        ref={textareaRef}
        onChange={handleChange}
        placeholder={placeholder}
        className={`${className} peer/txtfld relative z-30 w-full p-2 overflow-y-auto overflow-x-hidden text-base bg-regular-slightgray-cl outline-none rounded text-inherit placeholder:text-regular-placeholder-cl resize-none`}
        style={{
          height: `${minHeight}px`, // Đặt chiều cao ban đầu là minHeight
        }}
        id={id}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <span className="block absolute z-20 top-0 left-0 w-full h-full scale-0 peer-focus/txtfld:scale-x-100 peer-focus/txtfld:scale-y-50 bg-regular-blue-cl rounded-[6px] origin-top transition-transform"></span>
      <span className="block absolute z-20 bottom-0 left-0 w-full h-full scale-0 peer-focus/txtfld:scale-x-100 peer-focus/txtfld:scale-y-50 bg-regular-blue-cl rounded-[6px] origin-bottom transition-transform"></span>
    </div>
  )
}

export { AutosizeTextField }
