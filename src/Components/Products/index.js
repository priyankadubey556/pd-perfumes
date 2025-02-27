import { useDispatch, useSelector } from 'react-redux'
import './_products.scss'
import { useEffect } from 'react';
import { getProducts } from '../../Redux/Products/productAction';
import { addCartItem } from '../../Redux/Cart/cartSlice';
import { Link } from 'react-router-dom';

const Products = () => {
    const productData = useSelector(state => state.productReducer.products);
    const cart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    const addToCart = (itemData) => {
        dispatch(addCartItem(itemData));
    }

    debugger;
    return (
        <div className='products-container'>
            {
                productData.map((product, key) => {
                    return (
                        <div className='mx-5 p-3 product-card'>
                            <Link
                                to='/productDetails'
                                state={product}
                            >
                                <div className='product-image-container'>
                                    <img src={require('../../assets/images/' + product.product_img)} />
                                </div>
                            </Link>
                            <div className='product-info'>
                                <h5>
                                    <Link
                                        to="/productDetails"
                                        state={product}
                                    >{product.product_name}
                                    </Link>
                                </h5>
                                <p className='product-price'> {product.price}</p>
                                <div className='product-rating'>
                                    <i className='fa fa-star' />
                                    <i className='fa fa-star' />
                                    <i className='fa fa-star' />
                                    <i className='fa fa-star' />
                                    <i className='fa fa-star' />

                                </div>
                            </div>
                            <div className='my-3' onClick={() => addToCart(product)}>
                                <div className='cart-button'>
                                    <div className='cart-icon-container'>
                                        <i className='fa fa-shopping-cart mx-4' />
                                    </div>
                                    <div className='cart-text-container mx-3'>
                                        <p>Add to cart</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Products;