import { useEffect, useState } from 'react';
import { Movies } from '../Interfaces/Movie';
import { listMovies } from '../config/Movies.Service';
import { MovieListed } from './MovieList/MovieListed';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';



export const MoviesList = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [showColors, setShowColors] = useState(false);

  
  useEffect(() => {
    listMovies()
      .then((movies) => {
        console.log(movies)
        setMovies(movies);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {movies.map((movie) => (
              <MovieListed movie={movie} key={movie.imdbId} />
            ))}

      </Grid>

    </div>
  )
}
