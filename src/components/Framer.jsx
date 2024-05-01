import React, { useState } from 'react';
import { useAnimate } from "framer-motion";

const Framer = () => {
    const [isEntryAnimation, setIsEntryAnimation] = useState(false);
    const [scope, animate] = useAnimate();
    const [gTransform, setGTransform] = useState('');
    const [expandedStyle, setExpandedStyle] = useState({
        width: '45px',
        x: '0',
        transition: 'all 0.5s cubic-bezier(0.5, 1.25, 0.3, 1)',
        fill: '#EFEFF2',
        opacity: 0
    });
    const [textPosition, setTextPosition] = useState({ x: 109.5, y: 41.5 });

    const textContent = "Go deeper on design";

    const handleAnimate = async (isEntry) => {
        setIsEntryAnimation(isEntry);


        if (isEntry) {
            const animation1 = animate("#blue-circle", { r: 40.5, opacity: 1, cy: 40.5 }, { duration: 0.5 });
            const animation2 = animate("#gray-circle", { r: 22.5, opacity: 1, cy: 40.5 }, { duration: 0.5 });
            await Promise.all([animation1, animation2]);
            await animate("#blue-circle", { r: 22.5, opacity: 1, cy: 40.5 }, { delay: 0.1, duration: 0.25, ease: "easeOut" });
            const animation3 = animate("#blue-inner-circle", { r: "16.5278", opacity: 1, cy: "40.4722" }, { duration: 0.25, ease: "easeOut" });
            const animation4 = animate("#plus-sign", { opacity: 1 }, { duration: 0.25, ease: "easeOut" });
            document.getElementById("expanded-gray-circle").style.transform = "translateX(99.5px)";
            await Promise.all([animation3, animation4]);
            await animate("#expanded-gray-circle", {opacity: 1});
            setExpandedStyle({
                width: '244px',
                x: '-99.5px',
                transition: 'all 0.5s cubic-bezier(0.5, 1.25, 0.3, 1)',
                fill: '#EFEFF2',
                opacity: 1
            });
            setGTransform('translateX(100px)');
            await animate("#text", { opacity: 1 }, { duration: 0.5});
        } else {
            const animation5 = animate("#plus-sign", { opacity: 0}, { duration: 0.1, delay:0.1 });
            const animation6 = animate("#blue-inner-circle", { r: 0, cy: 40.5 }, {duration: 0.1, delay:0.1});
            const animation7 = animate("#text", { opacity:0 }, { duration: 0.2 });
            const animation8 = animate("#blue-circle", { r: 0, opacity: 0, cy: 40.5 }, {});
            await Promise.all([animation5, animation6, animation7, animation8]);
            setExpandedStyle({
                width: '45px',
                x: '0',
                transition: 'all 0.5s cubic-bezier(0.5, 1.25, 0.3, 1)',
                fill: '#EFEFF2',
            });
            setGTransform('translateX(0px)');
            await animate("#expanded-gray-circle", { opacity: 0,});
            await animate("#gray-circle", { r: 0, opacity: 1, cy: 40.5 }, {delay: 0.25, duration: 0.25, ease: "easeOut"});
        }
    };

    const handleAnimateButtonClick = () => {
        if (isEntryAnimation) {
            handleAnimate(false);
        } else {
            handleAnimate(true);
        }
    };

    return (
        <div className={`relative min-h-screen flex bg-black justify-center items-center`} >
            <div className="text-white">
                <svg ref={scope} width="262" height="262" viewBox="0 0 262 81" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle id="blue-circle" cx="121.5" cy="81" r="0" fill="#0171E2" opacity="0"/>
                    <circle id="gray-circle" cx="121.5" cy="81" r="0" fill="#EFEFF2" opacity="0"/>
                    <rect id="expanded-gray-circle" x={expandedStyle.x} y="18" width={expandedStyle.width} height="45"
                          rx="22.5" opacity = "0" style={expandedStyle}/>
                    <text id="text"x={textPosition.x} y={textPosition.y} fill="black" textAnchor="middle"
                          alignmentBaseline="middle" fontWeight="600" opacity = "0">
                        {textContent}
                    </text>
                    <g id="plus-sign-circle"
                       style={{transform: gTransform, transition: 'transform 0.5s cubic-bezier(0.5, 1.25, 0.3, 1)'}}>
                        <circle id="blue-inner-circle" cx="121.528" cy="40.4722" r="0" fill="#0171E2" opacity="1"/>
                        <path id="plus-sign"
                              d="M129.083 39.5278H123.511V33.9556C123.511 33.1056 122.85 32.4444 122 32.4444C121.15 32.4444 120.583 33.1056 120.583 33.8611V39.4333H115.011C114.161 39.4333 113.5 40.0944 113.5 40.9444C113.5 41.7944 114.161 42.3611 114.917 42.3611H120.489V47.9333C120.489 48.7833 121.15 49.35 121.906 49.35C122.756 49.35 123.322 48.6889 123.322 47.9333V42.3611H128.894C129.744 42.3611 130.311 41.7 130.311 40.9444C130.5 40.1889 129.839 39.5278 129.083 39.5278Z"
                              fill="white" opacity="0"/>
                    </g>
                </svg>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <button onClick={handleAnimateButtonClick} className="text-white bg-blue-500 py-2 px-4 rounded-md mt-12">
                        {isEntryAnimation ? 'Exit' : 'Entry'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Framer;
