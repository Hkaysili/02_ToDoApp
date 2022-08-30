 // initialState tanımlıyoruz
 export const initialState = {
     todos : []
 };

 // * --- action props ----
 /*
    {2
        type: 'ADD_TODO',
        payload: todo
    }
 */

 const reducer = (state, action) => {  
     console.log(action)
     switch (action.type) {
        case 'ADD_TODO':
           return {
               ...state,
               todos: [action.payload, ...state.todos]
           }
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: [...state.todos].filter(todo => todo.id !== action.payload)
            }
        case 'COMPLETE_TODO':
            return {
                ...state,
                todos: [...state.todos].map(todo => {
                    if(todo.id !== action.payload){
                        return todo;
                    }
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                })
            } 
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id !== action.payload.todoId){
                        return todo;
                    }
                    // *Aradımığımız toDo'yu bulduysak, haydi güncelleyelim..
                    return{
                        ...todo,
                        content : action.payload.newValue
                    }
                }) 
            } 
        default:
             return {
                 ...state,
             }
     }
 };

 export default reducer;