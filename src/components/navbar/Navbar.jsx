import { Link, NavLink } from "react-router-dom";
import { useFirebaseInfo } from "../../contex/UserContext";

const Navbar = () => {
    const { user, logout } = useFirebaseInfo()

    const handelLogout = () => {
        logout()
            .then(re => console.log(re))
    }
    const menuLinks =
        <>
            <li><NavLink to={'/home'}>home</NavLink></li>
            <li><NavLink to={'/menu'}>menu</NavLink></li>

        </>
    return (
        <div className="bg-base-100 sticky top-0 z-40 shadow-md">
            <div className="navbar   mx-auto  max-w-7xl">
                <div className="navbar-start max-w-7xl ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuLinks}
                            <div className="dropdown dropdown-end">
                                {user?.uid ? <label tabIndex={0} className=" cursor-pointer">
                                    <div className=" ">
                                        <p>{user?.displayName}</p>
                                    </div>
                                </label> :
                                    <Link to={'/user/login'} className="btn btn-ghost btn-sm rounded-btn ">Login</Link>}
                                {user && <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li><a onClick={handelLogout}>Logout</a></li>
                                </ul>}
                            </div>
                        </ul>
                    </div>
                    <Link to={'/'} className=" normal-case text-2xl font-bold ">Coffee-toffee</Link>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {menuLinks}
                    </ul>
                    <div className="dropdown dropdown-end">
                        {user?.uid ? <label tabIndex={0} className=" cursor-pointer">
                            <div className=" ">
                                <p>{user?.displayName}</p>
                            </div>
                        </label> :
                            <Link to={'/user/login'} className="btn btn-ghost btn-sm rounded-btn ">Login</Link>}
                        {user && <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><a onClick={handelLogout}>Logout</a></li>
                        </ul>}
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Navbar;