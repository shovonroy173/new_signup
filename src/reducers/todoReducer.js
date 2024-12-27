const initialState = {
    todo:[
        {id:1, title:"Learn React", completed:false},
        {id:2, title:"Learn Redux", completed:false},
    ]
};

export const todoReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todo: [...state.todo, action.payload]
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todo: [...state.todo.filter((todo) => todo.id !== action.payload)]
            };
        
            case 'COMPLETED_TODO':
                return {
                    ...state,
                todo: state.todo.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
                };
        default: return state;
    }
}