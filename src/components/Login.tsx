import {Modal ,Form,Input ,Button} from"antd";


export default function Login(){
    const {login} =useUser();

    const {loginVisible,switchLoginVisible,switchRegVisible}=useModal();
    const [account,setAccount] =useState("");
    const [password,setPassword]= useState("");
    function handleFinish(){
        login(account,password);
        switchLoginVisible();
    }
    return <>
    <Modal
        width="400px"
        open={loginVisible}
        footer={null}
        onCancel={switchLoginVisible}
        className="relative"
    >
        <h1 className="text-center c-#404040 text-22px font-normal my-8">
            账号登录
        </h1>
        <div className="pb-44px flex items-center justify-center w-full">
            <Form
                name="login"
                style={{width:"300px;"}}
                initialValues={{remember:true}}
                autoComplete="off"
                onFinish={handleFinish}
            >
                <Form.Item name="account">
                    <Input 
                        placeholder="请输入账号"
                        value={account}
                        onChange={(e)=>setAccount(e.target.value)}
                    />
                </Form.Item>
                <Form.Item name="password">
                    <Input.Password
                        placeholder="请输入密码"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="flex w-full items-center justify-center bg-#444b52 text-white rounded-full"
                    >
                        <span>立即登录</span>
                    </Button>
                </Form.Item>
            </Form>
        </div>
        <div className="absolute w-full h-44px bottom-0 left-0 bg-[rgba(77,85,93,.1)] flex items-center justify-center">
            <span>还没账号？</span>
            <span
                className="text-blue-400 cursor-pointer"
                onClick={()=>{
                    switchLoginVisible();
                    switchRegVisible();
                }}
            >立即注册</span>
        </div>
    </Modal>
    </>
}