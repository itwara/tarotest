import Taro, { Component, getApp } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'
import { Base64 } from 'js-base64'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sUrl: ''
    }
  }
  config = {
    navigationBarTitleText: '楼司令'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillMount() {
    const globalStore = getApp().globalStore || {}
    console.log(getApp())
    const url = Base64.decode(this.$router.params.url)
    console.log(url)
    this.setState(() => {
      return {
        sUrl: `${url}?${encodeURIComponent(JSON.stringify(globalStore.appInfo))}`
      }
    })
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='wifi-browser'>
        <WebView src={this.state.sUrl} />
      </View>
    )
  }
}
