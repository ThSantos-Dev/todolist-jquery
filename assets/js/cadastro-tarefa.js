'use strict';


// Sempre que a index.html for carregada, a função será executada
$(document).ready(() => {

    $('#data').mask("00/00/0000")

    // Resgatando o formulário
    $('#form-cadastro-tarefa').submit((e) => {
        e.preventDefault();

        // Recuperando os capos do form
        let tarefa = $('#tarefa').val(); // .val() - resgata o valor da input
        let data = $('#data').val()

        if (!tarefa || !data) {
            console.log("Entrou?")
            // $("#alert-cadastro-tarefa-erro").toggleClass("hide-message")
            alert('Preencha todos os campos!')
            return false;
        }

        saveInLocalStorage(tarefa, data)
        e.target.reset()

    })
})

const saveInLocalStorage = (tarefa, data) => {
    const tasks = getTasks()

    const newTodo = { id: new Date().getTime(), status: "PENDENTE", tarefa, data }

    localStorage.setItem('tasks', JSON.stringify([...tasks, newTodo]))

    $("#alert-cadastro-tarefa-sucesso").toggleClass("hide-message")

    alert('Atividade cadastrada com sucesso!!')
}

const getTasks = () => {
    const tasks = localStorage.getItem('tasks')

    if (tasks) return JSON.parse(tasks);

    return [];
}

const clearMessages = () => {
    setTimeout(() => {
        console.log("Clear messages")
    }, 2000)
}