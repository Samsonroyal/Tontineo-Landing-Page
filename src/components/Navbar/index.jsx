import React from 'react';

const Navbar = () => {
    return (
        <div className="header-container1">
            <div className="header-container">
                <div className="svg-container svg-container">
                    <svg
                        fill="none"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                    >
                        <g
                            id="Tontineo Logo_2"
                            xmlns="http://www.w3.org/2000/svg"
                            data-node-id="106:118"
                        >
                            <g id="Group 150_2" data-node-id="106:119">
                                <path
                                    id="Rectangle 99_2"
                                    d="M27.78835,11.985c0.008,-6.09 -4.926,-11.04 -11.02,-11.05h-1.508c-6.094,-0.01 -11.04,4.93 -11.048,11.02z"
                                    fill="white"
                                    data-node-id="106:120"
                                ></path>
                                <path
                                    id="Rectangle 103_2"
                                    d="M9.52535,12.035c0.004,-3.44 2.758,-6.53 6.432,-6.53c3.674,0.01 6.611,3.09 6.607,6.53h-6.607z"
                                    fill="currentColor"
                                    data-node-id="106:121"
                                ></path>
                            </g>
                            <path
                                id="Rectangle 104_2"
                                d="M9.55835,12.215c-0.004,3.13 2.906,5.67 6.499,5.67c3.593,0.01 6.509,-2.52 6.513,-5.65z"
                                fill="white"
                                data-node-id="106:122"
                            ></path>
                            <path
                                id="Rectangle 868_2"
                                d="M12.71135,13.425h6v17.64h-6z"
                                fill="white"
                                data-node-id="106:123"
                            ></path>
                        </g>
                    </svg>
                </div>
                <p className="tontineo-title">Tontineo</p>
            </div>
            <div className="navbar">
                <p className="primary-navigation">About</p>
                <p className="primary-navigation">Features</p>
                <p className="primary-navigation">Blog</p>
                <p className="primary-navigation">Contact</p>
                <button className="base-Button-root green-button1" type="button">
                    Login
                </button>
                <button className="base-Button-root green-button" type="button">
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default Navbar;
