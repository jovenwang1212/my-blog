import type { NextPage } from 'next'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Layout: NextPage = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
