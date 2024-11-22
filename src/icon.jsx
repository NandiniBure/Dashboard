import React from "react";

// Component to render the SVG from a string
export const Icon = ({ svg }) => {
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};

