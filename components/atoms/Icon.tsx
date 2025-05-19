import { IconType } from 'react-icons';

interface IconProps {
  IconComponent: IconType;
  className?: string;
}

export const Icon = ({ IconComponent, className = '' }: IconProps) => (
  <IconComponent className={className} />
);
