import { declareEvents } from "./tvForm.js";
import { doApi } from "./tvList.js";

const init = () => {
    doApi("batman");
    declareEvents();
}




init();