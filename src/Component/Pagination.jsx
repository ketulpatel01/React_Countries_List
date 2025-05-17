function Pagination({ current, onChange, total }) {

  const handlePrev = () => {
    if (current > 1) {
      onChange(current - 1);
    }
  };

  const handleNext = () => {
    if (current < total) {
      onChange(current + 1);
    }
  };

  const prev = (
    <button
      data-testid="prev-page"
      disabled={current == 1}
      onClick={handlePrev}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">{current}</button>;
  const next = (
    <button
      data-testid="next-page"
      disabled={current == total}
      onClick={handleNext}
    >
      Next
    </button>
  );
  return (
    <div data-testid="page-container">
      <div>
        {prev}
        {currentPage}
        {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{total}</b>
      </div>
    </div>
  );
}

export default Pagination;
