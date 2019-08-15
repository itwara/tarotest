import Taro, { Component } from '@tarojs/taro'
import { View, Text,  WebView, Icon, RichText, Textarea, Switch, Image } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    titleBar: false
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index' style='flex-direction:column;'>
        {/* <Text>Hello world!</Text> */}
        {/* <WebView src='https://fang.lousiling.cn' /> */}
        <View  style='flex-direction:row;'>
          <Text style='border: 1px solid blue;'>flex-direction: row 横向布局</Text>
          <Text style='border: 1px solid blue;'>flex-direction: row 横向布局</Text>
          <Text style='border: 1px solid blue;'>flex-direction: row 横向布局</Text>
        </View>
        <View  style='flex-direction:column; margin-top: 50px;'>
          <Text style='border: 1px solid blue;'>flex-direction: column 纵向布局</Text>
          <Text style='border: 1px solid blue;'>flex-direction: column 纵向布局</Text>
          <Text style='border: 1px solid blue;'>flex-direction: column 纵向布局</Text>
        </View>
      </View>
    )
  }
}
