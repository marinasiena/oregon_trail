( function() {

	"use strict";
	console.clear();

	const LadiesOnThePedalBar = function() {

    const container = document.querySelector( '.container' );
    const message = document.querySelector( '.message' );
    const barInfo = document.querySelector( '.bar-info' );
    const drunkInfo = document.querySelector( '.drunk-info' );
    let allBeer = 0;
    let tapResultAll = 0;
		let pedalBar = null;
		let count = 0;

		class Lady {
			constructor( name ) {
				this.name = name;
				this.beer = Math.floor( Math.random() * 50 ) + 10;
				this.drunk = Math.floor( Math.random() * 2 ) === 0;
				this.setup( this.name, this.beer, this.drunk );
        this.tap();
        this.drink();
			} //end constructor

			setup( name, beer, drunk ) {
				console.log( 'setup lady:', this.name, this.beer, this.drunk );
				const ladyContainer = document.createElement( 'div' );
				const lady = document.createElement( 'div' );
				const ladyInfo = document.createElement( 'p' );

				ladyContainer.className = `lady-container ${this.name}`;
				lady.className = 'lady';
				ladyInfo.className = 'lady-info';
				ladyInfo.textContent = this.name;

				ladyContainer.appendChild( lady );
				ladyContainer.appendChild( ladyInfo );
				container.appendChild( ladyContainer );

				pedalBar.add( this.name, this.beer, this.drunk );
      } //end setup

        drink() {
          let drinkBtn = document.querySelector( '.drink' );
          drinkBtn.addEventListener( 'click', () => {
            event.preventDefault();
            if ( allBeer > 10 ) {
              allBeer = (allBeer - 10);
            } else {
              allBeer = 0;
            }
            message.textContent = 'Drinking up ... 10oz beer gone per lady ...';
            barInfo.textContent = `The ladies have ${allBeer} oz of beer on the PedalBar`;
          } );
          return;
        } //end drink

      tap() {
        let tapBtn = document.querySelector( '.tap' );
        tapBtn.addEventListener( 'click', () => {
          event.preventDefault();
          console.log('in', allBeer);
          let tapResult = ( Math.floor( Math.random() * 20 ) + 1 );
          let success = ( Math.floor( Math.random() * 2 ) === 0 );
          if ( success == 1 ) {
            tapResult++;
          } else {
          }
          allBeer = allBeer + tapResult;
          this.displayTap(allBeer);
        } );
      } //end tap

      displayTap(allBeer) {
        message.textContent = `You hit the tap!`;
        barInfo.textContent = `The ladies have ${allBeer} oz of beer on the PedalBar`;
      }//end displayTap

		} //end Lady


		class PedalBar {
			constructor() {
				this.isDrunk = 0;
			} //end constructor

			barInfo() {
				barInfo.textContent = `The ladies have ${allBeer} oz of beer on the PedalBar`;

				if ( this.isDrunk >= 4 ) {
					drunkInfo.textContent = `${this.isDrunk} drunk ladies: Woooo girl! Watch this!`;
				} else if ( ( this.isDrunk <= 3 ) && ( this.isDrunk >= 2 ) ) {
					drunkInfo.textContent = `${this.isDrunk} drunk ladies: OMG did you hear about Lisa??`;
				} else {
					drunkInfo.textContent = `${this.isDrunk} drunk: I'm soooo bored ...`;
				}
			} //end setup

			add( name, beer, drunk ) {
				let buttons = document.querySelector( '.buttons' );
				buttons.classList.remove( 'is-hidden' );
				this.checkBeer( beer );
				this.checkHealth( drunk );
				this.barInfo();
			} //end add

			checkBeer( beer ) {
				allBeer = allBeer + beer;
			} //end checkBeer

			checkHealth( drunk ) {
				if ( drunk === true ) {
					this.isDrunk = this.isDrunk + 1;
				}
			} //end checkHealth

		} //end Wagon

		function getLady() {

			let ladyForm = document.getElementById( 'add-lady' );
			let ladyName = document.querySelector( '.lady-name' );
			ladyForm.addEventListener( 'submit', () => {
				event.preventDefault();
				count++;
				if ( count > 5 ) {
          message.textContent = 'No more room on the Pedal Bar, honey.';
				} else {
					new Lady( ladyName.value );
				}
				ladyName.value = '';
			} );
		} //end bindEvents

		function init() {
			// debugger;
			pedalBar = new PedalBar();
			getLady();
		}

		return {
			init: init
		};

	}; //end constLadiesOnThePedalBar
	const playPedalBar = LadiesOnThePedalBar();
	playPedalBar.init();

} )(); //end iife
