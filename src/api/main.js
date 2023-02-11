import { _axios } from "@helpers/axios";

export const main = () => {
  return _axios("get", {
    url: `testurl`,
  });
};
