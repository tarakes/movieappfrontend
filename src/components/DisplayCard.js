import "../css/DisplayCard.css";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

export default function DisplayCard({ element }) {
    if (element)
        return (
            <Card sx={{ display: 'flex',width:"30%",scale:"2" }} id="displaycard">
                  <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={element.image}
        alt="Movie poster"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto'}}>
          <Typography component="div" variant="h5">
          {element.title}
          </Typography>
    
         <Typography component="div" variant="p" sx={{fontSize:"50%"}}>
         {element.description}
      <br />   <h3>Director</h3>
          {element.director.map((el)=>{
            return (
                <Typography component="div" variant="p" sx={{fontSize:"10px"}}>
                {el+","}
                 </Typography>
            );
          })}
          <br /> <h3>Year </h3>
          <Typography component="div" variant="p" sx={{fontSize:"10px"}}>
                {element.year}
                 </Typography>
                 <br />
               
          </Typography>
        </CardContent>
        
      </Box>
    
    </Card>
        );
    else
        return "Loading";
}