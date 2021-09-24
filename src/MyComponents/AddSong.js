import React from 'react';

function AddSong(props) {

    var titleValue, subTitleValue;

    function getDetails() {
        var title = document.getElementById("title");
        var subTitle = document.getElementById("subtitle");
        titleValue = title.value;
        subTitleValue = subTitle.value;
        if (titleValue != "" && subTitleValue != "") {
            props.addSong(titleValue, subTitleValue);
        }
    }

    return (
        <>
            <div className="enter-title-container">
                <input type="text" id="title" placeholder="Enter Title"></input>
            </div>
            <div className="enter-subtitle-container">
                <input type="text" id="subtitle" placeholder="Enter Subtitle"></input>
            </div>
            <div className="add-song-button-container">
                <button type="button" onClick={getDetails} class="btn btn-success">Add Song</button>
            </div>
        </>
    )
}

export default AddSong;