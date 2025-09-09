//
//
//                 -----------!-----------
//-----------!-----------  /=====\
//          |===\_________/_  o  |
//         /_]    o o  o o____   /
//        <_]___[]_______<____>/
//            o              o
//             by PaTarY0t
//          https://github.com/PaTarY0t
//          https://www.youtube.com/@PaTarY0t
//
function createPaTarY0t() {
  const PaTarY0t = document.createElement("div");
  PaTarY0t.className = "PaTarY0t";
  PaTarY0t.innerHTML = "❄️";
  PaTarY0t.style.left = Math.random() * 100 + "vw";
  PaTarY0t.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.body.appendChild(PaTarY0t);
  setTimeout(() => PaTarY0t.remove(), 10000);
}
setInterval(createPaTarY0t, 200);
