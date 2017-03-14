var divGig;
var divCanvas;
var divTasks;
var divDocs;
var divPrototypes;

window.onload = function(){
  divGig = document.getElementById("div-gig");
  divCanvas = document.getElementById("div-canvas");
  divTasks = document.getElementById("div-tasks");
  divDocs = document.getElementById("div-docs");
  divPrototypes = document.getElementById("div-prototypes");

  var lkGig = document.getElementById("lk-gig");
  lkGig.onclick = showHomeDivGig;
  var lkCanvas = document.getElementById("lk-canvas");
  lkCanvas.onclick = showDivCanvas;
  var lkTasks = document.getElementById("lk-tasks");
  lkTasks.onclick = showDivTasks;
  var lkDocs = document.getElementById("lk-docs");
  lkDocs.onclick = showDivDocs;
  var lkPrototypes = document.getElementById("lk-prototypes");
  lkPrototypes.onclick = showDivPrototypes;

  divCanvas.classList.add("hidden");
  divTasks.classList.add("hidden");
  divDocs.classList.add("hidden");
  divPrototypes.classList.add("hidden");
}

function showHomeDivGig() {
  divGig.classList.remove("hidden");
  divCanvas.classList.add("hidden");
  divTasks.classList.add("hidden");
  divDocs.classList.add("hidden");
  divPrototypes.classList.add("hidden");
}


function showDivCanvas(){
  divGig.classList.add("hidden");
  divCanvas.classList.remove("hidden");
  divTasks.classList.add("hidden");
  divDocs.classList.add("hidden");
  divPrototypes.classList.add("hidden");
}

function showDivTasks(){
  divGig.classList.add("hidden");
  divCanvas.classList.add("hidden");
  divTasks.classList.remove("hidden");
  divDocs.classList.add("hidden");
  divPrototypes.classList.add("hidden");
}

function showDivDocs(){
  divGig.classList.add("hidden");
  divCanvas.classList.add("hidden");
  divTasks.classList.add("hidden");
  divDocs.classList.remove("hidden");
  divPrototypes.classList.add("hidden");
}

function showDivPrototypes(){
  divGig.classList.add("hidden");
  divCanvas.classList.add("hidden");
  divTasks.classList.add("hidden");
  divDocs.classList.add("hidden");
  divPrototypes.classList.remove("hidden");
}
