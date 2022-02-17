import React from "react";

class Task extends React.Component {
    render() {
        const tasks = ['Leitura', 'Estudar o Course', 'Almoçar', 'Exercícios do dia', 'Aula ao vivo', 'Participar de mentorias', 'Atingir 100% nos projetos'];

        const returnTasks = tasks.map((element, index) => <li key={index}>{element}</li>);
        return (
            <ol>
                {returnTasks}
            </ol>
        );
    }
}

export default Task