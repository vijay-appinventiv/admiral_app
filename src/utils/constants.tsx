import axios from "axios";
/**
 * setup axios instance
*/
const $axios = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  }
});

/**
 * baseUrl for moview poster
 */
const base_image_url = "http://image.tmdb.org/t/p/w200/";

const cinemas_data = [{
  title: "IOI CITY MALL",
  img_url: 'https://tse4.mm.bing.net/th?id=OIP.woZHnRozIIGD3Z44zk2qBAHaE7&pid=Api',
}, {
  title: "PAVILLION",
  img_url: 'https://tse3.mm.bing.net/th?id=OIP.SvY4iYNMzSENmA_ie7r1pgHaE7&pid=Api',
}, {
  title: "NU SENTAL",
  img_url: 'https://tse2.mm.bing.net/th?id=OIP.ZmoAj5IdNfToFJP0QpiNjQHaE8&pid=Api',
}, {
  title: "OTHER",
  img_url: 'https://tse1.mm.bing.net/th?id=OIP.KyXH2_9oYkQx_gcN3TlqrwHaE8&pid=Api',
}]

export default {
  loadMore: 2,
  cinemas_data,
  axios: $axios,
  base_image_url,
  initialLoading: 1,
  api_key: 'b1df9279ba09ca2a8bd01d18b97d2f3f',
}