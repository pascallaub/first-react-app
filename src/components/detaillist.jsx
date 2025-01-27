import DetailCard from "./detailcard";

function DetailList() {
    const products = [
        { id: 1, thumbnail: "src/assets/nike.png", name: "Nike Air Max", price: 120, available: true },
        { id: 2, thumbnail: "src/assets/adidas.png", name: "Adidas UltraBoost", price: 180, available: false },
        { id: 3, thumbnail: "src/assets/puma.png", name: "Puma RS-X", price: 110, available: true },
        { id: 4, thumbnail: "src/assets/nb.png", name: "New Balance 574", price: 100, available: true },
    ];
    return (
        <div className="grid grid-cols-4 gap-4 p-2">
            {products.map((product) => (
                <DetailCard key={product.id} products={product} />
            ))}
        </div>
    );
}

export default DetailList;