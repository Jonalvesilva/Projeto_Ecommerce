type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function FooterColumn(props: Props) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-xl whitespace-nowrap">{props.title}</h4>
      {props.children}
    </div>
  );
}
