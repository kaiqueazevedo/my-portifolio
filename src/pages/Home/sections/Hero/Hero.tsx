import { styled } from '@mui/material/styles'
import Avatar from "../../../../assets/images/avatar.png"
import { Grid, Typography, Container, Box } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import EmailIcon from '@mui/icons-material/Email'
import StyledButton from '../../../../components/StyledButtons/StyledButton'
import { AnimatedBackground } from "../../../../components/StyledButtons/AnimetedBackground/animatebackground"


// const HeroSection: React.FC = () => {

//     const StyledImg = styled("img")(({ theme }) => ({
//         width: "80%",
//         border: `1px solid ${theme.palette.primary.contrastText}`,
//         borderRadius: "50%",
//         position: "relative"
//     }));

const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]:{
      paddingTop: "100px",
    },
    [theme.breakpoints.up('md')]:{
      paddingTop: "0",
    },

  }))

  const StyledImg = styled("img")(() => ({
    width: "90%",
    maxWidth: "280px",
    borderRadius: "50%",
    border: "1px solid white",
    position: "relative",
    zIndex: 2,
  }))

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">

          {/* IMAGEM + BACKGROUND */}
          <Grid item xs={12} md={5} display="flex" justifyContent="center">
            <Box position="relative" display="flex" justifyContent="center">

              <Box position="absolute" width="200%" top={-100} right={0} zIndex={1}>
                <AnimatedBackground />
              </Box>
              <Box position={'relative'} textAlign={'center'}>

              <StyledImg src={Avatar} />
              </Box>

            </Box>
          </Grid>

          {/* TEXTO */}
          <Grid item xs={12} md={7}>
            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
              Kaique Azevedo
            </Typography>

            <Typography color="primary.contrastText" variant="h2" textAlign="center">
              I'm a Developer Backend
            </Typography>

            {/* BOTÕES */}
            <Grid container justifyContent="center" spacing={3} sx={{ mt: 3 }} pb={3}>

              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={()=> console.log("download")}>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>

              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={()=> console.log("contact")}>
                  <EmailIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  )
}

export default Hero








