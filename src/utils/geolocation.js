
export function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(pos => {
            resolve([pos.coords.latitude, pos.coords.longitude]);
        }, err => {
            reject(err);
        }, {});
    });
}
