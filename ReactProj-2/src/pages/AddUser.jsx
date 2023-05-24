import { useContext } from "react"
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom"

export default function Form(){

    const {formData, handleChange, formError, handleSubmit  } = useContext(UserContext)

    // const {id} = useParams()
    // const intId = parseInt(id)

    // const navigate = useNavigate();
    
    // const updateUsers = (data) => {
    //     if(!data.id){
    //     setUsers([
    //       ...users,
    //       {
    //          id: users.length +1,
    //         name: data.name,
    //         address:{city: data.address.city},
    //         website : data.website,
    //         company:{name: data.company.name}
    //       }
    //     ])
    //     } else{
    //         setUsers([
    //             ...users,
    //             {
    //                 id: intId,
    //               name: data.name,
    //               address:{city: data.address.city},
    //               website : data.website,
    //               company:{name: data.company.name}
    //             }
    //           ])
    //     }
    //   }

    //   const isValid = formData.name != '' && formData.address.city != '' && formData.website != '' && formData.company.name != '';

    //   function handleSubmit(event){
    //     event.preventDefault()
    //     const errors = {
    //         name: false,
    //         city: false,
    //         website: false,
    //         company: false
    //     }
    //     if(isValid){
    //         updateUsers(formData)
    //         setFormData({address:{city:''}, company:{name:''}, name:'', website:''})
    //         navigate("/")
    //     } if(formData.name === ''){
    //       errors.name = true
    //     }if(formData.address.city === ''){
    //         errors.city = true
    //     }if(formData.website === ''){
    //         errors.website = true
    //     }if(formData.company.name === ''){
    //         errors.company = true
    //     }else{
    //         setFormError(prevState => {
    //             return{
    //             ...prevState,
    //             nameError: false,
    //             cityError: false,
    //             websiteError: false,
    //             companyError:false,
    //             }
    //         })
    //     }
    //     setFormError(prevState => {
    //         return {...prevState,
    //             nameError: errors.name,
    //             cityError: errors.city,
    //             websiteError: errors.website,
    //             companyError: errors.company,
    //         }
    //     });
    //   }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Name' value = {formData.name} onChange={handleChange} />
            <input type="text" name='address.city' placeholder='City' value = {formData.address.city} onChange={handleChange}/>
            <input type="text" name="website" placeholder='Website' value = {formData.website} onChange={handleChange}/>
            <input type="text" name='company.name' placeholder='Company' value = {formData.company.name} onChange={handleChange}/>
            <button className="form-btn">Add User</button>
            {formError.nameError && <h4>Please fill out Name field</h4>}
            {formError.cityError && <h4>Please fill out City field</h4>}
            {formError.websiteError && <h4>Please fill out Website field</h4>}
            {formError.companyError  && <h4>Please fill out Company field</h4>}
        </form>
    )
}