function pnumber()
{
	var x;
	x=prompt("Enter your phone number :");
	console.log(x);

	if(x=='')
	{
		alert("please fill up!!");
	}
	else{
	let re1;
	re1=/^(\+)?(88)?01[0-9]{9}$/;
	alert(re1.test(x));
}
}
function email()
{
	var x1;
	x1=prompt("Enter your email no :");
	console.log(x1);
		if(x1=='')
	{
		alert("please fill up!!");
	}
	else{


	let re2;
	re2=/^([a-zA-z0-9].?)+[^.]@([a-zA-z0-9].?)+[^.]$/;
	alert(re2.test(x1));
}
}
function pcode()
{
	var x2;
	x2=prompt("Enter your postcode :");
	console.log(x2);
		if(x2=='')
	{
		alert("please fill up!!");
	}
	else{


	let re;
	re=/^[0-9]{4}$/;
	alert(re.test(x2));
}
}