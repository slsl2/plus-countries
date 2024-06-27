import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { CountryList } from "./components/CountryList";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CountryList />
    </QueryClientProvider>
  );
}

export default App;
