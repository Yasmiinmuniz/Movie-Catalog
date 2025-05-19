interface TagProps {
  label: string;
}

export const Tag = ({ label }: TagProps) => (
  <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full mr-2">
    {label}
  </span>
);
