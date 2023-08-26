import ReactDOM from 'react-dom/client'
import App from './Routes.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
      <Navbar />
      <App />
  </ChakraProvider>
)
