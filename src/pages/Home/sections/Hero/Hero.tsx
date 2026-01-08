// import { styled } from '@mui/material/styles'
// import Avatar from "../../../../assets/images/avatar.png"
// import { Grid, Typography, Container, Box } from '@mui/material'
// import DownloadIcon from '@mui/icons-material/Download'
// import EmailIcon from '@mui/icons-material/Email'
// import StyledButton from '../../../../components/StyledButtons/StyledButton'
// import { AnimatedBackground } from "../../../../components/StyledButtons/AnimetedBackground/animatebackground"


// const HeroSection: React.FC = () => {

//     const StyledImg = styled("img")(({ theme }) => ({
//         width: "80%",
//         border: `1px solid ${theme.palette.primary.contrastText}`,
//         borderRadius: "50%",
//         position: "relative"
//     }));

// const Hero = () => {

//   const StyledHero = styled("div")(({ theme }) => ({
//     backgroundColor: theme.palette.primary.main,
//     minHeight: "100vh",
//     display: "flex",
//     alignItems: "center",
//     [theme.breakpoints.up('xs')]:{
//       paddingTop: "100px",
//     },
//     [theme.breakpoints.up('md')]:{
//       paddingTop: "0",
//     },

//   }))

//   const StyledImg = styled("img")(() => ({
//     width: "90%",
//     maxWidth: "280px",
//     borderRadius: "50%",
//     border: "1px solid white",
//     position: "relative",
//     zIndex: 2,
//   }))

//   return (
//     <StyledHero>
//       <Container maxWidth="lg">
//         <Grid container spacing={2} alignItems="center">

//           {/* IMAGEM + BACKGROUND */}
//           <Grid item xs={12} md={5} display="flex" justifyContent="center">
//             <Box position="relative" display="flex" justifyContent="center">

//               <Box position="absolute" width="200%" top={-100} right={0} zIndex={1}>
//                 <AnimatedBackground />
//               </Box>
//               <Box position={'relative'} textAlign={'center'}>

//               <StyledImg src={Avatar} />
//               </Box>

//             </Box>
//           </Grid>

//           {/* TEXTO */}
//           <Grid item xs={12} md={7}>
//             <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
//               Kaique Azevedo
//             </Typography>

//             <Typography color="primary.contrastText" variant="h2" textAlign="center">
//               I'm a Developer Backend
//             </Typography>

//             {/* BOTÕES */}
//             <Grid container justifyContent="center" spacing={3} sx={{ mt: 3 }} pb={3}>

//               <Grid item xs={12} md={4} display="flex" justifyContent="center">
//                 <StyledButton onClick={()=> console.log("download")}>
//                   <DownloadIcon />
//                   <Typography>Download CV</Typography>
//                 </StyledButton>
//               </Grid>

//               <Grid item xs={12} md={4} display="flex" justifyContent="center">
//                 <StyledButton onClick={()=> console.log("contact")}>
//                   <EmailIcon />
//                   <Typography>Contact me</Typography>
//                 </StyledButton>
//               </Grid>
//             </Grid>

//           </Grid>
//         </Grid>
//       </Container>
//     </StyledHero>
//   )
// }

// export default Hero





import { Box, Container, Grid, Typography, styled } from "@mui/material"
import { AnimatedBackground } from "../../../../components/StyledButtons/AnimetedBackground/animatebackground"
import Typewriter from "../../../../components/Typewriter/Typewriter"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from '../../../../components/StyledButtons/StyledButton';
import CV from "../../../../assets/pdfs/CV.pdf";


const HeroSection: React.FC = () => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        maxWidth: "280px",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%",
        position: "relative"
    }));

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));

    const handleDownload = () => {
        console.log("download")
        // Create a link element
        const link = document.createElement('a');
        link.href = CV
        link.download = 'example.pdf'; // Set the download attribute to specify the file name
        // Append the link to the body
        document.body.appendChild(link);
        // Trigger the click event
        link.click();
        // Remove the link from the body
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'kaiqueacastilho@gmail.com';
        const subject = 'Subject';
        const body = 'Hello! I saw your portfolio...';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative" pb={3}>
                                <Box width={"150%"} position="absolute" top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" pb={2} textAlign="center">
                                Kaique Castilho
                            </Typography>
                            <Typewriter text="I'm a Backend Developer" delay={120} variant="h2" color="primary.contrastText" />
                            <Box mt={3}>
                                <Grid container spacing={3} display="flex" justifyContent="center">
                                    <Grid item xs={10} md={4}>
                                        <StyledButton onClick={() => handleDownload()}>
                                            <DownloadIcon />
                                            <Typography>
                                                Download CV
                                            </Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid item xs={10} md={4}>
                                        <StyledButton onClick={() => handleEmail()}>
                                            <EmailIcon />
                                            <Typography>
                                                Contact me
                                            </Typography>
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default HeroSection


