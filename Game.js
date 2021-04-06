function myMove() {
  var monsterCountBoat = document
    .getElementById("boat")
    .getElementsByClassName("monster").length;

  var monksCountBoat = document
    .getElementById("boat")
    .getElementsByClassName("monks").length;

  var monsterCountRight = document
    .getElementById("rightbelow")
    .getElementsByClassName("monster").length;

  var monksCountRight = document
    .getElementById("rightbelow")
    .getElementsByClassName("monks").length;

  var totalMonster = monsterCountRight + monsterCountBoat;
  var totalMonks = monksCountRight + monksCountBoat;

  if (totalMonster > totalMonks && totalMonks > 0) {
    alert("Game Over");
    window.location = "file:///home/com20/Desktop/Game/Game.html";
  } else if (totalMonster + totalMonks === 6) {
    alert("You won");
    window.location = "file:///home/com20/Desktop/Game/Game.html";
  } else {
    var child = document.getElementById("boat");

    if (child.children.length > 0) {
      if (child.style.fontSize == "20px") {
        var elem = document.getElementById("boat");
        var pos = 0;
        var id = setInterval(frame, 5);
        function frame() {
          if (pos == 597) {
            clearInterval(id);
            document.getElementById("start").disabled = false;
            elem.style.fontSize = 21;
          } else {
            pos++;
            elem.style.left = pos + "px";
            document.getElementById("start").disabled = true;
          }
        }
      }
    } else {
      alert("Boat can't move empty");
    }
  }
}
function start() {
  var monsterCount = document
    .getElementById("person1")
    .getElementsByClassName("monster").length;

  var monksCount = document
    .getElementById("person1")
    .getElementsByClassName("monks").length;

  if (monsterCount > monksCount && monksCount > 0) {
    alert("Game Over");
    window.location = "file:///home/com20/Desktop/Game/Game.html";
  } else {
    myMove();
  }
}

function backMove() {
  var monsterCountBoat = document
    .getElementById("boat")
    .getElementsByClassName("monster").length;

  var monksCountBoat = document
    .getElementById("boat")
    .getElementsByClassName("monks").length;

  var monsterCount = document
    .getElementById("person1")
    .getElementsByClassName("monster").length;

  var monksCount = document
    .getElementById("person1")
    .getElementsByClassName("monks").length;

  var totalMonster = monsterCount + monsterCountBoat;
  var totalMonks = monksCount + monksCountBoat;

  if (totalMonster > totalMonks && totalMonks > 0) {
    alert("Game Over");
    window.location = "file:///home/com20/Desktop/Game/Game.html";
  } else {
    var child = document.getElementById("boat");
    if (child.children.length > 0) {
      if (child.style.fontSize == "21px") {
        var elem = document.getElementById("boat");
        var pos = 597;
        var id = setInterval(frame, 5);
        function frame() {
          if (pos == 0) {
            clearInterval(id);
            document.getElementById("back").disabled = false;
            elem.style.fontSize = 20;
          } else {
            pos--;
            elem.style.left = pos + "px";
            document.getElementById("back").disabled = true;
          }
        }
      }
    } else {
      alert("Boat can't move empty");
    }
  }
}

function back() {
  var rightMonster = document
    .getElementById("rightbelow")
    .getElementsByClassName("monster").length;

  var rightMonks = document
    .getElementById("rightbelow")
    .getElementsByClassName("monks").length;

  if (rightMonster > rightMonks && rightMonks > 0) {
    alert("Game Over");
    window.location = "file:///home/com20/Desktop/Game/Game.html";
  } else {
    backMove();
  }
}

function move1() {
  var x = document.getElementById("p1").parentElement.id;
  if (x == "person1") {
    var parent = document.getElementById("boat");
    if (parent.children.length < 2) {
      var elem = document.getElementById("p1");
      var elem1 = document.getElementById("boat");
      elem1.appendChild(elem);
    } else {
      alert("You can't take more than two childs");
    }
  } else if (x == "rightbelow") {
    var parent = document.getElementById("boat");
    if (parent.children.length < 2) {
      var elem = document.getElementById("p1");
      var elem1 = document.getElementById("boat");
      elem1.appendChild(elem);
    } else {
      alert("You can't take more than two childs");
    }
  } else {
    var c = document.getElementById("p1").parentElement;
    var s = c.style.fontSize;
    if (s == "20px") {
      var elem = document.getElementById("p1");
      var elem1 = document.getElementById("person1");
      elem1.appendChild(elem);
    } else {
      var elem = document.getElementById("p1");
      var elem1 = document.getElementById("rightbelow");
      elem1.appendChild(elem);
    }
  }
}

