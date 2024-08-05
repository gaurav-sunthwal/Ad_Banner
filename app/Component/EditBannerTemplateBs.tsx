"use client"
import React, { useState } from 'react';
import { Box, Button, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { IoMdCloudUpload } from 'react-icons/io';

const EditBannerTemplateBs = ({ banner, onSave, onClose }: any) => {
  const [formData, setFormData] = useState(banner);
  const { isOpen, onOpen, onClose: onModalClose } = useDisclosure();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onModalClose();
  };

  return (
    <Modal isOpen={isOpen || true} onClose={() => { onModalClose(); onClose(); }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Banner</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLabel>Title</FormLabel>
          <Input name="title" value={formData.title} onChange={handleChange} />
          <FormLabel>Description</FormLabel>
          <Input name="description" value={formData.description} onChange={handleChange} />
          <FormLabel>CTA</FormLabel>
          <Input name="cta" value={formData.cta} onChange={handleChange} />
          <FormLabel>Background Image</FormLabel>
          <Input name="image" value={formData.image} onChange={handleChange} />
          <FormLabel>Style</FormLabel>
          <Input name="style" value={formData.style} onChange={handleChange} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSave}>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditBannerTemplateBs;