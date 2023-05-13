import Header from "../../components/Header";

const Home = () => {
    return (
        <div className="bg-[#ebebeb] relative overflow-hidden">
            <div className="bg-[#fdbb4c] h-[500px] w-[500px] rounded-full hidden md:block absolute top-[400px] -left-20 z-0"></div>
            <div className=" z-10 relative">
                <div className="lg:py-10">
                    <Header />
                </div>


            </div>
        </div>
    );
};

export default Home;