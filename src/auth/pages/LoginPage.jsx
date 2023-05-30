import { Link as RouterLink} from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Grid,
      Button,
      Link,
      TextField,
      Typography,
  } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
    return (
      <AuthLayout title="Login">
        <form>
            <Grid container>
              <Grid item 
                xs={12}
                sx={{mt:2}}
              >
                <TextField 
                  label="Correo"
                  type="email"
                  placeholder="correo@gmail.com"
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
                <Grid item xs={12} sm={6}>
                  <Button variant='contained' fullWidth>
                    Login
                  </Button>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Button variant='contained' fullWidth>
                    <Google />
                    <Typography sx={{ml:1}}>Google</Typography>
                  </Button>
                </Grid>

                <Grid 
                  container
                  direction="row"
                  justifyContent="end"
                  sx={{mt: 3}}
                >
                  <Typography>¿No tienes cuenta?</Typography>
                  <Link component={RouterLink}
                        sx={{ml: 2}}
                        color='inherit'
                        to="/auth/register"
                  >
                    Registrate
                  </Link>
                </Grid>

              </Grid>

            </Grid>
          </form>
      </AuthLayout>
    )
}
