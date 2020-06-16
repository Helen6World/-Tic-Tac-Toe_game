for (let i=0; i<9; i++) {
  document.getElementById('game').innerHTML +='<div class="block"></div>';
}

let move = 0;

document.getElementById('game').onclick = function(event) {
  console.log(event);
  if (event.target.className == 'block') {
    if (event.target.innerHTML == "") {
      if (move % 2 == 0) event.target.innerHTML = 'x';
      else event.target.innerHTML = '0';
      move++;
      checkWinner();
    }
  }
  function checkWinner() {
    let all_block = document.getElementsByClassName('block');
    if (all_block[0].innerHTML == 'x' && all_block[1].innerHTML == 'x' && all_block[2].innerHTML == 'x') {
      alert("Перемогли хрестики!");
      location.reload();
    }
    else if (all_block[3].innerHTML == 'x' && all_block[4].innerHTML == 'x' && all_block[5].innerHTML == 'x') {
      alert("Перемогли хрестики!");
      location.reload();
    }
    else if (all_block[6].innerHTML == 'x' && all_block[7].innerHTML == 'x' && all_block[8].innerHTML == 'x') {
      alert("Перемогли хрестики!");
      location.reload();
    }
    else if (all_block[0].innerHTML == 'x' && all_block[3].innerHTML == 'x' && all_block[6].innerHTML == 'x') {
      alert("Перемогли хрестики!");
      location.reload();
    }
    else if (all_block[1].innerHTML == 'x' && all_block[4].innerHTML == 'x' && all_block[7].innerHTML == 'x') {
      alert("Перемогли хрестики!");
      location.reload();
    }
    else if (all_block[2].innerHTML == 'x' && all_block[5].innerHTML == 'x' && all_block[8].innerHTML == 'x') {
      alert("Перемогли хрестики!");
      location.reload();
    }
    else if (all_block[0].innerHTML == 'x' && all_block[4].innerHTML == 'x' && all_block[8].innerHTML == 'x') {
      alert("Перемогли хрестики!");
      location.reload();
    }
    else if (all_block[2].innerHTML == 'x' && all_block[4].innerHTML == 'x' && all_block[6].innerHTML == 'x') {
      alert("Перемогли хрестики!");
      location.reload();
    }

    else if (all_block[0].innerHTML == '0' && all_block[1].innerHTML == '0' && all_block[2].innerHTML == '0') {
      alert("Перемогли нулики!");
      location.reload();
    }
    else if (all_block[3].innerHTML == '0' && all_block[4].innerHTML == '0' && all_block[5].innerHTML == '0') {
      alert("Перемогли нулики!");
      location.reload();
    }
    else if (all_block[6].innerHTML == '0' && all_block[7].innerHTML == '0' && all_block[8].innerHTML == '0') {
      alert("Перемогли нулики!");
      location.reload();
    }
    else if (all_block[0].innerHTML == '0' && all_block[3].innerHTML == '0' && all_block[6].innerHTML == '0') {
      alert("Перемогли нулики!");
      location.reload();
    }
    else if (all_block[1].innerHTML == '0' && all_block[4].innerHTML == '0' && all_block[7].innerHTML == '0') {
      alert("Перемогли нулики!");
      location.reload();
    }
    else if (all_block[2].innerHTML == '0' && all_block[5].innerHTML == '0' && all_block[8].innerHTML == '0') {
      alert("Перемогли нулики!");
      location.reload();
    }
    else if (all_block[0].innerHTML == '0' && all_block[4].innerHTML == '0' && all_block[8].innerHTML == '0') {
      alert("Перемогли нулики!");
      location.reload();
    }
    else if (all_block[2].innerHTML == '0' && all_block[4].innerHTML == '0' && all_block[6].innerHTML == '0') {
      alert("Перемогли нулики!");
      location.reload();
    }
    if (all_block[0].innerHTML != "" && all_block[1].innerHTML != "" && all_block[2].innerHTML != "" && all_block[3].innerHTML != "" && all_block[4].innerHTML != "" && all_block[5].innerHTML != "" && all_block[6].innerHTML != "" && all_block[7].innerHTML != "" && all_block[8].innerHTML != "") {
      alert("Перемогла дружба!");
      location.reload();
    }
  }
}
