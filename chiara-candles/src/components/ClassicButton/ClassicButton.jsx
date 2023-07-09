import "./ClassicButton.css";

function ClassicButton(props) {
  const { children, itemID } = props;
  return (
    <button
      id={itemID}
      type="button"
      className="btn btn-outline-primary btn-addtc"
      data-bs-toggle="button"
      autoComplete="off">
      {children}
    </button>
  );
}

export default ClassicButton;
