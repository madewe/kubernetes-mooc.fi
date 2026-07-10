const randomString = createRandomString();

function getRandomChar(){
    let number = 33;
    while((number > 32 && number < 48) || (number >57 && number < 65) || (number > 90 && number < 97)){
        number = Math.floor(Math.random() * (122-48)) + 48;
    }
    return String.fromCharCode(number);;
}

function createRandomString(){
    let array = [];
    for(let i = 0; i < 8; i++){
        let string = "";
        for(let j = 0; j < 4; j++){
            string += getRandomChar();
        }
        array.push(string);
    }
    return `${array[0]}${array[1]}-${array[2]}-${array[3]}-${array[4]}-${array[5]}${array[6]}${array[7]}`;
}

function logging(){
    console.log(`${new Date().toISOString()}: ${randomString}`);
}

setInterval(logging, 5000);