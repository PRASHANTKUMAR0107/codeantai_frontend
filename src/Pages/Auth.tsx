import AuthLeft from "../Components/Auth/LeftLogin.tsx"
import AuthRight from "../Components/Auth/RightLogin.tsx";
const Auth = () => {
    return (
        <div className={`flex gap-2 w-full justify-center`}>
            <AuthLeft />
            <AuthRight />
        </div>
    );
};

export default Auth;