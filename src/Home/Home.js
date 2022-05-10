import { Link } from "react-router-dom";
import CardList from "../Products/CardList"; 
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../App.sass';
import {pinkBackground, beansLineBlack, beansLine} from '../images/Images'; 

const Home = (props) => { 
    const {title, subtitle, button, banner, maintext } = props.homepage;  
    const filterBest = props.products.filter( bestItem => bestItem.best ) 
    const filtered = filterBest.slice(0, 3)


    return (
        <> 
            <Container maxWidth={false} sx={{ p:0, backgroundImage: `url(${banner})` }} className="home-cover">
                <Box sx={{ color: '#fff', height: 'auto', paddingTop: '22vh'}}>
                    <Typography variant="h2">{title}</Typography>  
                    <img src={beansLine}  alt="beansLine" /> 
                    <Typography variant="h4" dangerouslySetInnerHTML={{__html: `${subtitle}`}}></Typography> 
                    <Link to="/our-pleasure">{button}</Link>
                </Box> 
            </Container>
            <Container maxWidth='md' className="text-wrapper">
                <Typography variant="h4">{maintext.title}</Typography>
                <img src={beansLineBlack}  alt="beansLine" /> 
                <Typography dangerouslySetInnerHTML={{__html: `${maintext.text}`}}></Typography>
            </Container>
            <Container maxWidth={false} sx={{ p:0, backgroundImage: `url(${pinkBackground})` }} className="home-cover">
                <Box sx={{ height: 'auto', paddingTop: '12vh', paddingBottom: '12vh' }}>
                    <Typography variant="h2">Our best</Typography> 
                    <CardList products={filtered} />
                </Box> 
            </Container> 

            
        </> 
    )
}

export default Home;
 
 