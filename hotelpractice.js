var jsHotel = {
    
    hotelName: "Javascript Hotel",
    hotelMotto: "We're the object of your desire",
    availableRooms: [101, 102, 103, 104, 105, 106],
    bookedRooms: [],
    roomPrice: 35,
    
    bookRoom: function() {
        console.log("Congrats you just booked room number:", (this.bookedRooms = this.bookedRooms.concat(this.availableRooms.shift()))[this.bookedRooms.length -1]);
        this.roomsAvailable();
    },
    
    roomsAvailable: function() {
        console.log("The available rooms are:", this.availableRooms);
    },
    
    roomCountAvailable: function() {
        var roomCount = this.availableRooms.length;
        console.log("Rooms still available:", roomCount);
    }
    
};