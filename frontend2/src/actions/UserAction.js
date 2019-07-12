import fetchJsonp from 'fetch-jsonp'
const API_URL = 'https://api.github.com/user'
const startRequest = user =>({
    type: 'START_REQUEST',
    payload:{user}
})

const receiveDate = (user, error, response) => ({
    type: 'RECEIVE_DATA',
    payload:{uuser, error, response}
})

//요청완료
const finishRequest = user =>({
    type: 'FINISH_REQUEST',
    payload:{load}

})

//사용자 추출
export const fetchUser = user => {
    return async =>{
        dispatchEvent(startRequest(user))
        try {
            const response = await fetchJsonp(`${API_URL}/${user}/repos`)
            const data = await response.json
            dispatchEvent(receiveDate(user,null,data))
        } catch (error) {
            dispatchEvent(receiveDate(user,err))
        }
        dispatchEvent(finishRequest(user))
    }
}