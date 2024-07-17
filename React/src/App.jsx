import HeaderComponent from "./components/header/HeaderComponent";
import MainComponent from "./components/main/MainComponent";
import FooterComponent from "./components/footer/FooterComponent";
import "./App.css";

function App() {
  return (
    <>
      <body className="container">
        <div className="header-body-section">
          <HeaderComponent />
          <MainComponent />
        </div>
        <FooterComponent />
      </body>
    </>
  );
}

export default App;
