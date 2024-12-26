export const addTodo = (todo) => {
    console.log("LINE AT 2" , todo);
    
    return {
        type: 'ADD_TODO',
        payload: todo
    }
};

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id 
    }
};

export const completedTodo = (id) => {
    console.log("LINE AT 2" , id);
    
    return {
        type: 'COMPLETED_TODO',
        payload: id 
    }
}