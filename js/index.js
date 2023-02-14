import Ajax from "./ajax.js";

const ajax = (url, options) => {
	return new Ajax(url, options).getXHR();
}

const get = (url, options) => {
	return new Ajax(url, {...options, method:"GET"}).getXHR();
}

const post = (url, options) => {
	return new Ajax(url, {...options, method:"POST"}).getXHR();
}

const getJSON = (url, options) => {
	return new Ajax(url, {...options, method:"GET", responseType:"json"}).getXHR();
}

export {ajax, get, post, getJSON};




