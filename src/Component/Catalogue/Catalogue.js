
import SideBar from "./SideBar/SideBar";
import CatalogueCard from "./CatalogueCard/CatalogueCard";
import  "./Catalogue.css";

function Catalogue() {
  return (
    <>
      <section class="section-products">
      <div class="shadow-sm header mb-2 bg-dark p-2">
          <h2 className="white">Catalogue</h2>
        </div>
        <div className="mx-4">
          <SideBar/>
          <div className={"products"}>
            <div className="flex-fill">

              <div class="container mb-2">
                <div class="row height d-flex justify-content-center align-items-center">
                  <div class="col-md-8">
                    <div class={"search"}>
                      <i class="fa fa-search"></i>
                      <input
                        type="text"
                        class={"form-control search-input" }
                        placeholder="Search with product id"
                      />
                      <button class="btn btn-dark">Search</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <CatalogueCard />
                <CatalogueCard />
                <CatalogueCard />
                <CatalogueCard />
                <CatalogueCard />
                <CatalogueCard />
                <CatalogueCard />
                <CatalogueCard />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalogue;
