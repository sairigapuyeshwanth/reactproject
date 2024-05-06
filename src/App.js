import "./App.css"

import { Route , BrowserRouter, Routes} from "react-router-dom"
import About from "./component/about/about"
import CourseHome from "./component/allcourses/CourseHome"
import Team from "./component/team/Team"
import Pricing from "./component/pricing/Pricing"
import Blog from "./component/blog/blog"
import Contact from "./component/contact/Contact"
import Footer from "./component/common/footer/Footer"
import Home from "./component/home/Home"
import Heading from "./component/common/heading/Heading"
// import Head from "./component/common/header/Head"
// import Header from "./component/common/header/Header"
function App() {
  return (
    <>
      {/* <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router> */}
      <BrowserRouter>
      <Routes>
      <Route  path='/' Component={Home} ></Route>
          <Route  path='/about' Component={About} />
          <Route  path='/courses' Component={CourseHome} />
          <Route  path='/team' Component={Team} />
          <Route path='/pricing' Component={Pricing} />
          <Route  path='/journal' Component={Blog} />
          <Route  path='/contact' Component={Contact} />

      </Routes>
      </BrowserRouter>
      <Footer/>
      {/* <Head/> */}
      {/* <Header/> */}
      <Heading/>
    </>
  )
}

export default App



