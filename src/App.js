import TopBar from "./Components/TopBar";
import {useRef, useState} from "react";
import Unity, { UnityContext } from "react-unity-webgl";

function App() {


    // const specialRef = useRef(null)
    //
    // function scrollTo() {
    //     console.log("hello")
    //     specialRef.current.scrollIntoView()
    // }

    const unityContext = new UnityContext({
        loaderUrl: "/workshop/Build/WebGL.loader.js",
        dataUrl: "/workshop/Build/WebGL.data",
        frameworkUrl: "/workshop/Build/WebGL.framework.js",
        codeUrl: "/workshop/Build/WebGL.wasm",
    });

    function activateFullscreen() {
        unityContext.setFullscreen(true);
    }

    const [sidebar, setSidebar] = useState(false)

    let margin = sidebar ? "ml-48" : "ml:0"

    return (
        <div >
            <TopBar sidebar={sidebar} setSidebar={setSidebar}/>
            <div class={"transition-all " + margin}>
                <div class="h-16"/>
                <div class="flex flex-col justify-center items-center">
                    {/*Game section*/}
                    <span class="mt-5 font-bold text-5xl mb-5">Game</span>
                    <Unity
                        unityContext={unityContext}
                        style={{
                            width: "640px",
                            height: "360px",
                        }}
                    />
                    <button class="
                    mt-5 rounded-full border border-black p-5 bg-white text-black transition-all
                    hover:border-white hover:bg-black hover:text-white"
                            onClick={activateFullscreen}
                    >Enter Fullscreen</button>
                    <div class="w-4/5 mt-10 border-b border-gray-400"/>
                    {/*Download Page*/}
                    <span className="mt-10 font-bold text-5xl mb-5">Downloads</span>
                    <a href="/workshop/Windows Build.zip"
                       class="mt-5 rounded-full bg-black text-white p-5 flex flex-row items-center justify-center"
                       download>
                        <img src="/workshop/Windows logo.svg" class="
                        w-10 h-10"/>
                        <span class="ml-5">Download</span>
                    </a>
                    <div className="w-4/5 mt-10 border-b border-gray-400"/>

                </div>
            </div>
        </div>
    );
}

export default App;
