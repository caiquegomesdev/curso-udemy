// IIFE - Immediately Invoked Function Expression
// foge do escopo global e tudo que estara dentro sera executado 

(function() {
    console.log('Sera executado na hora');
    console.log('Foge do escopo mais abrangente');
})()