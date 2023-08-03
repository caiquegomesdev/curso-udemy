const person = {
    firstName: 'Caique',
    lastName: 'Gomes',
    fullName: () => {
        return person.firstName + ' ' + person.lastName;
    }
}

const getFullName = person.fullName;
console.log(getFullName()); // Saída: Caique Gomes