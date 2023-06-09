import one from "../assets/images/12.png";
import headerImg from "../assets/images/Screenshot 2023-05-13 at 12.50.18 PM.png";
import two from "../assets/images/a1.png";
import three from "../assets/images/a3.png";
const Header = () => {
    return (
        <div className="max-w-7xl mx-auto  shadow-xl  bg-white rounded-2xl">
            <div className="flex-col-reverse flex lg:flex-row items-center ">
                <div className="lg:w-1/2">
                    <div className="">
                        <p className="text-3xl px-20 pt-10 pb-2">Coffee time ...</p>
                        <h1 className="text-6xl md:text-7xl font-[900] lg:w-44 px-20 mt-3">HEALTH BENEFITS.</h1>
                        <div className="font-[700] text-xl flex flex-col gap-10 mt-10  ">
                            <p className="px-20 flex justify-between max-w-[500px] "> <span>Private Room </span>-- <span>2K</span></p>
                            <p className="px-20 flex justify-between max-w-[500px] "> <span>Event Space </span>-- <span> 20K</span></p>
                            <div className="bg-[#fdbb4c] py-7 rounded-r-full ">
                                <p className="px-20 flex justify-between max-w-[500px]  "> <span>Creative Studio </span>-- <span> 8K</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:mt-20 xl:mt-0">
                    <img className=" w-full object-scale-down rounded-2xl" src={headerImg} alt="" />
                </div>
            </div>
            <div className="hidden md:flex justify-around lg:max-w-5xl">
                <img src={one} alt="" className="h-44 object-cover" />
                <img src={two} alt="" className="h-44" />
                <img src={three} alt="" className="h-44" />
            </div>
            <div className=" h-64"></div>
        </div>
    );
};

export default Header;