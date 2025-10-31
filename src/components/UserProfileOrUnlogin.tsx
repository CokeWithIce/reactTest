
function UserProfile(){
    const {currentUser,logout}=useUser();
    return (
        <div className="flex flex-col items-center justify-center h-full">
            欢迎你<span className="text-orange font-bold">{currentUser}</span>
            <button className="text-center text-white bg-#ff602a cursor-pointer rounded-71px w-130px h-24px" onClick={logout}>
                退出登录
            </button>
        </div>
    )
}
function Unlogin(){
    const {switchLoginVisible} =useModal();
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <img className="cursor-pointer mg-1 mt--10 w-140px h-176px" src="https://front.cdn.xdclass.net/images/new.webp"/>
            <button onClick={switchLoginVisible} className="text-center text-white bg-#ff602a cursor-pointer rounded-71px w-130px h-24px">
                登录/注册
            </button>
        </div>
    )
}
export default function UserProfileOrUnlogin(){
    const {isLogin} =useUser();
    return (
        <div className="w-180px h-400px rounded shadow-[0_0_10px_0_#d7d7d7]">
            {isLogin? <UserProfile/>:<Unlogin/>}
        </div>
    )
}