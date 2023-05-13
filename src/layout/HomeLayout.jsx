import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <p>his is nav</p>
            <Outlet />
        </div>
    );
};

export default HomeLayout;