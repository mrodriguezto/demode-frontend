import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./components/Router/Routes";

function App() {
  return (
    <>
      <Header />
      <div id='content'>
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default App;
