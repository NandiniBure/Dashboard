const Colors = () => {
  const colors = [
    { name: "Primary", value: "#3B82F6" },
    { name: "Secondary", value: "#F59E0B" },
    // Add other colors here
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {colors.map((color, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className="w-16 h-16 rounded-md"
            style={{ backgroundColor: color.value }}
          ></div>
          <p className="mt-2 text-sm text-gray-700">{color.name}</p>
          <p className="text-xs text-gray-500">{color.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Colors;
