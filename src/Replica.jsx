import React from 'react'
import './Replica.css'
function Replica() {
    return (
        <>
            <div className='container'>

                <div className='first-container'>
                    <ul className='first-ul'>
                        <li><i class="fa-solid fa-arrow-left"></i></li>
                        <li><i class="fa-solid fa-download"></i></li>
                        <li><i class="fa-solid fa-trash-can"></i></li>
                        <li><i class="fa-regular fa-envelope"></i></li>
                        <li><i class="fa-regular fa-clock"></i></li>
                        <li><i class="fa-regular fa-circle-check"></i></li>
                        <li><i class="fa-solid fa-angles-right"></i></li>
                        <li><i class="fa-solid fa-circle-right"></i></li>
                    </ul>
                    <ul className='second-ul'>
                        <li><i class="fa-solid fa-chevron-left"></i></li>
                        <li><i class="fa-solid fa-angle-right"></i></li>
                    </ul>

                </div>
                <div className='second-container'>
                    <h1>Don't Blame Your Phone If You're Addicted to It</h1>
                    <ul className='third-ul'>
                        <li><i class="fa-solid fa-print"></i></li>
                        <li><i class="fa-solid fa-turn-up"></i></li>
                    </ul>
                </div>
                <div className='third-container'>
                    <h1> Sadhguru JV via LinkedIn Unsubscribe</h1>
                    <ul className='forth-ul'>
                        <li><i class="fa-regular fa-star"></i></li>
                        <li><i class="fa-solid fa-rotate-left"></i></li>
                        <li><i class="fa-solid fa-ellipsis-vertical"></i></li>
                    </ul>
                </div>
                <div className='forth-container'>

                </div>
            </div>

        </>
    )
}

export default Replica;