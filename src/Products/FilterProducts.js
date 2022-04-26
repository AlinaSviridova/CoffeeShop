import Typography from '@mui/material/Typography'; 
// import InputUnstyled from '@mui/base/InputUnstyled';
 
const FilterProducts = (props) => { 

    
    const buttonsData = [
        {name: 'Brasil'},
        {name: 'Kenya'},
        {name: 'Columbia'}
    ]

    const buttons = buttonsData.map(({name}) =>{
 
        const active = props.filter.includes(name);
        const clazz = active ? 'btn-active' : 'btn-passive';
          
        return(
            <button
            type="button"
            className={`searchInput ${clazz}`}
            key={name} 
            onClick={() => props.onFiltering(name)}>
            {name}
            </button>
        )
    })


    return(
        <Typography variant="p">Filter: 
            {buttons}
        </Typography>
    )
}

export default FilterProducts;