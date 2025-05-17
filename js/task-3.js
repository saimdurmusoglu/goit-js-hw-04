// profile nesnesi tanımı
const profile = {
  username: "Jacob",
  playTime: 300,

  // username değerini değiştiren metod
  changeUsername(newName) {
    this.username = newName;
  },

  // playTime değerini artıran metod
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  // profile bilgilerini getiren metod
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log("3. Odev Sonucu");
console.log("______________");

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

console.log("______________");
console.log("\n");
