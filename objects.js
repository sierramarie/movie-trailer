var house = {
    stories: 3, 
    location: 'Carmel',
    zipCode: 46032,
    materials: ['brick', 'gold', 'marble'],
    color: 'yellow'
    clean: function() { 
        console.log('All clean.');
    }
};
console.log(house.stories);
house.clean();
var house2 = {
    stories: 1,
    location: 'Indianapolis',
    zipCode: 46240,
    materials: ['wood', 'siding'],
    color: 'tan'
    clean: function() { 
        console.log('All clean.');
    }
};