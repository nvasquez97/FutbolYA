//Tomado de StackOverFlow
document.onreadystatechange = function () {
  var state = document.readyState;
  if(state === 'complete') {
    document.getElementById('interactive');
    document.getElementsByClassName('loading')[0].style.display="none";
    document.getElementsByClassName('todo')[0].style.display="block";
  }
}//

function mostrarReserva()
{
	document.getElementsByClassName('reservaOc')[0].style.display='block';
}
