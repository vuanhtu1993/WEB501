const HeaderComponent = function () {
  // `` backticks
  return `
      <nav>
        <img width="100px" src="data:image/png;base64,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"/>
        <ul>
          <li>Trang chủ</li>
          <li>Ngành học</li>
          <li>Tuyển sinh</li>
          <li"><a href="/contact">Liên hệ</a></li>
        </ul>
      </nav>
    `
}

export default HeaderComponent;