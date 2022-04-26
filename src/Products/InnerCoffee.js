import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider'; 
import { beansLineBlack } from '../images/Images'; 


const InnerCoffee = (props) => { 

    const { banner } = props.ourcoffee;
    const currentLink = document.location.search;
    const currentParam = new  URLSearchParams(currentLink);
    const currentId = currentParam.get("page"); 
    const curItem = props.products.filter(item => currentId.includes(item.id)); 
    const currentItem = curItem[0]

    return(
        <>
            <Container maxWidth={false} sx={{ p:0, backgroundImage: `url(${banner})` }} className="home-cover">
                <Box sx={{ color: '#fff', height: 'auto', paddingTop: '22vh', }}>
                    <Typography variant="h2">{currentItem.name}</Typography>   
                </Box> 
            </Container>
            <Container maxWidth='md' className="text-wrapper">
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <img src={currentItem.image} className="Mainlogo" alt="logo" /> 
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4">About it</Typography>
                    <img src={beansLineBlack}  alt="beansLine" /> 
                    
                    <Box className="textCont">
                        <Box>
                            <Typography variant="span"><b>Country: </b></Typography>
                            <Typography variant="span">{currentItem.country}</Typography> 
                        </Box>
                        <Box>
                            <Typography variant="span"><b>Description: </b></Typography>
                            <Typography variant="span" dangerouslySetInnerHTML={{__html: `${currentItem.description}`}}></Typography>
                        </Box>
                        <Box>
                            <Typography variant="span"><b>Price: </b></Typography>
                            <Typography variant="span">{currentItem.price}$</Typography> 
                        </Box>
                    </Box> 
                </Grid>
            </Grid>
            </Container>
        </>
    )
}

export default InnerCoffee;