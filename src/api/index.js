import axios from 'axios';
// baseURL
axios.defaults.baseURL = 'http://localhost:8899';
// 轮播图请求
export const getSwiper = () => axios.get('/site/goods/gettopdata/goods');
// 商品列表请求
export const getList = () => axios.get('/site/goods/getgoodsgroup');
