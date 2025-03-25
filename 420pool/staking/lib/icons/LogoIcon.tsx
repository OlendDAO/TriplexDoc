import { Icon, type IconProps } from '@chakra-ui/react';

export const LogoIcon = ({ color = 'cyan.400', width = '29', height = '21' }: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 29 21" fill="none" color={color}>
      <path
        d="M6.81239 5.45766C6.61525 5.22805 6.37254 5.11297 6.08372 5.11297H0.177C0.124536 5.11297 0.0816109 5.09606 0.0492845 5.06224C0.0164282 5.02898 0 4.99134 0 4.95098V0.89807C0 0.85771 0.0164282 0.820622 0.0492845 0.786807C0.0816109 0.752992 0.124536 0.736084 0.177 0.736084H6.41864C7.99362 0.736084 9.35239 1.39166 10.4944 2.70173L12.0106 4.58611L9.05721 8.25396L6.81239 5.45766ZM17.7207 2.68155C18.8627 1.38457 20.2278 0.736084 21.8161 0.736084H28.0381C28.0906 0.736084 28.1298 0.749719 28.1563 0.776444C28.1822 0.803714 28.1955 0.844074 28.1955 0.89807V4.95098C28.1955 4.99134 28.1822 5.02898 28.1563 5.06224C28.1298 5.09606 28.0906 5.11297 28.0381 5.11297H22.1314C21.8426 5.11297 21.5998 5.22805 21.4027 5.45766L17.0514 10.8479L21.4223 16.2785C21.6195 16.495 21.8553 16.603 22.1314 16.603H28.0381C28.0906 16.603 28.1298 16.6199 28.1563 16.6538C28.1822 16.6876 28.1955 16.7318 28.1955 16.7852V20.8381C28.1955 20.8785 28.1822 20.9161 28.1563 20.9494C28.1298 20.9832 28.0906 21.0001 28.0381 21.0001H21.8161C20.2278 21.0001 18.8691 20.3451 17.7403 19.0345L14.1176 14.5359L10.4944 19.0345C9.35239 20.3451 7.98727 21.0001 6.39903 21.0001H0.177C0.124536 21.0001 0.0847905 20.9832 0.0588234 20.9494C0.0323264 20.9156 0.0196078 20.8719 0.0196078 20.8174V16.7645C0.0196078 16.7241 0.0323264 16.687 0.0588234 16.6532C0.0847905 16.6194 0.124536 16.6025 0.177 16.6025H6.08372C6.35929 16.6025 6.602 16.488 6.81239 16.2578L11.0848 10.9488L17.7207 2.68155Z"
        fill="currentColor"
      />
    </Icon>
  );
};
