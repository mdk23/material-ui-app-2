import {
    Box, Button, Fab,FormControl,FormControlLabel,FormLabel,
    MenuItem,Modal,Radio,RadioGroup,Snackbar,
    styled,TextField,Tooltip, Typography } from '@mui/material'

    import MuiAlert from '@mui/material/Alert';
    

import {Add as AddIcon} from '@mui/icons-material';

import React, { useState } from 'react'


function Add() {
    
    const StyledModal=styled(Modal)({
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    });
 
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
  
    const [open,setOpen]=useState(false);
    const [openAlert,setOpenAlert]=useState(false);

    return (
    <>
        <Tooltip title="Add" sx={{position:'fixed', bottom:20,left:{xs:'calc(50% - 25px)',md:30}}} 
         onClick={()=>setOpen(true)}
        > 
            <Fab color="primary" aria-label="add"> <AddIcon /> </Fab> 
        </Tooltip>

        <StyledModal open={open} onClose={e=>setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box width={550} height={380} bgcolor='background.default' color='text.primary' p={3} borderRadius={5}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
 
            <TextField id="standard-basic" label="Title" variant="standard" sx={{width:'100%',mb:'10px'}}/>
            <TextField id="standard-basic" label="Description" variant='outlined' multiline rows={3} sx={{width:'100%',mb:'10px'}}/>
            
            <Box sx={{display:'flex', justifyContent:'space-between' }}>
                
                <TextField id="outlined-select-currency" select label="Select" helperText="Please select your Visability">
                    <MenuItem value='Public'>Public</MenuItem>
                    <MenuItem value='Private'>Private</MenuItem>
                    <MenuItem value='Unlisted'>Unlisted</MenuItem>
                </TextField>

                <FormControl sx={{ mb:'10px'}}>
                    <FormLabel id="demo-row-radio-buttons-group-label">Who Can Comment?</FormLabel>
                    
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                     
                        <FormControlLabel value="female" control={<Radio />}   label="Everybody" />
                        <FormControlLabel value="male"   control={<Radio />}  label="My friends" />
                        <FormControlLabel value="other"  control={<Radio />}   label="Nobody" />
            
                    </RadioGroup>
                </FormControl>
            </Box>


            <Box sx={{mt:6}}>
                <Button variant='outlined' color='primary' size="large" sx={{mr:2}} onClick={()=>{setOpenAlert(true);setOpen(false)}}> Create </Button>
                <Button variant='outlined' color='secondary' size="large" onClick={()=>setOpen(false)}> Cancel </Button>
            </Box>
        </Box>

      </StyledModal>

       
         <Snackbar open={openAlert} autoHideDuration={6000} onClose={e=>setOpenAlert(false)} sx={{width:'300px'}}>
        
            <Alert onClose={e=>setOpenAlert(false)} severity="success" sx={{ width: '100%' }}>
            This is a success message!
            </Alert>
       
        </Snackbar>
      
    </>
  )
}

export default Add
