import * as albumActions from '../../actions/albums/albumActions';
import {updateObject} from '../../util/commonUtil';

const initialState = {
    albums: {},
    oldState: {},
    loading: false,
    error: null,
    filterText:''
};


export const albums = (state = initialState, action) => {
    switch (action.type) {
        case albumActions.GET_ALUBMS_START:
            return updateObject(state, {loading:true, error:null});
        case albumActions.GET_ALBUMS_SUCCESS:
            return updateObject(state, {albums:action.albums.loved, oldState:action.albums.loved, loading: false, error:null});
        case albumActions.GET_ALBUMS_FAIL:
            return updateObject(state, {loading: false, error:action.error});
        case albumActions.GET_OLD_STATE_SUCCESS:
            return updateObject(state, {albums:state.oldState, loading: false, error:null});
        case albumActions.FILTER_ALBUM_SUCCESS:
            return {
                ...state,
                filterText: action.filterText,
                loading:false,
                albums: state.oldState.filter(item => {
                        return item.strArtist.toLowerCase().indexOf(action.filterText.toLowerCase()) > -1;
                    }),
            };
        default:
            return state;
    }

};