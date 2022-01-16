import React, {useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


function TopBar(props) {


    function toggleSidebar() {
        props.setSidebar(!props.sidebar)
    }

    let topBarClass = "h-16 w-full fixed flex flex-row items-center justify-left bg-gradient-to-r from-black to-gray-600 transition-all" +
        (props.sidebar ? " ml-48" : "")

    let sideBarClass = "fixed flex flex-col justify-center h-full bg-black transition-all " +
        (props.sidebar ? "w-48" : "w-0")

    let icon = props.sidebar ? faTimes : faBars;




    return (
        <div>
            <div class={topBarClass}>
                <button
                    class="w-24 flex h-full justify-center items-center text-white text-3xl border-r border-white
                    hover:text-4xl transition-all"
                    onClick={() => toggleSidebar()}
                >
                    <FontAwesomeIcon icon={icon} />
                </button>
                <div class="pl-5 text-white text-2xl">Workshop Game</div>
                <button className="p-5 w-40 text-white" onClick={props.scrollTo}>Press me</button>
            </div>
            <div class={sideBarClass}>

            </div>
        </div>
    );
}

export default TopBar;