import React from "react";

const Pagination = () => {
  return (
    <ul className="pagination" aria-label="Pagination">
      <li>
        <a href="">
          <span>First</span>
        </a>
      </li>
      <li>
        <a href="">
          <span>Previous</span>
        </a>
      </li>
      <li>
        <a href="">1</a>
      </li>
      <li>
        <a href="">3</a>
      </li>
      <li class="current">
        <a href="">4</a>
      </li>
      <li>
        <a href="">5</a>
      </li>
      <li>
        <a href="">
          <span>Next</span>
        </a>
      </li>
      <li>
        <a href="">
          <span>Last</span>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
