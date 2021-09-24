import React, { useState } from 'react';
import Header from './MyComponents/Header';
import SongItem from './MyComponents/SongItem';
import Search from './MyComponents/Search'
import Songs from './MyComponents/Songs';
import AddSong from './MyComponents/AddSong';

function App() {

    function onDelete(songItem) {
        const tempArr = songs.filter(song => song.id != songItem.id);
        setSongs(tempArr);
        // var arr=[];
        // songs.map((sn)=>{
        //     if(sn.id!=songItem.id)
        //     {
        //         arr.push(sn);
        //     }
        // })
        // console.log(arr);
        // setSongs(arr);
    }

    function addSong(titleValue, subTitleValue) {
        var nextID = songs.length + 1;
        var obj = {
            id: nextID,
            likes: 0,
            title: titleValue,
            subtitle: subTitleValue,
            isLiked: false,
            isView: true
        }
        songs.push(obj);
        var arr = [];
        console.log(songs);
        songs.map((sn) => {
            arr.push(sn);
        })
        setSongs(arr);
    }

    function increaseLike(songItem) {
        var arr = [];
        songs.map((sn) => {
            if (sn.id == songItem.id && sn.isLiked == false) {
                sn.likes++;
                sn.isLiked = true;
            }
            else if (sn.id == songItem.id && sn.isLiked == true) {
                sn.likes--;
                sn.isLiked = false;
            }
            arr.push(sn);
        })
        setSongs(arr);
    }

    function showResult(valueOfInput) {
        var arr = [];
        songs.map((sn) => {
            if (sn.title != valueOfInput) {
                sn.isView = false;
            }
            else {
                sn.isView = true;
            }
            arr.push(sn);
        })
        setSongs(arr);
    }

    const [songs, setSongs] = useState([
        {
            id: 1,
            likes: 3,
            title: "All Time Low",
            subtitle: "Jon Bellion, Stormzy",
            isLiked: false,
            isView: true
        },
        {
            id: 2,
            likes: 6,
            title: "Save Your Tears",
            subtitle: "The Weekend",
            isLiked: false,
            isView: true
        },
        {
            id: 3,
            likes: 5,
            title: "Let Me Down Slowly",
            subtitle: "Alec Benjamin",
            isLiked: false,
            isView: true
        }
    ])

    return (
        <div className="root">
            <Header />
            <div className="search-and-song-container">
                <div className="searchbar-container">
                    <Search showResult={showResult} />
                </div>
                <div className="songs">
                    <Songs songsList={songs} onDelete={onDelete} increaseLike={increaseLike} />
                </div>
            </div>
            <div className="addsong-container">
                <AddSong addSong={addSong} />
            </div>
        </div>
    )
}

export default App;