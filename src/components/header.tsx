import { Children } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Input } from "antd";
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
    //tab像的数据
    const list=[
        {
        title:"首页",
        href:"#"
        },
        {
        title:"课程中心",
        href:"#"
        },
        {
        title:"超级会员",
        href:"#",
        Children:(
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
        title:"工具",
        href:"#"
        },
        {
        title:"自学路线",
        href:"#",
        Children:(
            <>
                <span>自学路线</span>
                <DownOutlined></DownOutlined>
            </>
        )
        },
        {
        title:"一对一辅导",
        href:"#",
        Children:(
            <>
                <span>一对一辅导</span>
                <DownOutlined></DownOutlined>
            </>
        )
        },
        {
        title:"",
        href:"#",
        Children:(
            <>
                <Input.Search className="w-220px" placeholder="请输入搜索内容"></Input.Search>
            </>
        )
        },
        {
        title:"兑换码",
        href:"#"
        },
        {
        title:"云服务器",
        href:"#"
        },
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
        <div className="flex items-center justify-center gap-4 children:cursor-pointer">
            <span>注册</span>
            <span className="bg-#4d555d c-#fff leading-26px w-60px p-2px text-center">登录</span>
        </div>
    </div>
} 