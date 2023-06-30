import instance from './request';

// 验证码请求
export const getCaptchaCodeAPI = () => instance.get("/prod-api/captchaImage");
export const LoginAPI = (params) => instance.post("/prod-api/login",params);