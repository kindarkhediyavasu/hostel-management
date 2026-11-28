import { useState,useContext, use, useEffect, useRef } from "react";
import style from "./Students.module.css";
import { StudentsData } from "../store/StudentsContext";
function Students(){
    const {students,dispatch} = useContext(StudentsData);
    const [isFormOpen,setIsFormOpen] = useState(false);

    const [name,setName]  = useState("");
    const [email,setEmail]  = useState("");
    const [phone,setPhone]  = useState("");
    const [room,setRoom]  = useState("");
    const [studentId,setStudentId] = useState("");

    const inputNameErrorRef = useRef(null);
    const inputEmailErrorRef = useRef(null);
    const inputPhoneErrorRef = useRef(null);
    const inputRoomErrorRef = useRef(null);

    const validateForm = () => {
        let isDone = true;
         // student name validation
             const namePattern = /^[a-zA-z\s]+$/;
             if(!name){
                inputNameErrorRef.current.innerText ="name must be required";
                 isDone = false;
              }else if(!namePattern.test(name)){
                inputNameErrorRef.current.innerText ="please, Enter valid name"; 
                isDone = false;
              }else{
                 inputNameErrorRef.current.innerText =""; 
              }
        // student email validation
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              if(!email){
                 inputEmailErrorRef.current.innerText = "email must be required";
                 isDone = false;
              }else if(!emailPattern.test(email)){
                inputEmailErrorRef.current.innerText = "please, Enter valid email";
                isDone = false;
              }else{
                inputEmailErrorRef.current.innerText = "";
              }
        //student phone validation
              const phonePattern = /^[0-9]{10}$/;
              if(!phone){
                 inputPhoneErrorRef.current.innerText = "phone number must be required";
                 isDone = false;
              }else if(!phonePattern.test(phone)){
                inputPhoneErrorRef.current.innerText = "please, Enter valid phone number";
                isDone = false;
              }else{
                inputPhoneErrorRef.current.innerText = "";
              }
        // student room validation
              const roomPattern = /^[0-9]+$/;
              if(!room){
                inputRoomErrorRef.current.innerText = "room number must be required";
                isDone = false;
              }else if(!roomPattern.test(room)){
                inputRoomErrorRef.current.innerText = "please, enter valid room number";
                isDone = false;
              }else{
                inputRoomErrorRef.current.innerText = "";
              }

            return isDone;
    }

    const handleStudenFormSubmit = (e) => {
        e.preventDefault();
        const isValidate = validateForm();
        if(!isValidate){
            return;
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
        setIsFormOpen(false);
        setStudentId("");
        setName("");
        setEmail("");
        setPhone("");
        setRoom("");
        

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
                        <div className={style.student_form_box_wrapper}>
                            <div className={style.student_form_inputbox}>
                                <input type="text" name="student_name" placeholder="Enter student name" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <p ref={inputNameErrorRef}></p>
                    </div>
                    <div className={style.student_form_box_wrapper}>
                        <div className={style.student_form_inputbox}>
                            <input type="email" name="student_email" placeholder="Enter student email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <p ref={inputEmailErrorRef}></p>
                    </div>
                     <div className={style.student_form_box_wrapper}>
                        <div className={style.student_form_inputbox}>
                            <input type="phone" name="student_phone" placeholder="Enter student phone" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength="10"/>
                        </div>
                        <p ref={inputPhoneErrorRef}></p>
                    </div>
                     <div className={style.student_form_box_wrapper}>
                        <div className={style.student_form_inputbox}>
                            <input type="text" name="student_room" placeholder="Enter student room number" value={room} onChange={(e) => setRoom(e.target.value)}/>
                        </div>
                        <p ref={inputRoomErrorRef}></p>
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
                   return  <tr key={student.id}>
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