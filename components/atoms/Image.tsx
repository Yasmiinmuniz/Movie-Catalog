interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Image = ({ src, alt, className = '' }: ImageProps) => (
  <img src={src} alt={alt} loading="lazy" className={className} />
);
