
import Header from "./Header";
import Leftside from "./Leftside";
import RightsideBar from "./RightsideBar";
import { Routes,Route } from "react-router-dom";
// import Started from "./Started";
import Mail from "./Mail";
import Footer from "./Footer";
// import Auth from "./Auth";
const Main=()=>{
    return (

        <div class="body-wrapper">
           <Leftside />
            <Header />
            <Routes>
         {/* <Route path='/mail' element={<Mail/>}/>  */}
         <Route path='/' element={<Mail params=""/>}/> 
         <Route path='/inbox' element={<Mail params="inbox"/>}/> 
         <Route path='/sent' element={<Mail params="sent"/>}/> 
         {/* <Route path='/Started' element={<Started/>}/>    */}
          </Routes>
            <RightsideBar />
            <Footer/>
         {/* <Auth/>  */}
        </div>
    )
};
export default Main;