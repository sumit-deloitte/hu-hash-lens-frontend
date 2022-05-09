import CatalogueCard from "./CatalogueCard";
import SideBar from "./SideBar/SideBar";

function Catalogue() {
  return (
    <>
      <section class="section-products">
        <div className="mx-4">
          <SideBar/>
          <div className="products">
            <div className="flex-fill">
              <div class="shadow-sm header mb-4 bg-dark p-3">
                <h2 className="white">Catalogue</h2>
              </div>

              <div class="container mb-2">
                <div class="row height d-flex justify-content-center align-items-center">
                  <div class="col-md-8">
                    <div class="search">
                      <i class="fa fa-search"></i>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search with product id"
                      />
                      <button class="btn btn-primary">Search</button>
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
