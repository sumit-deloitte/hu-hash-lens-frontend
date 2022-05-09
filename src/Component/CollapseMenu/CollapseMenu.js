import { Collapse } from "react-bootstrap";
import { useState } from "react";

function CollapseMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <button
          type="button"
          class=""
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <p>Collapsible Group Item #1</p>
              </h5>
            </div>
          </div>
        </button>

        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default CollapseMenu;
