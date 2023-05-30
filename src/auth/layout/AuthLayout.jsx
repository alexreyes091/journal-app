import {
    Grid,
    Typography,
} from '@mui/material';

export const AuthLayout = ({ children, title = ''}) => {
    return (
        <Grid 
            container
            spacing={0}
            direction={"column"}
            alignContent={"center"}
            justifyContent={"center"} 
            sx={{ minHeight: "100vh", backgroundColor: 'primary.main' }}
            >

            <Grid item
                className="box-shadow"
                xs={3}
                sx={{ 
                    width: {sm: 500},
                    backgroundColor: 'white',
                    borderRadius: 3,
                    padding: 2,
                }}
            >
                <Typography variant='h5' sx={{mb:1}}>{title}</Typography>

                {children}
            </Grid>
        </Grid>
    )
}
