
import CardList from "../Products/CardList"; 
import FilterProducts from "../Products/FilterProducts";
import SearchProducts from "../Products/SearchProducts"; 
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider'; 
import '../App.sass'; 
import { beansLineBlack } from '../images/Images'; 


const OurCoffee = (props) => {

const {title, banner, maintext } = props.ourcoffee; 

    return (
 
        <> 
            <Container maxWidth={false} sx={{ p:0, backgroundImage: `url(${banner})` }} className="home-cover">
                <Box sx={{ color: '#fff', height: 'auto', paddingTop: '22vh', }}>
                    <Typography variant="h2">{title}</Typography>   
                </Box> 
            </Container>

            <Container maxWidth='md' className="text-wrapper">
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6}>
                        <img src={maintext.image} className="Mainlogo" alt="logo" /> 
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4">{maintext.title}</Typography>
                        <img src={beansLineBlack}  alt="beansLine" /> 
                        <Typography dangerouslySetInnerHTML={{__html: `${maintext.text}`}}></Typography>
                    </Grid>
                </Grid>
            </Container>
            <Divider variant="middle" sx={{ borderColor:'#000', maxWidth:'240px', margin:'0 auto'  }} />
            <Container maxWidth='md' sx={{ display:'flex', justifyContent:'space-between' }}>
                <SearchProducts onSearching={props.onSearching}/>
                <FilterProducts onFiltering={props.onFiltering} filter={props.filter}/> 
            </Container> 
            <Container maxWidth='md' className="text-wrapper">
                <CardList products={props.products} />
            </Container>

        </> 
    )
}

export default OurCoffee;