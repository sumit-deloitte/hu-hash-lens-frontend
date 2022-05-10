import GenderFilter from "../Filters/GenderFilter";
import PriceFilter from "../Filters/PriceFIlter";
import CollapseMenu from "../../CollapseMenu/CollapseMenu";
import MaterialFilter from "../Filters/MaterialFilter";
import "./SideBar.css";

function SideBar() {
  return (
    <div>
      <div className={"sidebar"}>
        <div className="card shadow-sm p-3 mb-5 bg-body rounded">
        <section id="sidebar">
          <div>
            <h6 class="p-1 border-bottom">Filter By</h6>
          </div>
          <CollapseMenu name={"Price"}>
            <PriceFilter />
          </CollapseMenu>
          <CollapseMenu name={"Gender"}>
            <GenderFilter />
          </CollapseMenu>
          <CollapseMenu name={"Material"}>
            <MaterialFilter />
          </CollapseMenu>
        </section>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
