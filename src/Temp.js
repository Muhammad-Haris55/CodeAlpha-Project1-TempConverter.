import React, { useState } from 'react'

import anime from "animejs"
let mode = "Celcius"
function Temp() {
    const [temp, newtemp] = useState(null)
    const [cel, updcel] = useState(null)
    const onchangetemp = (event) => {
        newtemp(event.target.value)
    }
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
        // Farehnhit to celcius 
        let Celsius = ((ntemp - 32) * (5 / 9))
        let newcel = Math.round(Celsius)
        console.log("Cel" + newcel)
        document.getElementById("degree").innerHTML = (newcel + "°Celsius")
        // celsius to farhenhiet
        if (mode == "Celsius") {
            let ntemp = Number.parseInt(temp)
            let Fahrenheit = (((ntemp) * (9 / 5)) + 32)
            let newcel = Math.round(Fahrenheit)
            console.log("Far" + newcel)
            document.getElementById("degree").innerHTML = (newcel + "°Fahrenheit")

        }
    }
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
                </div>
            </div>
        </>

    )
}

export default Temp
