
import {Grid, Stack } from "@mui/material";
import Add from "./components/Add";
import Feed from "./components/Feed";
import LeftBar from "./components/LeftBar";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";

 
function App() {
  return (
    <div className="App">
      <NavBar />
        
        <Grid container>
           
           <Grid item sm={2} xs={2}> <LeftBar/> </Grid>
           <Grid item sm={7} xs={10}> <Feed/> </Grid>
           <Grid item sm={3}> <RightBar/> </Grid>

        </Grid>
        <Add/>
    </div>
  );
}

export default App;
