import { useAnimate } from "framer-motion";
import React, {useState} from "react";

const UseAnimateExample = () => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
        // Decrease the radius of the pink circle to 0
        await animate("#pink-circle", { r: 0 }, { duration: 0.5 });

        // Increase the radius of the pink circle to 22.5
        await animate("#pink-circle", { r: 22.5 }, { duration: 0.5 });

        // Move the pink circle horizontally to x-coordinate 400
        await animate("#pink-circle", { cx: 400 }, { duration: 0.5 });

        // Move the pink circle vertically to y-coordinate 400
        await animate("#pink-circle", { cy: 400 }, { duration: 0.5 });

        // Move the pink circle horizontally to x-coordinate 50
        await animate("#pink-circle", { cx: 50 }, { duration: 0.5 });

        // Move the pink circle vertically to y-coordinate 250
        await animate("#pink-circle", { cy: 250 }, { duration: 0.5 });

        // Move the pink circle horizontally to x-coordinate 250
        await animate("#pink-circle", { cx: 250 }, { duration: 0.5 });

        // Increase the radius of the pink circle to 50
        await animate("#pink-circle", { r: 50 }, { duration: 0.5 });

        // Combine one or more animations
        // Simultaneously move the pink circle vertically and change its radius
        const animation1 = animate("#pink-circle", { cy: 200 }, { duration: 0.5 });
        const animation2 = animate("#pink-circle", { r: 40 }, { duration: 0.5 });
        await Promise.all([animation1, animation2]); // Execute both animations at the same time

        // Another set of animations after the first set completes
        // Move the pink circle back down and increase its radius
        const animation3 = animate("#pink-circle", { cy: 250 }, { duration: 0.5 });
        const animation4 = animate("#pink-circle", { r: 50 }, { duration: 0.5 });

    };


    return (
        <div ref={scope} className="h-screen bg-black flex flex-col justify-center items-center">
            <svg width="500" height="500" viewBox="0  0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle id="pink-circle" cx="250" cy="250" r="50" fill="#F3B7B7"/>
            </svg>
            <button onClick={startAnimation} className="bg-white text-black mt-12 px-4 py-2 rounded-md">Animate</button>
        </div>
    );
};

export default UseAnimateExample;
