import axios from './axiosInstance';

export function getTodos(){
    return new Promise((resolve,reject)=>{
        axios.get('/todo/todos').then((todos)=>{
            resolve(todos)
        }).catch((err)=>{
            reject(err)
        })
    })
}

export function createTodo(credentials){
    return new Promise((resolve,reject)=>{
        axios.post('/todo/create-todos',credentials).then((todo)=>{
            resolve(todo)
        }).catch((err)=>{
            reject(err)
        })
    })
}


export function updateTodo(credentials){
    return new Promise((resolve,reject)=>{
        axios.put('/todo/edit',credentials).then((todo)=>{
            resolve(todo)
        }).catch((err)=>{
            reject(err);
        })
    })
}
