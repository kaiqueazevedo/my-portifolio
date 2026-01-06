import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Javascript", "NodeJS", "Express", "Docker", "Git", "HTML", "CSS", "Cypress", "Python", "FastApi", "Selenium", "Linux"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                                <Typography textAlign="center">1+ years</Typography>
                                <Typography textAlign="center">Backend Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Technologist Degree</Typography>
                                <Typography textAlign="center">Software analysis and development</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Profissional de Tecnologia com experiência em Suporte Técnico, Automação (RPA) e Desenvolvimento Web (Node.js/Python). Atuo criando soluções que reduzem trabalho manual, aumentam produtividade e melhoram a eficiência dos processos.Experiência prática com:Python, Selenium, Pandas, PyAutoGUI, OpenPyXLAutomação de processos operacionais (RPA)Web Scraping e manipulação de dadosNode.js, Express, APIs RESTSQL, MySQL e Power BIEntrego automações ponta a ponta: análise → desenvolvimento → testes → implantação → acompanhamento.Tenho facilidade em aprender, resolver problemas e transformar processos manuais em fluxos automatizados. Busco oportunidades como Suporte Técnico, RPA, TI Operacional e Desenvolvimento Web, onde eu possa aplicar minhas habilidades e gerar valor real.Palavras-chave: Python, Node.js, RPA, Automação de Processos, Selenium, Suporte Técnico, SQL, Power BI, Web Scraping, ETL.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection