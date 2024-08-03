"use client"
//@ts-nocheck

import {
    Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdEdit } from "react-icons/md";

export default function EditBannerTemplateBs() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <div>
      <Box
        position="absolute"
        top={4}
        right={4}
        backgroundColor="#171717"
        borderRadius="50%"
        p={2}
        color="white"
        fontSize="24px"
        zIndex={1}
        _hover={{ bg: "#333" }}
        onClick={onOpen}
      >
        <MdEdit />
      </Box>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Banner</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Done
            </Button>
            <Button variant="ghost">Downlode</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
