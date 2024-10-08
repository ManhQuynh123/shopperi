import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Áo blouse",
    rating: 5.0,
    color: "Trắng",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Áo crop-top",
    rating: 4.5,
    color: "Đen",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Áo Thun Tím",
    rating: 4.7,
    color: "Tím",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Áo Khoác Tím",
    rating: 4.4,
    color: "Tím",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Hồng",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Đồ Bán Chạy Dành Cho Bạn
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Các Sản Phẩm
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Tại đây, chúng tôi mang đến những bộ sưu tập đa dạng, từ trang phục hàng ngày đến những thiết kế cao cấp, phù hợp cho cả nam và nữ.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Thẻ Đồ */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Xem Tất Cả*/}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              Xem Tất Cả
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
