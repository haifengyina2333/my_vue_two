import instance from './request';

// 验证码请求
export const getCaptchaCodeAPI = () => instance.get("/prod-api/captchaImage");
// 登录请求
export const LoginAPI = (params) => instance.post("/prod-api/login",params);
//  获取用户可以访问的路由信息
export const getUserRouterAPI = () => instance.get("/prod-api/getRouters");