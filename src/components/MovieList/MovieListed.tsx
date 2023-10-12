import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

import { Props } from '../../Interfaces/PropsMovie';
import { Link } from 'react-router-dom';



export const MovieListed = ({ movie }: Props) => {
    return (
        <div>
            <Card sx={{ maxWidth: 245, minHeight: 500, maxHeight: 500, p: 2, m: 2, boxShadow: "0px 0px 6px #000000", backgroundColor: "#808080" }}>
                <CardMedia
                    sx={{ height: 340 }}
                    image={movie.poster}
                    title={movie.title}
                />
                <CardContent sx={{ height: 100, width: 200 }}>
                    <Typography gutterBottom variant="h5" sx={{color: "#FFFFFF"}} component="div">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       Release Date: {movie.releaseDate}
                    </Typography>
                </CardContent>
                <CardActions sx={{ height: 20, width: 100 }}>
                <Button variant="contained">Detalles</Button>

                </CardActions>
            </Card>
        </div>
    )
}
