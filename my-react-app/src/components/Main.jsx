import ArticleForm from "./articleComponents/ArticleForm";

function Main({ articles, onAddArticle }) {
  return (
    <main className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <h1 className="mb-3">NEWSBLOG</h1>

      <ArticleForm onAddArticle={onAddArticle} />

      <p>Article List</p>
    </main>
  );
}

export default Main;