import * as albumActions from './albumActions';
import axios from '../../httpGateway/axios/axios';

const getAlbumsStart = () => {
    return {
        type: albumActions.GET_ALUBMS_START
    }
};

const getAlbumsSuccess = albums => {
    return {
        type: albumActions.GET_ALBUMS_SUCCESS,
        albums
    }
};

const getAlbumsFail = error => {
    return {
        type: albumActions.GET_ALBUMS_FAIL,
        error
    }
};

const filterAlbumsSuccess = filterText => {

    return {
        type: albumActions.FILTER_ALBUM_SUCCESS,
        filterText
    }
};

const getOldStateSuccess = () => {
    return {
        type: albumActions.GET_OLD_STATE_SUCCESS
    }
};


export const getAlbums = () => {
  return dispatch => {
      dispatch(getAlbumsStart());

      axios.request({baseURL:'https:theaudiodb.com/api/v1/json/1/mostloved.php?format=album'})
          .then(response => {
              dispatch(getAlbumsSuccess(response.data))
          })
          .catch(err => {
              dispatch(getAlbumsFail(err))
          })
  }
};

export const filterAlbums = filterText => {
    return dispatch => {
        dispatch(getAlbumsStart());
        dispatch(filterAlbumsSuccess(filterText))
    }
};

export const getOldState = () => {
    return dispatch => {
        dispatch(getOldStateSuccess())
    };
};