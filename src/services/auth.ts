import axios from "axios";
import AxoisApi from "../api";
import { APIS } from "../api/api";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const userSignUp = (data: any) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${APIS.USER}`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const userLogin = (data: any) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${APIS.USER}/login`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const adminLogin = (data: any) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${APIS.ADMIN}/login`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const changePassword = (data: any) => {
  const { userData } = useSelector((state: RootState) => state.user.user);
  const changeApi = userData?.permission === "USER" ? APIS.USER : APIS.USER;
  console.log(changeApi);
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${changeApi}/password/change`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const refreshToken = (data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${APIS.DEFAULT}/token`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
