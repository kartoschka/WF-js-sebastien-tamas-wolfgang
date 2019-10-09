class Hotel {
    constructor(name, nights) {
        this.name = name;
        this.nights = nights;
    }
    checkAvailability(nrOfNights) {
        let arr = []
        let bool = false;
        for ( let night of Object.values(this.nights)) {
            night ? arr.push(night) : null
        }
        if (arr.length >= nrOfNights) {
            bool = true;
        }
        return bool;
    }

}



hotel1 = new Hotel("Hilton", {
    one : true,
    two : false,
    three : false,
    four : true, 
    five : true,
    six : true,
    seven : true,
    eight : true,
    nine : true,
    ten: false
})

let available = hotel1.checkAvailability(7);
console.log(available);