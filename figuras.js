//Acá interactuamos con el HTML
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

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
//Código del triángulo
console.group("Triangulo");

function perimetroTriagulo(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
}
perimetroTriagulo();

//Triangulo
//perimetro triangulo
function calcularPerimetroTriangulo(){
    const inputLadoUno = document.getElementById("inputLadoUnoTriangulo");
    const valueLadoUno = inputLadoUno.value;
    
    const inputLadoDos = document.getElementById("inputLadoDosTriangulo");
    const valueLadoDos = inputLadoDos.value;
    
    const inputBase = document.getElementById("inputBaseTriangulo");
    const valueBase = inputBase.value;

    const perimetro = perimetroTriagulo(valueLadoUno, valueLadoDos, valueBase);
    alert(perimetro);
}
//Area triangulo
function areaTriangulo(base, altura){
    return base * altura / 2;
}
areaTriangulo();
console.groupEnd();
function calcularAreaTriangulo(){
   
    const base = Number(document.getElementById("inputBaseTrianguloA").value);
    // const valueBase = inputBase.value;

    const altura = Number(document.getElementById("inputAlturaTriangulo").value);
    // const valueAltura = inputAltura.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}


//Código del circulo
console.group("Circulo");
//Diametro
function diametroCirculo(radio){
    return radio * 2;
};

function calcularDiametroCirculo(){
    const radio = Number(document.getElementById("inputRadioCirculo").value);

    const diametro = diametroCirculo(radio);
    alert(diametro);
}
diametroCirculo();
//PI
const pi = Math.PI; 
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi; 
};
perimetroCirculo();

function calcularCircunferenciaCirculo(){
    const inputRadioCircunferencia = Number(document.getElementById("inputRadioCirculo").value);

    const circunferencia = perimetroCirculo(inputRadioCircunferencia);
    alert(circunferencia);
}
//Área
function areaCirculo (radio){
    return (radio * radio) * pi;
};
areaCirculo();

function calcularAreaCirculo(){
    const inputRadioCirculo = Number(document.getElementById("inputRadioCirculo").value);

    const area = areaCirculo(inputRadioCirculo);
    alert(area);
}
console.groupEnd("");
