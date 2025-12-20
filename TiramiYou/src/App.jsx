import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Anfahrt from "./Anfahrt.jsx";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28">
        <Anfahrt />
      </main>
      <Footer />
    </div>
  );
}

export default App;
