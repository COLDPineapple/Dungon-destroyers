// get all the elements for the game
let monsterHeath1 = document.querySelector("#m-Heath1");
let monsterHeath2 = document.querySelector("#m-Heath2");
let monsterHeath3 = document.querySelector("#m-Heath3");
let monsterHeath4 = document.querySelector("#m-Heath4");
let monsterHeath5 = document.querySelector("#m-Heath5");
let monsterDamage1 = document.querySelector("#m-damage1");
let monsterDamage2 = document.querySelector("#m-damage2");
let monsterDamage3 = document.querySelector("#m-damage3");
let monsterDamage4 = document.querySelector("#m-damage4");
let monsterDamage5 = document.querySelector("#m-damage5");
let monsterImg1 = document.querySelector("#monster1img");
let monsterImg2 = document.querySelector("#monster2img");
let monsterImg3 = document.querySelector("#monster3img");
let monsterImg4 = document.querySelector("#monster4img");
let monsterImg5 = document.querySelector("#monster5img");
let playerHeath = document.querySelector("#playerHeath");
let playerdmg = document.querySelector("#playerdmg");
let game = document.querySelector("#game");
// defines the player and the monsters
let player = {
	heath: 120,
	damage: 25,
};
let slime1 = {
	heath: 50,
	damage: 10,
};
let slime2 = {
	heath: 75,
	damage: 15,
};

// starts the new round and shows the monsters
function newRound(
	monster1Heath,
	monster2Heath,
	monster3Heath,
	monster4Heath,
	monster5Heath
) {
	monsterHeath1.textContent = monster1Heath;
	monsterHeath2.textContent = monster2Heath;
	monsterHeath3.textContent = monster3Heath;
	monsterHeath4.textContent = monster4Heath;
	monsterHeath5.textContent = monster5Heath;
}
function newRoundImg(img1, img2, img3, img4, img5) {
	monsterImg1.src = img1;
	monsterImg2.src = img2;
	monsterImg3.src = img3;
	monsterImg4.src = img4;
	monsterImg5.src = img5;
}
function displayIMG(img1, img2, img3, img4, img5) {
	monsterImg1.style.display = img1;
	monsterImg2.style.display = img2;
	monsterImg3.style.display = img3;
	monsterImg4.style.display = img4;
	monsterImg5.style.display = img5;
}

// checks if the monster has been clicked
let isMonster1Clicked = false;
let isMonster2Clicked = false;
let isMonster3Clicked = false;
let isMonster4Clicked = false;
let isMonster5Clicked = false;
//COUNTER FOR ROUNDS
let roundCheck = 0;
function monster1IsClicked() {
	isMonster1Clicked = true;
	attack();
	attacksYou(monsterDamage1);
}

function monster2IsClicked() {
	isMonster2Clicked = true;
	attack();
	attacksYou(monsterDamage2);
}

function monster3IsClicked() {
	isMonster3Clicked = true;
	attack();
	attacksYou(monsterDamage3);
}

function monster4IsClicked() {
	isMonster4Clicked = true;
	attack();
	attacksYou(monsterDamage4);
}

