function promedio(){

let nota1=Number (prompt ("ingrese su nota"))
if (nota1 >= 3 && nota1 <= 5) {
    document.write("felicidades aprobo") 
}
else if(nota1<=2.9 && nota1>=0){
    document.write("Lastima no aprobaste")
}
else{
    alert("ingresaste una nota fuera de rango")
}
}