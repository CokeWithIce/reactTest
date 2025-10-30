//导入zustand状态组件。
import { message } from "antd";
import { create } from "zustand";
//设置接口。规定要使用的参数的类型，
interface UserState{
    isLogin:boolean,
    currentUser:string
    users:{
        account:string,
        password:string,
    }[],
    //登录
    login:(account:string,password:string)=>void;
    //退出登录
    logout:()=>void;
    //注册
    register:(account:string,password:string)=>void;
}
//使用创建状态类型组件使用
export const useUser=create<UserState>((set)=>({
    isLogin: localStorage.getItem("xdclass_user_is_login") ? true : false,
    currentUser: localStorage.getItem("xdclass_user_current_user") || "",
    users: localStorage.getItem("xdclass_react_users") ? JSON.parse(localStorage.getItem("xdclass_react_users") || "[]") : [],
    //注册功能代码
    register: (account, password) => set((state) => {
        const users = [...state.users];
        users.push({ account, password });
        localStorage.setItem("xdclass_react_users", JSON.stringify(users));
        localStorage.setItem("xdclass_user_is_login", "true");
        return { users };
    }),
    //登录功能
    login: (account, password) => {
        set((state) => {
            //这里应该请求后台代码进行验证，现在只是从localstorage中拿数据
            let foundUser = state.users.find(
                (item) => item.account === account && item.password === password
            );
            if (foundUser) {
                localStorage.setItem("xdclass_user_is_login", "true");
                localStorage.setItem("xdclass_user_current_user", foundUser.account);
                message.success("成功登录");
                return {
                    isLogin: true,
                    currentUser: foundUser.account,
                }
            } else {
                message.warning("账号或者密码错误");
            }
            return {};
        })
    },
    //推出登录功能
    logout: () => {
        set(()=>{
            localStorage.removeItem("xdclass_user_is_login");
            localStorage.removeItem("xdclass_user_current_user");
            return {
                isLogin:false,
                currentUser:"",
            }
        })
     }
}));