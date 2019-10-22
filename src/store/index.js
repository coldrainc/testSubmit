import { Store } from '@music/mrx';

let id = 0;
function creatEntry(title) {
    id += 1;
    return {
        title,
        id
    }
}


export default new Store({
    state: {
        list: []
    },
    reducer: {
        addTodo: function(state, action) {
            switch (action.type) {
                case 'addTodo':
                    return {
                        ...state,
                        list: state.list.concat(creatEntry(action.payload))
                    }
                default: 
                   return {
                       ...state
                   };
            }
            
        }
    }
})