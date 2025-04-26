import * as React from "react";

interface ColorPaletteProps {
  colors: string[];
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  return (
    <div className="flex gap-5">
      {colors.map((color, index) => (
        <div
          key={`color-${index}`}
          className={`w-9 rounded-full h-[35px] ${color}`}
        />
      ))}
    </div>
  );
};
