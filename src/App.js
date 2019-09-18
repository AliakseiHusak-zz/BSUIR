import React from "react";
import Header from "./components/header/header";
import ContentPanel from "./components/contentPanel/contentPanel";
import Footer from "./components/footer/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentPanel />
      <Footer />
    </div>
  );
}

export default App;
