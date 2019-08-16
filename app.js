

let health = 100
let targetName = "Enemy Name"
let hits = 0

function slap() {
  health -= 1;
  hits += 1
  draw()
}

function punch() {
  health -= 5;
  hits += 1
  draw()

}
function kick() {
  health -= 10;
  hits += 1
  draw()
}

function draw() {
  let healthElement = document.querySelector("#health")
  let hitsElement = document.querySelector("#hits")
  healthElement.textContent = `Health: ${health}`
  hitsElement.textContent = `Hits: ${hits}`
}



draw()