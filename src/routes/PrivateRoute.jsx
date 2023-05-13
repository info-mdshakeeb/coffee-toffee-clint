import { Navigate, useLocation } from "react-router-dom";
import { useFirebaseInfo } from "../contex/UserContext";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useFirebaseInfo();
    const location = useLocation();
    console.log(user, loading);
    if (loading) {
        return <div className="  flex items-center h-screen w-40 mx-auto">
            <div className="">loading</div>
        </div>
    }
    if (!user && !loading) {
        return <Navigate to='/user/login' state={{ from: location }} replace />
    }
    return children


};

export default PrivateRoute;