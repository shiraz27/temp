import axiosInstance from "../axiosInstance";

export function login(email, password, type) {
  return new Promise((resolve, reject) => {
    const result = {
      success: false,
      data: null,
    };
    axiosInstance
      .post("/User/login", {
        email,
        password,
        type,
      })
      .then((response) => {
        result.success = true;
        result.data = response.data;
        resolve(result);
      })
      .catch((error) => {
        result.success = false;
        result.data = error.response.data;
        reject(result);
      });
  });
}

export function register({
  name,
  email,
  password,
  confirmPassword,
  userType,
  siret,
}) {
  return new Promise((resolve, reject) => {
    const result = {
      success: false,
      data: null,
    };
    axiosInstance
      .post("/User/register", {
        name,
        email,
        password,
        confirmPassword,
        type: userType,
        siret,
        socketId: "test",
        tokenId: "test",
      })
      .then((response) => {
        result.success = true;
        result.data = response.data;
        resolve(result);
      })
      .catch((error) => {
        result.success = false;
        result.data = error.response.data;
        reject(result);
      });
  });
}

export function sendCode(email) {
  return new Promise((resolve, reject) => {
    const result = {
      success: false,
      data: null,
    };
    axiosInstance
      .post("/User/sendcode", {
        email,
      })
      .then((response) => {
        result.success = true;
        result.data = response.data;
        resolve(result);
      })
      .catch((error) => {
        result.success = false;
        result.data = error.response.data;
        reject(result);
      });
  });
}

export function resetPassword(email, code, password, confirmPassword) {
  return new Promise((resolve, reject) => {
    const result = {
      success: false,
      data: null,
    };
    axiosInstance
      .post("/User/resetpassword", {
        email,
        code,
        password,
        confirmPassword,
      })
      .then((response) => {
        result.success = true;
        result.data = response.data;
        resolve(result);
      })
      .catch((error) => {
        result.success = false;
        result.data = error.response.data;
        reject(result);
      });
  });
}

export function deleteCompte(email, password, token, provider) {
  return new Promise((resolve, reject) => {
    const result = {
      success: false,
      data: null,
    };
    axiosInstance
      .post("/user/delete", {
        email,
        password,
        token,
        provider,
      })
      .then((response) => {
        result.success = true;
        result.data = response.data;
        resolve(result);
      })
      .catch((error) => {
        result.success = false;
        result.data = error.response.data;
        reject(result);
      });
  });
}
