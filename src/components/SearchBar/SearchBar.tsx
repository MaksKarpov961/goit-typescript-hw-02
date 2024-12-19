import { FormEvent } from "react";
import s from "./SearchBar.module.css";
import { toast, Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const query: string = (
      form.elements.namedItem("query") as HTMLInputElement
    ).value.trim();
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
