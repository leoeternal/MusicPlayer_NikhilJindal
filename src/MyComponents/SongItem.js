import React from "react";

function SongItem(props) {
    return (
        <>
            {

                props.song.isView ? (
                    <div className="one-song-container">
                        <div className="like-button-container">
                            <div className="song-likecount">
                                <p>{props.song.likes}</p>
                            </div>
                            <div className="song-like-button">
                                
                                {
                                    props.song.isLiked?(<i onClick={() => { props.increaseLike(props.song) }} style={{color: "red"}} class="fas fa-heart"></i>):(<i onClick={() => { props.increaseLike(props.song) }}  class="fas fa-heart"></i>)
                                }
                                
                            </div>
                        </div>
                        <div className="title-subtitle-container">
                            <div className="song-title">
                                <p>{props.song.title}</p>
                            </div>
                            <div className="song-subtitle">
                                <p>{props.song.subtitle}</p>
                            </div>
                        </div>
                        <div className="audio-bar-container">
                            <audio controls>
                                <source src="horse.ogg" type="audio/ogg" />
                                <source src="horse.mp3" type="audio/mpeg" />
                            </audio>
                        </div>
                        <div className="delete-container">
                            <button type="button" onClick={() => { props.onDelete(props.song) }} class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                ) : ("")
            }

        </>
    )
}

export default SongItem;