function monster5IsClicked() {
	isMonster5Clicked = true;
	attack();
	attacksYou(monsterDamage5);
}
//makes the monsters take damage
function attack() {
	// if monster 1 is clicked the subtraced the dmg of the player from monsters heath
	if (isMonster1Clicked == true) {
		monsterHeath1.textContent = monsterHeath1.textContent - player.damage;
		monster1dead();
		isMonster1Clicked = false;
	} else if (isMonster2Clicked == true) {
		monsterHeath2.textContent = monsterHeath2.textContent - player.damage;

		monster2dead();
		isMonster2Clicked = false;
	} else if (isMonster3Clicked == true) {
		monsterHeath3.textContent = monsterHeath3.textContent - player.damage;

		monster3dead();
		isMonster3Clicked = false;
	} else if (isMonster4Clicked == true) {
		monsterHeath4.textContent = monsterHeath4.textContent - player.damage;

		monster4dead();
		isMonster4Clicked = false;
	} else if (isMonster5Clicked == true) {
		monsterHeath5.textContent = monsterHeath5.textContent - player.damage;
		monster5dead();
		isMonster5Clicked = false;
	}

	//makes the round change
	function checkRound() {
		if (
			monsterImg1.style.display == "none" &&
			monsterImg2.style.display == "none" &&
			monsterImg3.style.display == "none" &&
			monsterImg4.style.display == "none" &&
			monsterImg5.style.display == "none"
		) {
			if (roundCheck == 0) {
				NewRoundImg(
					"images/Slime-1.png",
					"images/Slime-2.png",
					"images/Slime-1.png",
					"",
					"",
					"",
					"",
					"",
					"none",
					"none"
				);

				NewRoundHeath(
					slime1.heath,
					slime2.heath,
					slime1.heath,
					"",
					"",
					"",
					"",
					"",
					"none",
					"none"
				);

				displayDamage(
					slime1.damage,
					slime2.damage,
					slime1.damage,
					slime1.damage
				);
			} else if (roundCheck == 1) {
				NewRoundImg(
					"images/Slime-2.png",
					"images/Slime-2.png",
					"images/Slime-1.png",
					"images/Slime-2.png",
					"",
					"",
					"",
					"",
					"",
					"none"
				);
				NewRoundHeath(
					slime2.heath,
					slime2.heath,
					slime1.heath,
					slime2.heath,
					"",
					"",
					"",
					"",
					"",
					"none"
				);
				displayDamage(
					slime2.damage,
					slime2.damage,
					slime1.damage,
					slime1.damage,
					slime1.damage
				);
			}
			roundCheck++;
		}
	}
	//
	//check if dead

	function monster1dead() {
		if (monsterHeath1.textContent <= 0) {
			monsterImg1.style.display = "none";
			monsterHeath1.style.display = "none";
			checkifempty();
			checkRound();
		}
	}
	function monster2dead() {
		if (monsterHeath2.textContent <= 0) {
			monsterImg2.style.display = "none";
			monsterHeath2.style.display = "none";
			checkifempty();
			checkRound();
		}
	}
	function monster4dead() {
		if (monsterHeath4.textContent <= 0) {
			monsterImg4.style.display = "none";
			monsterHeath4.style.display = "none";
			checkifempty();
			checkRound();
		}
	}
	function monster3dead() {
		if (monsterHeath3.textContent <= 0) {
			monsterImg3.style.display = "none";
			monsterHeath3.style.display = "none";
			checkifempty();
			checkRound();
		}
	}
	function monster5dead() {
		if (monsterHeath5.textContent <= 0) {
			monsterImg5.style.display = "none";
			monsterHeath5.style.display = "none";
			checkifempty();
			checkRound();
		}
	}

	//checks what round player should be on

	// starts new round
	function NewRoundImg(
		img1,
		img2,
		img3,
		img4,
		img5,
		displayimg1,
		displayimg2,
		displayimg3,
		displayimg4,
		displayimg5
	) {
		if (
			monsterImg1.style.display == "none" &&
			monsterImg2.style.display == "none" &&
			monsterImg3.style.display == "none" &&
			monsterImg4.style.display == "none" &&
			monsterImg5.style.display == "none"
		) {
			newRoundImg(img1, img2, img3, img4, img5);
			displayIMG(
				displayimg1,
				displayimg2,
				displayimg3,
				displayimg4,
				displayimg5
			);
		}
	}

	function NewRoundHeath(
		heathis1,
		heathis2,
		heathis3,
		heathis4,
		heathis5,
		displayHeath1,
		displayHeath2,
		displayHeath3,
		displayHeath4,
		displayHeath5
	) {
		newRound(heathis1, heathis2, heathis3, heathis4, heathis5);
		displayHeath(
			displayHeath1,
			displayHeath2,
			displayHeath3,
			displayHeath4,
			displayHeath5
		);
	}
	//redisplayes heath
}
function displayHeath(heath1, heath2, heath3, heath4, heath5) {
	monsterHeath1.style.display = heath1;
	monsterHeath2.style.display = heath2;
	monsterHeath3.style.display = heath3;
	monsterHeath4.style.display = heath4;
	monsterHeath5.style.display = heath5;
}
function displayDamage(damage1, damage2, damage3, damage4, damage5) {
	monsterDamage1 = damage1;
	monsterDamage2 = damage2;
	monsterDamage3 = damage3;
	monsterDamage4 = damage4;
	monsterDamage5 = damage5;
}

