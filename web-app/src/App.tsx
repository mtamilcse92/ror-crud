import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { SnackbarProvider } from "notistack";

import "./App.css";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import Routes from "./routers/Routers";
import { Box, Stack } from "@mui/material";
import Header from "./components/Header";

const Loader = () => (
  <Stack height="100vh" justifyContent="center" alignItems="center">
    <CircularProgress />
  </Stack>
);

function App() {
  return (
    <ReactQueryProvider>
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Loader />}>
            <Box display="flex" flexDirection="column" flex={1} px={5} py={2}>
              <Routes />
            </Box>
        </Suspense>
        </BrowserRouter>
      </SnackbarProvider>
    </ReactQueryProvider>
  );
}

export default App;
