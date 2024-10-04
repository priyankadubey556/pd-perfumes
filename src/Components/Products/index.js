import './_products.scss'

const Products = () => {
    const productData = [
        {
            pName: 'jackets',
            price: 45,
            img: 'pr.jpeg'
        },
        {
            pName: 'Denim',
            price: 45,
            img: 'pr.jpeg'
        },
        {
            pName: 'Dress',
            price: 45,
            img: 'pr.jpeg'
        },
        {
            pName: 'Boots',
            price: 45,
            img: 'pr.jpeg'
        },
        {
            pName: 'jackets',
            price: 45,
            img: 'pr.jpeg'
        },
        {
            pName: 'jackets',
            price: 45,
            img: 'pr.jpeg'
        },
    ]
    return (
        <div className='products-container'>
            {
                productData.map((product, key) => {
                    return (
                        <div className='mx-5 p-3 product-card'>
                            <div className='product-image-container'>
                                <img src={require('../../assets/images/' + product.img)} />
                            </div>
                            <div className='product-info'>
                                <h5><a href='#'>{product.pName}</a></h5>
                                <p className='product-price'> {product.price}</p>
                                <div className='product-rating'>
                                    <i className='fa fa-star' />
                                    <i className='fa fa-star' />
                                    <i className='fa fa-star' />
                                    <i className='fa fa-star' />
                                    <i className='fa fa-star' />

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