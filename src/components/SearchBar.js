import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

export default function Searchbar({onChange}){

    return (
    
        <TextField id="outlined-basic" label="search a movie" variant="outlined"   InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }} onChange={onChange} />
    
      
    )
}