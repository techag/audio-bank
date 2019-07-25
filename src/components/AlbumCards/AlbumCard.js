import React from 'react';
import './AlbumCard.css';

const albumCard = props => {

    return (
        <>
        {props.album.strAlbumThumb && props.album.strDescription &&
        <div className="AlbumCard">
            <img src={`${props.album.strAlbumThumbBack ? props.album.strAlbumThumbBack : props.album.strAlbumThumb}/preview`} alt="" className="CardImg"/>
            <img src={`${props.album.strAlbumThumb}/preview`} alt="" className="ProfileImg"/>
            <h1>{props.album.strAlbumStripped}</h1>
            <p className="ProfileName">{props.album.strArtist}</p>
            <p className="ArtistDetail">{props.album.strDescription}</p>
            <a href="#" className="ReadMore">Read More</a>
        </div>
        }
        </>
    )
};

export default  albumCard;