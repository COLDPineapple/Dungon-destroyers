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
let GameOver = document.querySelector("#dead");
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

let stick = {
	dmg: 5,
};
let heathPot = {
	heath: 25,
};
let sword = {
	dmg: 30,
};
let helmet = {
	heath: 30,
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
		monsterHeath1.textContent =
			monsterHeath1.textContent - playerdmg.textContent;
		monster1dead();
		isMonster1Clicked = false;
	} else if (isMonster2Clicked == true) {
		monsterHeath2.textContent =
			monsterHeath2.textContent - playerdmg.textContent;

		monster2dead();
		isMonster2Clicked = false;
	} else if (isMonster3Clicked == true) {
		monsterHeath3.textContent =
			monsterHeath3.textContent - playerdmg.textContent;

		monster3dead();
		isMonster3Clicked = false;
	} else if (isMonster4Clicked == true) {
		monsterHeath4.textContent =
			monsterHeath4.textContent - playerdmg.textContent;

		monster4dead();
		isMonster4Clicked = false;
	} else if (isMonster5Clicked == true) {
		monsterHeath5.textContent =
			monsterHeath5.textContent - playerdmg.textContent;
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
			} else if (roundCheck == 2) {
				NewRoundImg(
					"images/Slime-2.png",
					"images/Slime-2.png",
					"images/Slime-2.png",
					"images/Slime-2.png",
					"images/Slime-2.png",
					"",
					"",
					"",
					"",
					"none"
				);
				NewRoundHeath(
					slime2.heath,
					slime2.heath,
					slime2.heath,
					slime2.heath,
					slime2.heath,
					"",
					"",
					"",
					"",
					"none"
				);
				displayDamage(
					slime2.damage,
					slime2.damage,
					slime2.damage,
					slime2.damage,
					slime2.damage
				);
			} else if (roundcheck == 3) {
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
	GameOver.style.display = "none";
}

monsterImg1.addEventListener("click", () => monster1IsClicked());
monsterImg2.addEventListener("click", () => monster2IsClicked());
monsterImg3.addEventListener("click", () => monster3IsClicked());
monsterImg4.addEventListener("click", () => monster4IsClicked());
monsterImg5.addEventListener("click", () => monster5IsClicked());

// the monster attacks you

function attacksYou(monsterAttack) {
	playerHeath.textContent = playerHeath.textContent - monsterAttack;
	areyoudead();
}
// see if monster dies

function monsterDead() {
	if (monster1IsClicked == true) {
		if (monsterHeath1 <= 0) {
			checkifempty();
		}
	}
}

// defines what is in what slot
let slot1Is = "heath";
let slot2Is = "heath";
let slot3Is = "heath";
let slot4Is = "heath";
let slot5Is = "heath";
let slot6Is = "heath";

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
		reandomAddS1(slot1, slot1Is);
		slot1Empty = false;
		console.log(slot1Is);
	} else if (slot2Empty == true) {
		reandomAddS2(slot2, slot2Is);
		slot2Empty = false;
	} else if (slot3Empty == true) {
		reandomAddS3(slot3, slot3Is);
		slot3Empty = false;
	} else if (slot4Empty == true) {
		reandomAddS4(slot4, slot4Is);
		slot4Empty = false;
	} else if (slot5Empty == true) {
		reandomAddS5(slot5, slot5Is);
		slot5Empty = false;
	} else if (slot6Empty == true) {
		reandomAddS6(slot6, slot6Is);
		slot6Empty = false;
	}
}

// adds random thing

let mat = 0;
let mat1 = 0;
let mat2 = 0;
let mat3 = 0;
let mat4 = 0;
let mat5 = 0;

