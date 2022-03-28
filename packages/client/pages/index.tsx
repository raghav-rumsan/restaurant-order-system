import Typography from "@mui/material/Typography";
import { Layout } from "@components/templates";
import Head from "next/head";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Typography variant='h4'>Restaurant Order System</Typography>
      <Button variant='contained'>Home Button</Button>
    </>
  );
};

Home.Layout = Layout;

export default Home;
