const findTheOldest = function(people) {
    const ages = [];
    
    for(const person of people){
        ages.push(person.yearOfDeath - person.yearOfBirth);
    }
    ages.sort((a,b) => b - a);
    
};

// Do not edit below this line
module.exports = findTheOldest;
