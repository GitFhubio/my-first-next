import Footer from "./Footer"
import Nav from "./Nav"
export default function Layout({children} : any) {
  return  (
    <>
  <Nav/>
  <div className="my-content">
  {children}
  </div>
  <Footer/>

  </>
  )
}

