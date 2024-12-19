import s from "./LoadMoreBtn.module.css";
interface LoadMoreBtnProps {
  handleSearchMore: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleSearchMore }) => {
  return (
    <button className={s.LoadMoreBtn} onClick={handleSearchMore} type="button">
      LoadMore
    </button>
  );
};

export default LoadMoreBtn;
