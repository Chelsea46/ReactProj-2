import { useContext } from "react"
import { UserContext } from "../contexts/UserContext";


export default function Form(){

    const {handleSubmit, formData, handleChange, formError} = useContext(UserContext)

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit(event);
      };
      console.log(formData)
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder='Name' value = {formData.name} onChange={handleChange} />
            <input type="text" name={['address','city']} placeholder='City' value = {formData.address.city} onChange={handleChange}/>
            <input type="text" name="website" placeholder='Website' value = {formData.website} onChange={handleChange}/>
            <input type="text" name={['company', 'name']} placeholder='Company' value = {formData.company.name} onChange={handleChange}/>
            <button className="form-btn">Add User</button>
            {formError.nameError && <h4>Please fill out Name field</h4>}
            {formError.cityError && <h4>Please fill out City field</h4>}
            {formError.websiteError && <h4>Please fill out Website field</h4>}
            {formError.companyError  && <h4>Please fill out Company field</h4>}
        </form>
    )
}