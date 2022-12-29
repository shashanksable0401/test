import { ACTIONS } from "./actions";
import { actionType } from "../utils";

/** Initial auth state */
const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated"),
};

/** Auth reducer */
export function authReducer(state = initialState, action: actionType) {
  switch (action.type) {
    case ACTIONS.AUTH_FAILURE:
      localStorage.setItem("isAuthenticated", "false");
      return { isAuthenticated: action.payload };
    case ACTIONS.AUTH_SUCCESS:
      localStorage.setItem("isAuthenticated", "true");
      return { isAuthenticated: action.payload };
    default:
      return state;
  }
}
