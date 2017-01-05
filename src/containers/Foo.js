import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'

class Foo extends Component {
    render(){
        //通过this.props获取到lists的值
        const { lists } = this.props

        return (
            <div>
                <ul className="list-group">
                    {/*将值传入展示组件*/}
                    { lists.map((e, index) => <List text={e.text} key={index}></List>) }
                </ul>
            </div>
        )
    }
}

//验证组件中参数类型
Foo.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
}

//获取state中的lists值
const getList = state => {
    return {
        lists: state.update.lists
    }
}


//利用connect讲组件与redux绑定起来
export default connect(getList)(Foo)