function reandomAddS1(x) {
	mat = Math.floor(Math.random(1) * 5);
	if (mat == 0) {
		x.src = "images/heath.png";
		slot1Is = "heath";
	} else if (mat == 1) {
		x.src = "images/leach.png";
		slot1Is = "leach";
	} else if (mat == 2) {
		x.src = "images/sword.png";
		slot1Is = "sword";
	} else if (mat == 3) {
		x.src = "images/stick.png";
		slot1Is = "stick";
	} else if (mat == 4) {
		x.src = "images/heath-pot.png";
		slot1Is = "heathPot";
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

function reandomAddS2(x) {
	mat1 = Math.floor(Math.random(1) * 5);
	if (mat1 == 0) {
		x.src = "images/heath.png";
		slot2Is = "heath";
	} else if (mat1 == 1) {
		x.src = "images/leach.png";
		slot2Is = "leach";
	} else if (mat1 == 2) {
		x.src = "images/sword.png";
		slot2Is = "sword";
	} else if (mat1 == 3) {
		x.src = "images/stick.png";
		slot2Is = "stick";
	} else if (mat1 == 4) {
		x.src = "images/heath-pot.png";
		slot2Is = "heathPot";
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

function reandomAddS3(x) {
	mat2 = Math.floor(Math.random(1) * 5);
	if (mat2 == 0) {
		x.src = "images/heath.png";
		slot3Is = "heath";
	} else if (mat2 == 1) {
		x.src = "images/leach.png";
		slot3Is = "leach";
	} else if (mat2 == 2) {
		x.src = "images/sword.png";
		slot3Is = "sword";
	} else if (mat2 == 3) {
		x.src = "images/stick.png";
		slot3Is = "stick";
	} else if (mat2 == 4) {
		x.src = "images/heath-pot.png";
		slot3Is = "heathPot";
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

function reandomAddS4(x) {
	mat3 = Math.floor(Math.random(1) * 5);
	if (mat3 == 0) {
		x.src = "images/heath.png";
		slot4Is = "heath";
	} else if (mat3 == 1) {
		x.src = "images/leach.png";
		slot4Is = "leach";
	} else if (mat3 == 2) {
		x.src = "images/sword.png";
		slot4Is = "sword";
	} else if (mat3 == 3) {
		x.src = "images/stick.png";
		slot4Is = "stick";
	} else if (mat3 == 4) {
		x.src = "images/heath-pot.png";
		slot4Is = "heathPot";
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

function reandomAddS5(x) {
	mat4 = Math.floor(Math.random(1) * 5);
	if (mat4 == 0) {
		x.src = "images/heath.png";
		slot5Is = "heath";
	} else if (mat4 == 1) {
		x.src = "images/leach.png";
		slot5Is = "leach";
	} else if (mat4 == 2) {
		x.src = "images/sword.png";
		slot5Is = "sword";
	} else if (mat4 == 3) {
		x.src = "images/stick.png";
		slot5Is = "stick";
	} else if (mat4 == 4) {
		x.src = "images/heath-pot.png";
		slot5Is = "heathPot";
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

function reandomAddS6(x) {
	mat5 = Math.floor(Math.random(1) * 5);
	if (mat1 == 0) {
		x.src = "images/heath.png";
		slot6Is = "heath";
	} else if (mat5 == 1) {
		x.src = "images/leach.png";
		slot6Is = "leach";
	} else if (mat5 == 2) {
		x.src = "images/sword.png";
		slot6Is = "sword";
	} else if (mat5 == 3) {
		x.src = "images/stick.png";
		slot6Is = "stick";
	} else if (mat5 == 4) {
		x.src = "images/heath-pot.png";
		slot6Is = "heathPot";
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

slot1.addEventListener("click", () => buffs1(slot1Is, slot1));
slot2.addEventListener("click", () => buffs2(slot2Is, slot2));
slot3.addEventListener("click", () => buffs3(slot3Is, slot3));
slot4.addEventListener("click", () => buffs4(slot4Is, slot4));
slot5.addEventListener("click", () => buffs5(slot5Is, slot5));
slot6.addEventListener("click", () => buffs6(slot6Is, slot6));

function buffs1(slotIs, x) {
	if (slotIs == "heath") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 30;
		x.src = "images/none.jfif";
		slot1Is = "";
		slot1Empty = true;
	} else if (slotIs == "leach") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 100;
		x.src = "images/none.jfif";
		slot1Is = "";
		slot1Empty = true;
	} else if (slotIs == "sword") {
		playerdmg.textContent = parseInt(playerdmg.textContent) + 30;
		x.src = "images/none.jfif";
		slot1Is = "";
		slot1Empty = true;
	} else if (slotIs == "stick") {
		playerdmg.textContent = parseInt(playerdmg.textContent) + 5;
		x.src = "images/none.jfif";
		slot1Is = "";
		slot1Empty = true;
	} else if (slotIs == "heathPot") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 100;
		x.src = "images/none.jfif";
		slot1Is = "";
		slot1Empty = true;
	} else {
	}
}

function buffs2(slotIs, x) {
	if (slotIs == "heath") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 30;
		x.src = "images/none.jfif";
		slot2Is = "";
		slot2Empty = true;
	} else if (slotIs == "leach") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 100;
		x.src = "images/none.jfif";
		slot2Is = "";
		slot2Empty = true;
	} else if (slotIs == "sword") {
		playerdmg.textContent = parseInt(playerdmg.textContent) + 30;
		x.src = "images/none.jfif";
		slot2Is = "";
		slot2Empty = true;
	} else if (slotIs == "stick") {
		playerdmg.textContent = parseInt(playerdmg.textContent) + 5;
		x.src = "images/none.jfif";
		slot2Is = "";
		slot2Empty = true;
	} else if (slotIs == "heathPot") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 100;
		x.src = "images/none.jfif";
		slot2Is = "";
		slot2Empty = true;
	} else {
	}
}

function buffs3(slotIs, x) {
	if (slotIs == "heath") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 30;
		x.src = "images/none.jfif";
		slot3Is = "";
		slot3Empty = true;
	} else if (slotIs == "leach") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 100;
		x.src = "images/none.jfif";
		slot3Is = "";
		slot3Empty = true;
	} else if (slotIs == "sword") {
		playerdmg.textContent = parseInt(playerdmg.textContent) + 30;
		x.src = "images/none.jfif";
		slot3Is = "";
		slot3Empty = true;
	} else if (slotIs == "stick") {
		playerdmg.textContent = parseInt(playerdmg.textContent) + 5;
		x.src = "images/none.jfif";
		slot3Is = "";
		slot3Empty = true;
	} else if (slotIs == "heathPot") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 100;
		x.src = "images/none.jfif";
		slot3Is = "";
		slot3Empty = true;
	} else {
	}
}

function buffs4(slotIs, x) {
	if (slotIs == "heath") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 30;
		x.src = "images/none.jfif";
		slot4Is = "";
		slot4Empty = true;
	} else if (slotIs == "leach") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 100;
		x.src = "images/none.jfif";
		slot4Is = "";
		slot4Empty = true;
	} else if (slotIs == "sword") {
		playerdmg.textContent = parseInt(playerdmg.textContent) + 30;
		x.src = "images/none.jfif";
		slot4Is = "";
		slot4Empty = true;
	} else if (slotIs == "stick") {
		playerdmg.textContent = parseInt(playerdmg.textContent) + 5;
		x.src = "images/none.jfif";
		slot4Is = "";
		slot4Empty = true;
	} else if (slotIs == "heathPot") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 100;
		x.src = "images/none.jfif";
		slot4Is = "";
		slot4Empty = true;
	} else {
	}
}

