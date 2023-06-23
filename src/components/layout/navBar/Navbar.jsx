import { Box, Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import "./NavBar.css";
const Navbar = () => {
  return (
    // <Grid container className="navContainer">
    //   <Grid item>
    //     <h4>logo</h4>
    //   </Grid>

    //   <Grid item>
    //     <ul>
    //       <li>Hombres</li>
    //       <li>Mujeres</li>
    //       <li>Niños</li>
    //     </ul>
    //   </Grid>
    //   <Grid item>
    //     <h3>carrito icono</h3>
    //   </Grid>
    //   <Grid item>
    //     <Button>cart widghet</Button>
    //   </Grid>
    // </Grid>
    <Box className="navContainer">
      <Box>
        <h4>logo</h4>
      </Box>
      <Box>
        <ul>
          <li>Hombres</li>
          <li>Mujeres</li>
          <li>Niños</li>
        </ul>
      </Box>
      <Box>
        <Button>
          <PersonIcon></PersonIcon>
        </Button>
      </Box>
      <Box>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon>4</ShoppingCartIcon>
        </Badge>
      </Box>
    </Box>
  );
};

export default Navbar;
