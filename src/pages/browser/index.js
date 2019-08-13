import Taro, { Component } from '@tarojs/taro'
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
    const url = Base64.decode(this.$router.params.url)
    console.log(url)
    this.setState(() => {
      return {
        sUrl: url
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
