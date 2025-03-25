import { Icon, type IconProps } from '@chakra-ui/react';

interface DiscordIcon extends IconProps {
  fill?: string;
}

export const DiscordIcon = ({ width = '15px', height = '15px', ...props }: DiscordIcon) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9.84893 10.3091C9.247 10.3091 8.77179 10.8341 8.77179 11.4746C8.77179 12.1151 9.25756 12.6401 9.84893 12.6401C10.4509 12.6401 10.9261 12.1151 10.9261 11.4746C10.9366 10.8341 10.4509 10.3091 9.84893 10.3091ZM13.7034 10.3091C13.1015 10.3091 12.6263 10.8341 12.6263 11.4746C12.6263 12.1151 13.112 12.6401 13.7034 12.6401C14.3053 12.6401 14.7806 12.1151 14.7806 11.4746C14.7806 10.8341 14.3053 10.3091 13.7034 10.3091Z"
        fill="#FEFEFF"
      />
      <path
        d="M18.8354 1.49976H4.68468C3.49138 1.49976 2.51984 2.46578 2.51984 3.6628V17.8591C2.51984 19.0561 3.49138 20.0222 4.68468 20.0222H16.66L16.1003 18.0796L17.452 19.3291L18.7298 20.5052L21.0002 22.5002V3.6628C21.0002 2.46578 20.0287 1.49976 18.8354 1.49976ZM14.7591 15.2131C14.7591 15.2131 14.379 14.7615 14.0622 14.3625C15.4456 13.974 15.9736 13.113 15.9736 13.113C15.5406 13.3965 15.1288 13.596 14.7591 13.7325C14.2311 13.953 13.7242 14.1 13.2279 14.184C12.2141 14.373 11.2848 14.3205 10.4928 14.1735C9.89088 14.058 9.37343 13.89 8.94046 13.722C8.69757 13.6275 8.43357 13.512 8.16956 13.365C8.13788 13.344 8.1062 13.3335 8.07452 13.3125C8.0534 13.302 8.04284 13.2915 8.03228 13.281C7.84219 13.176 7.73659 13.1025 7.73659 13.1025C7.73659 13.1025 8.24348 13.9425 9.58463 14.3415C9.26782 14.7405 8.8771 15.2131 8.8771 15.2131C6.54328 15.1396 5.65623 13.617 5.65623 13.617C5.65623 10.2359 7.1769 7.49539 7.1769 7.49539C8.69757 6.36136 10.1443 6.39286 10.1443 6.39286L10.2499 6.51887C8.34908 7.06488 7.47258 7.8944 7.47258 7.8944C7.47258 7.8944 7.70491 7.76839 8.09564 7.58989C9.22558 7.09638 10.1232 6.95988 10.4928 6.92838C10.5562 6.91788 10.609 6.90737 10.6723 6.90737C11.3165 6.82337 12.0452 6.80237 12.8055 6.88637C13.8087 7.00188 14.8859 7.29588 15.9841 7.8944C15.9841 7.8944 15.1499 7.10688 13.3546 6.56087L13.5025 6.39286C13.5025 6.39286 14.9492 6.36136 16.4699 7.49539C16.4699 7.49539 17.9906 10.2359 17.9906 13.617C17.9906 13.617 17.093 15.1396 14.7591 15.2131Z"
        fill="#FEFEFF"
      />
    </Icon>
  );
};
