import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { useRef } from "react";
interface SwiperItemProps{
    imgSrc:string,
}
function SwiperItem(props:SwiperItemProps){
    return (<a>
        <img className="rounded" src={props.imgSrc}/>
    </a>)
}

export default function Swiper(){ 
    const carouselRef=useRef<any>(null);
    const prev=()=>{
        carouselRef.current.prev();
    }
    const next=()=>{
        carouselRef.current.next();
    }
    return (
        <div className="relative">
            {/* <LeftOutlined className="absolute z-2 top-50% left-5px cursor-pointer" onClick={prev}></LeftOutlined> */}
            <Carousel className="h-400px w-840px" arrows={true} ref={carouselRef} autoplay>
                <SwiperItem imgSrc="https://file.xdclass.net/video/2023/banner/618/HD.png"></SwiperItem>
                <SwiperItem imgSrc="https://file.xdclass.net/video/2023/banner/618/JD.png"></SwiperItem>
                <SwiperItem imgSrc="https://file.xdclass.net/video/2022/22-11.11/aly.jpeg"></SwiperItem>
            </Carousel>
            {/* <RightOutlined className="absolute z-2 top-50% right-5px cursor-pointer" onClick={next}></RightOutlined> */}
        </div>
    )
}