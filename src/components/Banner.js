import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import topbanner from "./img/TopBanner.jpg";
const Banner = () => {
    const [isBannerVisible, SetBannerVisible] = useState(true);

    const closeBtn = () => {
        SetBannerVisible(false);
    }
    return (
        <div className="banner-container">
            {isBannerVisible && (
                <div className="banner-content">
                    <img src={topbanner} alt="img" />
                    <button onClick={closeBtn} className='BannerBtn'> <IoClose /> </button>
                </div>
            )}
        </div>
    );
}

export default Banner;