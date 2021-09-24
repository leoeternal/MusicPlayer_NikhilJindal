import React from "react";

function Header() {
    return (
        <div className="header-container">
            <div className="title-container">
                <div className="title-logo">
                    <i class="fas fa-music"></i>
                </div>
                <div className="title-name">
                    <p>ReactTracks</p>
                </div>
            </div>
            {/* <div className="dave-container">
                <div className="dave-logo">
                    <i class="far fa-smile-wink"></i>
                </div>
                <div className="dave-title">
                    <p>DAVE</p>
                </div>
            </div> */}
            <div className="sign-out-container">
                <div className="sign-out-title">
                    <p>Log out</p>

                </div>
                <div className="sign-out-logo">
                    <i class="fas fa-sign-out-alt"></i>
                </div>
            </div>
        </div>
    )
}

export default Header;