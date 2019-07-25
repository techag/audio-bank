import React, {Component} from 'react';
import { withRouter} from 'react-router';
import './App.css';
import Album from './containers/Album/Album';
import Navigation from './components/Navigation/Navigation';
import {connect} from 'react-redux';
import {filterAlbums,getOldState} from './actions/albums/album';

class App extends Component {
    /**
     * Filter Criteria will depend on the page
     * @param e
     */
    filterAlbumHandler = e => {
        if (e.target.value && e.target.value !== '') {
            this.props.filterAlbums(e.target.value)
        } else {
            this.props.getOldState();
        }

    };
    render() {
        return (
            <div className="App">
                <section>
                    <div className="Container">
                        <h1 className="Heading">Audio Bank</h1>
                        <Navigation filterAlbumHandler={this.filterAlbumHandler}/>
                        {this.props.loading &&
                        <div className="Loader"></div>
                        }
                        <Album/>
                    </div>
                </section>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        loading: state.albums.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        filterAlbums: filterText => dispatch(filterAlbums(filterText)),
        getOldState: () => dispatch(getOldState())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(App));
