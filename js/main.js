const botonDerecha = document.getElementById("derecha");
const botonIzquierda = document.getElementById("izquierda");

const slider = document.getElementById("slider");
let sliderSection = document.getElementsByClassName("sliderSection"); //Agarra todos los elementos de clase sliderSection. Es un arreglo
let sliderSectionLast = sliderSection[sliderSection.length-1]; //Toma al ultimo elemento de la galeria


slider.insertAdjacentElement("afterbegin", sliderSectionLast); //Inserta un elemento donde queramos, Pasamos donde lo queremos y que elemento queremos.
                                                                //en este caso, vamos a insertar el ultimo elem (sliderLast), antes del inicio (afterbegin)!