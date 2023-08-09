// טופס כאשר הפונק בו תאזין לכפתור חיפוש שיאסוף את המידע מהINPUT ויפעיל אתה doApi לפי מה שהיוזר כתב בתוך ה INPUT

import { doApi } from "./tvList.js";
export const declareEvents = () => {
    let id_input = document.querySelector("#id_input");
    let search_btn = document.querySelector("#search_btn");
    
    // (e) מאזין לאיבנט שבמקרה הזה זה קידאון וזה כל לחיצה על כתפור ולכן שמנו תנאי שזה יהיה אנטר
    id_input.addEventListener("keydown", (e) => {
        if(e.key == "Enter"){
            doApi(id_input.value);
        }
    })
    
    search_btn.addEventListener("click", () => {
        doApi(id_input.value);
    })
}