import {
    Box,
    Divider,
    Drawer, 
    Grid,
    List,
    ListItem,
    ListItemButton, 
    ListItemIcon,
    ListItemText,
    Toolbar, 
    Typography,
} from "@mui/material"
import {TurnedInNot} from "@mui/icons-material"

export const SideBar = ({drawerWidth = 280}) => {
    return (
       <Box
            component='nav'
            sx={{ width: { sm: drawerWidth}, flexShrink: { sm: 0 } }}
       >
        <Drawer
            open
            variant="permanent" //temporary
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            <Toolbar>
                <Typography 
                    noWrap 
                    variant="h6"
                    component="div"
                >
                    Alex Reyes
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {
                    ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL'].map(text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'Ex est quis ad eu qui ex voluptate.'}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
       </Box>
    )
}
