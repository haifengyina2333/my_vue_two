// 用来存放验证的方法
export function vaildataUsername(rule,value,callback) {
    if(value.length < 3 || value.length > 20 ){
        callback(new Error("用户名必须在3到20位字符"));
    }else{
        callback()
    }
}