import utils from "./utils";

import rootReducer from "./rootReducer"

const store = utils.createStore(rootReducer);

export default store;