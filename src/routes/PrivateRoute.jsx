import { Navigate, useLocation } from "react-router-dom";
import { useFirebaseInfo } from "../contex/UserContext";


const PrivateRoute = ({ children }) => {
    const { user, loading, } = useFirebaseInfo();
    const location = useLocation();
    console.log(user, loading);
    if (loading) {
        return <div className="h-screen w-full bg-white flex items-center justify-center">
            <p>loading ...</p>
        </div>
    }
    if (!user && !loading) {
        return <Navigate to='/user/login' state={{ from: location }} replace />
    }
    return children
};

export default PrivateRoute;