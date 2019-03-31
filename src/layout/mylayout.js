import React, { Component } from 'react'
import {TabBar} from 'antd-mobile';
export class Mylayout extends Component {
  render() {
    return (
         <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<i className="iconfont icon-home"></i>
            }
            selectedIcon={<i className="iconfont icon-home" style={{color: "#33A3F4"}}></i>
            }
            selected={this.props.location.pathname === '/'}
            onPress={() => {
                this.props.history.push('/')
            }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            title="购物车"
            key="Cart"
            icon={<i className="iconfont icon-gouwuche"></i>
            }
            selectedIcon={<i className="iconfont icon-gouwuche" style={{color: "#33A3F4"}}></i>
            }
            selected={this.props.location.pathname === '/cart'}
            onPress={() => {
                this.props.history.push('/cart')
            }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            key="Mine"
            icon={<i className="iconfont icon-weibiaoti2fuzhi12"></i>}
            selectedIcon={<i className="iconfont icon-weibiaoti2fuzhi12" style={{color: "#33A3F4"}}></i>}
            selected={this.props.location.pathname === '/mine'}
            onPress={() => {
              this.props.history.push('/mine')
            }}
          >
            {this.props.children}            
          </TabBar.Item>
          </TabBar>
    )
  }
}

export default Mylayout
