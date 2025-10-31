import { CaretRightOutlined } from "@ant-design/icons"
import React from "react"
function ClassifyItem(props:{children:React.ReactNode}){
    return <li className="relative w-full cursor-pointer text-16px leading-54px pl-19px hover:bg-#3b4248 hover:c-#fff">
        <span>{props.children}</span>
        <div className="absolute top-0 right-6 text-#a0a0a0 text-13px mr-3px">
            <CaretRightOutlined/>
        </div>
    </li>
}

export default function Classify(){ 
    const list=[
        "后端 | 架构",
        "前端 | 全栈",
        "测试 | 测开",
        "运维 | 管理",
        "架构 | 管理",
        "算法 | 人工智能",
        "大数据",
    ]
    return <>
        <div className="rounded shadow-[0_0_10px _0_#d7d7d7] h-400px w-160px">
            <ul className="py-10px">
                
                {list.map((item,index)=>{
                    return <ClassifyItem key={index}>{item}</ClassifyItem>
                })}
            </ul>
        </div>
    </>
}