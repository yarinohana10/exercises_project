// הקובץ הזה יהיה אחראי על כל רשימת הסרטים מה שאומר שהוא יהיה אחראי על כל הבקשות API 
// ועל הפונק שעושה לולאה על המידע שנקבל מה API ואז מייצרת את כל הפריטים  
// כאשר כל פריט יהיה בנוי בתוך מחלקה בשם tvItem שזה יהיה בקובץ נפרד
import tvItem from "./tvItem.js";

export const doApi = async(search) => {
    let url = `https://api.tvmaze.com/search/shows?q=${search}`
    document.querySelector("#id_parent").innerHTML = `<h2> loding...</h2>`;
    let res = await axios.get(url);
    console.log(res.data);
    createlist(res.data);
    
}
// ar = res.data המידע שחוזר מהבקשה שלנו
const createlist = (ar) => {
    // מה שנעשה ל id_parent נרוקן אותו כדי שאחרי זה בחיפוש לא יהיה לי כפל של פעולות
    document.querySelector("#id_parent").innerHTML = "";
    ar.forEach(item => {
        // item.show  כי המידע נמצא בו
        let tvshow = new tvItem("#id_parent" ,item.show);
        tvshow.render();    
    });


}