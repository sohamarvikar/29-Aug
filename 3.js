var myobj={};
myobj.name = "MIT"
myobj.commame = "CSE"

var person = {
    name: 'xyz',
    age: 20,
    hobbies: ['singing', 'dancing', 'chatting'],
    DOB: "12-4-1999",
    walking: function() {
        console.log('I am walking');
        return "hello";
    },
    watching: function() {
        console.log('I am watching');
        return "hi";
    }
};
 console.log(person);
 console.log(person.name);
 console.log(person.walking());