import React from "react";
import { HiInformationCircle } from "react-icons/hi2";
import MyButton from "./components/my-button";

const App: React.FC = () => {
  const log = () => {
    console.log("testing button");
    
  }
  return (
    
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <MyButton
        label="Button Saya"
        iconPosition="right"
        tooltip="Tooltip"
        tooltipPosition="right"
        icon={<HiInformationCircle/>}
        size="small"
        textColor="#000"
        iconColor="#000"
        gradientDirection="to top"
        tooltipMode="dark"
        onClick={log}
      />
    </div>
  );
};

export default App;
