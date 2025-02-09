import { useEffect } from "react";

useEffect;
const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};
export default usePageTitle;
