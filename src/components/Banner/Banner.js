import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();

  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Food and Beverage">Food and Beverages</option>
              <option value="Decoratives">Decoratives</option>
              <option value="Ornaments and Jewellery">Ornaments and Jewellery</option>
              <option value="Others">Others</option>
              {/* <option value="Motorcycles">Motorcycles</option>
              <option value="Tablets">Tablets</option> */}
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={() => setCategory("Food and Beverage")} ><b>Food and Beverages</b></span>
            <span onClick={() => setCategory("Decoratives")} ><b>Decoratives</b></span>
            <span onClick={() => setCategory("Ornaments and Jewellery")} ><b>Ornaments and Jewellery</b></span>
            <span onClick={() => setCategory("Others")} ><b>Others</b></span>
            {/* <span onClick={() => setCategory("Motorcycles")} >Motorcycles</span>
            <span onClick={() => setCategory("Tablets")} >Tablets</span> */}
          </div>
        </div>
        <div className="banner">
          <img src="https://www.adotrip.com/public/images/blogs/master_images/60f119ae2f347-20%20Most%20Exquisite%20Handicrafts%20Of%20India_Master_Image.jpg" alt="" width="20px" height="400px" />
        </div>
      </div>
      {category != null && <DynamicPosts category={category} />}
    </div>
  );
}

export default Banner;
