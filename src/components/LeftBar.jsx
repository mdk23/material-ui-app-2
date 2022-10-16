

import { Container, ListItemButton, ListItemIcon, ListItemText, styled,List, Box } from '@mui/material'
import React from 'react'

import { Bookmark,List as ListIcon ,ExitToApp,Home, Person, PhotoCamera,PlayCircleOutline, Settings, Storefront,TabletMac} from '@mui/icons-material';


const ListButtonStyled=styled(ListItemButton)({
    display:'flex',  
    justifyContent:'space-between',
    marginTop:'10px',
    marginBottom:'10px',
  });

 
function Leftbar() {
  
  return (
    
        <Box flex='1' p={2} sx={{ display:{xs:'none',sm:'block'}  }} >
          <Box position='fixed'>
            <List>
                <ListButtonStyled>
                    <ListItemIcon>  <Home />  </ListItemIcon>
                    <ListItemText primary="HomePage" sx={{ display:{sm:'none',md:'block'}  }}/>
                </ListButtonStyled>

                <ListButtonStyled>
                    <ListItemIcon>  <Person /> </ListItemIcon>
                    <ListItemText primary="Friends" sx={{ display:{sm:'none',md:'block'}  }}/>
                </ListButtonStyled>

                <ListButtonStyled>
                    <ListItemIcon> <ListIcon /> </ListItemIcon>
                    <ListItemText primary="Lists" sx={{ display:{sm:'none',md:'block'}  }} />
                </ListButtonStyled>

                <ListButtonStyled>
                    <ListItemIcon> <PhotoCamera/> </ListItemIcon>
                    <ListItemText primary="Camera" sx={{ display:{sm:'none',md:'block'}  }}/>
                </ListButtonStyled>

                <ListButtonStyled>
                    <ListItemIcon> <PlayCircleOutline /> </ListItemIcon>
                    <ListItemText primary="Videos" sx={{ display:{sm:'none',md:'block'}  }}/>
                </ListButtonStyled>

                <ListButtonStyled>
                    <ListItemIcon> <TabletMac />  </ListItemIcon>
                    <ListItemText primary="Apps" sx={{ display:{sm:'none',md:'block'}  }}/>
                </ListButtonStyled>

                <ListButtonStyled>
                    <ListItemIcon> <Bookmark /> </ListItemIcon>
                    <ListItemText primary="Collections"sx={{ display:{sm:'none',md:'block'}  }} />
                </ListButtonStyled>

              <ListButtonStyled>
                  <ListItemIcon> <Storefront/> </ListItemIcon>
                  <ListItemText primary="Market Place"sx={{ display:{sm:'none',md:'block'}  }} />
              </ListButtonStyled>

              <ListButtonStyled>
                  <ListItemIcon> <Settings/> </ListItemIcon>
                  <ListItemText primary="Settings" sx={{ display:{sm:'none',md:'block'}  }}/>
              </ListButtonStyled>

              <ListButtonStyled>
                  <ListItemIcon> <ExitToApp/> </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ display:{sm:'none',md:'block'}  }}/>
              </ListButtonStyled>
        </List>


          </Box>

        </Box>
        
        
    
  )
}

export default Leftbar