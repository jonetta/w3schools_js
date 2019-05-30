var dateCreator = document.querySelector('.dateCreator');

dateCreator.addEventListener("click", getDate);

function getDate(){
  document.querySelector("#date").innerHTML = Date();
}
