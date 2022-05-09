import GenderFilter from "../Filters/GenderFilter";
import PriceFilter from "../Filters/PriceFIlter";
import CollapseMenu from "../../CollapseMenu/CollapseMenu";
function SideBar() {
  return (
    <>
      <div className="sidebar">
        <section id="sidebar">
          <div>
            <h6 class="p-1 border-bottom">Filter By</h6>
          </div>

          <PriceFilter />
          <GenderFilter />
          <CollapseMenu />
        </section>
      </div>
    </>
  );
}

export default SideBar;
