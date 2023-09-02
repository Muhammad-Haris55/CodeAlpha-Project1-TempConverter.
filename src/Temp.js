import React, { useState } from 'react'

import anime from "animejs"
let mode = "Celcius"
function Temp() {
    const [temp, newtemp] = useState(null)
    const [cel, updcel] = useState(null)
    const onchangetemp = (event) => {
        newtemp(event.target.value)
    }
    // C to f =(230°C × 9/5) + 32
    // F to c= (32°F − 32) × 5/9

    const togbtn = () => {
        if (document.querySelector('.switch-input').checked) {
            mode = "Celsius"
            document.getElementById("conv").innerHTML = "Celsius to Fahrenheit"
            document.getElementById("degree").innerHTML = "°Fahrenheit"

        }
        else {
            mode = "fahrenheit"
            document.getElementById("conv").innerHTML = "Fahrenheit to Celsius"
            document.getElementById("degree").innerHTML = "°Celsius"
        }
        console.log(mode)

    }
    const convertbtn = () => {
        newtemp("")
        // Farehnhit to celcius Formula
        let ntemp = Number.parseInt(temp)
        let Celsius = ((ntemp - 32) * (5 / 9))
        let newcel = Math.round(Celsius)
        console.log("Cel" + newcel)
        document.getElementById("degree").innerHTML = (newcel + "°Celsius")
        // celsius to farhenhiet
        if (mode == "Celsius") {
            console.log("hello")
            //     // C × (9/5) + 32
            let ntemp = Number.parseInt(temp)
            let Fahrenheit = (((ntemp) * (9 / 5)) + 32)
            let newcel = Math.round(Fahrenheit)
            console.log("Far" + newcel)
            document.getElementById("degree").innerHTML = (newcel + "°Fahrenheit")
            // °Fahrenheit
        }
    }
    // 
    // target the rectangle fabricating the clipPath element
    const clip = document.querySelector('svg #clip rect');
    // console.log(clip)
    // define a random amount of milliseconds for the animation
    const duration = Math.floor(Math.random() * 5 + 2) * 1000;

    // describe the values assumed by the rectangle
    // translated vertically from its original position to 0 and then back slightly to hide more content
    const translate = [
        {
            value: 'translate(0 0)',
        },
        {
            value: 'translate(0 1)',
        },
        {
            value: 'translate(0 7)',
        },
    ];

    // // animate the clip with the first two values
    anime({
        targets: clip,
        transform: translate.slice(0, 5),
        duration :0,
        easing: 'easeOutQuad',
        complete: () => anime({
            targets: clip,
            transform: translate.slice(1),
            direction: 'forwards',
            loop: true,
            duration: duration / 2,
            easing: 'easeInOutSine',
        }),
    });
    return (
        <>
            <div className='main'>
                <div className="head" id="headid">
                    <div className='temphead'>
                        <label class="switch">
                            <input id="togBtn" className='switch-input' type="checkbox" onClick={togbtn}></input>
                            <span class="slider"></span>
                        </label>
                    </div>

                    <p className='tempname'>TEMPERATURE - CONVERTER</p>
                    <div className='searchs'>
                        <div className='pr'>

                            <p id="conv" className='temp'>Fahrenheit to Celsius</p>
                        </div>
                        <div class="search">
                            <div class="search-box">
                                <div class="search-field">
                                    <input placeholder="Enter temperature" id="place" class="input" value={temp} onChange={onchangetemp} type="text"></input>
                                    <div class="search-box-icon">
                                        <div className="inputbtn" >
                                            <div class="container">
                                                <button id="fotrbutn" class="button" onClick={convertbtn}></button>
                                                <span class="arrow first">
                                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                                    </svg>
                                                </span>
                                                <span class="arrow second">
                                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                                    </svg>
                                                </span>
                                                <span class="arrow third">
                                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='title text-center'>
                        <div className='search'>
                            <p id="degree">{cel}<span className='cel'>o</span>Celsisus</p>
                        </div>
                    </div>
                    <div className='weather text-center'>
                        {/* <p>{"temp"}F</p> */}
                        {/* <p className="update text-center">Feels Like:{"feel"}F</p> */}
                        {/* <p className="update text-center">{"cond"}</p> */}
                    </div>
                </div>
                <div className='head2'>
                    <svg className='ther' viewBox="0 0 15 30" width="210" height="500" rotate="30">
                        <defs>
                            <clipPath id="clip">
                                <rect
                                    transform="translate(0 20)"
                                    x="0"
                                    y="3"
                                    width="13"
                                    height="20">
                                </rect>
                            </clipPath>
                        </defs>

                        <g
                            stroke="#272A6E"
                            fill="none"
                            stroke-width="1"
                            stroke-linecap="round"
                            transform="translate(7.5 0)">
                            <path
                                d="M 0 2.5 h 7">
                            </path>
                            <path
                                d="M 0 5.5 h 5">
                            </path>
                            <path
                                d="M 0 8.5 h 5">
                            </path>
                            <path
                                d="M 0 11.5 h 7">
                            </path>
                            <path
                                d="M 0 14.5 h 5">
                            </path>
                            <path
                                d="M 0 17.5 h 5">
                            </path>
                        </g>
                        <g
                            clip-path="url(#clip)"
                            stroke="#FF4E2C"
                            fill="none"
                            stroke-width="1"
                            stroke-linecap="round"
                            transform="translate(7.5 0)">
                            <path
                                d="M 0 2.5 h 7">
                            </path>
                            <path
                                d="M 0 5.5 h 5">
                            </path>
                            <path
                                d="M 0 8.5 h 5">
                            </path>
                            <path
                                d="M 0 11.5 h 7">
                            </path>
                            <path
                                d="M 0 14.5 h 5">
                            </path>
                            <path
                                d="M 0 17.5 h 5">
                            </path>
                        </g>

                        {/* <!-- thermometer --> */}
                        <g>
                            <path
                                d="M 7.5 2.5 v 20"
                                fill="none"
                                stroke="#F5F3E8"
                                stroke-width="4.5"
                                stroke-linecap="round">
                            </path>
                            <circle
                                cx="7.5"
                                cy="25"
                                r="4.5"
                                fill="#F5F3E8">
                            </circle>
                        </g>

                        {/* <!-- line describing a shadow on the thermometer --> */}
                        <path id='lensth'
                            d="M 7.5 2.5 v 20"
                            fill="none"
                            stroke="#000"
                            stroke-width="2"
                            stroke-linecap="round"
                            opacity="0.2">
                        </path>


                        {/* <!-- colored portions of the thermometer --> */}
                        <g>
                            {/* <!-- line, clipped through the defined element --> */}
                            <g
                                clip-path="url(#clip)">
                                <path
                                    d="M 7.5 2.5 v 20"
                                    fill="none"
                                    stroke="#FF4E2C"
                                    stroke-width="2"
                                    stroke-linecap="round">
                                </path>
                            </g>

                            {/* <!-- circle --> */}
                            <circle
                                cx="7.5"
                                cy="25"
                                r="3"
                                fill="#FF4E2C">
                            </circle>
                        </g>
                    </svg>
                </div>
            </div>
        </>

    )
}

export default Temp
