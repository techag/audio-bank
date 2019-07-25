import React, {Component} from 'react';
import {getAlbums, filterAlbums,getOldState} from '../../actions/albums/album';
import {connect} from 'react-redux';
import { withRouter} from 'react-router';
import './Album.css';
import AlbumCard from '../../components/AlbumCards/AlbumCard';

class Album extends Component {

    componentDidMount = async () => {
        this.props.getAlbums()
    };


    render() {
        let albumsData = [].concat(this.props.albums);
        return (
            <>
                <div className="Album">
                    {this.props.albums && albumsData.sort((a, b) => a.strAlbumStripped.localeCompare(b.strAlbumStripped)).map((album, index) => {
                        return (
                            <AlbumCard album={album} key={index}/>
                        )
                    })}

                </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    console.log('state',state)
    return {
        albums: state.albums.albums,
        loading: state.albums.loading,
        error: state.albums.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAlbums: () => dispatch(getAlbums()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Album));