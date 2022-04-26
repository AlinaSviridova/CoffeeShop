import Typography from '@mui/material/Typography'; 
import { Link } from 'react-router-dom';
const CardItem = (props) => { 
     
    const {country, name, price, image, id } = props.productProps; 
    const innerpath = '/inner-coffee?page=' + id
    return (
        <li> 
            <Link to={innerpath}  > 
                <img src={image}  alt="beansLine" /> 
                <Typography variant="h5">{name}</Typography>
                <Typography variant="p">{country}</Typography>
                <Typography variant="p"><b>{price}</b></Typography>
            </Link>
        </li>
    )
}

export default CardItem;