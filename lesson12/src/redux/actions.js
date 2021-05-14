export const GET_CARS_REQUESTED = "GET_CARS_REQUESTED";
export const GET_CARS_SUCCEED = "GET_CARS_SUCCEED";
export const GET_CARS_FAILED = "GET_CARS_FAILED";

export const ACTION_GET_CARS_REQUESTED = (str) => {
    console.log("ACTION CREATOR");

    return {type: GET_CARS_REQUESTED, payload: str };
};

export const ACTION_GET_CARS_SUCCEED = (data) => ({
    type: GET_CARS_SUCCEED,
    payload: data,
});

export const ACTION_GET_CARS_FAILED = (error) => ({
    type: GET_CARS_FAILED,
    payload: error,
});