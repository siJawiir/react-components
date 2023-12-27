import { FC, ReactNode } from "react";
import { Tooltip } from "flowbite-react";

interface MyButtonProps {
  label: string;
  colors?: string[];
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  iconColor?: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
  tooltip?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  tooltipMode?: "light" | "dark";
  gradientDirection?: "to right" | "to left" | "to top" | "to bottom";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const MyButton: FC<MyButtonProps> = ({
  label,
  colors = ["#48bfe3", "#64dfdf", "#80ffdb"],
  icon,
  iconPosition = "left",
  iconColor = "#fff",
  textColor = "#fff",
  size = "medium",
  tooltip,
  tooltipPosition = "top",
  tooltipMode = "light",
  gradientDirection = "to right",
  disabled = false,
  className = "",
  onClick,
}) => {
  const buttonSizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-md",
    large: "px-8 py-4 text-lg",
  };

  const buttonStyle = {
    background: `linear-gradient(${gradientDirection}, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
    color: textColor,
  };

  const iconClasses = iconPosition === "left" ? "mr-2" : "ml-2";

  const iconStyle = {
    color: iconColor,
  };

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <div>
      {tooltip ? (
        <Tooltip
          content={tooltip}
          style={tooltipMode}
          placement={tooltipPosition}
        >
          <button
            className={`inline-flex items-center justify-center rounded-md shadow-sm ${buttonSizes[size]} ${className}`}
            style={buttonStyle}
            onClick={handleClick}
            disabled={disabled}
          >
            {icon && iconPosition === "left" && (
              <span className={iconClasses} style={iconStyle}>
                {icon}
              </span>
            )}
            {label}
            {icon && iconPosition === "right" && (
              <span className={iconClasses} style={iconStyle}>
                {icon}
              </span>
            )}
          </button>
        </Tooltip>
      ) : (
        <button
          className={`inline-flex items-center justify-center rounded-md shadow-sm ${buttonSizes[size]} ${className}`}
          style={buttonStyle}
          onClick={handleClick}
          disabled={disabled}
        >
          {icon && iconPosition === "left" && (
            <span className={iconClasses} style={iconStyle}>
              {icon}
            </span>
          )}
          {label}
          {icon && iconPosition === "right" && (
            <span className={iconClasses} style={iconStyle}>
              {icon}
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default MyButton;
