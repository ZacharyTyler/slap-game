
let characters = [{
  name: "Player",
  health: 100,
  hits: 0,
  items: [0],
  image: 0,
  attacks: {
    slap: 1,
    punch: 5,
    kick: 10,
  },
  inventory: {
    channelHate: {
      name: 'Channel Hatred',
      modifier: 10,
      description: 'Channel your inner hatred'
    },
    inviteAFriend: {
      name: 'Phone a Friend',
      modifier: 5,
      description: 'Phone a friend'
    },
    liftWeights: {
      name: 'Lift Weights',
      modifier: 2,
      description: 'Pump iron'
    }
  }
},
{
  name: "Enemy",
  health: 100,
  hits: 0,
  items: [0],
  image: 0,
  attacks: {
    slap: 1,
    punch: 5,
    kick: 10,

  },
  inventory: {
    channelHate: {
      name: 'Channel Hatred',
      modifier: 10,
      description: 'Channel your inner hatred'
    },
    inviteAFriend: {
      name: 'Phone a Friend',
      modifier: 5,
      description: 'Phone a friend'
    },
    liftWeights: {
      name: 'Lift Weights',
      modifier: 2,
      description: 'Pump iron'
    }
  }
},]

function addEnemy() {
  characters.push(
    {
      name: "Enemy",
      health: 100,
      hits: 0,
      items: [0],
      image: 0,
      attacks: {
        slap: 1,
        punch: 5,
        kick: 10,
      },
      inventory: {
        channelHate: {
          name: 'Channel Hatred',
          modifier: 10,
          description: 'Channel your inner hatred'
        },
        inviteAFriend: {
          name: 'Phone a Friend',
          modifier: 5,
          description: 'Phone a friend'
        },
        liftWeights: {
          name: 'Lift Weights',
          modifier: 2,
          description: 'Pump iron'
        }
      }
    }
  )
  drawCharacters()
}

let picture = "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"

function promptImage() {
  picture = prompt("Please enter a photo URL", "URL");
}

function chooseImage(index) {

  if (characters[index].image == 0) {
    promptImage()
    if (picture.includes("http") == true) {
      // @ts-ignore
      return characters[index].image = picture
    } else {
      // @ts-ignore
      return characters[index].image = "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
    }
  } else { return characters[index].image }
}


function drawCharacters() {
  let charactersElement = document.querySelector("#char")
  let template = ""
  for (let i = 0; i < characters.length; i++) {
    let people = characters[i];
    template += `<div class="col-6">
        <h1>${people.name}</h1>
        <h3>Health:${people.health}</h3>
        <h3>Hits: ${people.hits}</h3>
        <div class="row">
        <div class="col-12 col-height d-flex justify-content-center align-items-center">
        <img src= ${chooseImage(i)}
          alt="Slap Me" class="slap-image">
          </div></div>
        <h3>Attack</h3>
        <button class="btn btn-success attackbtn-size" onclick="attack(${i}, 'slap')">Slap</button>
        <button class="btn btn-warning attackbtn-size" onclick="attack(${i}, 'punch')">Punch</button>
        <button class="btn btn-danger attackbtn-size" onclick="attack(${i}, 'kick')">Kick</button>
      <div id="items" class="col-12"><br>
        <h3>Abillities</h3>
        <button class="btn btn-light abillitybtn-size" onclick="giveItems(${i}, 'liftWeights')">Lift Weights</button>
        <button class="btn btn-secondary abillitybtn-size" onclick="giveItems(${i}, 'inviteAFriend')">Phone a Friend</button>
        <button class="btn btn-dark abillitybtn-size" onclick="giveItems(${i}, 'channelHate')">Channel Hatred</button>
        </div>
        <div class="col-12">
        <br>
  <h4>Active Abillity:
  ${abillities(i)}
   </h4>
</div>
        </div>`
  }

  charactersElement.innerHTML = template
}

function abillities(index) {
  let people = characters[index];
  if (people.items[0] == 2) {
    return people.inventory.liftWeights.name
  } else if (people.items[0] == 5) {
    return people.inventory.inviteAFriend.name
  } else if (people.items[0] == 10) {
    return people.inventory.channelHate.name
  } else {
    return "None"
  }
}

function attack(index, attackType) {
  characters[index].health -= characters[index].attacks[attackType] + addMods(index);
  characters[index].hits += 1
  zero()
  drawCharacters()
}

function giveItems(index, items) {
  characters[index].items.pop()
  characters[index].items.push(characters[index].inventory[items].modifier)
  drawCharacters()
}

function addMods(x) {
  let modDamage = 0
  for (let i = 0; i < characters[x].items.length; i++) {
    modDamage += characters[x].items[i]
  }
  return modDamage
}

function reset() {
  for (let i = characters.length; i > 2; i--) {
    characters.pop()
  }
  for (let i = 0; i < characters.length; i++) {
    characters[i].health = 100
    characters[i].hits = 0
    characters[i].items = []
  }
  drawCharacters()
}

function zero() {
  for (let i = 0; i < characters.length; i++) {
    if (characters[i].health < 0) {
      return characters[i].health = 0
    }
  }
}






drawCharacters()




                    // accessing values off of an input
// move image Html into JavaScript text