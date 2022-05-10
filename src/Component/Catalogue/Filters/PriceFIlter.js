function PriceFilter() {
  return (
    <>
      <div className="container">
        <label for="customRange2" class="form-label">
          Price: $40
        </label>
        <input
          type="range"
          class="form-range"
          min="0"
          max="40"
          value="5"
          id="customRange2"
        ></input>
      </div>
    </>
  );
}

export default PriceFilter;
