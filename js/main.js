
const slider = document.getElementById("slider");
let sliderSection = document.getElementsByClassName("sliderSection"); //Agarra todos los elementos de clase sliderSection. Es un arreglo
let sliderSectionLast = sliderSection[sliderSection.length -1]; //Toma al ultimo elemento de la galeria

const botonDerecha = document.getElementById("derecha");
const botonIzquierda = document.getElementById("izquierda");


/*insertAdjacentElement tiene cuatro parametros! Insertar antes del comienzo, despues del comienzo
antes del final, y después del final*/

slider.insertAdjacentElement("afterbegin", sliderSectionLast); //Inserta un elemento donde queramos, Pasamos donde lo queremos y que elemento queremos.
                                                                //en este caso, vamos a insertar el ultimo elem (sliderLast), antes del inicio (afterbegin)!


function next(){
    let sliderSectionFirst = document.getElementsByClassName("sliderSection")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all .6s";
    setTimeout(function(){
        slider.style.transition = "none"; //quito la transicion
        slider.insertAdjacentElement("beforeend", sliderSectionFirst ); //Coloco la primera imagen antes q termine el slider, asi crea el efecto de scroll infinito
        slider.style.marginLeft = "-100%";
    }, 600); //SetTimeout es una funcion que recibe de parametros la funcion en si y el tiempo que queres q demore en hacerla. 
}

function back(){
    let sliderSection = document.getElementsByClassName("sliderSection");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all .6s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%"
    }, 600);

}

botonDerecha.addEventListener("click", function(){
    next();
})

botonIzquierda.addEventListener("click", ()=>{
    back();
})   


setInterval(function(){//Cada intervalos de 5s, se van a ejecutar la accion function
    next();
}, 5000);

