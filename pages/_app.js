import React, { useState, useEffect } from "react";
import Head from "next/head";

import { Box, styled } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import store from "../redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { getToken } from "../utils/token";
import { ThemeConfig } from "../themes";

import LanguageContext from "../components/languageContext";
import PageContent from "../components/pageContent";

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  padding: 3,
  minHeight: "100vh",
  backgroundColor: "#F5F5F5;",
  flexGrow: 1,
  overflow: "hidden",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: (theme) => `-${theme.mixins.drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const MyApp = ({ Component, pageProps, router }) => {
  const [mounted, setMounted] = useState(false);

  const [currLanguage, setCurrLanguage] = useState("ID");
  const [currFlag, setCurrFlag] = useState("cif-Id");
  useEffect(() => {
    setMounted(true);
    if (window.sessionStorage.getItem("language")) {
      setCurrLanguage(window.sessionStorage.getItem("language"));
      if (window.sessionStorage.getItem("language") === "ID") {
        setCurrFlag("cif-Id");
      } else {
        setCurrFlag("cif-Us");
      }
    }
  }, []);

  function languageChange(flag, language) {
    setCurrFlag(flag);
    setCurrLanguage(language);
    window.sessionStorage.setItem("language", language);
  }
  return (
    mounted && (
      <>
        <LanguageContext.Provider
          value={{
            pageLanguage: currLanguage,
            pageContent: PageContent,
          }}
        >
          <Head>
            <meta
              name="viewport"
              content="height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0, width=device-width"
            />
            <meta name="googlebot" content="noindex" />
            <meta name="robots" content="noindex" />
            <title>Pharos Wharehouse</title>
            currFlag={currFlag}
            currLanguage={currLanguage}
            languageChange={languageChange}
          </Head>

          <Provider store={store}>
            <ThemeConfig>
              <Toaster position="top-center" reverseOrder={false} gutter={8} />
              {router.pathname === "/login" ||
              (typeof window !== "undefined" && !getToken("token")) ? (
                <Component {...pageProps} />
              ) : (
                <Box display={"flex"}>
                  <Sidebar />
                  <Box sx={{ width: "100%" }}>
                    <Navbar />
                    <Main>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Component {...pageProps} />
                      </LocalizationProvider>
                    </Main>
                  </Box>
                </Box>
              )}
            </ThemeConfig>
          </Provider>
        </LanguageContext.Provider>
      </>
    )
  );
};

export default MyApp;
