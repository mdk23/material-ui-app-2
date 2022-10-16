import { AppBar, Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, styled, Typography } from '@mui/material'
import React from 'react'

function RightBar() {
  
  const StyledBox=styled(Box)({
    display:'flex',
    flexDirection:'column',
    gap:'20px',
    alignItems:'flex-end',
    justifyContent:'space-around'
  })
  
  return (
    <Box flex='2' p={2} sx={{ display:{xs:'none',sm:'block'} }}>
       <StyledBox position='fixed'>
           
        <Typography variant='h6' mt={1} mr={29}>Online Friends</Typography>

        <AvatarGroup max={6} sx={{mr:'50px'}}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" sx={{ width: 56, height: 56 }}/>
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg"  sx={{ width: 56, height: 56 }}/>
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" sx={{ width: 56, height: 56 }}/>
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" sx={{ width: 56, height: 56 }} />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/6.jpg" sx={{ width: 56, height: 56 }}/>
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/7.jpg"  sx={{ width: 56, height: 56 }}/>
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/8.jpg" sx={{ width: 56, height: 56 }}/>
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/9.jpg" sx={{ width: 56, height: 56 }} />
        </AvatarGroup>

        <ImageList sx={{ width: 420, height: 350  }} cols={3} rowHeight={164} >
       
            <ImageListItem>
              <img src={'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'} alt={'Breakfast'} loading="lazy"/>
            </ImageListItem>

            <ImageListItem>
              <img src={'https://material-ui.com/static/images/image-list/burgers.jpg'} alt={'Burgers'} loading="lazy"/>
            </ImageListItem>
          
            <ImageListItem>
              <img src={'https://material-ui.com/static/images/image-list/camera.jpg'} alt={'Camera'} loading="lazy"/>
            </ImageListItem>

            <ImageListItem>
              <img src={'https://material-ui.com/static/images/image-list/morning.jpg'} alt={'Morning'} loading="lazy"/>
            </ImageListItem>

            <ImageListItem>
              <img src={'https://material-ui.com/static/images/image-list/hats.jpg'} alt={'Hats'} loading="lazy"/>
            </ImageListItem>

            <ImageListItem>
              <img src={'https://material-ui.com/static/images/image-list/vegetables.jpg'} alt={'Hats'} loading="lazy"/>
            </ImageListItem>
        </ImageList>


        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',mr:6 }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/6.jpg" />
              </ListItemAvatar>

              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                      Mark Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
          </ListItem>
          
          <Divider variant="inset" component="li" />
          
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
      </List>
        
       </StyledBox>
    </Box>
  )
}

export default RightBar
