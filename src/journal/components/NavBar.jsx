import { AppBar, Toolbar, IconButton, Grid, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

export const NavBar = ({drawerWidth = 240}) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px`},
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container
                    direccion='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography 
                        variant='h6'
                        component='div'
                        noWrap
                    >
                        Journal App
                
                    </Typography>
                    <IconButton color='error'>
                        <LogoutOutlined />
                    </IconButton>

                </Grid>
            </Toolbar>
        </AppBar>
    )
}
