import {useState} from "react";
import { Modal,Form,Input, message,Button } from "antd";
import {useModal} from "../hooks/modal"
import FormItem from "antd/es/form/FormItem";
import { useUser } from "../hooks/user";


export default function Register(){
    const [account,setAccount] =useState("");
    const [password,setPassword] =useState("");
    const [repassword,setRepassword] =useState("");
    //一个小错误，要设置初始值要不然就会推断为undefined类型。
    const {regVisible,switchRegVisible,switchLoginVisible}=useModal();
    const {register,users}=useUser();
    const handleFinish=()=>{
        if(password!==repassword){
            message.warning("两次密码不一致");
            return
        }else{
            if(users.some((user)=>user.account===account)){
                message.warning("该账号已经存在")
            }else{}
            register(account,password);
            switchRegVisible();
            message.warning("注册成功");

        }

    }
    return <>
        <Modal  
            width="400px"
            open={regVisible}
            footer={null}
            className="relative"
            onCancel={()=>switchRegVisible()}
        >
            <h1 className="text-center c-#404040 text-22px font-normal my-8">
                账号注册
            </h1>
            <div className="pb-44px flex items-center justify-center w-full">
                <Form
                    name="basic"
                    style={{width:"300px"}}
                    initialValues={{remeber:true}}
                    autoComplete="off"
                    onFinish={handleFinish}
                >
                    {/* 账号 */}
                    <FormItem name="account">
                        <Input 
                            placeholder="请输入用户名"
                            value={account}
                            onChange={(e)=>setAccount(e.target.value)}
                        />
                    </FormItem>
                     {/* 密码 */}
                    <FormItem name="password">
                        <Input.Password 
                            placeholder="请输入密码"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </FormItem>
                     {/* 在此密码 */}
                    <FormItem name="repassword">
                        <Input.Password 
                            placeholder="请在此输入密码"
                            value={repassword}
                            onChange={(e)=>setRepassword(e.target.value)}
                        />
                    </FormItem>
                    <FormItem>
                        <Button 
                            type="primary"
                            htmlType="submit"
                            className="flex w-full items-center justify-center bg-#444b52 text-white rounded-full"
                        >
                            <span>立即注册</span>
                        </Button>
                    </FormItem>
                </Form>
            </div>
            <div className="absolute w-full h-44px bottom-0 left-0 bg-[rgba(77,85,99.1)] flex items-center justify-between text-center flex-1">
                <span>
                    已有帐号？
                </span>
                <span onClick={()=>{
                    switchRegVisible();
                    switchLoginVisible();
                }} className="text-blue cursor-pointer">
                    立即登录
                </span>
            </div>
        </Modal>
    </>
}