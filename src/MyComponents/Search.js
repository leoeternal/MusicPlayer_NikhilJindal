import React from "react";

function Search(props) {

    var valueOfInput;

    function getData() {
        valueOfInput = document.getElementById("inputData");
        props.showResult(valueOfInput.value);
    }

    return (
        <>
            <div className="search-bar">
                <input id="inputData" type="search" placeholder="Artists, songs, podcasts"></input>
            </div>
            <div className="search-button">
                <button type="button" class="btn btn-dark" onClick={getData}>Search</button>
            </div>
        </>
    )
}

export default Search;