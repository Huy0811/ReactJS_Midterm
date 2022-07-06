import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components";

const data = {
  header: "YÊU CẦU 2 VÀ 3",
  headerStyle: { color: "cyan" },
  content: [
    { name: "Nguyễn Thị Phương Anh", style: { color: "red" } },
    { name: "Nguyễn Việt Ân", style: { color: "blue" } },
    { name: "Vương Quang Hiển", style: { color: "green" } },
    { name: "Trần Nguyễn Trung Hiếu", style: { color: "yellow" } },
    { name: "Dương Chí Huy", style: { color: "cyan" } },
    { name: "Lâm Nhật Triều", style: { color: "orange" } },
    { name: "Nguyễn Minh Quân", style: { color: "pink" } },
    { name: "Trịnh Tấn Minh", style: { color: "purple" } },
    { name: "Cao Thiện Nhân", style: { color: "aqua" } },
    { name: "Trần Minh Trung", style: { color: "black" } },
    { name: "Nguyễn Xuân Sơn", style: { color: "grey" } },
    { name: "Nguyễn Nam Phương", style: { color: "red" } },
  ],
};

function App() {
  const { header, headerStyle, content } = data;

  return (
    <div className="App">
      <MyComponent
        header={header}
        headerStyle={headerStyle}
        content={content}
      />
    </div>
  );
}

export default App;
