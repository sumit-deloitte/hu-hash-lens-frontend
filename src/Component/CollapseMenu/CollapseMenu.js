import { Collapse } from "react-bootstrap";
import { useState } from "react";
import "./CollapseMenu.css";
function CollapseMenu({ name, children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <button
          type="button"
          class="border-2 border border-white bg-white d-block click-div"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <div class="card pt-2 mb-2">
            <p>{name}</p>
          </div>
        </button>

        <Collapse in={open}>
          <div>{children}</div>
        </Collapse>
      </div>

      <hr></hr>
    </>
  );
}

export default CollapseMenu;
