import React from 'react'

const FakeLighting = ({
  children,
  amount,
  opacity,
  color,
  lightExtension,
  pow = 2,
  rounded = false,
  scale = 100,
  className = "",
}) => {
  return (
    <div className={`${className} absolute inset-0 pointer-events-none`}>
      {/* Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: amount }).map((_, index) => {
          const extension = lightExtension * ((((index + 1) / amount)) ** pow);

          return (
            <div
              key={index}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${rounded ? "rounded-full" : "rounded-none"}`}
              style={{
                width: `calc(${scale + extension * 2}%)`,
                height: `calc(${scale + extension * 2}%)`,
                backgroundColor: color,
                opacity: opacity * (1 - index / amount),
                filter: "blur(40px)",
              }}
            />
          );
        })}
      </div>

      {/* Children */}
      <div className="flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};
export default FakeLighting
