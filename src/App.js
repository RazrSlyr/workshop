import TopBar from "./Components/TopBar";
import {useRef, useState} from "react";
import Unity, {UnityContext} from "react-unity-webgl";

function App() {

    const gameRef = useRef(null)
    const conceptRef = useRef(null)
    const downloadRef = useRef(null)


    function toGame() {
        gameRef.current.scrollIntoView()
    }

    function toConcept() {
        conceptRef.current.scrollIntoView()
    }

    function toDownloads() {
        console.log("hello")
        downloadRef.current.scrollIntoView()
    }

    let scrollFunctions = [toGame, toConcept, toDownloads]

    const unityContext = new UnityContext({
        loaderUrl: "/workshop/Build/WebGL.loader.js",
        dataUrl: "/workshop/Build/WebGL.data",
        frameworkUrl: "/workshop/Build/WebGL.framework.js",
        codeUrl: "/workshop/Build/WebGL.wasm",
    });

    const [sidebar, setSidebar] = useState(false)

    const gameViewWidth = 50
    const gameViewHeight = gameViewWidth / 16 * 9

    let margin = sidebar ? "ml-48" : "ml:0"


    const conceptArtPath = "/workshop/conceptArt/"
    let conceptArts = ["crewmate.png", "imposter.jfif", "map.jfif"]
    let conceptDescriptions = ["Main Character Design", "Enemy Design", "Environment Design"]

    return (
        <div>
            <TopBar sidebar={sidebar} setSidebar={setSidebar} scrollFunctions={scrollFunctions}/>
            <div class={"transition-all " + margin}>
                <div class="h-16"/>
                <div class="flex flex-col justify-center items-center">
                    {/*Game section*/}
                    <span ref={gameRef} class="mt-5 font-bold text-5xl mb-5">Game</span>
                    <Unity
                        unityContext={unityContext}
                        style={{
                            width: gameViewWidth + "vw",
                            height: gameViewHeight + "vw",
                        }}
                    />
                    <div class="w-4/5 mt-10 border-b border-gray-400"/>
                    {/*Concept Art*/}
                    <span ref={conceptRef} class="mt-10 font-bold text-5xl mb-5">Concept Art</span>
                    <div class="m-10">
                        <div className="grid grid-cols-3 grid-flow-row w-full gap-5 justify-center items-center">
                            {conceptArts.map((art, i) => {
                                return (
                                    <div
                                        class="flex justify-left items-center flex-col rounded border border-gray-300 w-full h-96">
                                        <img src={conceptArtPath + art} class="w-auto h-4/5 p-5"/>
                                        <div
                                            class="p-5 text-2xl border-t w-full border-t-gray-300 text-black text-center">
                                            {conceptDescriptions[i]}
                                        </div>
                                    </div>)
                            })}

                        </div>
                    </div>
                    <div className="w-4/5 mt-10 border-b border-gray-400"/>
                    {/*Download Page*/}
                    <span ref={downloadRef} className="mt-10 font-bold text-5xl mb-5">Downloads</span>
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
