//状态管理插件
import {create} from "zustand"
//设定一个state
interface ModalState{
    regVisible:boolean;
    switchRegVisible:()=>void;
}
//修改regVisible的值。
export const useModal=create<ModalState>((set)=>({
    regVisible:false,
    switchRegVisible:()=>set((state)=>({regVisible:!state.regVisible}),false)
}));