import React, { useState } from "react";

interface Personal {
  name: string;
  style: React.CSSProperties;
}

type MyComponentProps = {
  header: string;
  headerStyle: React.CSSProperties;
  contents: Personal[];
};

const MyComponent = ({ header, headerStyle, contents }: MyComponentProps) => {
  const [selected, setSelected] = useState(contents[0].name);

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };

  const student = contents.filter((content) => content.name === selected);

  return (
    <>
      <h1 style={headerStyle}>{header}</h1>
      <select value={selected} onChange={handleChange}>
        <option>All</option>
        {contents.map((item) => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>
      <h4>
        {selected === "All" ? (
          contents.map((item) => (
            <h4 key={item.name} style={item.style}>
              {item.name}
            </h4>
          ))
        ) : (
          <h4 style={student[0].style}>{student[0].name}</h4>
        )}
      </h4>
    </>
  );
};

export default MyComponent;
