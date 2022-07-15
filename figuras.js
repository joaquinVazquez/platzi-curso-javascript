//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado (lado){
    return lado * 4;
}
perimetroCuadrado();

function areaCuadrado (lado){
    return lado * lado;
}
areaCuadrado();

console.groupEnd();

//Código del triángulo
console.group("Triangulo");

function perimetroTriagulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
perimetroTriagulo();

function areaTriangulo(base, altura){
    return base * altura / 2;
}
areaTriangulo();
console.groupEnd();

//Código del circulo
console.group("Circulo");
//Diametro
function diametroCirculo(radio){
    return radio * 2;
};
diametroCirculo();
//PI
const pi = Math.PI; 
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi; 
};
perimetroCirculo();
//Área
function areaCirculo (radio){
    return (radio * radio) * pi;
};
areaCirculo();
console.groupEnd("");
