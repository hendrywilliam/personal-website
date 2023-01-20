type ContainerProps = {
  children: React.ReactNode;
  styles: string;
  id?: string;
};

export const Container = ({ children, styles, id }: ContainerProps) => {
  return (
    <div id={id} className={styles}>
      {children}
    </div>
  );
};
