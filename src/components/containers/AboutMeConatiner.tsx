import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import TuneSvg from "../../../public/Vector 141.png";
import BulbSvg from "../../../public/lightbulb.png";
import DoodlesSvg from "../../../public/Group 2373.svg";
import ArrowSvg from "../../../public/Vector 186.png";

export const AboutMeConatiner = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      paddingX="120px"
      alignItems="flex-start"
    >
      <Stack direction="column" maxWidth="400px" gap={3}>
        <Image src={TuneSvg} alt="tune" />
        <Stack direction="row" gap={1}>
          <Typography
            sx={{
              color: "#EEE",
              fontFamily: "Poppins",
              fontSize: " 64px",
              fontWeight: 700,
            }}
          >
            About
          </Typography>
          <Typography
            sx={{
              color: "#EEE",
              fontFamily: "Poppins",
              fontSize: " 64px",
              fontWeight: 700,
            }}
          >
            Me
          </Typography>
          <Image src={BulbSvg} alt="bulb" />
        </Stack>
        <Stack>
          <Typography
            sx={{
              color: "rgba(238, 238, 238, 0.75)",
              fontSize: "18px",
              fontWeight: 400,
            }}
          >
            Greetings! I'm Amrit Udasi, a 2023 graduate from Medicaps University
            with a BTech degree. I'm currently immersed as a full-time Research
            and Development Engineer at Deqode Labs, where I passionately
            contribute insights and expertise, driving innovation and
            advancement in our projects.
          </Typography>
        </Stack>
        <Stack
          sx={{
            mt: 5,
            alignItems: "center",
          }}
        >
          <Image src={ArrowSvg} alt="Arrow" />
        </Stack>
      </Stack>
      <Stack>
        <Image src={DoodlesSvg} alt="doodles" />
      </Stack>
    </Stack>
  );
};
