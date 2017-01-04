import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import  {Router,browserHistory} from 'react-router'
//syncHistoryWithStore可以结合state同步导航事件
import  {syncHistoryWithStore } from 'react-router-redux'

import finalCreateStore from './src/store/configureStore'
import DevTools from './src/containers/Devtools'  //引入调试工具
import reducer from './src/reducers'  //引入reducers集合
import routes from './src/routes' //引入路由配置

import './assets/css/bootstrap.min.css'  //引入样式文件

//给增强后的store传入reducer
const store = finalCreateStore(reducer)

//创建一个增强版的history来结合store同步导航事件
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <div>
            <Router history={history} routes={routes} />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('mount')
)
