import CardItem from './CardItem'; 
import './Products.sass';

const CardList = ({products}) => {

    // const products = ourInerProducts.ourProducts
  const elements = products.map (
    item => {

        // const {id, ...productProps} = item
        return(
            <CardItem key={item.id} productProps={item} />    
        ) 
    }
    
  )


    return(
        <ul className="productsWrapper">
            {elements}
        </ul>
    )
}

export default CardList;