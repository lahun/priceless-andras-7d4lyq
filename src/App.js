import "./styles.css";

import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />      
      <Footer/>
    </div>
  );
}