import { delete_api, get_api, put_api } from "./Method";

export async function getAllUser(){
    return get_api (`https://localhost:7024/api/users`)
  }