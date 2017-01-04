
var Piano = 0;
var container0 = document.getElementById('audioConteneur');


container0.innerHTML += '<audio id="SIX00" src="audio/as01.wav.mp3" ></audio>';
container0.innerHTML += '<audio id="LA00" src="audio/a01.wav.mp3" ></audio>';
container0.innerHTML += '<audio id="SI00" src="audio/b01.wav.mp3" ></audio>';

for (var Piano = 0; Piano < 5; Piano++) {
	container0.innerHTML += '<audio id="DO'+ Piano +'" src="audio/c'+ Piano +'.wav.mp3" ></audio>';
	container0.innerHTML += '<audio id="RE'+ Piano +'" src="audio/d'+ Piano +'.wav.mp3" ></audio>';
	container0.innerHTML += '<audio id="REX'+ Piano +'" src="audio/cs'+ Piano +'.wav.mp3" ></audio>';
	container0.innerHTML += '<audio id="MI'+ Piano +'" src="audio/e'+ Piano +'.wav.mp3" ></audio>';
	container0.innerHTML += '<audio id="MIX'+ Piano +'" src="audio/ds'+ Piano +'.wav.mp3" ></audio>';
	container0.innerHTML += '<audio id="FA'+ Piano +'" src="audio/f'+ Piano +'.wav.mp3" ></audio>';
	container0.innerHTML += '<audio id="SOL'+ Piano +'" src="audio/g'+ Piano +'.wav.mp3" ></audio>';
	container0.innerHTML += '<audio id="SOLX'+ Piano +'" src="audio/fs'+ Piano +'.wav.mp3" ></audio>';
	container0.innerHTML += '<audio id="LA'+ Piano +'" src="audio/a'+ Piano +'.wav.mp3" ></audio>';
	container0.innerHTML += '<audio id="LAX'+ Piano +'" src="audio/gs'+ Piano +'.wav.mp3" ></audio>';
	container0.innerHTML += '<audio id="SI'+ Piano +'" src="audio/b'+ Piano +'.wav.mp3" ></audio>';
	container0.innerHTML += '<audio id="SIX'+ Piano +'" src="audio/as'+ Piano +'.wav.mp3" ></audio>';
	pianoCreation();
}

var audio00 = document.getElementById("LA00");
var audio00x = document.getElementById("SIX00");	
var audio01 = document.getElementById("SI00");

var audio0 = document.getElementById("DO0");
var audio1 = document.getElementById("RE0");
var audio2 = document.getElementById("MI0");
var audio3 = document.getElementById("FA0");
var audio4 = document.getElementById("SOL0");
var audio5 = document.getElementById("LA0");
var audio6 = document.getElementById("SI0");

var audio0x = document.getElementById("REX0");
var audio1x = document.getElementById("MIX0");
var audio2x = document.getElementById("SOLX0");
var audio3x = document.getElementById("LAX0");
var audio4x = document.getElementById("SIX0");

var audio7 = document.getElementById("DO1");
var audio8 = document.getElementById("RE1");
var audio9 = document.getElementById("MI1");
var audio10 = document.getElementById("FA1");
var audio11 = document.getElementById("SOL1");
var audio12 = document.getElementById("LA1");
var audio13 = document.getElementById("SI1");

var audio5x = document.getElementById("REX1");
var audio6x = document.getElementById("MIX1");
var audio7x = document.getElementById("SOLX1");
var audio8x = document.getElementById("LAX1");	
var audio9x = document.getElementById("SIX1");


var audio14 = document.getElementById("DO2");
var audio15 = document.getElementById("RE2");
var audio16 = document.getElementById("MI2");
var audio17 = document.getElementById("FA2");
var audio18 = document.getElementById("SOL2");
var audio19 = document.getElementById("LA2");
var audio20 = document.getElementById("SI2");

var audio10x = document.getElementById("REX2");
var audio11x = document.getElementById("MIX2");
var audio12x = document.getElementById("SOLX2");
var audio13x = document.getElementById("LAX2");	
var audio14x = document.getElementById("SIX2");

function pianoNone(){
	
	document.getElementById('TouchesConteneur00').style.display='none';
	document.getElementById('TouchesConteneur0').style.display='none';
	document.getElementById('TouchesConteneur1').style.display='none';
	document.getElementById('TouchesConteneur2').style.display='none';
	document.getElementById('TouchesConteneur3').style.display='none';
	document.getElementById('TouchesConteneur4').style.display='none';
}

