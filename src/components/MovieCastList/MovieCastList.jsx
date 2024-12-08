import css from "./MovieCastList.module.css";
import MovieCastMember from "../MovieCastMember/MovieCastMember";

export default function MovieCastList({ cast }) {
  const sortedCast = [...cast].sort((a, b) => {
    if (a.profile_path && !b.profile_path) {
      return -1;
    }
    if (!a.profile_path && b.profile_path) {
      return 1;
    }
    return 0;
  });

  return (
    <ul className={css.list}>
      {sortedCast.map((actor) => (
        <li key={actor.credit_id} className={css.item}>
          <MovieCastMember actor={actor} />
        </li>
      ))}
    </ul>
  );
}
