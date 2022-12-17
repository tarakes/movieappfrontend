import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import "../css/MovieFrame.css";
export default function MovieFrame({moviename,rating,imagelink,onClick}){
 
    return (
        <Card sx={{ maxWidth: 345 }} onClick={onClick} id="movieframe">
          <CardActionArea>
          <Chip label={rating} variant="outlined" style={{transform:"translateY(35px)", backgroundColor:"white"}}/>
            <CardMedia
              component="img"
              height="140"
              image={imagelink}
              alt="Movie Picture"
            />
           
            <CardContent>
              <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
               {moviename}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}
