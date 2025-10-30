import { Children } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Input,Dropdown ,message,Space } from "antd";
import Register from "./Register";
import Login  from "./Login";
//tab每一项的接口定义。
interface HeaderItemProps{
    href:string;
    title?:string;
    children?:React.ReactNode;
}
//高级组件（组件为参数，返回组件）
function HeaderItem(props:HeaderItemProps){
    return <a className="c-#4f555d hover:c-#F38E48" href={props.href}>
        {props.children??props.title}
    </a>
}

// 头部导航组件
export default function Header(){
    const {logout,isLogin,currentUser} =useUser();
    //开关
    const {switchRegVisible,switchLoginVisible}=useModal();
    //tab像的数据
    const list = [
        {
            title: "首页",
            href: "#"
        },
        {
            title: "课程中心",
            href: "#"
        },
        {
            title: "超级会员",
            href: "#",
            Children: (
                <div className="flex items-center justify-center">
                    <img
                        src="https://front.cdn.xdclass.net/images/vip_icon.webp"
                        className="w-22px h22px"
                    ></img>
                    <span>超级会员</span>
                </div>
            )
        },
        {
            title: "工具",
            href: "#"
        },
        {
            title: "自学路线",
            href: "#",
            Children: (
                <>
                    <span>自学路线</span>
                    <DownOutlined></DownOutlined>
                </>
            )
        },
        {
            title: "一对一辅导",
            href: "#",
            Children: (
                <>
                    <span>一对一辅导</span>
                    <DownOutlined></DownOutlined>
                </>
            )
        },
        {
            title: "",
            href: "#",
            Children: (
                <>
                    <Input.Search className="w-220px" placeholder="请输入搜索内容"></Input.Search>
                </>
            )
        },
        {
            title: "兑换码",
            href: "#"
        },
        {
            title: "云服务器",
            href: "#"
        },
    ]
    const items=[
        {
            key:"1",
            label:(
                <div
                    onClick={()=>{
                        message.success("退出成功");
                        logout();
                    }}
                    >
                        退出登录
                </div>
            )
        }
    ]

    // return <div>header</div>
    return <div className="flex items-center gap-2">
        <img  src="https://front.cdn.xdclass.net/images/logo.webp"
        className="w-138px h-64px"></img>
        <div className="flex items-center justify-between flex-[1]">
            {
                list.map((item,index)=>{
                    return <HeaderItem key={index} href={item.href} title={item.title} >
                        {item?.Children}
                    </HeaderItem>
                })
            }
        </div>
        {isLogin?(
            <Dropdown menu ={{items}} placement="bottomLeft">
                <Space>欢迎您，{currentUser||"登录者"}</Space>
            </Dropdown>
        ):(
        <div className="flex items-center justify-center gap-4 children:cursor-pointer">
            <span onClick={switchLoginVisible}>登录</span>
            <span onClick={switchRegVisible} className="bg-#4d555d c-#fff leading-26px w-60px p-2px text-center">注册</span>
        </div>
        )}
        <Register/>
        <Login/>
    </div>
} 