import axios from "axios";

export const getUsers = () => {
  return axios.get('/users', {
    //sets limit on 1000 users so there is not unlimited users
    params: {
      limit: 1000
    }
  })
}