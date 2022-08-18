//exercise => speedcheck

// speedlimit = 70 ;
// 5 km => 1 ;
//points < 12 => points ;
//points >12 => suspended ;


function speedCheck(speed) {
    const speedLimit = 70;
    const kmperPoint = 5;

    if (speed < speedLimit + kmperPoint) {
        console.log("ok !");
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmperPoint);
    if (points < 12) console.log(points);
    else console.log("license is suspended");
}

console.log(speedCheck(100));