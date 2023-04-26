export const Button = ({
  id,
  className,
  type,
  style,
  onClick,
  text,
  value,
  icon,
}) => {
  return (
    <>
      <button
        id={id}
        className={className}
        type={type}
        style={style}
        onClick={() => onClick(value)}
      >
        {icon} {text} {value}
      </button>
    </>
  );
};
