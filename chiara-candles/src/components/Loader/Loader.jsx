import { DotSpinner } from "@uiball/loaders";
import "./Loader.css";

function Loader() {
    return (
        <div className="spinner">
          <DotSpinner size={100} speed={0.9} color="darkgrey" />
        </div>
      );
};

export default Loader;