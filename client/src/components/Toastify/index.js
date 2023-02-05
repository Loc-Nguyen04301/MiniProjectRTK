import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = ({ toastType, textNotification, timeClose = 2000 }) => {
  if (toastType === "success") {
    console.log("success");
    return toast.success(textNotification, {
      position: "top-center",
      autoClose: timeClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    console.log("error");
    return toast.error(textNotification, {
      position: "top-center",
      autoClose: timeClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

export default Toastify;
