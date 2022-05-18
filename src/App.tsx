import { Toaster } from "react-hot-toast";

import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Routes } from "./components/Routes";
import AuthProvider from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store";

const AppState = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <Provider store={store}>{children}</Provider>
    </AuthProvider>
  );
};

const App = () => {
  return (
    <AppState>
      <Header />
      <div className='pb-14' id='content'>
        <Routes />
      </div>
      <Footer />
      <Toaster
        toastOptions={{
          className: "bg-lightGray text-white rounded-sm font-title",
          duration: 4000,
        }}
        position='bottom-center'
      />
    </AppState>
  );
};

export default App;
