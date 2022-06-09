import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
} from "./userRedux";
import { publicRequest } from "../request-method/requestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};
export const logout = (dispatch) => {
  dispatch(logoutStart());
};