// hapens when you enter the game
function gameStart() {
	newRoundImg(
		"images/Slime-1.png",
		"images/Slime-1.png",
		"images/Slime-1.png",
		"",
		""
	);
	displayIMG("", "", "", "none", "none");
	newRound(slime1.heath, slime1.heath, slime1.heath);
	playerHeath.textContent = player.heath;
	playerDmg.textContent = player.damage;
	displayDamage(slime1.damage, slime1.damage, slime1.damage);
	roundCheck = 0;
}

monsterImg1.addEventListener("click", () => monster1IsClicked());
monsterImg2.addEventListener("click", () => monster2IsClicked());
monsterImg3.addEventListener("click", () => monster3IsClicked());
monsterImg4.addEventListener("click", () => monster4IsClicked());
monsterImg5.addEventListener("click", () => monster5IsClicked());

// the monster attacks you

function attacksYou(monsterAttack) {
	playerHeath.textContent = playerHeath.textContent - monsterAttack;
}
// see if monster dies

function monsterDead() {
	if (monster1IsClicked == true) {
		if (monsterHeath1 <= 0) {
			checkifempty();
		}
	}
}

// drops loot when monster is killed
// gets html ids for droping loot
let slot1 = document.querySelector("#slot1");
let slot2 = document.querySelector("#slot2");
let slot3 = document.querySelector("#slot3");
let slot4 = document.querySelector("#slot4");
let slot5 = document.querySelector("#slot5");
let slot6 = document.querySelector("#slot6");

//says if the slot is empty
let slot1Empty = true;
let slot2Empty = true;
let slot3Empty = true;
let slot4Empty = true;
let slot5Empty = true;
let slot6Empty = true;

function checkifempty() {
	// get random number depending on number depends on loot
	if (slot1Empty == true) {
		reandomAdd(slot1);
		slot1Empty = false;
	} else if (slot2Empty == true) {
		reandomAdd(slot2);
		slot2Empty = false;
	} else if (slot3Empty == true) {
		reandomAdd(slot3);
		slot3Empty = false;
	} else if (slot4Empty == true) {
		reandomAdd(slot4);
		slot4Empty = false;
	} else if (slot5Empty == true) {
		reandomAdd(slot5);
		slot5Empty = false;
	} else if (slot6Empty == true) {
		reandomAdd(slot6);
		slot6Empty = false;
	}
}
// defines what is in what slot
let slot1Is = ""
let slot2Is = "";
let slot3Is = "";
let slot4Is = "";
let slot5Is = "";
let slot6Is = "";

// adds random thing

let mat = 0;
function reandomAdd(x) {
	mat = Math.floor(Math.random(1) * 5);

	console.log(mat);

	if ((mat == 0)) {
		x.src = "images/heath.png";
	} else if ((mat == 1)) {
		x.src = "images/leach.png";
		console.log(mat);
	} else if ((mat == 2)) {
		x.src = "images/sword.png";
	} else if ((mat == 3)) {
		x.src = "images/stick.png";
	} else if ((mat == 4)) {
		x.src = "images/heath-pot.png";
	// } else if ((mat == 5)) {
	// 	x.src = "images/Slime-2.png";
	// } else if ((mat == 6)) {
	// 	x.src = "images/Slime-1.png";
	// } else if ((mat == 7)) {
	// 	x.src = "images/Slime-2.png";
	} else {
		x.src = "images/Slime-1.png";
	}
}
gameStart();
