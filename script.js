// دالة تغيير الصورة الكبيرة عند الضغط على الصور المصغرة
function changeThumb(productId, imageSrc) {
    const mainImg = document.getElementById(`main-img-${productId}`);
    if (mainImg) {
        mainImg.src = imageSrc;
    }
}