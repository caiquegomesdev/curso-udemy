const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 0', function(){
    console.log('executando Tarefa 1!', new Date().getSeconds())
}) //*/5 (5 em 5 segundos)* 11 (11 horas)*  (MES ignorad)* 0 (dia 0=domingo 1=segunda...)'

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000) //cancela tarefa apos 20 segundos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})