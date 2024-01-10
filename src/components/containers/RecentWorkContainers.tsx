import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import CourseWebsiteSvg from "../../../public/Course Website Landing Page Thumbnail 1.svg";
import CompSvg from "../../../public/Group 33.svg";

import Image from "next/image";

export const RecentWorkContainer = () => {
  return (
    <Stack
      direction="column"
      paddingX="250px"
      paddingY="200px"
      gap={5}
      sx={{
        backgroundImage: `url('/doodle items.svg')`,
        backgroundRepeat: "repeat",
      }}
    >
      <Stack direction="row" gap={2}>
        <Typography fontSize="64px" fontWeight={700} color="white">
          My Recent
        </Typography>
        <Typography fontSize="64px" fontWeight={700} color="#00ADB5">
          Work
        </Typography>
      </Stack>
      <Stack direction="row" gap={8}>
        <Card
          sx={{
            width: "330px",
            backgroundColor: " rgba(57, 62, 70, 0.50)",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "16px",
          }}
        >
          <CardContent
            sx={{
              padding: "30px",
              alignItems: "center",
            }}
          >
            <Image
              src={CourseWebsiteSvg}
              alt="work1"
              width={250}
              height={150}
            />
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "330px",
            backgroundColor: " rgba(57, 62, 70, 0.50)",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "16px",
          }}
        >
          <CardContent
            sx={{
              alignItems: "center",
              padding: "30px",
            }}
          >
            <Image src={CompSvg} alt="work1" width={250} height={150} />
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};
