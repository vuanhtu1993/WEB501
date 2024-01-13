import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'

const HomePage = function () {
  return `
      ${HeaderComponent()}
      <h1 id="trang-chu">Trang chủ</h1>
      ${FooterComponent()}
    `
}

export default HomePage;