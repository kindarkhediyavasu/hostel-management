import { useState,useContext, useRef, useEffect } from "react";
import style from "./Students.module.css";
import { StudentsData } from "../store/StudentsContext";
function Students(){
    const {students,dispatch} = useContext(StudentsData);
    const [isFormOpen,setIsFormOpen] = useState(false);
    const nameRef = useRef(null);
    const emailRef = useRef();
    const phoneRef = useRef();
    const roomRef = useRef();
    const studentIdRef = useRef();

    const [name,setName]  = useState("");
    const [email,setEmail]  = useState("");
    const [phone,setPhone]  = useState("");
    const [room,setRoom]  = useState("");
    const [studentId,setStudentId] = useState("");

    const handleStudenFormSubmit = (e) => {
        e.preventDefault();

        if(!name || !email || !phone || !room){
            alert("please, Enter the valid student information");
            return ;
        }
        if(studentId){
            const editStudent = {
            id:studentId,
            name:name,
            email:email,
            phone:phone,
            room:room
            }
            dispatch({type:"EDIT_STUDENT",payload:editStudent});
        }else{
            const newStudent = {
            id:Date.now(),
            name:name,
            email:email,
            phone:phone,
            room:room
          }
             dispatch({type:"ADD_NEW_STUDENT",payload:newStudent});
        }

        setStudentId("");
        setName("");
        setEmail("");
        setPhone("");
        setRoom("");

        setIsFormOpen(false);

    } 

    function handleEditStudent(e,id){
        const [studentObj] = students.filter((student) => student.id === id);
        setIsFormOpen(true);
        setStudentId(studentObj.id);
        setName(studentObj.name);
        setEmail(studentObj.email);
        setPhone(studentObj.phone);
        setRoom(studentObj.room);
    }
     

    return <section className={style.students_container}>
        <div className={style.student_header}>
            <div>
                <h2>Students</h2>
                <p>manage hostel students</p>
            </div>
            <button onClick={() => setIsFormOpen(true)}>+ add student</button>
        </div>

        {isFormOpen && 
        <div className={style.student_form_container}>
            <h3 className={style.student_form_heading}>Add new student</h3>
            <form action="" className={style.student_form} onSubmit={handleStudenFormSubmit}>
                        <input type="hidden" name="student_id" placeholder="Enter student room id" />
                    <div className={style.student_form_inputbox}>
                        <input type="text" name="student_name" placeholder="Enter student name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <p>Student name must be required</p>
                    </div>
                    <div className={style.student_form_inputbox}>
                        <input type="email" name="student_email" placeholder="Enter student email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={style.student_form_inputbox}>
                         <input type="phone" name="student_phone" placeholder="Enter student phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className={style.student_form_inputbox}>
                        <input type="text" name="student_room" placeholder="Enter student room number" value={room} onChange={(e) => setRoom(e.target.value)}/>
                    </div>
                    <div className={style.form_actions}>
                             <button type="submit">save</button>
                             <button type="button" onClick={() => setIsFormOpen(false)}>cancle</button>
                    </div>
                   
            </form>
        </div> }

        <div className={style.students_table_container}>
            <table className={style.students_table}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>room</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => {
                    return <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>{student.room}</td>
                    <td>
                        <button className={style.student_edit_button} onClick={(e) => handleEditStudent(e,student.id)}>edit</button>
                        <button className={style.student_delete_button} onClick={() => dispatch({type:"DELETE_STUDENT",studentId:student.id})}>delete</button>
                    </td>
                </tr>
                })}
                
            </tbody>
            </table>
        </div>
    </section>
}
export default Students;