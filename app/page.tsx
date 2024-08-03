import { Box, Image, useDisclosure } from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";
import EditBannerTemplateBs from "./Component/EditBannerTemplateBs";
export default function Home() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box position="relative" width="100%" height="100vh">
      <Image
        width="100%"
        height="100%"
        objectFit="cover"
        alt="background"
        src="https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png"
      />
      
      <Box >
        <EditBannerTemplateBs />
      </Box>
    </Box>
  );
}
