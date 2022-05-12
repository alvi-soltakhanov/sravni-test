import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = ({item}) => {
    return (
        <Card sx={{ maxWidth: 330, minHeight: 250, margin: 5}}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdnimg.rg.ru/img/content/225/07/61/TASS_34155312_d_850.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.blend_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.origin}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{item.notes}</Button>
      </CardActions>
    </Card>
    );
};

export default Cards;