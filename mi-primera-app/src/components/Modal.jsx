export const Modal = ({ children, title, className, id, actionText }) => {
  return (
    <div id={id} className={className}>
      <header>
        <h2>{title}</h2>
      </header>

      <div className="modal-body">{children}</div>

      <div className="moda-footer">
        <button>{actionText}</button>
      </div>
    </div>
  );
};
