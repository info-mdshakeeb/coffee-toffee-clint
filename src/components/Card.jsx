

const Card = ({ product }) => {
    return (
        <div className="bg-white shadow-lg pb-2 rounded-lg">
            <img src={product?.image} alt={product?.name} className="mb-4 object-cover h-56 w-full rounded-md" />
            <div className="px-2">
                <h2 className="text-lg font-bold mb-2">{product?.name}</h2>
                <p className="text-gray-700 mb-2">${product?.price?.toFixed(2)}</p>
                <p className="text-gray-500">{product?.description}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ">
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default Card;