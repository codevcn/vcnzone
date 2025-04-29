import Footer from "./footer"
import Navbar from "./navbar"

type TPagesLayoutProps = {
  children: React.JSX.Element | React.JSX.Element[]
}

export const PagesLayout = ({ children }: TPagesLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
