import {
    Button,
    Grid,
    TextField,
    Typography,
} from '@mui/material'
import { SaveOutlined } from '@mui/icons-material'
import { ImageGallery } from '../components/ImageGallery'

export const NoteView = () => {
    return (
        <Grid 
            container
            direccion="row"
            justify="space-beetween"
            sx={{ mb: 1}}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>30, septiembre de 2023</Typography>
            </Grid>

            <Grid item>
                <Button color="primary" sx={{padding: 2}}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                    Guardar
                </Button>
            </Grid>
            <Grid container >
                <TextField 
                    fullWidth
                    label= "Titulo"
                    placeholder='Ingrese un Tutulo'
                    sx={{ border: 'none', mb: 1 }}
                    type="text"
                    variant="filled"
                    />
            </Grid>
            <Grid container >
                <TextField 
                    fullWidth
                    multiline
                    placeholder='Que ocurrio el dia de hoy?'
                    sx={{ border: 'none', mb: 1 }}
                    type="text"
                    variant="filled"
                    minRows={5}
                    />
            </Grid>

            <ImageGallery/>

        </Grid>
    )
}
