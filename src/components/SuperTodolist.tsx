import React, {ReactNode} from 'react';

type PropsType = {
    tasks: TasksType[]
    children?: React.ReactNode
}

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export const SuperTodolist: React.FC<PropsType> = (props) => {

    const {tasks, children} = props

    const currentTasks = tasks.map(m => {
            return (
                <li>
                    <input type={'checkbox'} checked={m.isDone}/>
                    <span>{m.title}</span>
                </li>
            )
        }
    )

    return (
        <div>
            <h1>I'm TODOLIST</h1>
            {currentTasks}
            {children}
        </div>
    );
};

export default SuperTodolist;