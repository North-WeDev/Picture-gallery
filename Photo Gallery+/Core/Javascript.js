function main(){
	var m = document.getElementById("mainp");
	if(m.style.height == "0vh"){m.style.height="0vh";}
	else{m.style.height="0vh";} 
}

function cat1(){
	var exp = document.getElementById("pictures1");
	if(exp.style.height == "100vh")
	{exp.style.height="0vh";}
	else{exp.style.height="100vh";}
	
	var exp = document.getElementById("pictures2");
	var exp = document.getElementById("pictures3");
	if(exp.style.height == "0vh" )
	{
		exp.style.height="0vh";
	}
	else
	{
		exp.style.height="0vh";
	}
	
}

function cat2(){
	var exp = document.getElementById("pictures2");
	if(exp.style.height == "100vh" )
	{
		exp.style.height="0vh";
	}
	else
	{
		exp.style.height="100vh";
	}
	
	var exp = document.getElementById("pictures1");
	var exp = document.getElementById("pictures3");
	if(exp.style.height == "0vh" )
	{
		exp.style.height="0vh";
	}
	else
	{
		exp.style.height="0vh";
	}
}

function cat3(){
	var exp = document.getElementById("pictures3");
	if(exp.style.height == "100vh")
	{
		exp.style.height="0vh";
	}
	else
	{
		exp.style.height="100vh";
	}
	
	var exp = document.getElementById("pictures1");
	var exp = document.getElementById("pictures2");
	if(exp.style.height == "0vh" )
	{
		exp.style.height="0vh";
	}
	else
	{
		exp.style.height="0vh";
	}
}

/*Close*/

function close1(){
	var x=document.getElementById("pictures1");
	if(x.style.height=="0vh"){x.style.height="0vh"}
	else{x.style.height="0vh"}
}

function close2(){
	var x=document.getElementById("pictures2");
	if(x.style.height=="0vh"){x.style.height="0vh"}
	else{x.style.height="0vh"}
}

function close3(){
	var x=document.getElementById("pictures3");
	if(x.style.height=="0vh"){x.style.height="0vh"}
	else{x.style.height="0vh"}
}
