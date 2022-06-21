import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
} from "./userRedux";
import { publicRequest } from "../request-method/requestMethod";
import { toast } from "react-toastify";
const notify = (content) => toast(content);
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    notify("Login success")
  } catch (err) {
    dispatch(loginFailure(err));
    notify("Login failure")
  }
};
export const logout = (dispatch) => {
  dispatch(logoutStart());
};
