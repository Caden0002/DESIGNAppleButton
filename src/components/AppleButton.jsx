import { useAnimate } from "framer-motion";
import React, {useState} from "react";

const AppleButton = () => {
    const [scope, animate] = useAnimate();

    const [expandedStyle, setExpandedStyle] = useState({width: '45px', x: '99.5', transition: 'all 0.5s cubic-bezier(0.5, 1.25, 0.3, 1)', fill: '#EFEFF2', opacity: 0});
    const [gTransform, setGTransform] = useState('');
    const [textPosition, setTextPosition] = useState({ x: 109.5, y: 41.5 });
    const textContent = "Go deeper on design";


    const EntryAnimation = async () => {
        const animation1 = animate("#blue-circle", { r: 40.5, opacity: 1 }, { duration: 0.5 });
        const animation2 = animate("#gray-circle", { r: 22.5, opacity: 1 }, { duration: 0.5 });
        await Promise.all([animation1, animation2]);
        await animate("#blue-circle", { r: 22.5, opacity: 1, cy: 40.5 }, { delay: 0.1, duration: 0.25, ease: "easeOut" });
        const animation3 = animate("#blue-inner-circle", { r: "16.5278", opacity: 1, cy: "40.4722" }, { duration: 0.25, ease: "easeOut" });
        const animation4 = animate("#plus-sign", { opacity: 1 }, { duration: 0.25, ease: "easeOut" });
        await Promise.all([animation3, animation4]);
        setExpandedStyle({width: '244px', x: '0', transition: 'all 0.5s cubic-bezier(0.5, 1.25, 0.3, 1)', fill: '#EFEFF2', opacity: 1});
        setGTransform('translateX(100px)');
        await animate("#text", { opacity: 1 }, { duration: 0.5});
    };


    const ExitAnimation = async () => {
        const animation5 = animate("#plus-sign", { opacity: 0}, { duration: 0.25});
        const animation6 = animate("#blue-inner-circle", { r: 0, cy: 40.5 }, {duration: 0.25, delay:0.1});
        const animation7 = animate("#text", { opacity:0 }, { duration: 0.2 });
        const animation8 = animate("#blue-circle", { r: 0, opacity: 0, cy: 40.5 }, {});
        await Promise.all([animation5, animation6, animation7, animation8]);
        setExpandedStyle({width: '45px', x: '99.5', transition: '0.5s', fill: '#EFEFF2',});
        const animation9 = animate("#gray-circle", { r: 0, opacity: 1 }, {delay: 0.5, duration: 0.25, ease: "easeOut"});
        setGTransform('translateX(0px)');
        const animation10 = animate("#expanded-gray-circle", { opacity: 0,}, {delay: 0.5});
        await Promise.all([animation9, animation10]);
    };


    return (
        <div ref={scope} className="h-screen bg-black flex flex-col justify-center items-center">
            <svg width="244" height="84" viewBox="0 0 244 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle id="blue-circle" cx="121.5" cy="40.5" r="0" fill="#0171E2"/>
                <circle id="gray-circle" cx="121.5" cy="40.5" r="0" fill="#EFEFF2"/>
                <rect id="expanded-gray-circle" x={expandedStyle.x} y="18" width={expandedStyle.width} height="45"
                      rx="22.5" style={expandedStyle}/>
                <text id="text" x={textPosition.x} y={textPosition.y} fill="black" textAnchor="middle"
                      alignmentBaseline="middle" fontWeight="600" opacity="0">
                    {textContent}
                </text>
                <g style={{transform: gTransform, transition: 'transform 0.5s cubic-bezier(0.5, 1.25, 0.3, 1)'}}> clip-path="url(#clip0_49_269)">
                    <circle id="blue-inner-circle" cx="121.528" cy="40.4722" r="0" fill="#0171E2" opacity="0"/>
                    <path id="plus-sign" d="M129.083 39.5278H123.511V33.9556C123.511 33.1056 122.85 32.4444 122 32.4444C121.15 32.4444 120.583 33.1056 120.583 33.8611V39.4333H115.011C114.161 39.4333 113.5 40.0944 113.5 40.9444C113.5 41.7944 114.161 42.3611 114.917 42.3611H120.489V47.9333C120.489 48.7833 121.15 49.35 121.906 49.35C122.756 49.35 123.322 48.6889 123.322 47.9333V42.3611H128.894C129.744 42.3611 130.311 41.7 130.311 40.9444C130.5 40.1889 129.839 39.5278 129.083 39.5278Z"
                          fill="white" opacity="0"/>
                </g>
            </svg>

            <button onClick={EntryAnimation} className="bg-white text-black mt-12 px-4 py-2 rounded-md">Entry</button>
            <button onClick={ExitAnimation} className="bg-white text-black mt-4 px-4 py-2 rounded-md">Exit</button>

        </div>
    );
};

export default AppleButton;
