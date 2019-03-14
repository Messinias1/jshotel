var hotelName = "JavaScript Function Hotel";
var hotelMotto = "What's your Function";

var roomTypes = ["Twin", "Single", "Double", "Queen", "King"];
var roomNumbers = [
    [101, 102, 103, 104],
    [105, 106, 107],
    [201, 202, 203, 204],
    [301, 302, 303],
    [304, 305]
];

var roomPrices = [75, 85, 100, 150, 200];

var bookedRooms = [
    [],
    [],
    [],
    [],
    []
];

function availableRoomsQty() {
    var totalRoomQty = 0;
    for (var i = 0; i < roomNumbers.length; i++) {
        totalRoomQty += roomNumbers[i].length;
    }
    // console.log("Total Rooms Available:", totalRoomQty);
    return totalRoomQty;
}

function availableRoomsReport() {
    console.log("Total Rooms Available:", availableRoomsQty());
}

function bookTwin() {
    bookedRooms[0].sort(bookedRooms[0].push(roomNumbers[0].pop()));
}

function bookSingle() {
    bookedRooms[1].sort(bookedRooms[1].push(roomNumbers[1].pop()));
}

function bookDouble() {
    bookedRooms[2].sort(bookedRooms[2].push(roomNumbers[2].pop()));
}

function bookQueen() {
    bookedRooms[3].sort(bookedRooms[3].push(roomNumbers[3].pop()));
}

function bookKing() {
    bookedRooms[4].sort(bookedRooms[4].push(roomNumbers[4].pop()));
}

function salesReport() {
    var totalSales = 0;
    for (var i = 0; i < bookedRooms.length; i++) {
        totalSales += bookedRooms[i].length * roomPrices[i];
    }
    return totalSales;
}
