import React, { useEffect, useRef } from 'react';

const Brands = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                containerRef.current.scrollLeft += containerRef.current.offsetWidth;
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="container" ref={containerRef}>
            <img src="/assets/img_1_485_7daefc.svg" className="image-container" alt="Brand 1" />
            <img src="/assets/img_2_485_7daefc.svg" className="image-container" alt="Brand 2" />
            <img src="/assets/img_3_485_7daefc.svg" className="image-container" alt="Brand 3" />
            {/* Add more images for different brands */}
        </div>
    );
};

export default Brands;
