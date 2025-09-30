/* eslint-disable max-len */
import { FC, useMemo } from 'react';

interface LogoProps {
  height?: number;
  color?: string;
  bgColor?: string;
  containerClassName?: string;
}

export const Logo: FC<LogoProps> = ({
  height = 14,
  color = 'black',
  bgColor = 'white',
  containerClassName,
}) => {
  const renderIcon = useMemo(
    () => (
      <svg
        width={height}
        height={height}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_395_52)">
          <path
            d="M7.51893 4.55539C7.61173 4.40314 7.60057 4.20933 7.4909 4.06874L4.42862 0.142853H10.3312C10.528 0.142853 10.714 0.233037 10.8359 0.38759L13.4578 3.71169C13.6797 3.99301 13.7032 4.38268 13.5168 4.68863L10.8591 9.04886C10.7424 9.24032 10.5344 9.35714 10.3102 9.35714H8.66355L11.5899 4.55611C11.6829 4.4035 11.6715 4.20919 11.5612 4.06856L9.82672 1.85714H7.93397L9.3888 3.71205C9.60939 3.9933 9.63229 4.38192 9.44625 4.68714L6.48061 9.55265C6.38811 9.70441 6.39887 9.89752 6.50768 10.0381L9.46433 13.8571H3.56317C3.36552 13.8571 3.17886 13.7662 3.05701 13.6106L0.539195 10.3949C0.318997 10.1137 0.296279 9.72536 0.482179 9.42037L3.07567 5.16541C3.19237 4.97396 3.40039 4.85714 3.6246 4.85714H5.27121L2.41022 9.55095C2.3172 9.70355 2.32865 9.89786 2.43895 10.0385L4.08943 12.1429H5.9822L4.61134 10.395C4.39074 10.1137 4.36785 9.72513 4.55388 9.41991L7.51893 4.55539Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_395_52">
            <rect
              width="13.7143"
              height="13.7143"
              fill={bgColor}
              transform="translate(0.143066 0.142853)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    [color, bgColor],
  );

  if (!containerClassName) {
    return renderIcon;
  }

  return <div className={containerClassName}>{renderIcon}</div>;
};
