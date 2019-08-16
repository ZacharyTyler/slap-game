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

let attacks = {
  slap: 1,
  punch: 5,
  kick: 10,
}


function giveItems(items) {
  return yourEnemy.items.push(inventory[items].modifier)
}

function addMods() {
  let modDamage = 0
  for (let i = 0; i < yourEnemy.items.length; i++) {
    modDamage += yourEnemy.items[i]
  }
  return modDamage
}

function attack(attackType) {
  yourEnemy.health -= attacks[attackType] + addMods();
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