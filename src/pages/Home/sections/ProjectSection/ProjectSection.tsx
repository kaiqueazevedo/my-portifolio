// import { Box, Container, Grid, Typography, styled } from "@mui/material";
// import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
// import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

// const ProjectsSection: React.FC = () => {

//     const StyledExperience = styled("div")(({ theme }) => ({
//         backgroundColor: theme.palette.primary.main,

//     }));

//     const projects = [
//         {
//             title: "Project Exemple",
//             subtitle: "Jul 2023 - Dez 2023",
//             srcImg: "/src/assets/images/project-trello.png",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
//             technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
//             websiteURL: "https://trello.com/",
//             codeURL: "https://github.com/",
//          },
//         {
//             title: "Project Exemple",
//             subtitle: "Jul 2023 - Dez 2023",
//             srcImg: "/src/assets/images/project-financas.png",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
//             technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
//             websiteURL: "https://trello.com/",
//             codeURL: "https://github.com/",
//         },
//         {
//             title: "Project Craze Maze",
//             subtitle: "Jul 2019 - May 2019",
//             srcImg: "/src/assets/images/project1-craze-maze.gif",
//             description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
//             technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
//             websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
//             codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
//          },
//         {
//             title: "Project Blotting",
//             subtitle: "Jul 2019 - May 2019",
//             srcImg: "/src/assets/images/project2-blotting.png",
//             description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
//             technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
//             websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
//             codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
//         },
//     ]

//     return (
//         <StyledExperience>
//             <Container maxWidth="lg">
//                 <Box id="projects" pt={5} pb={3}>
//                     <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
//                 </Box>
//                 <Grid container spacing={5} pb={3}>
//                     {projects.map((project: ProjectCardProps, index: number) => (
//                         <Grid item md={6} key={index}>
//                             <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
//                                 <ProjectCard
//                                     title={project.title}
//                                     subtitle={project.subtitle}
//                                     srcImg={project.srcImg}
//                                     description={project.description}
//                                     technologies={project.technologies}
//                                     websiteURL={project.websiteURL}
//                                     codeURL={project.codeURL}
//                                 />
//                             </AnimationComponent>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </StyledExperience>
//     )
// }

// export default ProjectsSection









//CÓDIGO COM PROJETO

// import { Box, Container, Grid, Typography, styled } from "@mui/material";
// import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
// import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
// import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

// const StyledExperience = styled("div")(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
// }));

// const ProjectsSection: React.FC = () => {
//   const projects: ProjectCardProps[] = [
//     {
//       title: "Project Exemple",
//       subtitle: "Jul 2023 - Dez 2023",
//       srcImg: "/src/assets/images/project-trello.png",
//       description: "Lorem ipsum dolor sit amet.",
//       technologies: "Technologies: JavaScript, HTML, CSS",
//       websiteURL: "https://trello.com/",
//       codeURL: "https://github.com/",
//     },



    
//   ];

//   return (
//     <StyledExperience>
//       <Container maxWidth="lg">
//         <Box id="projects" pt={5} pb={3}>
//           <Typography variant="h2" textAlign="center" color="primary.contrastText">
//             Projects
//           </Typography>
//         </Box>

//         <Grid container spacing={5} pb={3}>
//           {projects.map((project, index) => (
//             <Grid item md={6} key={index}>
//               <AnimationComponent
//                 moveDirection={index % 2 === 0 ? "right" : "left"}
//               >
//                 <ProjectCard {...project} />
//               </AnimationComponent>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </StyledExperience>
//   );
// };

// export default ProjectsSection;






// CÓDIGO COM WORK IN PROGRESS

// import { Box, Container, Grid, Typography, styled } from "@mui/material";
// import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
// import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
// import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

// const StyledExperience = styled("div")(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
// }));

// const ProjectsSection: React.FC = () => {
//   const projects: ProjectCardProps[] = [
//     // deixe vazio enquanto estiver em construção
//   ];

//   return (
//     <StyledExperience>
//       <Container maxWidth="lg">
//         <Box id="projects" pt={5} pb={5}>
//           <Typography
//             variant="h2"
//             textAlign="center"
//             color="primary.contrastText"
//             pb={3}
//           >
//             Projects
//           </Typography>

//           {/* 🔁 CONDIÇÃO */}
//           {projects.length === 0 ? (
//             <Grid container justifyContent="center">
//               <Grid item xs={12} md={7}>
//                 <Typography
//                   color="primary.contrastText"
//                   variant="h1"
//                   textAlign="center"
//                   pb={2}
//                 >
//                   “Work in progress” 🚧
//                 </Typography>

//                 <Typography
//                   color="primary.contrastText"
//                   variant="h2"
//                   textAlign="center"
//                   pb={2}
//                 >
                  
//                 </Typography>
//               </Grid>
//             </Grid>
//           ) : (
//             <Grid container spacing={5}>
//               {projects.map((project, index) => (
//                 <Grid item md={6} key={index}>
//                   <AnimationComponent
//                     moveDirection={index % 2 === 0 ? "right" : "left"}
//                   >
//                     <ProjectCard {...project} />
//                   </AnimationComponent>
//                 </Grid>
//               ))}
//             </Grid>
//           )}
//         </Box>
//       </Container>
//     </StyledExperience>
//   );
// };



// export default ProjectsSection;











import { Box, Container, Grid, Typography, styled } from "@mui/material";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";

const StyledExperience = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const ProjectsSection: React.FC = () => {
  const projects: ProjectCardProps[] = [];

  const codePreview = `

    title: "Project Exemple",
    subtitle: "Jul 2023 - Dez 2023",
    srcImg: "/src/assets/images/project-trello.png",
    description: "Lorem ipsum dolor sit amet.",
    technologies: "Technologies: JavaScript, HTML, CSS",
    websiteURL: "https://trello.com/",
    codeURL: "https://github.com/",

`;

  return (
    <StyledExperience>
      <Container maxWidth="lg">
        <Box id="projects" pt={5} pb={5}>
          <Typography
            variant="h2"
            textAlign="center"
            color="primary.contrastText"
            pb={2}
          >
            Projects
          </Typography>

          {projects.length === 0 && (
            <Grid container justifyContent="center">
              <Grid item xs={12} md={8}>
                <Typography
                  color="primary.contrastText"
                  variant="h1"
                  textAlign="center"
                  pb={2}
                >
                  “Work in progress” 
                </Typography>

                {/* 👇 BLOCO DE CÓDIGO */}
                <Box
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    borderRadius: 2,
                    p: 2,
                    overflowX: "auto",
                  }}
                >
                  <Typography
                    component="pre"
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "0.85rem",
                      color: "primary.contrastText",
                      m: 0,
                    }}
                  >
                    {codePreview}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </StyledExperience>
  );
};

export default ProjectsSection;
