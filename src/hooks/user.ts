//导入zustand状态组件。
import { create } from "zustand";
//设置接口。规定要使用的参数的类型，
interface UserState{
    users:{
        account:string,
        password:string,
    }[],
    register:(account:string,password:string)=>void;
}
//使用创建状态类型组件使用
export const useUser=create<UserState>((set)=>({
    users:localStorage.getItem("xdclass_react_users")?JSON.parse(localStorage.getItem("xdclass_react_users")||"[]"):[],
    register:(account,password)=>set((state)=>{
            const users=[...state.users];
            users.push({account,password});
            localStorage.setItem("xdclass_react_users",JSON.stringify(users));
            localStorage.setItem("xdclass_user_is_login","true");
            return {users};
        })
}));