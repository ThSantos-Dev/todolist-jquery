$(document).ready(() => {
    console.log("Estou sendo chamado no listar tarefas")
    console.table(getTasks())

    const tarefas = getTasks()

    if (tarefas.length > 0) {
        $("#tbody-tarefas").append(tarefas.map(createTableRow))
        return
    }

    $("#tbody-tarefas").append('<tr><td colSpan="5" class="text-center">Não há tarefas cadastradas!</td></tr>')
})

const getTasks = () => {
    const tasks = localStorage.getItem('tasks')

    if (tasks) return JSON.parse(tasks);

    return [];
}

const createTableRow = (task, index) => {
    const tr = `
            <tr>
              <th scope="row">${index}</th>
              <td>${task.tarefa}</td>
              <td>${task.data}</td>
              <td>${task.status}</td>
              <td>
                <div>
                    <i class="fa-solid fa-pen-to-square m-3">
                    </i><i class="fa-solid fa-trash"></i>
                </div>
            </td>
            </tr>
    `
    return tr;
}