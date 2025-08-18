import { QueryClient } from "@tanstack/react-query";

const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchInterval: 60 * 1000 * 180,
      suspense: false,
      staleTime: 60 * 1000 * 180,
      gcTime: 60 * 1000 * 180,
    },
    mutations: {
      retry: 0,
    },
  },
};

export const customQueryClient = new QueryClient(queryClientConfig);
