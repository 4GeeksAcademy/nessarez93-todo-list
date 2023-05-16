import React, { useState } from "react";

const ToDoList = () => {

//Esta función agrega el valor nuevo
        const [toDo,setToDo] = useState('¿Qué falta hacer?')
        const [toDoArray,setToDoArray] = useState(['Lavar los platos', 'Cocinar'])
        function addDuty(e) {
            setToDo (e.target.value)
        }
//Esta función activa el enter
        function submit(e) {
            console.log('submit')
            setToDoArray ([...toDoArray,toDo])
            e.preventDefault();
        }

	return (
        <>
            <div className='container'>
                <h1 className="text-light fw-light text-center">to do's</h1>
                <form onSubmit={submit} className="w-50 m-auto">
                        <input type="text" onChange={addDuty} value={toDo} aria-label=".form-control-lg example"/>
                        <ul>
                            {toDoArray.map((item, id) => <li>{item}</li>)}
                        </ul>
                </form>
            </div>
        </>
    );
};

export default ToDoList;