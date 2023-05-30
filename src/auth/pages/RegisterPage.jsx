import { Link as RouterLink} from "react-router-dom"
import { Grid,
      Button,
      Link,
      TextField,
      Typography,
  } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
    return (
      <AuthLayout title="Register">
        <form>
            <Grid container>
            <Grid item 
                xs={12}
                sx={{mt:2}}
              >
                <TextField 
                  label="Nombre Completo"
                  type="text"
                  placeholder="Escribe tu nombre"
                  fullWidth
                />
              </Grid>
              <Grid item 
                xs={12}
                sx={{mt:2}}
              >
                <TextField 
                  label="Correo"
                  type="email"
                  placeholder="correro@gmil.com"
                  fullWidth
                />
              </Grid>
              <Grid item 
                xs={12}
                sx={{my:2}}
              >
                <TextField 
                  label="Contraseña"
                  type="password"
                  placeholder="********"
                  fullWidth
                />
              </Grid>

              <Grid container
                spacing={2} sx={{mb:2}}
              >
                <Grid item xs={12}>
                  <Button variant='contained' fullWidth>
                    Crea una cuenta
                  </Button>
                </Grid>

                <Grid 
                  container
                  direction="row"
                  justifyContent="end"
                  sx={{mt: 3}}
                >
                  <Typography>¿Ya tienes cuenta?</Typography>
                  <Link component={RouterLink}
                        sx={{ml: 2}}
                        color='inherit'
                        to="/auth/login"
                  >
                    Ingresa
                  </Link>
                </Grid>

              </Grid>

            </Grid>
        </form>
    </AuthLayout>
  )
}
