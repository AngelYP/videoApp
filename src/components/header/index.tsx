import { FunctionalComponent, h } from "preact";
import style from "./header.css";

const Header: FunctionalComponent = () => {
  return (
    <header class={style.header}>
      <h1>Accedo app</h1>
    </header>
  );
};

export default Header;
