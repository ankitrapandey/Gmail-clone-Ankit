
import Header from "./Header";
import Leftside from "./Leftside";
import RightsideBar from "./RightsideBar";
import { Routes,Route } from "react-router-dom";
import Started from "./Started";
import Mail from "./Mail";
const Main=()=>{
    return (

        <div class="body-wrapper">
            <Leftside />
            <Header />
            <Routes>
         <Route path='/mail' element={<Mail/>}/> 
         <Route path='/Started' element={<Started/>}/>   
          </Routes>
            <RightsideBar />
        </div>
    )
};
export default Main;