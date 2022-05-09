import "./Catalogue.css"

function CatalogueCard(){
    return(
        <>
        <div className="col-md-6 col-lg-4 col-xl-3 mb-4 product">
            <div className="card bg-light shadow-lg border border-light rounded-3" style={{width:"18rem"}}>
                <div className="">
                    <img src="https://media.istockphoto.com/photos/nerd-glasses-with-clipping-paths-picture-id125416806?k=20&m=125416806&s=612x612&w=0&h=5debF0r2pbWcHHxNl9EOZwQ5O52JlKUIpy2pW0t8rfA=" className="card-img-top" alt="..." />
                </div>
                <hr class="mt-2 mx-3"></hr>
                <div className="card-body">
                    <div className="body-content">
                        <p class="fs-3 fw-bold fs-3">Vincent Chase</p>
                        <p className="product-price fw-light fs-4">$49.99</p>
                    </div>
                    <div className="d-flex align-items-start">
                        <p className=".fs-6 text text-muted">Product Id:</p>
                        <p className=".fs-6 text text-muted">1234</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CatalogueCard;


