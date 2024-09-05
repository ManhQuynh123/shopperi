import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Vũ Xuân Cường",
    text: "Chiếc áo này rất thoải mái, chất liệu vải mềm mại và không bị co sau khi giặt. Mình rất thích cách nó ôm vừa vặn nhưng vẫn đủ thoáng để mặc cả ngày.",
    img: "https://avatarfiles.alphacoders.com/364/364731.png",
  },
  {
    id: 2,
    name: "Lê Đăng Khoa",
    text: "Thiết kế đơn giản nhưng tinh tế, phù hợp với nhiều dịp khác nhau. Màu sắc giữ rất tốt sau vài lần giặt, và mình cũng rất ưng ý với form áo không bị biến dạng.",
    img: "https://avatarfiles.alphacoders.com/165/thumb-1920-165731.png",
  },
  {
    id: 3,
    name: "Trần Thị Phương Anh",
    text: "Mình đã chọn size L và nó vừa vặn hoàn hảo! Nếu bạn có vóc dáng trung bình, hãy chọn đúng size như hướng dẫn của cửa hàng, sẽ rất phù hợp.",
    img: "https://i.pinimg.com/564x/77/e5/b6/77e5b69fdf898206e7c71a36e5ffce8c.jpg",
  },
  {
    id: 5,
    name: "Nguyễn Thị Bích Thảo",
    text: "Với giá thành này, mình không thể đòi hỏi gì hơn. Chất lượng tốt hơn mong đợi, đặc biệt là khi so sánh với các thương hiệu khác trong cùng phân khúc.",
    img: "https://avatarfiles.alphacoders.com/375/thumb-1920-375947.png",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
          Khách Hàng Của Chúng Tôi Đang Nói Gì
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            BÀI ĐÁNH GIÁ
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Dưới Đây Là Một Số Khách Hàng Đã Sử Dụng Dịch Vụ Của Chúng Tôi
          </p>
        </div>

        {/* thẻ bài đánh giá */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
