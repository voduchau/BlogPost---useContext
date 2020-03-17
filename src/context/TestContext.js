import React,{useReducer, useState} from 'react';

const TestContext = React.createContext();

const reducer = (state,action)=>{
    switch (action.type) {
        case 'addBlog':
            return [...state,{id:Math.floor(Math.random()*100000),title:`#add Blog ${state.length+1} `}]
        case 'delete':
           return state.filter((item)=>{
                return item.id !=action.id;
           })
        default:
            return state;
    }
}

export const TestProvider = ({children})=>{
    // const [state, dispatch] = useReducer(reducer,{count:0}) 
    const [blog,dispatch] = useReducer(reducer,[])
    const addBlog = ()=>{
        dispatch({type:'addBlog'})
    }
    const deleteBlog = (id)=>{
        dispatch({type:'delete',id:id})
    }
    return (
        <TestContext.Provider value={{data:blog,addBlog,deleteBlog}} >
            {children}
        </TestContext.Provider>
    );
};
export default TestContext;