import { todoUpdatevalidator } from "../helpers/todoUpdateValidator.js";
import { validateTodo } from "../helpers/todoValidator.js";
import { Todo } from "../models/Todo.js";

export const getTodos = (async(req,res)=>{
    try {
        const user = req.userId
        const todos = await Todo.find({userId:user});
        res.status(200).json(todos)
        
    } catch (error) {
        res.status(500).json({error:error})
        
    }
    
})

export const createTodo = ((req,res)=>{
    try {
        const user = req.userId;
        const {error,value} = validateTodo(req.body);

        if(error){
            res.status(422).json(error.details[0]?.message)
        }else{
            const newTodo = new Todo({
                title:value?.title,
                description:value?.description,
                date:value?.date,
                userId:user
            });

            newTodo.save();
        }
        res.status(201).json({success:'todo created successfully'})
        
    } catch (error) {
        res.status(500).json({error:'unauthorized user'});
        
    }
});

export const updateTodos = (async (req,res)=>{
    try {
        const user = req.userId;
        const {error,value} = todoUpdatevalidator(req.body);

        if(error){
            res.status(422).json(error.details[0]?.message)
        }else{
            const updateTodo = await Todo.updateOne({_id:value?.id},value);
        }

        res.status(200).json({success:'data updated successfully'});
        
    } catch (error) {
        res.status(500).json(error)
        
    }
});

export const deleteTodo = (async(req,res)=>{
    try {
        const {id} = req.body;
        const deleteTodo = await Todo.findByIdAndRemove(id);
        res.status(200).json({success:'todo deleted successfully'})
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})