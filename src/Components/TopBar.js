import React, {useState} from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'


function TopBar(props) {


    function toggleSidebar() {
        props.setSidebar(!props.sidebar)
    }

    let topBarClass = "h-16 w-full fixed flex flex-row items-center justify-left bg-gradient-to-r from-black to-gray-600 transition-all" +
        (props.sidebar ? " ml-48" : "")

    let sideBarClass = "fixed flex flex-col justify-left h-full bg-black transition-all bg-gradient-to-b from-black to-gray-600 " +
        (props.sidebar ? "w-48" : "w-0")

    let icon = props.sidebar ? faTimes : faBars;
    // <div className="mt-5 text-white text-2xl p-5 border-white border-b">
    //     Game
    // </div>

    let sidebarContent = [];
    if (props.sidebar) {
        sidebarContent = ["Game", "Concept Art", "Downloads"]
    }

    return (
        <div>
            <div class={topBarClass}>
                <button
                    class="w-24 flex h-full justify-center items-center text-white text-3xl border-r border-white
                    hover:text-4xl transition-all"
                    onClick={() => toggleSidebar()}
                >
                    <FontAwesomeIcon icon={icon}/>
                </button>
                <div class="pl-5 text-white text-2xl">Workshop Example</div>
            </div>
            <div class={sideBarClass}>
                {sidebarContent.map((value, index) => {
                    return (
                        <button className="mt-5 text-white text-2xl p-5 border-white border-b"
                                onClick={props.scrollFunctions[index]}
                        >
                            {value}
                        </button>
                    )
                })}
            </div>
        </div>
    );
}

export default TopBar;