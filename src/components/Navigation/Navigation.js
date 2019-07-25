import React from 'react';
import './Navigation.css';

const navigation = props => {
    return (
        <header className="Navigation">
            <input className="NavigationBtn" type="checkbox" id="NavigationBtn" />
            <label className="NavigationIcon" htmlFor="NavigationBtn"><span className="Navicon"></span></label>
            <ul className="Menu">
                <li><a href="#albums">Albums</a></li>
                <li><a href="#songs">Songs</a></li>
                <li><a href="#artist">Artist</a></li>
            </ul>
            <div className="SearchBar">
                <input name="album" className="SearchInput" onChange={e=>{props.filterAlbumHandler(e)}} placeholder="Search"/>
                <i className="fas fa-search"></i>
            </div>
        </header>
    );
};

export default navigation;