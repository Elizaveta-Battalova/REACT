import { all } from "redux-saga/effects";

import carsSaga from "../redux/cars/sagas";

export default function* rootSaga() {
    yield all([carsSaga()]);
}