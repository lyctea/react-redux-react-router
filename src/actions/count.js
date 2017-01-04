import { INCREASE,DECREASE,GETSUCCESS,REFRESHDTA } from '../constants'

import 'whatwg-fetch' //引入fetch来进行Ajax

//返回action对象
export const increase = n => {
    return {
        type: INCREASE,
        amount: n
    }
}

export const decrease = n => {
    return {
        type: DECREASE,
        amount: n
    }
}

export const refreshData = () => {
    return {
        type: REFRESHDTA
    }
}

export const getSuccess = (json) => {
    return {
        type: GETSUCCESS,
        json
    }
}

function  fetchPosts() {
    return dispatch => {
        return fetch('data.json')
            .then((res) => {console.log(res.status); return res.json })
            .then((data) => { dispatch(getSuccess(data)) })
            .catch((e) => { console.log(e.message)})
    }
}

//这里返回一个函数进行异步操作
export function fetchPostsIfNeeded() {
    //注意这个函数也接收了getState() 方法
    //它让你选择接下来dispatch什么
    return (dispatch, getState) => {
        return dispatch(fetchPosts())
    }
}