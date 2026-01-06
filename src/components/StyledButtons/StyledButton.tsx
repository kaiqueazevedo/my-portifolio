import styled from "@emotion/styled"
import { useTheme } from "@mui/material/styles"

interface StyledButtonProps {
    children: ReactNode
}

const StyledButton: React.FC <StyledButtonProps> = ({children}) => {

    const ButtonStyled = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    display:"inline-flex",
    alignItems: "anchor-center",
    justifyContent:"center",
    gap:"10px",
    // borderRadius: "3px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    padding: "10px 20px",
    cursor: "pointer",

    "&:hover": {
        backgroundColor: theme.palette.secondary.light,
    },
    }))


  return (
    <ButtonStyled>
        {children}
    </ButtonStyled>
  )
}

export default StyledButton
