"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUp, ArrowDown } from "lucide-react"

const SCROLL_TO_TOP_OFFSET: number = 100 // Offset to show the button
const SCROLL_TO_BOTTOM_OFFSET: number = 100 // Offset to show the button

export const ScrollingProgressBar = () => {
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Tính toán phần trăm cuộn trang
      const totalDocScrollLength = documentHeight - windowHeight
      const percent = (scrollTop / totalDocScrollLength).toFixed(2)

      progressBarRef.current?.style.setProperty("transform", `scaleX(${percent})`)
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll() // Call it once to set the initial width

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="absolute top-0 left-0 w-full h-[2px] z-999">
      <div
        ref={progressBarRef}
        className="bg-regular-blue-cl h-full w-full scale-x-0 origin-left"
      ></div>
    </div>
  )
}

export const ScrollingButtons = () => {
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false)
  const [showScrollToBottom, setShowScrollToBottom] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      // Kiểm tra vị trí cuộn để hiển thị nút scroll to top
      if (window.scrollY > SCROLL_TO_TOP_OFFSET) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false)
      }

      // Kiểm tra vị trí cuộn để hiển thị nút scroll to bottom
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPosition = window.scrollY + windowHeight

      if (documentHeight - scrollPosition > SCROLL_TO_BOTTOM_OFFSET) {
        setShowScrollToBottom(true)
      } else {
        setShowScrollToBottom(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Gọi handleScroll lần đầu để thiết lập trạng thái ban đầu
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 50,
      behavior: "instant",
    })
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToBottom = () => {
    const { scrollHeight, clientHeight } = document.documentElement
    window.scrollTo({
      top: scrollHeight - clientHeight - 50,
      behavior: "instant",
    })
    window.scrollTo({
      top: scrollHeight - clientHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="fixed right-5 bottom-5 flex flex-col gap-3 z-50">
      {/* Nút scroll to top */}
      <button
        onClick={scrollToTop}
        className={`flex items-center justify-center w-10 h-10 rounded-full bg-regular-blue-cl text-regular-white-cl transition-all duration-300 shadow-lg hover:opacity-90 !rounded-button whitespace-nowrap cursor-pointer ${showScrollToTop ? "opacity-100 visible" : "opacity-0 invisible"}`}
        aria-label="Cuộn lên đầu trang"
      >
        <ArrowUp />
      </button>

      {/* Nút scroll to bottom */}
      <button
        onClick={scrollToBottom}
        className={`flex items-center justify-center w-10 h-10 rounded-full bg-regular-blue-cl text-regular-white-cl transition-all duration-300 shadow-lg hover:opacity-90 !rounded-button whitespace-nowrap cursor-pointer ${showScrollToBottom ? "opacity-100 visible" : "opacity-0 invisible"}`}
        aria-label="Cuộn xuống cuối trang"
      >
        <ArrowDown />
      </button>
    </div>
  )
}
