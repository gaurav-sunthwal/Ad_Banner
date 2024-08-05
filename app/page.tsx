//@ts-nocheck
"use client"
import React, { useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import bannersData from "./Data/bannersData.json"
import EditBannerTemplateBs from './Component/EditBannerTemplateBs';
import AdBanner from './Component/AdBanner';
const Home = () => {
  const [banners, setBanners] = useState(bannersData);
  const [editingBanner, setEditingBanner] = useState(null);

  const handleEdit = (id: number) => {
    setEditingBanner(banners.find(banner => banner.id === id));
  };

  const handleSave = (updatedBanner: any) => {
    setBanners(banners.map(banner => (banner.id === updatedBanner.id ? updatedBanner : banner)));
    setEditingBanner(null);
  };

  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {banners.map(banner => (
          <AdBanner key={banner.id} banner={banner} onEdit={handleEdit} />
        ))}
      </SimpleGrid>
      {editingBanner && (
        <EditBannerTemplateBs
          banner={editingBanner}
          onSave={handleSave}
          onClose={() => setEditingBanner(null)}
        />
      )}
    </Box>
  );
};

export default Home;