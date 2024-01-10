import { AboutMeConatiner } from "@/components/containers/AboutMeConatiner";
import { CreativeContainer } from "@/components/containers/CreativeContainer";
import { RecentWorkContainer } from "@/components/containers/RecentWorkContainers";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack direction="column" gap={12}>
      <CreativeContainer />
      <AboutMeConatiner />
      <RecentWorkContainer />
    </Stack>
  );
}
