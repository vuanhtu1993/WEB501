# Các bước cài đặt Vitejs

## Bước 1: Cài đặt Nodejs

## Bước 2: Kiểm tra 

```jsx
# Nodejs version
node -v
npm -v
```

## Bước 3: Cài đặt vite + cài đặt thư viện

```jsx
npm create vite@latest
# cd vao thu muc chua code
npm install
```

## Bước 4: Chạy chương trình

<!-- Cai dat json-server -->
# Cai dat json-server
### Buoc 1: Cai dat npm json-server toan cuc
```
npm install -g json-server
```

### Buoc 2: Run server
```
// cd thu muc chua db.json
json-server -w db.json
```

### Buoc 3: Test server
Len trinh duyet vao duong dan "http://localhost:3000"

### Buoc 4: Cai dat concurrently
```
npm install -g concurrently
```

### Buoc5: Cau hinh trong package.json
```
"scripts": {
    "start": "concurrently \"vite\" \"json-server -w db.json\"",
  },
```
Và chạy lenh sau để chay dự án
```
    npm run start
```
#### Lưu ý: Nếu lỗi thì chạy câu lệnh sau:
```
Set-ExecutionPolicy -Scope "CurrentUser" -ExecutionPolicy "RemoteSigned"
```