function pianoCreation(){
	var clavier = document.getElementById('TouchesConteneur');
	var containerN00 = document.getElementById("TouchesNoires00");
	var containerB00 = document.getElementById("TouchesBlanches00");	
	var containerN0 = document.getElementById("TouchesNoires0");
	var containerB0 = document.getElementById("TouchesBlanches0");	
	var containerN1 = document.getElementById("TouchesNoires1");
	var containerB1 = document.getElementById("TouchesBlanches1");
	var containerN2 = document.getElementById("TouchesNoires2");
	var containerB2 = document.getElementById("TouchesBlanches2");
	var containerN3 = document.getElementById("TouchesNoires3");
	var containerB3 = document.getElementById("TouchesBlanches3");
	var containerN4 = document.getElementById("TouchesNoires4");
	var containerB4 = document.getElementById("TouchesBlanches4");
	var container000Txt = 'z';
	var container001Txt = 'qs';
	var container00Txt = 'etyuo';
	var container01Txt = 'dfghjklm';
	var container10Txt = 'zetyuzetyuzetyu';
	var container11Txt = 'qsdfghjqsdfghjqsdfghj';
	/*
		
	*/
	
	//-------------
	if(Piano == 0){
	/*	var y = 0;
		for (var i = 0; i < 1; i++) {
			var res = container000Txt.charAt(y);
			containerN00.innerHTML += "<a onclick='play0"+ y +"x()' id='TouchesNoiresConteneur00"+ y +"' class='TouchesNoiresConteneur'><span style='color: white;'>"+ res +"</span></a>";
			y = y + 1;
		}
		y=0; 
		for (var i = 0; i < 2; i++) {
			var res = container001Txt.charAt(y);
			containerB00.innerHTML += "<a onclick='play0"+ y +"()' id='TouchesBlanchesConteneur00"+ y +"' class='TouchesBlanchesConteneur'><span>"+ res +"</span></a>";
			y = y + 1;
	}*/
		var y = 0;
		for (var i = 0; i < 5; i++) {
			var res = container10Txt.charAt(y);
			containerN0.innerHTML += "<a onclick='play"+ y +"x()' id='TouchesNoiresConteneur0"+ y +"' class='TouchesNoiresConteneur'><span style='color: white;'>"+ res +"</span></a>";
			y = y + 1;
		}
		y=0; 
		for (var i = 0; i < 7; i++) {
			var res = container11Txt.charAt(y);
			containerB0.innerHTML += "<a onclick='play"+ y +"()' id='TouchesBlanchesConteneur0"+ y +"' class='TouchesBlanchesConteneur'><span>"+ res +"</span></a>";
			y = y + 1;
		}
	}
	//---------------
	if(Piano == 1){
		var y = 5;
		for (var i = 0; i < 5; i++) {
			var res = container10Txt.charAt(y);
			containerN1.innerHTML += "<a onclick='play"+ y +"x()' id='TouchesNoiresConteneur1"+ y +"' class='TouchesNoiresConteneur'><span style='color: white;'>"+ res +"</span></a>";
			y = y + 1;
		}
		y=7; 
		for (var i = 0; i < 7; i++) {
			var res = container11Txt.charAt(y);
			containerB1.innerHTML += "<a onclick='play"+ y +"()' id='TouchesBlanchesConteneur1"+ y +"' class='TouchesBlanchesConteneur'><span>"+ res +"</span></a>";
			y = y + 1;
		}
	}
	//---------------
	if(Piano == 2){
		var y = 10;
		for (var i = 0; i < 5; i++) {
			var res = container10Txt.charAt(y);
			containerN2.innerHTML += "<a onclick='play"+ y +"x()' id='TouchesNoiresConteneur2"+ y +"' class='TouchesNoiresConteneur'><span style='color: white;'>"+ res +"</span></a>";
			y = y + 1;
		}
		y=14; 
		for (var i = 0; i < 7; i++) {
			var res = container11Txt.charAt(y);
			containerB2.innerHTML += "<a onclick='play"+ y +"()' id='TouchesBlanchesConteneur2"+ y +"' class='TouchesBlanchesConteneur'><span>"+ res +"</span></a>";
			y = y + 1;
		}
	}
}
