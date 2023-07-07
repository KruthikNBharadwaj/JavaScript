const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}

const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

bicycle.bell();
door.bell();

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle); 
ringTheBell(door); 