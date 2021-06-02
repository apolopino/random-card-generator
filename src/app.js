/* eslint-disable */
import "bootstrap";
import "./style.css";

const pinta = [" spades", " clubs", " hearts", " diams"];
const num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const pintas = document.getElementsByClassName("pinta");
const num2 = document.getElementById("numero");

function randomize() {
  let randPinta = Math.floor(Math.random() * pinta.length);
  console.log(pinta[randPinta]);
  let randNum = Math.floor(Math.random() * num.length);

  num2.innerHTML = num[randNum];

  //   Tengo que remover las clases antes del for
  /*
  Deberia: 
  1. identificar si hay una clase en objeto pintas que sea pinta. (for + if?)
  2. Remover esa clase
  3. Añadir la nueva clase
  */
  for (let i = 0; i < pintas.length; i++) {
    pintas[i].className += pinta[randPinta];
  }
}

window.onload = () => {
  randomize();
};

document.getElementById("boton").addEventListener("click", randomize);
