type TitleProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

export default function Title({ children, size = 'lg' }: TitleProps) {
  const sizes = {
    sm: 'text-xl font-semibold',
    md: 'text-3xl font-bold',
    lg: 'text-5xl md:text-6xl font-bold',
  };

  return <h1 className={`${sizes[size]} leading-tight mb-4`}>{children}</h1>;
}
