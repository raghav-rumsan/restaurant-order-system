import { Header } from "@components/organisms";
import { Container, Box } from "@mui/material";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  hasHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hasHeader = true }) => {
  return (
    <>
      {hasHeader && <Header />}
      <Container maxWidth='lg'>
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;
