import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [articles, setArticles] = useState([]);

  // Funzione per aggiungere un nuovo articolo
  function addArticle(newArticle) {
    setArticles([...articles, newArticle]);
  }

  return (
    <>
      <Header />
      <Main articles={articles} onAddArticle={addArticle} />
      <Footer />
    </>
  );
}

export default App;