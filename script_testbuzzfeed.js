//Script Test Buzzfeed
var puntos = 0;
var diccionarioP1 = {1:"azul", 2:"rojo", 3:"verde", 4:"amarillo", 5:"negro", 6:"azulclaro"};
var diccionarioP2 = {1:"perro", 2:"gato", 3:"loro", 4:"ninguno"};
var diccionarioP3 = {1:"verde", 2:"verdeoscuro", 3:"verdeazulado", 4:"naranja"};
var diccionarioP4 = {1:"manzana", 2:"pera", 3:"coco", 4:"kiwi", 5:"naranja", 6:"fresas", 7:"sandia", 8:"platano"};
var diccionarioP5 = {1:"gameboy", 2:"play", 3:"xbox", 4:"switch"};

function selectAndCalculate(pregunta, valor) {
	if (pregunta == "p1") {
		botonesP1 = document.getElementsByClassName(pregunta);
		switch (valor) {
		case diccionarioP1[1]:
			puntos+=6;
			break;
		case diccionarioP1[2]:
			puntos+=5;
			break;
		case diccionarioP1[3]:
			puntos+=4;
			break;
		case diccionarioP1[4]:
			puntos+=3;
			break;
		case diccionarioP1[5]:
			puntos+=1;
			break;
		case diccionarioP1[6]:
			puntos+=2;
			break;
		}
		for (i = 0; i < botonesP1.length; i++) {
			if (botonesP1[i].value != valor) {
				botonesP1[i].disabled = true;
			}
		}
		diccionarioP1 = "";
	}else if (pregunta == "p2") {
		botonesP2 = document.getElementsByClassName(pregunta);
		switch (valor) {
		case diccionarioP2[1]:
			puntos+=8;
			break;
		case diccionarioP2[2]:
			puntos+=6;
			break;
		case diccionarioP2[3]:
			puntos+=4;
			break;
		case diccionarioP2[4]:
			puntos+=2;
			break;
		}
		for (i = 0; i < botonesP2.length; i++) {
			if (botonesP2[i].value != valor) {
				botonesP2[i].disabled = true;
			}	
		}
		diccionarioP2 = "";
	}else if (pregunta == "p3") {
		botonesP3 = document.getElementsByClassName(pregunta);
		switch (valor) {
		case diccionarioP3[1]:
			puntos+=2;
			break;
		case diccionarioP3[2]:
			puntos+=6;
			break;
		case diccionarioP3[3]:
			puntos+=4;
			break;
		case diccionarioP3[4]:
			puntos+=8;
			break;
		}
		for (i = 0; i < botonesP3.length; i++) {
			if (botonesP3[i].value != valor) {
				botonesP3[i].disabled = true;
			}	
		}
		diccionarioP3 = "";
	}else if (pregunta == "p4") {
		botonesP4 = document.getElementsByClassName(pregunta);
		switch (valor) {
		case diccionarioP4[1]:
			puntos+=2;
			break;
		case diccionarioP4[2]:
			puntos+=3;
			break;
		case diccionarioP4[3]:
			puntos+=4;
			break;
		case diccionarioP4[4]:
			puntos+=1;
			break;
		case diccionarioP4[5]:
			puntos+=7;
			break;
		case diccionarioP4[6]:
			puntos+=6;
			break;
		case diccionarioP4[7]:
			puntos+=5;
			break;
		case diccionarioP4[8]:
			puntos+=8;
			break;
		}
		for (i = 0; i < botonesP4.length; i++) {
			if (botonesP4[i].value != valor) {
				botonesP4[i].disabled = true;
			}	
		}
		diccionarioP4 = "";
	}else if (pregunta == "p5") {
		botonesP5 = document.getElementsByClassName(pregunta);
		switch (valor) {
		case diccionarioP5[1]:
			puntos+=8;
			break;
		case diccionarioP5[2]:
			puntos+=6;
			break;
		case diccionarioP5[3]:
			puntos+=2;
			break;
		case diccionarioP5[4]:
			puntos+=4;
			break;
		}
		for (i = 0; i < botonesP5.length; i++) {
			if (botonesP5[i].value != valor) {
				botonesP5[i].disabled = true;
			}	
		}
		diccionarioP5 = "";
	}

	if (diccionarioP1 == "" && diccionarioP2 == "" && diccionarioP3 == "" && diccionarioP4 == "" && diccionarioP5 == "") {
		calculateAndDisplayRes(puntos);
	}

}

function calculateAndDisplayRes(puntos) {
	titulo = document.getElementById("tituloRes");
	imagen = document.getElementById("imagenRes");
	cuerpo = document.getElementById("cuerpoRes");

	if (puntos<=38 && puntos>=32) {
		titulo.innerHTML = "Gojou Satoru";
		imagen.src = "./images/personajes/gojou_satoru.jpg";
		cuerpo.innerHTML = "Eres un intrepido y atrevido hechicero. El mejor de todo el mundo, y además, con un increible sentido del humor.";
	}else if (puntos<=31 && puntos>=24) {
		titulo.innerHTML = "Yuji Itadori";
		imagen.src = "./images/personajes/yuji_itadori2.jpg";
		cuerpo.innerHTML = "Eres el hechicero más fuerte en combate cuerpo a cuerpo y con una actitud férrea. Te gusta ayudar a los demas en todo lo que se pueda y eres el más popular.";
	}else if (puntos<=23 && puntos>=16) {
		titulo.innerHTML = "Megumi Fushiguro";
		imagen.src = "./images/personajes/megumi_fushiguro.jpg";
		cuerpo.innerHTML = "Eres una persona seria e introvertida, pero escondes un grandisimo potencial y serás uno de los mejores hechiceros del mundo.";
	}else if (puntos<=15) {
		titulo.innerHTML = "Kugisaki Nobara";
		imagen.src = "./images/personajes/kugisaki_nobara.jpg";
		cuerpo.innerHTML = "Eres una hechicera muy presumida, pero, con un carácter de hierro que te hará salir airosa de las peores peleas.";
	}

	showRes();

	$("#contenedorBotones").removeClass("invisible");
	$("#contenedorBotones").addClass("visible");
}

function showRes() {
	$("#modalRes").modal("toggle");
}

function reloadAndToTop () {
	location.href = "#";
	window.location.reload(true);
}