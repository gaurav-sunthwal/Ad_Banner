import {
  Box,
  Button,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";
import styles from "../globals.css";
import { AdBannerProps } from ".";
const AdBanner: React.FC<AdBannerProps> = ({ banner, onEdit }) => {
  return (
    <Box
      className={`${styles.banner} ${styles[banner.style]}`} // Apply dynamic style based on the banner style
      bgImage={`url(${banner.image})`}
      bgSize="cover"
      bgPosition="center"
      p={4}
      color="white"
      position="relative"
      borderRadius="md"
      overflow="hidden"
    >
      <IconButton
        icon={<MdEdit />}
        onClick={() => onEdit(banner.id)}
        position="absolute"
        top={2}
        right={2}
        colorScheme="teal"
        aria-label="Edit banner"
      />
      <Heading>{banner.title}</Heading>
      <Text>{banner.description}</Text>
      <Button mt={4} colorScheme="yellow">
        {banner.cta}
      </Button>
      <Image
        src={banner.image}
        alt={banner.title}
        className={styles.bannerImage}
      />
    </Box>
  );
};

export default AdBanner;
