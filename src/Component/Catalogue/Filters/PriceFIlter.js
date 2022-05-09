function PriceFilter() {
  return (
    <>
      <div>
        <label for="customRange2" class="form-label">
          Price
        </label>
        <input
          type="range"
          class="form-range"
          min="0"
          max="5"
          value="5"
          id="customRange2"
        ></input>
      </div>
    </>
  );
}

export default PriceFilter;
