import Header from "../../components/Header";
import MenuSection from "../../components/MenuSection";

const Home = () => {
    return (
        <div className="">
            <div className="bg-[#ebebeb] relative overflow-hidden">
                <div className="bg-[#fdbb4c] h-[500px] w-[500px] rounded-full hidden md:block absolute top-[300px] -left-20 z-0"></div>
                <div className=" z-10 relative">
                    <div className=" pt-3 px-3 ">
                        <Header />
                        <div className="max-w-7xl mx-auto -mt-64">
                            <MenuSection />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;