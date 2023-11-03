import axios from "axios";

const BaseURL = "https://crud.teamrabbil.com/api";

// Read Data
export async function ReadRequest(){
    let result = await axios.get(BaseURL+"/v1/ReadProduct")
    return result.data['data'];
}

// Create Data
export async function createRequest(JSONBody){
    let result = await axios.post(BaseURL+"/v1/CreateProduct", JSONBody)
    return result.data['status'];
}