import { Fragment, FunctionComponent, h } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";

const Navigator: FunctionComponent<{
  children: any;
  orientation: "vertical" | "horizontal";
  prefix: string;
}> = ({ children, prefix }) => {
  const [currentFocus, setCurrentFocus] = useState<any>(null);

  // const setFocus = useCallback(
  //   ({ keyCode }: { keyCode: number }) => {
  //     const defaultFocus = `${prefix}-0`;
  //     console.log(currentFocus);

  //     if (keyCode > 36 && keyCode < 41) {
  //       if (currentFocus) {
  //         const currentIndex = Number(currentFocus.split("-")[1]);
  //         if (keyCode === 38 || keyCode === 39) {
  //           setCurrentFocus(`${prefix}-${currentIndex + 1}`);
  //         } else if (keyCode === 37 || keyCode === 40) {
  //           setCurrentFocus(`${prefix}-${currentIndex - 1}`);
  //         }
  //       } else {
  //         setCurrentFocus(defaultFocus);
  //       }
  //     }
  //   },
  //   [currentFocus]
  // );

  useEffect(() => {
    console.log(currentFocus);
  }, [currentFocus]);

  useEffect(() => {
    const setFocus = ({ keyCode }: { keyCode: number }) => {
      const defaultFocus = `${prefix}-0`;
      console.log(currentFocus);

      if (keyCode > 36 && keyCode < 41) {
        if (currentFocus) {
          const currentIndex = Number(currentFocus.split("-")[1]);
          if (keyCode === 38 || keyCode === 39) {
            setCurrentFocus(`${prefix}-${currentIndex + 1}`);
          } else if (keyCode === 37 || keyCode === 40) {
            setCurrentFocus(`${prefix}-${currentIndex - 1}`);
          }
        } else {
          setCurrentFocus(defaultFocus);
        }
      }
    };

    window.addEventListener("keydown", setFocus);

    // return () => window.removeEventListener("keydown", setFocus);
  }, [currentFocus]);

  return <Fragment>{children}</Fragment>;
};

export default Navigator;
