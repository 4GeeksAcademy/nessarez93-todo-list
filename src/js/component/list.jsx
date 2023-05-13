import React, { useState } from "react";

const ToDoList = () => {

        const [toDo,setToDo] = useState('What needs to be done?')
        function cambioInput(e) {
            setToDo (e.target.value)
            console.log(toDo)
        }

	return (
        <>
            <div className='container'>
                <h1 className="text-light fw-light text-center">todos</h1>
                <form className="w-50 m-auto">
                        <input type="text" onChange={cambioInput} value={toDo} aria-label=".form-control-lg example"/>
                        <p>items</p>
                </form>
            </div>
        </>
    );
};

export default ToDoList;