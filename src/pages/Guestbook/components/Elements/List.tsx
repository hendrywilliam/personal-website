type ListProps = {
  name: string;
  content: string;
  date: string;
  time: string;
};

export const List = ({ name, content, date, time }: ListProps) => {
  return (
    <>
      <li>
        <div className="flex justify-between">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-sm">
            {date} — <span>{time}</span>
          </p>
        </div>
        <p className="text-sm">{content}</p>
      </li>
    </>
  );
};
