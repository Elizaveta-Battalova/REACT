export const GET_DATA_SUCCEED = "GET_DATA_SUCCEED";
export const ACTION_DATA_FAILED = "ACTION_DATA_FAILED";

export const ACTION_GET_DATA = () => async (dispatch, store) => {
    try {
        const res = await fetch();
        const data = await res.json();

        dispatch({
            type: GET_DATA_SUCCEED,
            payload: data,
        });
    } catch (e) {
        dispatch(ACTION_DATA_FAILED(e));
    }
};

export const ACTION_DATA_FAILED = error => ({
    type: GET_DATA_FAILED,
    payload: error
})

export const initState = {
    data: {},
    error: null,
    isFetching: false,
};

export const setPersist = (state = initState, action) =>{
    switch(action.type) {
        case GET_DATA_SUCCEED:
            return{
                ...state,
                data: action.payload
            }
    }
}

