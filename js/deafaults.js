//默认参数
import {HTTP_GET, COTENT_TYPE_FORM_URLENCODED, COTENT_TYPE_JSON} from "./constants.js";
const DEFAULTS = {
	method: HTTP_GET,

	//请求头携带的数据
	params: null,
	//params:{
	//	username:yunmu,
	//	age:18
	//}

	//username=yunmu&age=18

	//请求体携带数据
	data: null,

	//data:{
	//	username:yunmu,
	//	age:18
	//}

	//data: FormData数据

	// 属性
	cotentType: COTENT_TYPE_FORM_URLENCODED,
	responseType:"",
	timeoutTime:0,
	withCredentials:false,

	//方法
	success(){},
	httpCodeError(){},
	error(){},
	abort(){},
	timeout(){}
}

export default DEFAULTS;