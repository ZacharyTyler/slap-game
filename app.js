let yourEnemy = {
  health: 100,
  hits: 0,
  items: []
}

let inventory = {
  channelHate: { name: 'Channel Hate', modifier: 10, description: 'Channel your inner hatred' },
  inviteAFriend: { name: 'Friend', modifier: 5, description: 'Phone a friend' },
  tempItem: { name: 'Temp Item', modifier: 2, description: 'This is item' }
}

function giveItem() {
  return yourEnemy.items.push(inventory.tempItem.modifier)
}

function giveFriend() {
  return yourEnemy.items.push(inventory.inviteAFriend.modifier)
}
function giveHate() {
  return yourEnemy.items.push(inventory.channelHate.modifier)
}


function addMods() {
  let modDamage = 0
  for (let i = 0; i < yourEnemy.items.length; i++) {
    modDamage += yourEnemy.items[i]
  }
  return modDamage
}

function slap() {
  yourEnemy.health -= 1 + addMods();
  yourEnemy.hits += 1
  zero()
  draw()
}

function punch() {
  yourEnemy.health -= 5 + addMods();
  yourEnemy.hits += 1
  zero()
  draw()
}

function kick() {
  yourEnemy.health -= 10 + addMods();
  yourEnemy.hits += 1
  zero()
  draw()
}

function reset() {
  yourEnemy.health = 100
  yourEnemy.hits = 0
  draw()
}

function zero() {
  if (yourEnemy.health < 0) {
    return yourEnemy.health = 0
  }
}

function draw() {
  let healthElement = document.querySelector("#health")
  let hitsElement = document.querySelector("#hits")
  healthElement.textContent = `Health: ${yourEnemy.health}`
  hitsElement.textContent = `Hits: ${yourEnemy.hits}`
}

draw()