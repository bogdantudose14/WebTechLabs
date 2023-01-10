import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const params = useParams();

  let id = params.movieId;

  //   console.log(params.movieId);
  return (
    <section>
      <h1>Movie Detail</h1>
      <p>{params.movieId}</p>
    </section>
  );
};

export default MovieDetail;
