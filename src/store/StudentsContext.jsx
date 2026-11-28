import { createContext, useReducer } from "react";
export const StudentsData = createContext();
function reducer(state,action){
    if(action.type === "DELETE_STUDENT"){
       return state.filter((student) => {
        return student.id !== action.studentId;
       });
    }else if(action.type === "ADD_NEW_STUDENT"){
        return [...state,action.payload];
    }else if (action.type === "EDIT_STUDENT"){
        return  state.map((student) => {
            return student.id === action.payload.id ? action.payload : student;
        });
    }
}
function StudentsContext({children}){
    const [students,dispatch] = useReducer(reducer,students_obj)
    return <StudentsData.Provider value={{students,dispatch}}>
    {children}
    </StudentsData.Provider>
}
export default StudentsContext;
const students_obj = [
    {
        id:101,
        name:"ram raghuvanshi",
        email:"ram123@gmail.com",
        phone:97122316780,
        room:201
    },
    {
        id:102,
        name:"vasu kindarkhediya",
        email:"kindarkhediyavasu2007@gmail.com",
        phone:6351637656,
        room:202
    },
    {
        id:103,
        name:"syami jainchary",
        email:"syami123@gmail.com",
        phone:9767890890,
        room:202
    }
]
