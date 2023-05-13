export const getLimitedProducts = async (limit) => {
    const response = await fetch(`https://coffee-toffee-server.vercel.app/api/v1/products?limit=${limit}`);
    const data = await response.json();
    return data.data;
}
