import axios from 'axios'

export function notification(data) {
    return axios({
        method: 'get',
        url: 'http://5b3f13cac3c3fb0014742871.mockapi.io/list-product',
        headers: {
            'Accept': 'application/json',
        }
    })
}