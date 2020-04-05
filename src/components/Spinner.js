import React from "react";

export default function Spinner() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{margin: "auto"}}
            width="30vw"
            height="30vw"
            display="block"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 100 100"
        >
            <path
                fill="#010404"
                d="M68.486 83.69a37 37 0 00-39.674-62.465 40.2 37-32.421 0139.674 62.466"
            >
                <animateTransform
                    attributeName="transform"
                    dur="0.6944444444444443s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 51.6;360 50 51.6"
                />
            </path>
        </svg>
    );
}