function buffs5(slotIs, x) {
	if (slotIs == "heath") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 30;
		x.src = "images/none.jfif";
		slot5Is = "";
		slot5Empty = true;
	} else if (slotIs == "leach") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 100;
		x.src = "images/none.jfif";
		slot5Is = "";
		slot5Empty = true;
	} else if (slotIs == "sword") {
		playerdmg.textContent = parseInt(playerdmg.textContent) + 30;
		x.src = "images/none.jfif";
		slot5Is = "";
		slot5Empty = true;
	} else if (slotIs == "stick") {
		playerdmg.textContent = parseInt(playerdmg.textContent) + 5;
		x.src = "images/none.jfif";
		slot5Is = "";
		slot5Empty = true;
	} else if (slotIs == "heathPot") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 100;
		x.src = "images/none.jfif";
		slot5Is = "";
		slot5Empty = true;
	} else {
	}
}

function buffs6(slotIs, x) {
	if (slotIs == "heath") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 30;
		x.src = "images/none.jfif";
		slot6Is = "";
		slot6Empty = true;
	} else if (slotIs == "leach") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 100;
		x.src = "images/none.jfif";
		slot6Is = "";
		slot6Empty = true;
	} else if (slotIs == "sword") {
		playerdmg.textContent = parseInt(playerdmg.textContent) + 30;
		x.src = "images/none.jfif";
		slot6Is = "";
		slot6Empty = true;
	} else if (slotIs == "stick") {
		playerdmg.textContent = parseInt(playerdmg.textContent) + 5;
		x.src = "images/none.jfif";
		slot6Is = "";
		slot6Empty = true;
	} else if (slotIs == "heathPot") {
		playerHeath.textContent = parseInt(playerHeath.textContent) + 100;
		x.src = "images/none.jfif";
		slot6Is = "";
		slot6Empty = true;
	} else {
	}
}
function areyoudead() {
	if (playerHeath.textContent <= 0) {
		GameOver.style.display = "block";
		game.style.display = "none";
		console.log(GameOver);
	}
}

gameStart();
