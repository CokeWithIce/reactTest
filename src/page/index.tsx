import React from "react";
// import { Button } from "antd";
import Header from "../components/Header";
import Classify from "../components/Classify";
import Swiper from "../components/Swiper";
import UserProfileOrUnlogin from "../components/UserProfileOrUnlogin";
import EmploymentNav from "../components/EmploymentNav";
export function Index(){
    return (
        <>
        {/* 头部banner部分 */}
            <div className="w-full o-hidden">
                <img className="w-100% h-full" src="https://file.xdclass.net/video/2025/banner/10.1/AI.gif" loading="lazy" />
            </div>
            {/* 都不导航栏整体头部部分 */}
            <div className="shadow mb-10px">
                <div className="w-1200px mx-auto">
                    <Header></Header>
                </div>
            </div>
            {/* 主要内容部分 */}
            <div className="w-1200px mx-auto my">
                <div className="flex items-center justify-between">
                    {/* 分类导航部分 */}
                    <Classify/>
                    {/* 轮播图部分 */}
                    <Swiper/>
                    {/* 新人福利 */}
                    <UserProfileOrUnlogin/>
                </div>
                <EmploymentNav/>
            </div>
        </> 
    );
}