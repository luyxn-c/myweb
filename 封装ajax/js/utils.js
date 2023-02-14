// 工具函数
const serialize = param => {
	const results = [];

	for(const [key, value] of Object.entries(param)){

		results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
		
	}

	return results.join("&");

	//["username=yunmu","age=18"]
	//"username=yunmu"&"age=18"
}

//www,baidu.com&

//给URL添加参数
const addURLData = (url, data) => {
	if(!data) return "";

	const mark = url.includes("?") ? "&" : "?";

	return `${mark}${data}`;
}





//序列化成JSON格式的字符串
const serializeJSON = (data) => {
	return JSON.stringify(data);
}

export {serialize, addURLData, serializeJSON};