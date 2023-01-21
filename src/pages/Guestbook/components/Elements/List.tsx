type ListProps = {
  name: string;
  content: string;
};

export const List = ({ name, content }: ListProps) => {
  return (
    <>
      <li>
        <div className="flex justify-between">
          <p className="font-bold">{name}</p>
        </div>
        <p className="text-sm">{content}</p>
      </li>
    </>
  );
};
