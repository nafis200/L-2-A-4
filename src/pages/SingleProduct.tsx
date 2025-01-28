import { useParams } from "react-router-dom";



const SingleProduct = () => {
    const {id} = useParams()

    return (
        <div>
            <h1 className="text-red-500">{id}</h1>
        </div>
    );
};

export default SingleProduct;