import styled from "@emotion/styled"
import { useTheme } from "@mui/material/styles"

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
}

const StyledButton: React.FC <StyledButtonProps> = ({children, onClick}) => {

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
    <ButtonStyled onClick={onClick}>
        {children}
    </ButtonStyled>
  )
}

export default StyledButton
