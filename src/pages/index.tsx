import { Routes, Route } from "react-router-dom";

const Index = () => {
   
        return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='login' element={<Login />} />
            </Routes>
        </>
        )
    }

    const Home = () => {
         return (
         <>
         
         </>
         
      )
    }
    const About = () => { { } }

    export default Index