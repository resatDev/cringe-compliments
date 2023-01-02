type Props = {
  name: string
};

const Adam = (props: Props): React.ReactElement => {
  const { name } = props;
  return (
    <div className="osman">{name}</div>
  )
}

export default Adam;