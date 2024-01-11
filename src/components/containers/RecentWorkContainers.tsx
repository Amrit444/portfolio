import React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CourseWebsiteSvg from "../../../public/Course Website Landing Page Thumbnail 1.svg";
import CompSvg from "../../../public/Group 33.svg";

const CustomCard = ({ imageSrc, altText, width, height }: any) => {
  return (
    <Card
      sx={{
        width: "330px",
        backgroundColor: "rgba(57, 62, 70, 0.50)",
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
        <Image src={imageSrc} alt={altText} width={width} height={height} />
      </CardContent>
    </Card>
  );
};

export const RecentWorkContainer = () => {
  const workData = [
    { imageSrc: CourseWebsiteSvg, altText: "work1", width: 250, height: 150 },
    { imageSrc: CompSvg, altText: "work2", width: 250, height: 150 },
    // Add more work data as needed
  ];

  return (
    <Stack
      direction="column"
      paddingX="370px"
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
        {workData.map((work, index) => (
          <CustomCard key={index} {...work} />
        ))}
      </Stack>
    </Stack>
  );
};
