import TopBar from "./Components/TopBar";
import {useRef, useState} from "react";

function App() {


    // const specialRef = useRef(null)
    //
    // function scrollTo() {
    //     console.log("hello")
    //     specialRef.current.scrollIntoView()
    // }

    const [sidebar, setSidebar] = useState(false)

    let margin = sidebar ? "ml-48" : "ml:0"

    return (
        <div >
            <TopBar sidebar={sidebar} setSidebar={setSidebar}/>
            <div class={"transition-all " + margin}>
                <div class="h-16"/>
                <div class="flex flex-col justify-center items-center">
                    <span class="mt-5 font-bold text-5xl">Game</span>
                </div>
            </div>
        </div>
    );
}

export default App;
