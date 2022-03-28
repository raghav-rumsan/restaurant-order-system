import { Button as MuiButton } from "@mui/material";

const Button: React.FC = ({ children }) => {
  return (
    <>
      <MuiButton>{children}</MuiButton>
    </>
  );
};

export default Button;
