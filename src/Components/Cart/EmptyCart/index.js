import { Link } from "react-router-dom";
import "./_emptyCart.scss"

const EmptyCart = () => {

    return (
        <div className="p=4 ec-main-div">
            <span className="my-5 ec-text">The cart is empty</span>
            <hr />
            <Link to="/">
                <div className="btn btn-warning my-3">
                    <span style={{ fontWeight: 500 }}> Continue Shopping</span>

                </div>
            </Link>
        </div>
    )

}

export default EmptyCart;