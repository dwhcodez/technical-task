const initState = {
    items: []
};

const itemsReducer = (state = initState, action) => {

    switch(action.type){
        case 'FETCH_ITEMS':
            return {
                items: action.items
            };
        default:
            return state;
    }

};

export default itemsReducer;