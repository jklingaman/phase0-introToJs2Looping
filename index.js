const name = ['Guadalupe', 'Ollie', 'Aki']

function writeCards(name, event) {
    let thankYou = []
    for (let i = 0; i < name.length; i++) {
      thankYou.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        
    }
    return thankYou;
  }

function countDown() {
    let subtract = 10;
    while (subtract > -1) {
  console.log(subtract--);
}}