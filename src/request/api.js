import instance from './request';

// 验证码请求
export const getCaptchaCodeAPI = () => instance.get("/prod-api/captchaImage");
// 登录请求
export const LoginAPI = (params) => instance.post("/prod-api/login", params);
//  获取用户可以访问的路由信息
export const getUserRouterAPI = () => instance.get("/prod-api/getRouters");
// 获取用户请求
export const getUserInfoAPI = () => instance.get("/prod-api/getInfo");

export const getcustomerAPI = (params) => instance.get("/prod-api/customer", {params})
// 导出表格
export const exportCustomerAPI = (params,configs) => instance.post("/prod-api/customer/export", params,configs);


export const BpmnInfoAPI = (params,configs) => instance.post("/prod-api/business/bpmnInfo", params,configs);