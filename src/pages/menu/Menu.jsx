import { useQuery } from '@tanstack/react-query';
import { ScaleLoader } from "react-spinners";
import { getLimitedProducts } from "../../api/api.jsx";
import Card from "../../components/Card";


const MenuPage = () => {
    const { data: products = [], isLoading, isFetching } = useQuery({
        queryKey: ['product'],
        queryFn: () => getLimitedProducts(6),
    })

    return (
        <>
            <div className="bg-[#ebebeb] relative overflow-hidden">
                <div className="bg-[#fdbb4c] h-[500px] w-[500px] rounded-full hidden md:block absolute top-[800px] -right-40 z-0"></div>
                <div className=" z-10 relative">
                    <div className="pt-3 px-3 pb-8">
                        <div className="max-w-7xl mx-auto  shadow-sm  bg-white rounded-xl ">
                            <div className="p-8">
                                <h1 className="text-3xl font-bold mb-6">Menu</h1>
                                {isLoading || isFetching ?
                                    <div className="h-[70vh] flex items-center justify-center">
                                        <ScaleLoader color="#000000" />
                                    </div>
                                    : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {products.map((product) => (
                                            <div className="" key={product?.id}>
                                                <Card product={product} />
                                            </div>
                                        ))}
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuPage;
