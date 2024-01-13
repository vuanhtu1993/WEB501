import Header from "../components/header"
import Footer from "../components/footer"
import Card from "../components/card"
import Advertisement from "../components/advertisement"
// Pages
const HomePage = function () {
    return `
      ${Header()}
      <h1>Trang chủ</h1>
      <div style="display: flex; width: 100%">
        <div style="width: 40%">${Advertisement()}</div>
        <div style="width: 60%">
          ${Card()}
          ${Card()}
          ${Card()}
        </div>
      </div>
      ${Footer()}
    `
}

export default HomePage