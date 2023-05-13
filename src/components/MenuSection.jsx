import Card from "./Card";


const MenuSection = () => {
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
            description: 'A concentrated coffee beverage brewed by forcing hot water.',
            image: 'https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/l-intro-1645231221.jpg',
        },
        {
            id: 3,
            name: 'Latte',
            price: 4.49,
            description: 'A coffee drink made with espresso and steamed milk,',
            image: 'https://media.istockphoto.com/id/157528129/photo/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans.jpg?s=1024x1024&w=is&k=20&c=1p_M42LWjy9uGLp7y3EmX1JE_KXf6OewvwU_kHMO1Gg=',
        },
    ];
    return (
        <div className="md:px-12 px-6 pt-6 ">
            <h1 className="text-4xl text-center font-bold mb-10">Our best Coffees</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div className="" key={product?.id}>
                        <Card product={product} />
                    </div>
                ))}
            </div>
            <div className="text-center mt-6 mb-4">
                <button className="btn btn-primary btn-sm">See More</button>
            </div>
        </div>
    );
};

export default MenuSection;