"use client";
import { createTheme } from "@mui/material";

export const theme = () => {
  return createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            "*&::-webkit-scrollbar": {
              width: "12px",
            },
            "*&::-webkit-scrollbar-thumb": {
              backgroundColor: "red",
              borderRadius: "10px",
            },
            "*&::-webkit-scrollbar-track": {
              backgroundColor: "red",
              borderRadius: "10px",
            },
          },
        },
      },
    },
  });
};
