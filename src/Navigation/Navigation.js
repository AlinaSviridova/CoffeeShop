import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'; 

import logo from '../logo.svg'; 
import blacklogo from '../images/beans.svg';
import './Navigation.sass';


const Navigation = () => {
    return (
    <>
          <Container >  
            <List sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start', 
                p: 2,
                m: 1
                }}>
                <ListItem sx={{
                    width: 'auto', }}>
                    <img src={logo} className="Mainlogo top" alt="logo" />
                    <img src={blacklogo} className="Mainlogo bottom" alt="logo" />
                    <Link to="/">Coffee house</Link>
                </ListItem>
                <ListItem sx={{
                    width: 'auto'}}> 
                    <Link to="/coffee-shop">Our coffee</Link>
                </ListItem>
                <ListItem sx={{
                    width: 'auto'}}> 
                    <Link to="/our-pleasure">Our pleasure</Link>
                </ListItem>
            </List>
          </Container> 
    </>
    )
 
    
}

export default Navigation;