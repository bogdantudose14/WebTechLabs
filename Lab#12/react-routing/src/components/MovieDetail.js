import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const params = useParams();

  //access the URL parameters using the useParams() hook
  let id = params.movieId;

  return (
    <section>
      <h1>Movie Detail</h1>
      <p>{params.movieId}</p>
    </section>
  );
};

export default MovieDetail;
