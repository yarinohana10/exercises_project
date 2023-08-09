export const showLightBox = () => {
    document.querySelector("#id_lightwindow").style.display = "flex";
}

export const hideLightBox = () => {
    document.querySelector("#id_lightwindow").style.display = "hide";
}
// צריך לייצר פה איידי לכפתור קלואז ואז לבצע עם פונקצית סגירה וליצור לו איבנט שיסגור אותו
export const closeLightwindow = () => {
    const lightwindow = document.querySelector("#id_lightwindow");
    lightwindow.style.display = "none";
}

export const closewindow = () => {
    let close = document.querySelector("#btn_close");
    close.addEventListener("click" ,closeLightwindow);
}