import React, {useState} from "react";

interface IFormValidation{
    username:string;
    email: string;
    name: string;
    phone:number;
    age:number;
}

const initialFormValue ={
    username: "stepup332",
    email:"info@stepup.com.pk",
    name: "Muhammad Siddique",
    phone: 3416244998,
    age: 29
}



function UserForm(){
    const [form, setForm] = useState<IFormValidation>(initialFormValue);
    
    const onChangeUsername = (event:any) =>{
        setForm({
            ...form,
            username: event.target.value
        })
      }

      const onChangeEmail = (event:any) =>{
          setForm({
              ...form,
              email: event.target.value
          })
      }

      const onChangeName = (event:any) => {
          setForm({
              ...form,
              name: event.target.value
          })
      }

      const onChangePhone = (event:any) => {
          setForm({
              ...form,
              phone: event.target.value
          })
      }

      const onChangeAge = (event:any) =>{
          setForm({
              ...form,
              age:event.target.value
          })
      }

      const onSubmit = ()=>{
          console.log("form", form);
      }

    return(
        <div>
            <form>
                UserName: <input 
                type="text"
                name="username"
                value={form.username}
                onChange={onChangeUsername}
                /><br/>
                Email: <input 
                type="email"
                name="email"
                value={form.email}
                onChange={onChangeEmail}
                /><br/>
                Full Name: <input 
                type="text"
                name="name"
                value={form.name}
                onChange={onChangeName}
                /><br/>
                Phone No.: <input 
                type="number"
                name="phone"
                value={form.phone}
                onChange={onChangePhone}
                /><br/>
                Your Age: <input 
                type="number"
                name="age"
                value={form.age}
                onChange={onChangeAge}
                /><br/>
                <button type="submit" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default UserForm;