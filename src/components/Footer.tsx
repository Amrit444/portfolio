import React from "react";
import { Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const iconData = [
  { icon: <HomeIcon sx={{ color: "whitesmoke" }} />, title: "Home" },
  { icon: <Person2Icon sx={{ color: "whitesmoke" }} />, title: "Person" },
  { icon: <CallIcon sx={{ color: "whitesmoke" }} />, title: "Contact" },
];

const socialMediaIcons = [InstagramIcon, FacebookIcon, LinkedInIcon];

const Footer = () => {
  return (
    <Stack direction="column" alignItems="center" sx={{ padding: 10 }} gap={5}>
      <Stack direction="row" gap={10}>
        {iconData.map((item) => (
          <Stack key={item.title} direction="row" gap="4px">
            {item.icon}
            <Typography fontSize="18px" color="white" fontWeight={400}>
              {item.title}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Stack direction="row" gap={8}>
        {socialMediaIcons.map((Icon, index) => (
          <Icon
            key={index}
            sx={{
              color: "whitesmoke",
              backgroundColor: "#393E46",
              padding: "12px",
              borderRadius: "50px",
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
