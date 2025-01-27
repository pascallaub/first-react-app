function DetailCard(props) {
    return (
        <div className="detail-card border border-gray-200 p-4 rounded-lg shadow-md">
            <img src={props.products.thumbnail} alt={props.products.name} />
            <h2 className="font-black">Product: {props.products.name}</h2>
            <p className="font-bold">Price: {props.products.price} €</p>
            <p className="flex items-center font-semibold">
                Available: {props.products.available ? (<img src="src/assets/square-check.png" alt="Available" width={32} height={32}></img>) : (<img src="src/assets/package-x.png" alt="Not Available" width={32} height={32}></img>)}
            </p>
        </div>
    );
}

export default DetailCard;