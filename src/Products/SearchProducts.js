import Typography from '@mui/material/Typography'; 
// import InputUnstyled from '@mui/base/InputUnstyled';
 
const SearchProducts = (props) => { 

    return(
        <Typography variant="p">Looking for: 
        <input className="searchInput" placeholder="start typing here" onChange={(e) => props.onSearching(e)}></input>
        </Typography>
    )
}

export default SearchProducts;