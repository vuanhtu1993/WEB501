const HeaderComponent = function () {
  // `` backticks
  return /*html*/`
      <nav class="bg-[#1A94FF] flex items-center">
        <img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Logo_Tiki_2023.png/1200px-Logo_Tiki_2023.png"/>
        <div class="flex grow">
          <input class="w-[80%] p-2" placeholder="tìm kiếm"/>
          <button class="bg-blue-600 p-2 text-white">Tìm kiếm</button>
        </div>
        <div>
          <img class="w-6" src="/icons/user.png"/>
          <button>Đăng ký</button>
        </div>
        <div>
          <img class="w-6" src="/icons/cart.png"/>
        </div>
      </nav>
    `
}

export default HeaderComponent;