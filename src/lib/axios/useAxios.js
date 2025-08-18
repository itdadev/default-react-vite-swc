import axios from "axios";
import { useNavigate } from "react-router-dom";


const useAxios = () => {
  const navigate = useNavigate();
  

  const clearUser = () => {
    // logout();
    navigate("/login");
  };

  // const refreshAccessToken = async () => {


  //   try {
  //     const response = await axios.post("/api/v1/token-refresh", null, {
  //       withCredentials: true,
  //     });

  //     if (response.status === 200) {
  //       return true;
  //     } else {
  //       clearUser();
  //       throw new Error("Failed to refresh token");
  //     }
  //   } catch (error) {
  //     clearUser();
  //     throw new Error("Error refreshing access token");
  //   }
  // };

  const axiosInstance = axios.create({
    withCredentials: true,
  });

  axiosInstance.interceptors.request.use(
    (req) => {
      return req;
    },
    (error) => {
      console.error("Request Error:", error);
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      let retry = false;

      // 401 Unauthorized 일 때만 토큰 갱신 시도
      if (error.response?.status === 401 && !retry) {
        try {
          retry = true;
          // await refreshAccessToken();

          return axiosInstance(originalRequest); // 재요청
        } catch (err) {
          clearUser();

          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    },
  );

  return { axiosInstance, clearUser };
};

export default useAxios;
