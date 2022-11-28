let w=window.innerWidth;  

document.onkeydown = document.onkeyup = document.onkeypress = function(event){
	let e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && e.keyCode == 123){
		mAlert();
		e.retturnValue = false;
		return (false);		
	}
}
function mAlert(){
	document.body.innerHTML = "禁止操作，请重新刷新网站";
}

window.onresize = function () {  
    if (w!=window.innerWidth){  
        document.body.innerHTML = "禁止操作，请重新刷新网站";
    }  
}  

setInterval(function () {
		debugger;
},100)

document.oncontextmenu = function(){ return false;}

