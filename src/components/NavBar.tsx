"use client";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const NavBar = () => {
  const { push } = useRouter();
  const handleAboutClick = () => {
    push("/dummy");
  };
  return (
    <Stack
      sx={{
        padding: "40px 96px",
        borderBottom: "1px solid rgba(238, 238, 238, 0.10)",
      }}
    >
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack>
          <Typography
            fontSize="24px"
            color="white"
            fontWeight={500}
            fontFamily="monospace"
          >
            SaulDesign
          </Typography>
        </Stack>
        <Stack direction="row" gap="48px">
          <Typography fontSize="18px" color="#EEEEEE">
            {" "}
            Home
          </Typography>
          <Typography
            fontSize="18px"
            color="#EEEEEE"
            onClick={handleAboutClick}
          >
            About Me
          </Typography>
          <Typography fontSize="18px" color="#EEEEEE">
            Contact
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
