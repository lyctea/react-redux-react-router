import thunk from 'redux-thunk'  //redux-thunk 支持dispatch function , 并且可以异步调用它
import createLogger from 'redux-logger'
import { createStore, appliMiddleware, compose } from 'redux' //引入redux createStore中间件以及compose()
import DevTools from '../containers/DevTools' //调试组件

//调用日止打印方法
const loggerMiddleware = createLogger();

//创建一个中间件集合
const middleware = [thunk, loggerMiddleware]

//利用compose增强store, 这个store与applyMiddlew和redux-devtools一起使用
const finalCreateStore = compose(
    appliMiddleware(...middleware),
    DevTools.instrument(),
)(createStore)

export default finalCreateStore

/*compose(...functions)
 从右到左来组合多个函数。

 这是函数式编程中的方法，为了方便，被放到了 Redux 里。
 当需要把多个 store 增强器 依次执行的时候，需要用到它*/