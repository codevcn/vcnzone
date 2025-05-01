// // The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// "use client"
// import React, { useState, useEffect } from "react"
// import { Sheet,SheetContent,SheetDescription,SheetHeader,SheetFooter } from "@/components/materials/sheet"

// const App: React.FC = () => {
//   const [showScrollToTop, setShowScrollToTop] = useState(false)
//   const [showScrollToBottom, setShowScrollToBottom] = useState(false)
//   const [scrollProgress, setScrollProgress] = useState(0)
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShowScrollToTop(true)
//       } else {
//         setShowScrollToTop(false)
//       }

//       const windowHeight = window.innerHeight
//       const documentHeight = document.documentElement.scrollHeight
//       const scrollPosition = window.scrollY + windowHeight

//       if (documentHeight - scrollPosition > 100) {
//         setShowScrollToBottom(true)
//       } else {
//         setShowScrollToBottom(false)
//       }

//       const scrollable = documentHeight - windowHeight
//       const scrolled = window.scrollY
//       const progress = (scrolled / scrollable) * 100
//       setScrollProgress(Math.min(Math.max(progress, 0), 100))
//     }

//     window.addEventListener("scroll", handleScroll)
//     handleScroll()

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     })
//   }

//   const scrollToBottom = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth",
//     })
//   }

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen)
//   }

//   return (
//     <div className="min-h-[1024px] w-[1440px] mx-auto bg-gray-100 relative">
//       {/* Menu Button */}
//       <button
//         onClick={toggleDrawer}
//         className="fixed top-5 right-5 z-50 bg-regular-blue-cl text-white p-3 rounded-full shadow-lg hover:bg-regular-blue-cl/90 transition-all duration-300"
//         aria-label="Toggle Menu"
//       >
//         <i className="fas fa-bars"></i>
//       </button>

//       {/* Drawer Component */}
//       <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
//         <SheetContent>
//           <SheetHeader>
//             <div className="flex justify-between items-center">
//               <h2 className="text-2xl font-semibold text-gray-800">Menu</h2>
//               <button
//                 onClick={toggleDrawer}
//                 className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
//               >
//                 <i className="fas fa-times text-xl"></i>
//               </button>
//             </div>
//           </SheetHeader>
//           <DrawerBody>
//             <nav className="space-y-4">
//               <a
//                 href="#"
//                 className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 cursor-pointer"
//               >
//                 <i className="fas fa-home text-regular-blue-cl"></i>
//                 <span>Home</span>
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 cursor-pointer"
//               >
//                 <i className="fas fa-info-circle text-regular-blue-cl"></i>
//                 <span>About</span>
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 cursor-pointer"
//               >
//                 <i className="fas fa-blog text-regular-blue-cl"></i>
//                 <span>Blog</span>
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 cursor-pointer"
//               >
//                 <i className="fas fa-envelope text-regular-blue-cl"></i>
//                 <span>Contact</span>
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 cursor-pointer"
//               >
//                 <i className="fas fa-bell text-regular-blue-cl"></i>
//                 <span>Subscribe</span>
//               </a>
//             </nav>
//           </DrawerBody>
//           <DrawerFooter>
//             <p className="text-center text-sm text-gray-500">© 2025 VCN Zone</p>
//           </DrawerFooter>
//         </SheetContent>
//       </Sheet>

//       {/* Main Content */}
//       <div className="p-8">
//         <h1 className="text-4xl font-bold mb-6">Trang Mẫu Có Thể Cuộn</h1>
//         <p className="mb-4">Cuộn xuống để xem các nút điều hướng xuất hiện.</p>
//         {Array.from({ length: 20 }).map((_, index) => (
//           <div key={index} className="mb-16">
//             <h2 className="text-2xl font-semibold mb-4">Phần nội dung {index + 1}</h2>
//             <p className="mb-3">
//               Đây là một đoạn văn bản mẫu để tạo nội dung cho trang. Bạn có thể cuộn lên và xuống để
//               xem các nút điều hướng hoạt động.
//             </p>
//             <p className="mb-3">
//               Khi bạn cuộn xuống dưới cách đầu trang 100px, nút cuộn lên sẽ xuất hiện. Khi bạn cuộn
//               lên trên cách cuối trang 100px, nút cuộn xuống sẽ xuất hiện.
//             </p>
//             <p>
//               Cả hai nút đều được thiết kế theo yêu cầu với màu sắc chủ đạo là regular-blue-cl và
//               #353742.
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Scroll Buttons Container */}
//       <div className="fixed right-5 bottom-5 flex flex-col gap-3 z-30">
//         <button
//           onClick={scrollToTop}
//           className={`w-10 h-10 rounded-full bg-regular-blue-cl text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:opacity-90 ${
//             showScrollToTop ? "opacity-100 visible" : "opacity-0 invisible"
//           }`}
//           aria-label="Cuộn lên đầu trang"
//         >
//           <i className="fas fa-arrow-up"></i>
//         </button>

//         <div className="relative w-10 h-10">
//           <svg className="w-full h-full transform -rotate-90">
//             <circle cx="20" cy="20" r="18" stroke="#e6e6e6" strokeWidth="2" fill="none" />
//             <circle
//               cx="20"
//               cy="20"
//               r="18"
//               stroke="regular-blue-cl"
//               strokeWidth="2"
//               fill="none"
//               strokeDasharray={`${2 * Math.PI * 18}`}
//               strokeDashoffset={`${2 * Math.PI * 18 * (1 - scrollProgress / 100)}`}
//               className="transition-all duration-300"
//             />
//           </svg>
//           <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-regular-blue-cl">
//             {Math.round(scrollProgress)}%
//           </div>
//         </div>

//         <button
//           onClick={scrollToBottom}
//           className={`w-10 h-10 rounded-full bg-[#353742] text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:opacity-90 ${
//             showScrollToBottom ? "opacity-100 visible" : "opacity-0 invisible"
//           }`}
//           aria-label="Cuộn xuống cuối trang"
//         >
//           <i className="fas fa-arrow-down"></i>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default App
