import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import "./App.scss";
import Layout from "./layout/Layout";
import Home from "./pages/home";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Home />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
