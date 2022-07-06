import React from "react";

interface Personal {
  name: string;
  style: React.CSSProperties;
}

type MyComponentProps = {
  header: string;
  headerStyle: React.CSSProperties;
  content: Personal[];
};

const MyComponent = ({ header, headerStyle, content }: MyComponentProps) => {
  return (
    <>
      <h1 style={headerStyle}>{header}</h1>
      <select>
        <option>All</option>
        {content.map((item) => (
          <option>{item.name}</option>
        ))}
      </select>
      {content.map((item) => (
        <h4 style={item.style}>{item.name}</h4>
      ))}
    </>
  );
};

export default MyComponent;
