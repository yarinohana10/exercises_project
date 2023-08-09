import { closewindow, showLightBox } from "./lightbox.js";

export default class tvItem {
    constructor(parent, item) {
        this.parent = parent;
        this.title = item.name;
        this.year = item.premiered;
        this.rating = item.image.average;
        this.img = item.image.medium;
        this.info = item.summary;
    }

    render() {
        let article = document.createElement("article");
        article.className = "col-md-4";
        document.querySelector(this.parent).append(article);
        article.innerHTML = `<div class="border shadow p-2 h-100 overflow-hidden">
                    <img src="${this.img}" class="float-start me-2 col-4" >
                    <h2>${this.title}</h2>
                    <div>${this.year}:</div>
                    <div>${this.rating}:</div>
                    <button class="btn btn-dark info-btn">More info</button>
                </div>`
        let infobtn = article.querySelector(".info-btn");
        infobtn.addEventListener("click", () => {
            showLightBox();
        })        
        closewindow();
    }
}