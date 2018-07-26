const fullName = 'Tamer Fouad';
const getFirstName1 = fullName => fullName.split(' ')[0];
const getFirstName2 = fullName => {
    return fullName.split(' ')[0];
}
console.log(getFirstName1(fullName));
console.log(getFirstName2(fullName));