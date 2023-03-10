import axios from "axios";
const headers = {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow- ": "Content-Type",
    "Authorization": `token ${localStorage.getItem("token")}`
  }

  export const mentorDash = () => {
    return new Promise((resolve, reject) => {
      console.log("in mentorList api")
      axios
        .get(
          "http://13.127.98.218/mentorship/mentor/dashboard", { headers }
        )
        .then(res => {
          resolve(res.detail)
          console.log(res.data.id, "response Data")
        })
        .catch(error => reject(error))
    })
  }
  export const mentorSession = () => {
    return new Promise((resolve, reject) => {
      console.log("in mentorList api")
      axios
        .get(
          "http://13.127.98.218/mentorship/mentor/sessions/", { headers }
        )
        .then(res => {
          resolve(res.detail)
          console.log(res.data.id, "response Data")
        })
        .catch(error => reject(error))
    })
  }

  export const studentData = () => {
    return new Promise((resolve, reject) => {
      console.log("in mentorList api")
      axios
        .get(
          "http://13.127.98.218/mentorship/mentor/student-data/", { headers }
        )
        .then(res => {
          resolve(res.detail)
          console.log(res.data.id, "response Data")
        })
        .catch(error => reject(error))
    })
  }

  export const Ms_studentProfile = (id) => {
    return new Promise((resolve, reject) => {
      console.log("in mentorList api")
      axios
        .get(
          `http://13.127.98.218/mentorship/mentor/student-data/?student_id=${id}`, { headers }
        )
        .then(res => {
          resolve(res.detail)
          console.log(res, "response Data")
        })
        .catch(error => reject(error))
    })
  }

  export const Ms_SessionsDetail = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://13.127.98.218/mentorship/mentor/sessions/?session_id=${id}`, { headers }
        )
        .then(res => {
          resolve(res.detail)
        })
        .catch(error => reject(error))
    })
  }