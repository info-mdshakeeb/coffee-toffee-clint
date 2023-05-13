import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { getLimitedProducts } from "../api/api";
import { useFirebaseInfo } from "../contex/UserContext";
import Card from "./Card";


const MenuSection = () => {
    const { user, setSeeMore } = useFirebaseInfo()
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: () => getLimitedProducts(3),
    })

    return (
        <div className="md:px-12 px-6 pt-10 ">
            <h1 className="text-4xl text-center font-bold mb-10">Our best Coffees</h1>
            {isLoading ?
                <div className="h-[60vh] flex items-center justify-center">
                    <ScaleLoader color="#000000" />
                </div>
                :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div className="" key={product?.id}>
                            <Card product={product} />
                        </div>
                    ))}
                </div>}
            <div className="text-center mt-6 mb-4">
                {user ?
                    <Link to={'/menu'} onClick={() => setSeeMore(true)} className="btn btn-primary btn-sm">See More</Link> : <Link to={'/user/login'} onClick={() => setSeeMore(true)} className="btn btn-primary btn-sm">See More</Link>}
            </div>
        </div>
    );
};

export default MenuSection;