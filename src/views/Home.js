import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import {getSwiper,getList} from '../api/index';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
       imgHeight:'375px',
       slideList:[],
      topList: [],
      goodsList:[]
    }
  }
  
  componentDidMount() {
    // 轮播图数据
      getSwiper().then(res=>{
        // console.log(res);
        // const {catelist,sliderlist,toplist} =res.data.message;
        const {sliderlist,toplist} =res.data.message;

        this.setState({
          slideList:sliderlist,
          topList: toplist,
        })
      })
    // 商品列表请求
    getList().then(res => {
      // console.log(res);
      const { message } = res.data;
      this.setState({
          goodsList:message
      })
    })
  }

  render() {
    return (
      <div>
      <Carousel
      autoplay={true}
      infinite
      >
       {this.state.slideList.map(item => (
        <div
          key={item.id}
          style={{ display: 'inline-block', width: '100%' ,height: this.state.imgHeight}}
        >
          <img
            src={item.img_url}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              this.setState({ imgHeight: 'auto' });
            }}
          />
        </div>
      ))}
    </Carousel>
    {/* 列表栏 */}
    <List>
      {this.state.topList.map(item=>(
        <Item
          key={item.id}
          thumb={item.img_url}
          multipleLine
          onClick={() => {}}
        >
          {item.title} 
          {/* <Brief>{item.title}</Brief> */}
       </Item>
      )
      )}
    </List>
    
        {/* 商品列表 */}
        {this.state.goodsList.map(item => (
          <div className="goods-body" key={item.level1cateid}>
            <h3 className="am-list-header">{item.catetitle}</h3>
            {item.datas.map(item => (
               <div className="goods-item" key={item.artID}>
               <img src={item.img_url} alt=""/>
                <h4 className="goods-title">{item.artTitle}</h4>
                <div className="price-info">
                  <span className="price-new">{item.sell_price}</span>
                  <span className="price-old">{item.market_price}</span></div>
                <div className="sell-info">
                  <span className="sell-status">{item.add_time}</span>
                  <span className="leftcount">{item.stock_quantity}</span>
                </div>
             </div>
            ))}
        </div>
        ))}
    
      <style jsx>{`
        .goods-body {
          overflow: hidden;
          .goods-item {
            float: left;
            width: 50%;
            box-sizing: border-box;
            padding-bottom: 30px;
            position: relative;
            background-color: white;
            &:nth-child(2n+1) {
                padding-left: 2px;
                padding-right: 20px;
            }
            &:nth-child(2n) {
                padding-right: 2px;
                padding-left: 20px;
            }
            img {
              width: 165.5px;
              height: 165.5px;
            }
            .goods-title {
              box-sizing: border-box;
              height: 31px;
              font-size: 13px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              word-break: break-word;
              color: #232326;
              margin-top: 5px;
              line-height: 16px;
              margin-bottom: 3px;
              padding: 0 4px;
            }
            .price-info {
              position: relative;
              height: 26px;
              font-size: 13px;
              overflow: hidden;
              .price-new {
                color: #f23030;
                position: relative;
                top: 1px;
                height: 25px;
                line-height: 25px;
              }
              .price-old {
                position: absolute;
                top: 1px;
                right: 0px;
                color: #686868;
                width: 49px;
                height: 25px;
                line-height: 25px;
                text-decoration: line-through;
              }
            }
          }
       }
     `}</style>
    </div>
    
    )
  }
}

export default Home
