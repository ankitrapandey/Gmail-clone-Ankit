
import Header from "./Header";
import Leftside from "./Leftside";
import RightsideBar from "./RightsideBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Body from "./Body";
import Replica from "./Replica";
import Demo from "./Demo";

const Main = () => {
    return (
        <div class="body-wrapper">
            <Leftside />
            <Header />
            <Routes>
                <Route path='/' element={<Body params="" />} />
                <Route path='/Inbox' element={<Body params="Inbox" />} />
                <Route path='/Sent' element={<Body params="Sent" />} />
                <Route path='/Draft' element={<Body params="Draft" />} />
            </Routes>
            <RightsideBar />
            <Footer />
            {/* <Replica/> */}
            <Demo/>

        </div>
    )
};
export default Main;