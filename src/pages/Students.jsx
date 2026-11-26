import { useState } from "react";
import style from "./Students.module.css";
function Students(){
    const [isFormOpen,setIsFormOpen] = useState(false);
    const handleStudenFormSubmit = (e) => {
        e.preventDefault();
        console.log("done beta");
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
                    <div className={style.student_form_inputbox}>
                        <input type="text" name="student_name" placeholder="Enter student name"/>
                    </div>
                    <div className={style.student_form_inputbox}>
                        <input type="email" name="student_email" placeholder="Enter student email"/>
                    </div>
                    <div className={style.student_form_inputbox}>
                         <input type="phone" name="student_phone" placeholder="Enter student phone"/>
                    </div>
                    <div className={style.student_form_inputbox}>
                        <input type="text" name="student_room" placeholder="Enter student room number"/>
                    </div>
                    <div className={style.form_actions}>
                             <button type="submit">Add student</button>
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
                <tr>
                    <td>1</td>
                    <td>kindarkhediya vasu</td>
                    <td>kindarkhediyavasu2007@gmail.com</td>
                    <td>63516789098</td>
                    <td>101</td>
                    <td>
                        <button className={style.student_edit_button}>edit</button>
                        <button className={style.student_delete_button}>delete</button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    </section>
}
export default Students;