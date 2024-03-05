document.addEventListener("DOMContentLoaded", function () {
    let indexHienTai = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = "none";
        });
        
        slides[index].style.display = "block";
    }
    
    function nextSlide() {
        indexHienTai = (indexHienTai + 1) % totalSlides;
        showSlide(indexHienTai);
    }

    function prevSlide() {
        indexHienTai = (indexHienTai - 1 + totalSlides) % totalSlides;
        showSlide(indexHienTai);
    }

    // Hiển thị slide đầu tiên khi trang web được tải
    showSlide(indexHienTai);

    // Tự động chuyển slide sau mỗi 2000ms (3 giây)
    setInterval(nextSlide, 2000);
});
