// import { styled } from '@mui/material/styles'
// import Avatar from "../../../../assets/images/avatar.png"
// import { Grid, Typography, Container } from '@mui/material'

// const Hero = () => {

//   const StyledHero = styled("div")(() => ({
//     backgroundColor: "black",
//     height: "100vh"
//   }))

//   const StyledImg = styled("img")(() => ({
//     width: "100%",
//     borderRadius: "50%"
//   }))

//   return (
//     <>
//       <StyledHero>
//         <Container>
//           <Grid container spacing={2}>
//             <Grid item xs={4}>
//               <StyledImg src={Avatar} />
//             </Grid>

//             <Grid item xs={8}>
//               <Typography color='primary' variant="h1">Kaique Azevedo</Typography>
//               <Typography color='primary' variant="h2"> I'm a Developer Backend</Typography>
//             </Grid>
//           </Grid>
//         </Container>
//       </StyledHero>
//     </>
//   )
// }

// export default Hero

import { styled } from '@mui/material/styles'
import Avatar from "../../../../assets/images/avatar.png"
import { Grid, Typography, Container, Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import EmailIcon from '@mui/icons-material/Email'

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    minHeight: "100vh",
  }))

  const StyledImg = styled("img")(() => ({
    width: "100%",
    maxWidth: "280px",
    borderRadius: "50%",
  }))

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>

          {/* IMAGEM */}
          <Grid item xs={12} md={4} display="flex"><StyledImg src={Avatar} />
          </Grid>

          {/* TEXTO */}
          <Grid item xs={12} md={8}>
            <Typography color="primary" variant="h1" textAlign="center">Kaique Azevedo</Typography>
            <Typography color="primary" variant="h2" textAlign="center">I'm a Developer Backend</Typography>
            <Grid container display="flex" justifyContent="center">
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button>
                  <DownloadIcon />
                  Download CV
                </Button>
              </Grid>

              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button>
                  <EmailIcon />
                  Contact me
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  )
}

export default Hero
