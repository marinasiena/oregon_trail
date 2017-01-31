// (function() {

console.clear();
"use strict";

const container = document.querySelector('.container');

class Lady {
    constructor(name) {
        this.name = name;
        this.beer = Math.floor(Math.random() * 50) + 10;;
        this.drunk = Math.floor(Math.random() * 2) == 0;
        this.init();
    } //end constructor

    setup() {
        const ladyContainer = document.createElement('div');
        const lady = document.createElement('div');
        const info = document.createElement('p');

        ladyContainer.className = `ladyContainer ${this.name}`;
        lady.className = 'lady';
        info.textContent = this.name;
        info.style.backgroundColor = 'black';
        info.style.bottom = '230px';
        info.style.color = 'magenta';
        info.style.padding = '0 5px';
        info.style.position = 'absolute';

        ladyContainer.appendChild(lady);
        ladyContainer.appendChild(info);
        container.appendChild(ladyContainer);

    return {
        container: ladyContainer,
        lady: lady,
        info: info
    };
} //end setup

init() {
    this.regions = this.setup();
    console.log('the-regions', this.regions);
}//end init

drink() {
    if (this.beer >= 10) {
        this.beer -= 10;
    } else {
        this.beer = 0;
    }
} //end drink

tap() {
    let tapResult = (Math.floor(Math.random() * 20) + 1);
    let success = (Math.floor(Math.random() * 2) == 0);
    if (success == 1) {

        this.beer += tapResult;
        console.log(`You hit the tap!  You add ${tapResult} oz to your beer!`);
    } else {
        console.log('Bike hit a bump.  You dropped the tap.')
    }
    console.log("beer after tap: ", this.beer);
} //end tap

} //end Lady


class PedalBar {
    constructor() {
        this.occupants = [];
        this.allBeer = null;
        this.isDrunk = null;
    } //end constructor

    setup() {
      const pedalBarInfo = document.createElement('p');
      pedalBarInfo.textContent = `There's ${this.allBeer} oz of beer on the PedalBar`;
      container.appendChild(pedalBarInfo);
      pedalBarInfo.style.backgroundColor = 'black';
      pedalBarInfo.style.color = 'chartreuse';
      pedalBarInfo.style.padding = '20px';
      pedalBarInfo.style.position = 'absolute';
      pedalBarInfo.style.textAlign = 'center';
      pedalBarInfo.style.width = '100%';

    } //end setup

    add(name) {
        if (this.occupants.length < 6) {
            this.occupants.push(name);
            console.log('Space on the pedalBar', this.occupants);
        } else {
            console.log(`No more space on the PedalBar, honey.`);
        }
    } //end add

    checkBeer() {
        for (let i = 0; i < this.occupants.length; i++) {
            this.allBeer = this.allBeer + this.occupants[i].beer;
            console.log(this.allBeer);
        }
    } //end checkBeer

    colorDrunk() {
      // this isn't working - the this.occupants isn't targeting the css??
        for (let i = 0; i < this.occupants.length; i++) {
          if (this.occupants.drunk == true) {
            this.occupants[i].style.filter = 'hue-rotate(30deg)';
            console.log('drunk is yes');
        }
      }
    }

    checkHealth() {
        for (let i = 0; i < this.occupants.length; i++) {
            if (this.occupants[i].drunk == true)
                this.isDrunk += 1;
        }
        if (this.isDrunk >= 4) {
            console.log(`${this.isDrunk} folks: Woooo girl! Watch this!`);
        } else if ((this.isDrunk <= 3) && (this.isDrunk >= 2)) {
            console.log(`${this.isDrunk} folks: OMG did you hear about Lisa??`);
        } else {
            console.log(`${this.isSick} folks: I'm soooo bored ...`);
        }
    } //end checkHealth

} //end Wagon

const elaine = new Lady('Elaine');
const sarah = new Lady('Sarah');
const cathy = new Lady('Cathy');
const laura = new Lady('Laura');
const dee = new Lady('Dee');
const diana = new Lady('Diana');
// const maude = new Lady('Maude');
console.log('Lady: ', Lady);

const pedalBar = new PedalBar();

pedalBar.add(elaine);
pedalBar.add(sarah);
pedalBar.add(cathy);
pedalBar.add(laura);
pedalBar.add(dee);
pedalBar.add(diana);
// pedalBar.add(maude);

pedalBar.checkBeer();
pedalBar.checkHealth();
pedalBar.colorDrunk();
pedalBar.setup();

// })(); //end iife
