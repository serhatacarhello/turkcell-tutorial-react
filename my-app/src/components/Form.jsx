import React, { useState } from "react";

function Form() {

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    gender:'0'
  });

  const handleChange=(e)=> {
    // const {name, value} = e.target
    // setFormData({...formData, [name]: value})
setFormData(prev=>  ({...prev, [e.target.name]: e.target.value}))
  }


  console.log(formData);
  return (
    <div>
      <form action="">
        <div className="formInput">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          />
          <br />
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
          />

        <hr />

          <select name="gender" id="" value={formData.gender} onChange={handleChange}>
            <option value="0"  >Erkek</option>
            <option value="1"  >Kadın</option>
          </select>
          <hr />
          <div>
            {formData.name} {formData.surname}
            <div>
              <strong>{formData.gender === "0" ? 'Male' : "Female"} </strong>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
