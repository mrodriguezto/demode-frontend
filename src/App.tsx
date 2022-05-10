import { Toaster } from "react-hot-toast";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Routes from "./components/Routes";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <div id='content'>
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
    </AuthProvider>
  );
}

export default App;
