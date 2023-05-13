import Card from "../../components/Card";

const products = [
    {
        id: 1,
        name: 'Cappuccino',
        price: 3.99,
        description: 'A classic coffee drink with espresso, steamed milk,',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg',
    },
    {
        id: 2,
        name: 'Espresso',
        price: 2.99,
        description: 'A concentrated coffee beverage brewed by forcing hot water',
        image: 'https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/l-intro-1645231221.jpg',
    },
    {
        id: 3,
        name: 'Latte',
        price: 4.49,
        description: 'A coffee drink made with espresso and steamed milk, ',
        image: 'https://media.istockphoto.com/id/157528129/photo/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans.jpg?s=1024x1024&w=is&k=20&c=1p_M42LWjy9uGLp7y3EmX1JE_KXf6OewvwU_kHMO1Gg=',
    },
    {
        id: 4,
        name: 'Mocha',
        price: 4.99,
        description: 'A chocolate-flavored variant of a latte, usually made with espresso,',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/7/30/0/FN_coffee-cup-stock-getty_s6x4.jpg.rend.hgtvcom.616.411.suffix/1564517252380.jpeg',
    },
    {
        id: 5,
        name: 'Americano',
        price: 2.49,
        description: 'A coffee drink prepared by diluting espresso with hot water.',
        image: 'https://media.istockphoto.com/id/1177900338/photo/cup-of-espresso-with-coffee-beans.jpg?s=612x612&w=0&k=20&c=5cAWrCndkNTzBkcFKFqEn3eXvEwBT30uMRkSogaH-oY=',
    },
    {
        id: 6,
        name: 'Macchiato',
        price: 3.49,
        description: 'An espresso-based coffee drink with a small amount of milk',
        image: 'https://media.istockphoto.com/id/1303583671/photo/cup-glass-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=fAh3m6Hqxz-qeA45Tj2jGARhRiGFhgm80dLVthnvlD8=',
    },
];

const MenuPage = () => {
    return (

        <>
            <div className="bg-[#ebebeb] relative overflow-hidden">
                <div className="bg-[#fdbb4c] h-[500px] w-[500px] rounded-full hidden md:block absolute top-[800px] -right-40 z-0"></div>
                <div className=" z-10 relative">
                    <div className="pt-3 px-3 pb-8">
                        <div className="max-w-7xl mx-auto  shadow-sm  bg-white rounded-xl ">
                            <div className="p-8">
                                <h1 className="text-3xl font-bold mb-6">Menu</h1>
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                                    {products.map((product) => (
                                        <div className="" key={product?.id}>
                                            <Card product={product} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default MenuPage;
