// import React, { useEffect } from "react";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
// import { gapi } from "gapi-script";
// import { loginAccount } from "@/redux/auth";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const clientId =
//   "465110991899-84mn5u6opcbqsd64j82l476dl8ik469p.apps.googleusercontent.com";

// const Oauth = () => {
//   const navigate = useNavigate();

//   const dispatch = useDispatch();

//   const onSuccess = (response) => {
//     try {
//       localStorage.setItem("token", response.tokenObj.id_token);
//       dispatch(
//         loginAccount({
//           userName: response.profileObj.name,
//           token: response.tokenObj.id_token,
//         })
//       );
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const onFailure = (response) => {
//     console.log("Login Failed" + response);
//   };

//   const onLogoutSuccess = () => {
//     alert("Logout Successfully");
//   };
//   //   initialize client
//   useEffect(() => {
//     const start = async () => {
//       await gapi.client.init({
//         clientId: clientId,
//         scope: "",
//       });
//     };
//     gapi.load("client:auth2", start);
//   });

//   return (
//     <>
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Đăng nhập với Google "
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={"single_host_origin"}
//       />

//       <GoogleLogout
//         clientId={clientId}
//         buttonText="Đăng xuất "
//         onLogoutSuccess={onLogoutSuccess}
//       />
//     </>
//   );
// };

// export default Oauth;
