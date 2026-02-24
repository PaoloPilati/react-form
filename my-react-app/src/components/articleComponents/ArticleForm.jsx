import { useState } from "react";

function ArticleForm(props) {
  const [article, setArticle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (article.trim() === "") return;

    props.onAddArticle(article.trim());

    setArticle("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Write a new article"
        value={article}
        onChange={(event) => setArticle(event.target.value)}
      />

      <button type="submit" className="btn btn-primary">
        Add article
      </button>
    </form>
  );
}

export default ArticleForm;