import React from 'react';

const DownloadApp = () => {
    const redirectToAppStore = () => {
        window.location.href = 'https://apps.apple.com/app-id';
    };

    const redirectToPlayStore = () => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.example.app';
    };

    return (
        <div className="digital-tontines-container">
            <div className="tontine-container">
                <div className="digital-tontines">
                    <p className="digital-tontines-heading">Do Tontines the digital way</p>
                    <div className="container-wrapper">
                        <img src="/assets/img_1_760_c68fcb.png" className="image-container12" />
                    </div>
                </div>
                <div className="digital-tontine">
                    <div className="flex-container">
                        <div className="image-container10">
                            <img src="/assets/img_1_761_1fb1a9.png" className="image-container17" onClick={redirectToPlayStore} />
                        </div>
                        <div className="image-container4">
                            <img src="/assets/img_1_719_8eeb4f.svg" className="image-container19" onClick={redirectToAppStore} />
                        </div>
                    </div>
                    <div className="image-container18">
                        <img src="/assets/img_1_716_dde8dc.png" className="image-container6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;
