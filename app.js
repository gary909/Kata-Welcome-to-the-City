function sayHello(name, city, state) {
    var myName = '';
    for (var i = 0; i < name.length; i++) {
        myName = myName + name[i] + ' '; // loop through and make the full name
    }
    myName = myName.slice(0, -1); // remove the exta space at end
    return 'Hello, ' + myName + '! Welcome to ' + city + ', ' + state + '!';
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')); // 'Hello, John Smith! Welcome to Phoenix, Arizona!'
console.log(sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois')); // 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'
console.log(sayHello(['Wallace', 'Russel', 'Osbourne'], 'Albany', 'New York')); // 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!'