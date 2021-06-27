console.group("cuadrado")
const ladoCudrado= 5;
const perimerto = ladoCudrado *4;
const area = ladoCudrado * ladoCudrado;
console.log( "los lados del cuadrrado son:" + ladoCudrado)
console.log( "el perimetro del cuadro es:" + perimerto)
console.log( "el area del cuadro es:" + area )
console.groupEnd
console.group("triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo=4;
const alturaTriangulo=4;
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2
const perimetroTriangulo =ladoTriangulo2 + ladoTriangulo1 +baseTriangulo
console.log("los lados del triangulo miden " +
 ladoTriangulo1 +
 "cm, " +
  ladoTriangulo2 + 
  "cm, " +
  baseTriangulo + "cm ")
  console.log( "el perimetro del triangulo es:" + perimetroTriangulo)
  console.log( "el area del triangulo es:" + areaTriangulo)
console.groupEnd

