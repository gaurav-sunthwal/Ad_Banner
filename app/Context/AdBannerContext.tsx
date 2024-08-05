"use client";
//@ts-nocheck

import React, { createContext, useState, ReactNode, useContext } from "react";

const AppContext = createContext<any>(undefined);

export function AppWraper({ children }: { children: React.ReactNode }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
