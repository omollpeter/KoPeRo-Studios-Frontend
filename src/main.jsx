import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Toaster } from 'sonner';
import './styles/global.css';
import './styles/index.css';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { CrewContextProvider } from './context/CrewContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CrewContextProvider>
      <AuthContextProvider>
        <App />
        <Toaster position='top-center' richColors />
      </AuthContextProvider>
    </CrewContextProvider>
  </StrictMode>
);
