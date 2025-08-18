// QueryProvider.js
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { customQueryClient } from "./QueryClient";

export const QueryProvider = ({ children }) => (
  <QueryClientProvider client={customQueryClient}>{children}</QueryClientProvider>
);
