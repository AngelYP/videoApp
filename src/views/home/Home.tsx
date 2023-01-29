import { FunctionComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import Carousel from "../../components/carousel/Carousel";
import { getMoviesData } from "../../services";
import Player from "../player/Player";
import "./home.css";

type MoviesData = {
  id: number;
  image: string;
  mediaUrl: string;
  name: string;
  number: number;
  season: number;
  summary: string;
  type: string;
};

const Home: FunctionComponent = () => {
  const [data, setData] = useState<null | Array<MoviesData>>(null);
  const [watchedMovies, setWatchedMovies] = useState<null | Array<Object>>(
    null
  );
  const [currentMovie, setCurrentMovie] = useState<null | Object>(null);

  const getData = async () => {
    const fetchedData = data || (await getMoviesData());
    const moviesProgress = JSON.parse(
      localStorage.getItem("movies_progress") || "{}"
    );
    setData(fetchedData);
    setWatchedMovies(
      fetchedData.filter(({ id }: MoviesData) => moviesProgress[id])
    );
  };

  useEffect(() => {
    getData();
  }, [currentMovie]);

  const handleReturnHome = () => setCurrentMovie(null);

  if (!data) return null;
  if (currentMovie)
    return (
      <div class="home">
        <Player data={currentMovie} handleReturnHome={handleReturnHome} />
      </div>
    );
  return (
    <div class="home">
      <Carousel
        items={data}
        setCurrentMovie={setCurrentMovie}
        title="Movies"
        prefix="movies"
      />
      <Carousel
        items={watchedMovies || []}
        setCurrentMovie={setCurrentMovie}
        title="Movies watched"
        prefix="watched"
      />
    </div>
  );
};

export default Home;
