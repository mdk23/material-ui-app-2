import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, Typography } from '@mui/material'
import React from 'react'

function Post({title,imageURL}) {
  return (
    <Box sx={{margin: 5}}>
        <Card>
          <CardMedia component="img" alt='' height="60%" image={imageURL} />
    
          <CardContent>
              <Typography gutterBottom variant="h5" component="div"> {title} </Typography>
              
              <Typography variant="body2" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
              like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>

              <CardActions> 

              <Button>Share</Button>
              <Button>Learn More</Button>
              <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />}  />

              </CardActions>
          </CardContent>
               
        </Card>
    </Box>
    
  )
}

export default Post
