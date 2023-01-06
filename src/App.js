import "./App.css";
import { useState, setShow } from "react";
import Moviecard from "./components/Moviecard";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([
    {
      title: "Mountain Devil",
      id: "1",
      description:
        "A team of investigative journalists set out to find out the truth",
      rating: "16.9",
      pooster:
        "https://img.bflix.gg/resize/186x286/0e/bd/0ebd5fe83f5a5f7055089d3390727e1c/0ebd5fe83f5a5f7055089d3390727e1c.jpg",
    },
    {
      title: "Ripdt2",
      id: "2",
      description:
        "Having cleared his name, genius mechanic Lino has only one goal in mind",
      rating: "7.2",
      pooster:
        "https://img.bflix.gg/resize/186x286/22/b6/22b63fad7b365af0364918d57de38a8d/22b63fad7b365af0364918d57de38a8d.jpg",
    },
    {
      title: "Robocom",
      id: "3",
      rating: "1.9",
      pooster:
        "https://img.bflix.gg/resize/186x286/54/c5/54c5c08273639294fa2016d8e9d1fd7e/54c5c08273639294fa2016d8e9d1fd7e.jpg",
      description:
        "Parzaan Dastur is an Indian actor and writer. He is best remembered as the cute kid in the Dhara",
    },
    {
      title: "the lost",
      id: "4",
      description:
        "her younger brother on Halloween night. The siblings struggle to survive as Art's true nature is revealed.",
      rating: "19.2",
      pooster:
        "https://img.bflix.gg/resize/186x286/92/19/921937f860ce4ff635afa632383da2bd/921937f860ce4ff635afa632383da2bd.jpg",
    },
    {
      title: "th vow",
      id: "5",
      description:
        "A team of investigative journalists set out to find out the truth",
      rating: "1.0",
      pooster:
        "https://img.bflix.gg/resize/186x286/bd/83/bd83f244ae72cca679ab93054dcb0754/bd83f244ae72cca679ab93054dcb0754.jpg",
    },
    {
      title: "the Dark summer",
      id: "6",
      description:
        "A team of investigative journalists set out to find out the truth",
      rating: "9.2",
      pooster:
        "https://img.bflix.gg/resize/186x286/4e/56/4e56d050f6d2578f1495dbf348e0becf/4e56d050f6d2578f1495dbf348e0becf.jpg",
    },
    {
      title: "lovley day",
      id: "7",
      description:
        "A team of investigative journalists set out to find out the truth",
      rating: "13.7",
      pooster:
        "https://img.bflix.gg/resize/186x286/ca/8c/ca8c44f24f30406565fdf46875392c31/ca8c44f24f30406565fdf46875392c31.jpg",
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      <div className="top-section">
        <input
          type="text"
          placeholder="try to find your movie"
          onChange={(el) => setSearch(el.target.value)}
        />
        <button onClick={() => setShow(true)}>Add new movie</button>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <p>
              Now you know how to use HTML, CSS, and JavaScriptto create, style,
              and make interactive web pages. The next step is to publish your
              website,so that the rest of the world can see your work. There are
              tons of hosting services to choose from.We have made one for you,
              for free:
            </p>
          }
        />
        <Route
          path="/movies"
          element={
            <div className="card-list">
              {movies
                .filter((el) => el.title.includes(search))
                .map((el) => (
                  <Moviecard movies={el} />
                ))}
            </div>
          }
        />
        <Route path="/hello" element={<h2>hello </h2>} />
      </Routes>
      <div style={{ height: "200px", backgroundColor: "red" }}></div>
      <Modal />
    </div>
  );
}

export default App;
