
import Header from "./Header";
import Leftside from "./Leftside";
import RightsideBar from "./RightsideBar";
import { Routes,Route } from "react-router-dom";
// import Started from "./Started";
import Footer from "./Footer";
import Body from "./Body";

// import Auth from "./Auth";
const Main=()=>{
    return (

        <div class="body-wrapper">
           <Leftside />
            <Header />
            <Routes>
         {/* <Route path='/Body' element={<Body/>}/>  */}
         <Route path='/' element={<Body params=""/>}/> 
         <Route path='/Inbox' element={<Body params="Inbox"/>}/> 
         <Route path='/Sent' element={<Body params="Sent"/>}/> 
         {/* <Route path='/Started' element={<Started/>}/>    */}
          </Routes>
            <RightsideBar />
            <Footer/>
         {/* <Auth/>  */}
        </div>
    )
};
export default Main;