function move2() {
  var x = document.getElementById("p2").parentElement.id;
  if (x == "person1") {
    var parent = document.getElementById("boat");
    if (parent.children.length < 2) {
      var elem = document.getElementById("p2");
      var elem1 = document.getElementById("boat");
      elem1.appendChild(elem);
    } else {
      alert("You can't take more than two childs");
    }
  } else if (x == "rightbelow") {
    var parent = document.getElementById("boat");
    if (parent.children.length < 2) {
      var elem = document.getElementById("p2");
      var elem1 = document.getElementById("boat");
      elem1.appendChild(elem);
    } else {
      alert("You can't take more than two childs");
    }
  } else {
    var c = document.getElementById("p2").parentElement;
    var s = c.style.fontSize;
    if (s == "20px") {
      var elem = document.getElementById("p2");
      var elem1 = document.getElementById("person1");
      elem1.appendChild(elem);
    } else {
      var elem = document.getElementById("p2");
      var elem1 = document.getElementById("rightbelow");
      elem1.appendChild(elem);
    }
  }
}

function move3() {
  var x = document.getElementById("p3").parentElement.id;
  if (x == "person1") {
    var parent = document.getElementById("boat");
    if (parent.children.length < 2) {
      var elem = document.getElementById("p3");
      var elem1 = document.getElementById("boat");
      elem1.appendChild(elem);
    } else {
      alert("You can't take more than two childs");
    }
  } else if (x == "rightbelow") {
    var parent = document.getElementById("boat");
    if (parent.children.length < 2) {
      var elem = document.getElementById("p3");
      var elem1 = document.getElementById("boat");
      elem1.appendChild(elem);
    } else {
      alert("You can't take more than two childs");
    }
  } else {
    var c = document.getElementById("p3").parentElement;
    var s = c.style.fontSize;
    if (s == "20px") {
      var elem = document.getElementById("p3");
      var elem1 = document.getElementById("person1");
      elem1.appendChild(elem);
    } else {
      var elem = document.getElementById("p3");
      var elem1 = document.getElementById("rightbelow");
      elem1.appendChild(elem);
    }
  }
}

function move4() {
  var x = document.getElementById("p4").parentElement.id;
  if (x == "person1") {
    var parent = document.getElementById("boat");
    if (parent.children.length < 2) {
      var elem = document.getElementById("p4");
      var elem1 = document.getElementById("boat");
      elem1.appendChild(elem);
    } else {
      alert("You can't take more than two childs");
    }
  } else if (x == "rightbelow") {
    var parent = document.getElementById("boat");
    if (parent.children.length < 2) {
      var elem = document.getElementById("p4");
      var elem1 = document.getElementById("boat");
      elem1.appendChild(elem);
    } else {
      alert("You can't take more than two childs");
    }
  } else {
    var c = document.getElementById("p4").parentElement;
    var s = c.style.fontSize;
    if (s == "20px") {
      var elem = document.getElementById("p4");
      var elem1 = document.getElementById("person1");
      elem1.appendChild(elem);
    } else {
      var elem = document.getElementById("p4");
      var elem1 = document.getElementById("rightbelow");
      elem1.appendChild(elem);
    }
  }
}

function move5() {
  var x = document.getElementById("p5").parentElement.id;
  if (x == "person1") {
    var parent = document.getElementById("boat");
    if (parent.children.length < 2) {
      var elem = document.getElementById("p5");
      var elem1 = document.getElementById("boat");
      elem1.appendChild(elem);
    } else {
      alert("You can't take more than two childs");
    }
  } else if (x == "rightbelow") {
    var parent = document.getElementById("boat");
    if (parent.children.length < 2) {
      var elem = document.getElementById("p5");
      var elem1 = document.getElementById("boat");
      elem1.appendChild(elem);
    } else {
      alert("You can't take more than two childs");
    }
  } else {
    var c = document.getElementById("p5").parentElement;
    var s = c.style.fontSize;
    if (s == "20px") {
      var elem = document.getElementById("p5");
      var elem1 = document.getElementById("person1");
      elem1.appendChild(elem);
    } else {
      var elem = document.getElementById("p5");
      var elem1 = document.getElementById("rightbelow");
      elem1.appendChild(elem);
    }
  }
}

