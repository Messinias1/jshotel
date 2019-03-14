var hotelName = "jsHotel";
var bedSize = [
    ["Twin Bed", "Double Bed"],
    ["Queen Bed"],
    ["King Bed"]
];

var guestId = [001, 002, 003];
var guestName = ["Peter", "Paul", "Chris"];

var guestRoomNumber = [
    [1001, 1002],
    [1003],
    [1004]
];
var roomPrice = [
    [55, 75],
    [95],
    [115]
];

function totalsReport() {
    for (var i = 0; i < guestId.length; i++) {
        console.log("");
        console.log("Guest Id:", guestId[i], "Guest Name:", guestName[i]);

        for (var j = 0; j < guestRoomNumber[i].length; j++) {
            console.log("Booked room", guestRoomNumber[i][j], "with", bedSize[i][j], "total price of", roomPrice[i][j]);
        }
    }
}

function grandTotalsReport() {
    var grandTotal = 0;
    for (var i = 0; i < guestId.length; i++) {
        console.log("");
        console.log("Guest Id:", guestId[i], "Guest Name:", guestName[i]);

        for (var j = 0; j < guestRoomNumber[i].length; j++) {
            var total = roomPrice[i][j];
            console.log("Booked room", guestRoomNumber[i][j], "with", bedSize[i][j], "total price of", total);
            grandTotal += total;
        }
    }
console.log("The grand total room value is:", grandTotal);
}

function subTotalsReport() {
    for (var i = 0; i < guestId.length; i++) {
        var subTotal = 0;
        console.log("");
        console.log("Guest Id:", guestId[i], "Guest Name:", guestName[i]);

        for (var j = 0; j < guestRoomNumber[i].length; j++) {
            var total = roomPrice[i][j];
            console.log("Booked room", guestRoomNumber[i][j], "with", bedSize[i][j], "total price of", total);
            subTotal += total;
        }
        console.log("The subtotal room value is:", subTotal);
    }
}