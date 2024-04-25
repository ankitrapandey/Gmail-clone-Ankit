import React from "react";
import './Compose.css'
function Compose() {


    return (
        <>
            <div className="container">
                <div className="container-1">
                    <ul className="first-ul">
                        <li>New Message</li>
                        <ul className="second-ul">
                            <li><i class="fa-solid fa-minus"></i></li>
                            <li><i class="fa-solid fa-square-arrow-up-right"></i></li>
                            <li><i class="fa-solid fa-xmark"></i></li>
                        </ul>

                    </ul>
                </div>
                <div className="s-container">
                    <ul className="third-ul">
                        <li><input placeholder="Recipients" /></li>
                    </ul>
                </div>

                <ul className="third-ul">
                    <li><input placeholder="Subject" /></li>
                </ul>
                <ul className="forth-ul">
                    <li><input/></li>
                </ul>
                <button>Send</button>
            </div>
        </>
    )
}
export default Compose;