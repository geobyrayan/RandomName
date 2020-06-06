var namesTaskMapping = [
    "Satisha",
    "Anto",
    "lavanya",
    "Ramesha"
]

var nameChallengeMapping = [
    "cancelChangeSubs",
    "cancelSubs",
    "changesubs",
    "confirm",
    "createplan",
    "createSeg",
    "deactivate",
    "enroll",
    "getChangePlan",
    "getPaymentHis",
    "getSubs",
    "getSubsByID",
    "getSubsHistory",
    "getplan",
    "getplanDetail",
    "publishEvent",
    "publishSubsriptionEvent",
    "switchFreeTrial",
    "unredeem",
    "updateCustomerId",
    "udateCuatomerSubs",
    "updatePayment"
]

const generateRandomName = () => {
    if(tempMapping.length == 0) {
        return "Names are done";
    }

    chosenName =  `${tempMapping[Math.floor(Math.random() * tempMapping.length)]}`;

    const index = tempMapping.indexOf(chosenName);
    if(index > -1) {
        tempMapping.splice(index, 1);
    }

    return chosenName;
}

const setRandomChallenge = () => {
    document.getElementById('random-challenge').innerText = generateRandomChallenge();
}
const setRandomName = () => {
    handleVisisbiltyOfImage("hidden");
    document.getElementById('random-challenge').innerText = "";
    document.getElementById('random-name').innerText = generateRandomName();
}

const generateRandomChallenge = () => {
    if(tempTask.length == 0) {
        return "Tasks are done";
    }

    chosenTask =  `${tempTask[Math.floor(Math.random() * tempTask.length)]}`;

    const index = tempTask.indexOf(chosenTask);
    if(index > -1) {
        tempTask.splice(index, 1);
    }

    return chosenTask;
    
}

const addClickListener = () => {
    var clickMethod = document.getElementsByClassName("block1");
    clickMethod[0].addEventListener("click", setRandomName);

    var clickMethod2 = document.getElementsByClassName("block2");
    clickMethod2[0].addEventListener("click", setRandomChallenge);
}

const handleVisisbiltyOfImage = (visbility) => {
    document.getElementById("image").style.visibility = visbility;
}

var chosenName;
var chosenTask;
var tempMapping = namesTaskMapping;
var tempTask = nameChallengeMapping;
handleVisisbiltyOfImage("hidden");
addClickListener();