import AxiosApi from "../api";
import { APIS } from "../api/api";
import { CreateAdminsProps } from "../types/admins";

export const createAdmin = (data: CreateAdminsProps) => {
  return new Promise((resolve, reject) => {
    AxiosApi.post(APIS.ADMIN, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
