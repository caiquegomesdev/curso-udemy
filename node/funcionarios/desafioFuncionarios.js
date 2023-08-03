const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') 

axios.get(url).then(response =>{
    const funcionarios = response.data
    
    // (part-1) Filtragem de funcionarias chinesas
    const mulheresChinesas = funcionarios.filter(funcionario => 
        funcionario.genero === 'F' && funcionario.pais === 'China'
    );

    // (part-2) Encontrar o menor salario entre as funcionarias chinesas
    const mulherChinesaMenorSalario = mulheresChinesas.reduce((minSalarioFuncionario, funcionario) => {
        if (funcionario.salario < minSalarioFuncionario.salario) {
            return funcionario;
        } else {
            return minSalarioFuncionario;
        }
    });

    console.log(mulherChinesaMenorSalario);
});
