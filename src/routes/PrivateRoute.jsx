import { Navigate, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { useFirebaseInfo } from "../contex/UserContext";


const PrivateRoute = ({ children }) => {
    const { user, loading, } = useFirebaseInfo();
    const location = useLocation();
    console.log(user, loading);
    if (loading) {
        return <div className="h-[60vh] flex items-center justify-center">
            <ScaleLoader color="#000000" />
        </div>
    }
    if (!user && !loading) {
        return <Navigate to='/user/login' state={{ from: location }} replace />
    }
    return children
};

export default PrivateRoute;