function move6() {
  var x = document.getElementById("p6").parentElement.id;
  if (x == "person1") {
    var parent = document.getElementById("boat");
    if (parent.children.length < 2) {
      var elem = document.getElementById("p6");
      var elem1 = document.getElementById("boat");
      elem1.appendChild(elem);
    } else {
      alert("You can't take more than two childs");
    }
  } else if (x == "rightbelow") {
    var parent = document.getElementById("boat");
    if (parent.children.length < 2) {
      var elem = document.getElementById("p6");
      var elem1 = document.getElementById("boat");
      elem1.appendChild(elem);
    } else {
      alert("You can't take more than two childs");
    }
  } else {
    var c = document.getElementById("p6").parentElement;
    var s = c.style.fontSize;
    if (s == "20px") {
      var elem = document.getElementById("p6");
      var elem1 = document.getElementById("person1");
      elem1.appendChild(elem);
    } else {
      var elem = document.getElementById("p6");
      var elem1 = document.getElementById("rightbelow");
      elem1.appendChild(elem);
    }
  }
}

// function myMove() {
//   var child = document.getElementById("boat");
//   if (child.children.length > 0) {
//     var elem = document.getElementById("boat");
//     var pos = 0;
//     var id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 597) {
//         clearInterval(id);
//         elem.style.fontSize = 21;
//       } else {
//         pos++;
//         elem.style.left = pos + "px";
//       }
//     }
//   } else {
//     alert("Boat can't move empty");
//   }
// }

// function myMove1() {
//   var monsterCount = document
//     .getElementById("person1")
//     .getElementsByClassName("monster").length;

//   var monksCount = document
//     .getElementById("person1")
//     .getElementsByClassName("monks").length;

//   var monsterCountBoat = document
//     .getElementById("boat")
//     .getElementsByClassName("monster").length;

//   var monksCountBoat = document
//     .getElementById("boat")
//     .getElementsByClassName("monks").length;

//   var totalMonster = monsterCount + monsterCountBoat;
//   var totalMonks = monksCount + monksCountBoat;

//   if (totalMonster > totalMonks) {
//     alert("Game Over Left");
//   } else {
//     myMove();
//   }
//   //  console.log("Monster Count: ", rightMonster);
//   //  console.log("Monks Count:", rightMonks);
// }

// function backMove() {
//   var child = document.getElementById("boat");
//   if (child.children.length > 0) {
//     var elem = document.getElementById("boat");
//     var pos = 597;
//     var id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 0) {
//         clearInterval(id);
//         elem.style.fontSize = 20;
//       } else {
//         pos--;
//         elem.style.left = pos + "px";
//       }
//     }
//   } else {
//     alert("Boat can't move empty");
//   }
// }

// function backMove1() {
//   var rightMonster = document
//     .getElementById("rightbelow")
//     .getElementsByClassName("monster").length;

//   var rightMonks = document
//     .getElementById("rightbelow")
//     .getElementsByClassName("monks").length;

//   // if (rightMonster > rightMonks && rightMonks > 0) {
//   //   alert("Game Over Right");
//   // } else if ((rightMonks === rightMonster) === 3) {
//   //   alert("You Won the Game");
//   // } else {
//   //   backMove();
//   // }

//   var monsterCountBoat = document
//     .getElementById("boat")
//     .getElementsByClassName("monster").length;

//   var monksCountBoat = document
//     .getElementById("boat")
//     .getElementsByClassName("monks").length;

//   var totalMonster = rightMonster + monsterCountBoat;
//   var totalMonks = rightMonks + monksCountBoat;

//   if (totalMonster > totalMonks) {
//     alert("Game Over Left");
//   } else if ((totalMonster === totalMonks) === 3) {
//     alert("You won the Game");
//   } else {
//     backMove();
//   }
// }
