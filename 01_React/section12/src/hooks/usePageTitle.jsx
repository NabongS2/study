import { useEffect } from "react";

const usePageTitle = (title) => {

    useEffect(()=>{
        // DOM 요소 관례상 $를 붙임
        const $title = document.getElementsByTagName("title")[0];
        $title.innerText = title;
    }, [title])

}
export default usePageTitle;