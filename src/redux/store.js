import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import image from "./modules/image";
import subscribes from "./modules/subscribes";
import user from "./modules/user";
import video from "./modules/video";

export const history = createBrowserHistory();

// 커넥티드 라우터가 필요한가에 대한 의문. 미들웨어에서 쓸 수 있다고는 하지만...
const rootReducer = combineReducers({
  router: connectRouter(history),
  user: user,
  video: video,
  subscribes: subscribes,
  image: image,
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
