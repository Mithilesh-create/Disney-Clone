import requests from "../pages/api/Requests";
import GenreArea from "./GenreArea";

function DisplayArea() {
  return (
    <>
      <GenreArea fetchUrl={requests.fetchTrending} Title="Trending" />
      <GenreArea fetchUrl={requests.fetchNetflixOrignals} Title="Orignals" />
      <GenreArea fetchUrl={requests.fetchActionMovies} Title="Action" />
      <GenreArea fetchUrl={requests.fetchComedyMovies} Title="Comedy" />
      <GenreArea fetchUrl={requests.fetchDocumentries} Title="Documentary" />
      <GenreArea fetchUrl={requests.fetchHorrorMovies} Title="Horror" />
      <GenreArea fetchUrl={requests.fetchRomanceMovies} Title="Romance" />
    </>
  );
}

export default DisplayArea;
