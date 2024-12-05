import axios from 'axios';
let baseurl = 'http://localhost:3001/api';

export const getAllEmployees = async () => {
    try {
        var response = await axios.get(`${baseurl}/employees`);
        if(response.status != 200){
            throw new Error("error getting all employees")
        }
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}

export const getAllCategories = async () => {
    try {
        var response = await axios.get(`${baseurl}/categories`);
        if(response.status != 200){
            throw new Error("error getting all categories")
        }
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const updateSalary = async (id, raise) => {
    try {
      const response = await axios.put(`${baseurl}/updateEmployeeSalary/${id}`, { raise });
      if (response.status !== 200) {
        throw new Error("Error updating salary");
      }
      return response.data; 
    } catch (error) {
      console.error("Error in updateSalary:", error.message);
      throw error;
    }
  };
  

export const addEmployee = async (employee) => {
    try {
        var response = await axios.post(`${baseurl}/addEmployee`, employee);
        if(response.status != 200){
            throw new Error("Error adding employee")
        }
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addCategory = async (category) => {
    try {
        var response = await axios.post(`${baseurl}/addCategory`, category);
        if(response.status != 200){
            throw new Error("Error adding cateogry")
        }
        return response.data
    } catch (error) {
        console.log(error)
    }
}



export const deleteEmployee = async (id) => {
    try {
        var response = await axios.delete(`${baseurl}/deleteEmployee/${id}`);
        if(response.status != 200){
            throw new Error("error deleting employees")
        }
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const deleteCategory = async (id) => {
    try {
        var response = await axios.delete(`${baseurl}/deleteCategory/${id}`);
        if(response.status != 200){
            throw new Error("error deleting employees")
        }
        return response.data
    } catch (error) {
        console.log(error)
    }
}
