export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const processFilter = (curState, filterText) => {
    if (filterText && filterText !== '') {
        curState.filter(item => {
            // console.log('item',item)
            return item.strArtist.toLowerCase().indexOf(filterText.toLowerCase()) > -1;
        })
    }

};