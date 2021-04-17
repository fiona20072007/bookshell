import axios from "axios";

function getData(path){
    return axios.get(path)
}
function patchData(path, obj) {
    return axios.patch(path, obj)
}

export {
    getData, patchData
}