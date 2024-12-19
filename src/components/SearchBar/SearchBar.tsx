import s from "./SearchBar.module.css";

import { toast, Toaster } from "react-hot-toast";
const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim();
    if (query === "") {
      toast.error("The field cannot be empty");
      return;
    }
    onSubmit(query);
    form.reset();
  };
  return (
    <header className={s.header}>
      <Toaster position="top-center" reverseOrder={false} />
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.form_btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
