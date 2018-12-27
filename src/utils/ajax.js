import axios from 'axios';

export function sendReq(url,method,param,addtionalHeaders){
    const option={
        method:method,
        url:url,
        params:param,
        // withCredentials:true,
        //credentials:"include",
        headers: {
            'Content-Type' : 'application/json;charset=utf-8',
        }   
    };
    return axios(option).then(response=>{
        console.log('response',response);
        //需要加入用户权限登录验证
        //需要对响应数据做处理
        if(response.status=='200'){
            return response;
        }else{
            console.log('请求服务器异常');
        }
    })
    .catch(error=>{
        return error;
    })

}