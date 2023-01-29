import { FunctionComponent } from "preact";
import { Fragment, h } from "preact";
import { useState } from "preact/hooks";
import style from "./cover.css";

const Cover: FunctionComponent<{
  image: string;
  data: string;
  onClick?: () => void;
  navId: string;
}> = ({ image, data, onClick, navId }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      class={style.cover}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      onFocus={() => setShowDescription(true)}
      onBlur={() => setShowDescription(false)}
      style={{
        backgroundImage: `url("${image}")`,
        transform: `scale(${showDescription ? 1.1 : 1})`,
      }}
      onClick={onClick}
      id={navId}
    >
      <div
        class={style.description}
        style={{
          visibility: showDescription ? "visible" : "hidden",
        }}
      >
        {data}
      </div>
    </div>
  );
};

export default Cover;
