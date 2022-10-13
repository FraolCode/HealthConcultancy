import {  toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export const  customToast = (message, type) => {
  if (type == 0) {
     toast.success(message, { position: toast.POSITION.TOP_RIGHT });
  } else if (type == 1) {
     toast.error(message, {
      position: toast.POSITION.Left,
    });
  }
};
