import "./ClassicButton.css";

function ClassicButton(props) {
  return (
    <button
      type="button"
      className="btn btn-outline-primary btn-addtc"
      data-bs-toggle="button"
      autoComplete="off">
      {props.children}
    </button>
  );
}

export default ClassicButton;
