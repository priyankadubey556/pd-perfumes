import { useDispatch, useSelector } from 'react-redux';
import './_side-nav.scss';
import accordionSlice from '../../Redux/Accordion/accordionSlice';
import { useEffect, useState } from 'react';
import { getCategories } from '../../Redux/Category/actions';
import { filterByPrice, filterProducts } from '../../Redux/Products/productSlice';
const SideNav = () => {

    const accoordionData = useSelector(state => state.categoryReducer.categories);
    const fetchedProductData = useSelector(state => state.productReducer)
    const [products, setProducts] = useState();
    const [minPriceLimit, setMinPriceLimit] = useState(10);
    const [maxPriceLimit, setMaxPriceLimit] = useState(130);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCategories());
    }, [])

    useEffect(() => {
        setProducts(fetchedProductData.products);
    }, [fetchedProductData.status])

    const filterData = (selectedCategory) => {
        dispatch(filterProducts);
    }

    const setPriceLimit = (e, stateFlag)=>{
        if(stateFlag==="max"){
            setMaxPriceLimit(e.target.value);
        }
        else if(stateFlag==="min"){
            setMinPriceLimit(e.target.value);
        }

    }

    const applyPriceFilter = () =>{
        const payload = {products,minPriceLimit,maxPriceLimit};
        dispatch(filterByPrice(payload))
    }

    return (
        <div className='side-nav'>
            <div className='section-title'>
                <h3>Category</h3>
            </div>
            <div className='accordion my-3 q'>
                {
                    accoordionData.map((data, key) => {
                        if (data.parent_category_id === null) {
                            return (
                                <div className='accordion-item individual-category'>
                                    <div className='accordion-header'>
                                        <button className='accordion-button' data-bs-target={"#collapse" + key} data-bs-toggle='collapse'>
                                            <div className='category-title'>
                                                <a href='#'>{data.category}</a>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='accordion-collapse collapse show' id={"collapse" + key}>
                                        <div className='accordion-body'>
                                            <ul>
                                                {
                                                    accoordionData.map((subCategory) => {
                                                        if (data.id === subCategory.parent_category_id) {
                                                            return (
                                                                <li className='sub-items'>
                                                                    <a href="#" onClick={() => filterData}>{subCategory.category}
                                                                    </a>
                                                                </li>
                                                            )
                                                        }
                                                    })
                                                }

                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>

            <div className='price-filter-container'>
                <div className='section-title'>
                    <h3> Filter By Price</h3>
                </div>
                <div>
                    <label> Min : {minPriceLimit}</label>
                    <input
                        className='form-range'
                        type="range"
                        min={10}
                        max={130}
                        step={10} 
                        onChange={(e)=>setPriceLimit(e,"min")}
                        />
                </div>
                <div>
                    <label>Max : {maxPriceLimit}</label>
                    <input
                        className='form-range'
                        type="range"
                        min={10}
                        max={130}
                        step={10} 
                        onChange={(e)=>setPriceLimit(e,"max")}
                        />
                </div>
                <button 
                className='btn btn-outline-dark my-3'
                onClick={applyPriceFilter}
                > Apply Filter </button>
            </div>
        </div>
    )
}

export default SideNav