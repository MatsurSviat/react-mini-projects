import React from "react";
import { Collection } from "./Collection";
import "./index.scss";

const cats = [
  { name: "Все" },
  { name: "Море" },
  { name: "Горы" },
  { name: "Архитектура" },
  { name: "Города" },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [collection, setCollection] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState(1);
  const [page, setPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId ? `category=${categoryId}` : "";

    fetch(
      `https://64789e68362560649a2e238a.mockapi.io/photo_collection?page=${
        page + 1
      }&limit=3&${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Fetch error");
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((obj, i) => (
            <li
              onClick={() => setCategoryId(i)}
              key={obj.name}
              className={categoryId === i ? "active" : ""}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Идет загрузка...</h2>
        ) : (
          collection
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
            )
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <ul className="pagination">
        {[...Array(3)].map((_, i) => (
          <li onClick={() => setPage(i)} className={page === i ? "active" : ""}>
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
