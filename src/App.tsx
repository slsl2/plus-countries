import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { CountryList } from "./components/CountryList";
import GlobalStyle from "./styles/GlobalStyle.tsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <CountryList />
      </QueryClientProvider>
    </>
  );
}

export default App;
