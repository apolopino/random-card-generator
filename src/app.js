/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pinta = [" spades", " clubs", " hearts", " diams"];
  let num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  let randPinta = Math.floor(Math.random() * pinta.length);
  let pintaClass = pinta.[randPinta];
  let randNum = Math.floor(Math.random() * num.length);

  this.console.log(pinta[randPinta]);

  this.document.getElementById("numero").innerHTML = num[randNum];

  
  let element = document.getElementsByClassName("pinta");
  for (let i = 0 ; i < element.length ; i++) {
      element[i].className += pinta.[randPinta];
  }
  

};
