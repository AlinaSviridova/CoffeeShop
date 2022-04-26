import CardList from "../Products/CardList"; 
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 
import Grid from '@mui/material/Grid';
import '../App.sass'; 
import { beansLineBlack } from '../images/Images'; 

const OurPleasure = (props) => {

const {title, banner, maintext } = props.foryourpleasure;

    return (
        <> 
            <Container maxWidth={false} sx={{ p:0, backgroundImage: `url(${banner})` }} className="home-cover"> 
                <Box sx={{ color: '#fff', height: 'auto', paddingTop: '22vh', }}>
                    <Typography variant="h2">{title}</Typography>   
                </Box> 
            </Container>

            <Container maxWidth='md' className="text-wrapper">
                <Grid container spacing={2}>
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

            <Container maxWidth='md' className="text-wrapper">
                <CardList products={props.products} />
            </Container>
        </> 
    )
}

export default OurPleasure;