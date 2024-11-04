import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ handleSearchMore }) => {
  return (
    <button className={s.LoadMoreBtn} onClick={handleSearchMore} type="button">
      LoadMore
    </button>
  );
};

export default LoadMoreBtn;
