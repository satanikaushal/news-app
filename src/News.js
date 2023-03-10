import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export default function News(props) {
  console.log("news component called");
  const [page, setPage] = useState(0);
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    console.log("useeffect runned");
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_157898e9213ee0c454b87c659afed7f0d8645&language=en").then((response) => response.json()).then((response) => {
        console.log(response);
        setQuotes(response.results);
      }).catch((err) => console.error(err));
  }, [props, page]);
  function incre() {
    setPage(page + 1);
    console.log(page + 1);
  }
  function decre() {
    if (page >= 1) {
      setPage(page - 1);
      console.log(page - 1);
    }
  }

  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-bold py-2">
          {props.key1} news
        </h1>
        <div className="sm:grid sm:grid-cols-3">
          {quotes.map((res) => (
            <NewsItem
              key={res.description}
              title={res.title}
              description={res.description}
              link={res.link}
              url={res.image_url}
              date={res.pubDate}
              source={res.source_id}
            />
          ))}
        </div>
        <div className="flex justify-between px-3 mb-12">
          <button
            id="dec"
            disabled={page === 0 ? true : false}
            onClick={decre}
            className="border rounded p-2 bg-slate-200"
          >
            &larr; Prev{" "}
          </button>
          <button onClick={incre} className="border rounded p-2 bg-slate-200">
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
}
