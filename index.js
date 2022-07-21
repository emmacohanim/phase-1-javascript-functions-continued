// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
   return `This Monday, I will ${activity}.`
}

function wrapAdjective(p = "special") {
    const part1 = "You are"
    return function (flair = "*") {
        return `${part1} ${p}${flair}${p}!`
    }
}

