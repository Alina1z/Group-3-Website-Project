	// Filter List; Add id's of restaurants that are included in this restriction.
	// Note: id's listen in array are EXCLUDED from results.
// Distance Filters.  Note: Any addition to an array should also be included in lower arrays
const overTwoMile = [bonafini];
const overOneHalfMile = [footprintscafe, bonafini];
const overOneMile = [mirna, footprintscafe, texs, bonafini];
const overHalfMile = [mirna, footprintscafe, texs, bonafini];
// Price Filters.  Note: Any addition to an array should also be included in lower arrays
const overThirtyDollars = [bonafini];
const overTwentyDollars = [tasteofthecityfreshgrill, mirna, footprintscafe, bonafini];
const overTenDollars = [chipotle, mcdonalds, starbucks, subsational, tasteofthecityfreshgrill, mirna, footprintscafe, texs, bonafini];
// Exclusion Filters.
const hasEggs = [pizzahut, texs, bonafini];
const hasDairy = [mcdonalds, footprintscafe, bonafini];
const hasPeanuts = [starbucks, footprintscafe];
const hasWheat = [mcdonalds, burgerking, pizzahut, bonafini];
const hasShellfish = [tasteofthecityfreshgrill, texs];
const hasTreeNuts = [starbucks, tasteofthecityfreshgrill];
const hasSesame = [mcdonalds, burgerking];
const hasSoy = [starbucks, tasteofthecityfreshgrill];
const hasFish = [mcdonalds, tasteofthecityfreshgrill];

	// Toggle button elements
// Distance buttons
const optionDistanceAny = document.getElementById("distanceAny");
const optionDistanceHalf = document.getElementById("distance0.5");
const optionDistanceOne = document.getElementById("distance1");
const optionDistanceOneHalf = document.getElementById("distance1.5");
const optionDistanceTwo = document.getElementById("distance2");
// Price buttons
const optionPriceAny = document.getElementById("priceAny");
const optionPrice10 = document.getElementById("priceTo10");
const optionPrice20 = document.getElementById("priceTo20");
const optionPrice30 = document.getElementById("priceTo30");
// Exclusion buttons
const optionExcludeNone = document.getElementById("excludeNone");
const optionExcludeEggs = document.getElementById("excludeEggs");
const optionExcludeDairy = document.getElementById("excludeDairy");
const optionExcludePeanuts = document.getElementById("excludePeanuts");
const optionExcludeWheat = document.getElementById("excludeWheat");
const optionExcludeShellfish = document.getElementById("excludeShellfish");
const optionExcludeTreeNuts = document.getElementById("excludeTreeNuts");
const optionExcludeSesame = document.getElementById("excludeSesame");
const optionExcludeSoy = document.getElementById("excludeSoy");
const optionExcludeFish = document.getElementById("excludeFish");
// Option group arrays
const priceOptions = [optionPriceAny, optionPrice10, optionPrice20, optionPrice30];
const distanceOptions = [optionDistanceAny, optionDistanceHalf, optionDistanceOne, optionDistanceOneHalf, optionDistanceTwo];
const excludeOptions = [optionExcludeNone, optionExcludeEggs, optionExcludeDairy, optionExcludePeanuts, optionExcludeWheat,
	optionExcludeShellfish, optionExcludeTreeNuts, optionExcludeSesame, optionExcludeSoy, optionExcludeFish];

	//Initialize dynamic functions
initialize();

function initialize() {
	addOptionListeners();
}

	//Add appropriate event listeners for each toggle button
function addOptionListeners() {
    distanceOptions.forEach(option => {
        if (option) {
            option.addEventListener("click", updateSelectedOption);
        }
    });
	priceOptions.forEach(option => {
        if (option) {
            option.addEventListener("click", updateSelectedOption);
        }
    });
	excludeOptions.forEach(option => {
        if (option) {
            option.addEventListener("click", updateSelectedOption);
        }
    });
}

	// Determines what options need to be untoggled after previous click
function updateSelectedOption(e) {
    var elem = e.target;
    elem.classList.add("active");
	if (distanceOptions.includes(elem)) {
		untoggleOtherOptions(elem, distanceOptions);
	} else if (priceOptions.includes(elem)) {
		untoggleOtherOptions(elem, priceOptions);
	} else if (elem.id == "excludeNone") {
		untoggleOtherOptions(elem, excludeOptions);
	} else {
		optionExcludeNone.classList.remove("active");
	}
	fetchResults();
}

	// Untoggles appropriate active buttons
function untoggleOtherOptions(optionClicked, group) {
    group.forEach(function(option) {
        if (option !== optionClicked) {
            option.classList.remove('active');
        }
    });
}

	// Generates results list, hides filtered elements
function fetchResults() {
	const results = document.querySelectorAll(".res");
	results.forEach(item => {
		item.style.display = "block";
	});
	const buttons = document.querySelectorAll(".btn")
	buttons.forEach(item => {
		if (item.classList.contains("active")) {
			var iter = item.id;
			switch(iter) {
				case "distance0.5":
					overHalfMile.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;
				case "distance1":
					overOneMile.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;
				case "distance1.5":
					overOneHalfMile.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;	
				case "distance2":
					overTwoMile.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;
				case "priceTo10":
					overTenDollars.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;
				case "priceTo20":
					overTwentyDollars.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;	
				case "priceTo30":
					overThirtyDollars.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;	
				case "excludeEggs":
					hasEggs.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;
				case "excludeDairy":
					hasDairy.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;
				case "excludePeanuts":
					hasPeanuts.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;
				case "excludeWheat":
					hasWheat.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;
				case "excludeShellfish":
					hasShellfish.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;
				case "excludeTreeNuts":
					hasTreeNuts.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;
				case "excludeSesame":
					hasSesame.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;
				case "excludeSoy":
					hasSoy.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;
				case "excludeFish":
					hasFish.forEach(elem => {
						document.getElementById(elem.id).style.display = "none";
					});
					break;
				default:
					break;
			}
		}
	});
}