//状态管理插件
import {create} from "zustand"
//设定一个state
interface ModalState{
    //注册的接口
    regVisible:boolean;
    switchRegVisible:()=>void;
    //登录的接口
    loginVisible:boolean;
    switchLoginVisible:()=>void;

}
//修改regVisible的值。
export const useModal=create<ModalState>((set)=>({
    //实现判断注册接口，
    regVisible:false,
    //实现注册转换接口
    switchRegVisible:()=>set((state)=>({regVisible:!state.regVisible}),false),
    //实现判断登录接口，
    loginVisible:false,
    //实现登录页面是否出现状态的接口。
    switchLoginVisible:()=>set((state)=>({loginVisible:!state.loginVisible}),false)
}));