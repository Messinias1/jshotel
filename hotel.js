var jsHotel = {

    hotelName: "JavaScript Hotel",
    hotelMotto: "We're The Object of your Desire!",
    availableRooms: [101, 102, 103, 104, 105, 106],
    bookedRooms: [],
    roomPrice: 35,

    bookRoom: function() {

        console.log("Congrats you've just booked room number:", (this.bookedRooms = this.bookedRooms.concat(this.availableRooms.shift()))[this.bookedRooms.length - 1]);
        this.roomsAvailable();
    },
    
    roomsAvailable: function() {
        console.log("The available Rooms are:", this.availableRooms);
    },
    
    roomCountAvailable: function () {
        var roomCount = this.availableRooms.length;
        console.log("Total rooms available:", roomCount);
    }


};

/*function displayVacancies() {
    if (jsHotel.availableRooms.length >= 1) {
        console.log("We have:", jsHotel.availableRooms.length, " rooms open here are their numbers", jsHotel.availableRooms);
    }
    else {
        console.log("Sorry we have no rooms available.");
    }

}*/




//jsHotel.bookedRooms = jsHotel.bookedRooms.concat(jsHotel.availableRooms.shift());
