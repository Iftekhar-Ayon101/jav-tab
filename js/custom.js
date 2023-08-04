var btn = document.querySelectorAll('.tab-btn');
var tab = document.querySelectorAll('.tab');
 
 function reset(){
 	for (var i = 0; i < tab.length; i++) {

 		tab[i].style.display = "none";	
 		btn[i].style.backgroundColor = "#111";
 	}

 	}
 	function tabOne()
 	{
 		reset();
 		tab[0].style.display = "block";	
 		btn[0].style.backgroundColor = "#f90100";

 	}tabOne();

 	for (let a = 0; a < btn.length; a++) {
 		btn[a].addEventListener('click', function(){

 			reset();
 		tab[a].style.display = "block";	
 		btn[a].style.backgroundColor = "#f90100";
 		});
 	}