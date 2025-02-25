import { useDispatch, useSelector } from 'react-redux';
import './_cat-nav.scss';
import { useEffect } from 'react';
import { getCategories } from '../../Redux/Category/actions';
import { Link } from 'react-router-dom';

const CatNav = () => {
    const categories = useSelector(state => state.categoryReducer.categories);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCategories());
    },[])

    return (
        <>
        <div className='cat-nav-container  container'>
            <ul>
                <li className='list-items'>
                    <Link to="/"> Home </Link>

                </li>
                {
                    categories.map((category, index)=>{
                        if(category.parent_category_id === null){
                            return (
                                <li className='list-items' key={index}><a href='#'>{category.category}</a></li>
                                )
                        }
                        
                    })
                }
            </ul>
        </div>
        </>
    )
}

export default CatNav;