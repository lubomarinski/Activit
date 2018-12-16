
export function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(pos => {
            resolve([pos.coords.latitude, pos.coords.longitude]);
        }, err => {
            reject(err);
        }, {});
    });
}

if (typeof (Number.prototype.toRadians) === "undefined") {
    Number.prototype.toRadians = function () {
        return this * Math.PI / 180;
    }
}

export function calculateDistance(ptA, ptB) {
    const [lat1, lon1] = ptA;
    const [lat2, lon2] = ptB;
    const φ1 = lat1.toRadians(),
        φ2 = lat2.toRadians(),
        Δλ = (lon2 - lon1).toRadians(),
        R = 6371e3; // gives d in metres
    var d = Math.acos(Math.sin(φ1) * Math.sin(φ2) + Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)) * R;
    return d;
}