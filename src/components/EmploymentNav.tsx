import{useMemo} from"react";
interface EmploymentNavItemProps{
    item:{
        title:string,
        imgUrl:string,
        summary:string,
    }
}

function EmploymentNavItem(props:EmploymentNavItemProps){
    return (
        <a>
            <div className=" flex items-center justify-center cursor-pointer children:select-none">
                <img src={props.item.imgUrl} className="w-50px h-50px mr-7px"></img>
                <div>
                    <h3 className="h-20px color-#404040 text-14px font-400">
                        {props.item.title}
                    </h3>
                    <p className="text-12px color-#555555">{ props.item.summary}</p>
                </div>
            </div>
        </a>
    )
}


export default function EmploymentNav() {
    const [data, setData] = useState<any>(null);
    const formData = useMemo(() => {
        const fd = new FormData();
        fd.append("username", "abc123"); // 修正拼写：usename→username
        fd.append("avatar", "11");
        return fd;
    }, []); // 空依赖 = 组件一生只创建1次 FormData
    // 2. 用 useMemo 缓存 options，确保引用不变
    const requestOptions = useMemo(() => ({
        method: "post",
        body: formData, // formData 已缓存，所以 options 内容和引用都不变
    }), [formData]); // 依赖 formData（但 formData 不会变，所以 requestOptions 也不变）

    // 3. 用 useCallback 缓存 onSuccess 回调，确保引用不变
    const handleSuccess = useCallback((redata: any) => {
        setData(redata || []); // 兜底空数组，避免 null
    }, []); // 依赖为空，因为 setData 是 React 稳定的函数

    // 调用 useApi，此时依赖 [url, requestOptions, handleSuccess] 都不会变化
    const res = useApi(
        "/page_item/v1/list?type=HOME_CATEGORY_BOTTOM",
        requestOptions,
        handleSuccess
    );
    /* const res = useApi(
        "/page_item/v1/list?type=HOME_CATEGORY_BOTTOM",
        {
            method: "post",
            body: formData,
        },
        (redata: any) => { setData(redata); }
    ); */

    return (
        <div className="shadow-[0_2px_5px_0_#e5e5e5] h-70px grid grid-cols-5 my-20px rounded items-center">
            {data && data.map((item: any) => (<EmploymentNavItem item={item} key={item.id} />))}
        </div>
    )
}