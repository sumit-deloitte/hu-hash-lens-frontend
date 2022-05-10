
function Navigation() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-2 bg-body rounded border border-2">
        <div class="container-fluid">
            <a class="navbar-brand font-weight-bold" href="/">Hash Lens</a>
            <div class="d-flex justify-content-between bg-white">
                {/* <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> */}

                <button className="border border-0 bg-white">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </button>

            </div>
        </div>
    </nav>
    </>
  );
}

export default Navigation;
