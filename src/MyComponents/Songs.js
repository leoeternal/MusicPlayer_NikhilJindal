import React from 'react';
import SongItem from './SongItem';


function Songs(props){
    return(
        <div className="songs-list-container">
            {
                props.songsList.map((sn)=>{
                    return(
                        <SongItem song={sn} key={sn.id} increaseLike={props.increaseLike} onDelete={props.onDelete} />
                    )
                })

            }
        </div>
    )
}

export default Songs;