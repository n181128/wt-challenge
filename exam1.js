function exam(){
	var f=document.getElementById("un").value;
	var mail=document.getElementById("em").value;
	var ph=document.getElementById("mn").value;
	var PT=document.getElementById("pt").value;
	var c1 = document.getElementById("a1").checked;
	var country11=document.getElementsByClass("countries").value;
	var ff=/^(F|f)[a-zA-Z]+$/;
	var mailpat =/^[A-Za-z0-9_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,6}$/;
	var ph1=/(977)\d{7}$/;
	var ph2=/\d{4}-\d{4}-\d{4}$/;
	var PT1=/^(SBIN)\d[0-9]{6}$/;
	if(f.length<4 || f.length>9 || !ff.test(f)){
		document.getElementById("un").style.border="5px solid red";
		document.getElementById("u1").style.visibility="visible";
		setTimeout(()=>{document.getElementById('u1').style.display="none";
		document.getElementById("un").style.border="1px solid black";},2000);
		return false;
	}
	if(!mailpat.test(mail)){
		document.getElementById("em").style.border="5px solid red";
		document.getElementById("m1").style.visibility="visible";
		setTimeout(()=>{document.getElementById('m1').style.display="none";
		document.getElementById("em").style.border="1px solid black";},2000)
		return false;
	}
	if(!ph1.test(ph) && !ph2.test(ph))
	{
		document.getElementById("mn").style.border="5px solid red";
		document.getElementById("mn11").style.visibility="visible";
		setTimeout(()=>{document.getElementById('mn11').style.display="none";
		document.getElementById("mn").style.border="1px solid black";},2000)
		return false;
	}
	if(!country11=="INDIA"){
		var beer=confirm("Do you want beer ?");
		if(beer==true){
			alert("beer selected!");
		}
	}
	if(!PT1.test(PT)){
		document.getElementById("pt").style.border="5px solid red";
		document.getElementById("pt11").style.visibility="visible";
		setTimeout(()=>{document.getElementById('pt11').style.display="none";
		document.getElementById("pt").style.border="1px solid black";},2000)
		return false;
	}
}
	let arr=[{img:"url('one.jpg')"},{img:"url('two.jpg')"},{img:"url('three.jpg')"},{img:"url('four.jpg')"},{img:"url('five.jpg')"},{img:"url('six.jpg')"}];
	var i=0;
	var backgroundi=document.querySelector('.totalform');
	function changebg(){
		// console.log("i");
		backgroundi.style.backgroundColor='linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)';
		backgroundi.style.backgroundImage=arr[i].img;
		if(i<arr.length-1){
			i++;
		}
		else{
			i=0;
		}
	}
	setInterval(changebg,1000);
	window.onload=changebg;
	// if(!c1){
	// 	return false;
	// }