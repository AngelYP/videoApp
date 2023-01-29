import { Fragment, FunctionComponent, h } from "preact";
import { StateUpdater, useEffect, useState } from "preact/hooks";
import Cover from "../cover/Cover";
import style from "./carousel.css";

const Carousel: FunctionComponent<{
  items: Array<Object>;
  setCurrentMovie: StateUpdater<Object | null>;
  title: string;
  prefix: string;
}> = ({ items, setCurrentMovie, title, prefix }) => {
  const [currentIndex, setCurrentIndex] = useState<null | number>(null);

  useEffect(() => {
    const element = document.getElementById(`${prefix}-${currentIndex}`);
    if (element) {
      console.log(element);

      element.focus();
    }
  }, [currentIndex]);

  useEffect(() => {
    const setFocus = ({ keyCode }: { keyCode: number }) => {
      if (currentIndex === null) {
        if (keyCode > 36 && keyCode < 41) {
          setCurrentIndex(0);
        }
      } else {
        if (keyCode === 37) {
          const nextIndex = currentIndex > 0 ? currentIndex - 1 : 0;
          setCurrentIndex(nextIndex);
        }
        if (keyCode === 39) {
          setCurrentIndex(currentIndex + 1);
        }
      }

      if (keyCode === 13) {
        document.getElementById(`${prefix}-${currentIndex}`)?.click();
      }
    };

    window.addEventListener("keydown", setFocus);

    return () => window.removeEventListener("keydown", setFocus);
  }, [currentIndex]);

  if (!items.length) return null;

  return (
    <Fragment>
      <div class={style.carouselTitle}>{title}</div>
      <div class={style.container}>
        <div class={style.carousel}>
          {items.map((item: any, index: number) => (
            <div class={style.item}>
              <Cover
                image={item.image}
                data={item.summary}
                onClick={() => {
                  setCurrentMovie(item);
                }}
                navId={`${prefix}-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Carousel;
