import { Mail, Notifications, Search as SearchIcon} from '@mui/icons-material';
import { AppBar, Badge, InputBase, styled, Toolbar, Typography,Box, Avatar } from '@mui/material'

import React from 'react'

const StyledToolBar=styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
   
});

const Search=styled('div')(({theme})=>({
  display:'flex',
  alignContent:'center',
  backgroundColor:'white',
  padding:'0 10px',
  borderRadius:'10px',
  width:'60%',
  height:'40px',
  
}));

const IconBox=styled(Box)({
  display:'flex',
  gap:'20px',
  alignItems:'center',
  justifyContent:'space-between'
})

function NavBar() {
  
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
                <Typography variant='h6' sx={{ display:{ xs:'none',sm:'block'}}}>
                    MD Kane
                </Typography>

                <Typography variant='h6' sx={{ display:{ xs:'block',sm:'none'}}}>
                    MDK
                </Typography>

                <Search>
                  <SearchIcon sx={{color:'black',fontSize:'70', marginTop:'6px'}}/>
                  <InputBase  placeholder='Search...' sx={{marginLeft:'3px'}}/>
                </Search>

                <IconBox sx={{display:{ xs:'none',sm:'flex'}}}>
                    <Badge badgeContent={4} max={10}color="error"> <Mail/> </Badge>
                    <Badge badgeContent={5} max={10}color="error"> <Notifications/> </Badge>

                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    sx={{width: 50, height: 50}}
                   />
                </IconBox>
                

        </StyledToolBar>
    </AppBar>
  )
}

export default NavBar
