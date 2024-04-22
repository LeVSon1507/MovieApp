import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import MovieDetail from '../../MovieDetail/MovieDetail';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const MovieBannerDetail = ({ movie, isOpen, setIsOpen }) => {
   const theme = useTheme();

   return (
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
         <DialogTitle>{movie?.original_name}</DialogTitle>
         <DialogContent>
            {
               <>
                  <Card sx={{ display: 'flex' }}>
                     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                           <Typography component='div' variant='h5'>
                              {movie?.original_name}
                           </Typography>
                           <Typography variant='subtitle1' color='text.secondary' component='div'>
                              {movie?.overview}
                           </Typography>
                        </CardContent>
                     </Box>
                     <Box sx={{ width: '100%' }}>
                        <MovieDetail movieData={movie} isShowMovieDetail isBannerMovieDetail />
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                           <IconButton aria-label='previous'>
                              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                           </IconButton>
                           <IconButton aria-label='play/pause'>
                              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                           </IconButton>
                           <IconButton aria-label='next'>
                              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                           </IconButton>
                        </Box>
                     </Box>
                  </Card>
               </>
            }
         </DialogContent>
      </Dialog>
   );
};

export default MovieBannerDetail;
