import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Áo Thun",
    description:
      "là phong cách thời trang hướng đến sự thoải mái và tự nhiên, phù hợp cho những dịp hằng ngày mà vẫn giữ được vẻ ngoài thanh lịch.",
  },
  {
    id: 2,
    img: Img2,
    title: "Áo Caro",
    description:
      "là một item thời trang kinh điển, luôn giữ vững vị trí trong tủ đồ của nhiều người nhờ vẻ ngoài trẻ trung, năng động và không bao giờ lỗi mốt.",
  },
  {
    id: 3,
    img: Img3,
    title: "Áo Thun Nữ",
    description:
      "là trang phục không thể thiếu trong tủ đồ của phái đẹp, nổi bật với sự tiện dụng và thoải mái.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
          Top Đồ Nổi Bật Dành Cho Bạn
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Bán Chạy Nhất
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Với cam kết về chất lượng, mỗi sản phẩm đều được chọn lựa kỹ lưỡng từ chất liệu đến kiểu dáng, giúp bạn luôn tự tin và nổi bật.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Đặt Hàng Ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
