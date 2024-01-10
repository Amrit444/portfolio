import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

import IconSvg from "../../../public/Vector 187.svg";
import SprinklesSvg from "../../../public/Group 2346 (2).svg";

export const CreativeContainer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      mt={5}
      paddingX="120px"
      alignItems="flex-start"
    >
      <Stack direction="row" gap={1} alignItems="flex-end">
        <Image src={IconSvg} alt="Arrow Icon" />
        <Stack direction="column">
          <Typography fontSize="96px" fontWeight={700} color="white">
            CREATIVE UI
          </Typography>
          <Typography fontSize="96px" fontWeight={700} color="#00ADB5">
            DESIGNER
          </Typography>
          <Stack direction="row" gap="48px" mt="10px">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00ADB5",
                borderRadius: "24px",
                padding: "8px 24px",
                fontSize: "12px",
                fontWeight: 700,
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.50)",
                "&:hover": {
                  backgroundColor: "#00ADB5",
                },
              }}
            >
              Hire me
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "rgba(57, 62, 70, 0.75)",
                borderRadius: "24px",
                padding: "8px 24px",
                fontSize: "12px",
                fontWeight: 700,
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.50)",
                "&:hover": {
                  backgroundColor: "rgba(57, 62, 70, 0.75)",
                },
              }}
            >
              Download CV
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="column" spacing={1}>
        <Image src={SprinklesSvg} alt="Sprinkled background" />
      </Stack>
    </Stack>
  );
};
