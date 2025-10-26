import React from "react";
// import { Button } from "antd";
import Header from "../components/header";
export function Index(){
    return (
        <>
            <div className="w-full o-hidden">
                <img className="w-100% h-full" src="https://file.xdclass.net/video/2025/banner/10.1/AI.gif" loading="lazy" />
            </div>
            <div className="shadow mb-10px">
                <div className="w-1200px mx-auto">
                    <Header> </Header>
                </div>
            </div>
        </>
    );
}