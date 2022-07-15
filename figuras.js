//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm2");

console.groupEnd();

//Código del triángulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
);
const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriagulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriagulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm");
console.groupEnd();

//Código del circulo
console.group("Circulo");
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
//PI
const pi = Math.PI; 
console.log("El PI del circulo es: " + pi);
//Circunferencia
const perimetroCirculo = diametroCirculo * pi;
console.log("La circunderencia del circulo es: " + perimetroCirculo + "cm");
//Área
const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El área del circulo es: " + areaCirculo + "cm");

console.groupEnd("");
