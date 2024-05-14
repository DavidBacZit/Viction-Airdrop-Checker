function checkToken() {
    var walletAddress = document.getElementById('walletAddress').value;
    var resultParagraph = document.getElementById('result');

    // Kiểm tra xem người dùng đã nhập địa chỉ ví hay chưa
    if (walletAddress.trim() === '') {
        resultParagraph.textContent = 'Vui lòng nhập địa chỉ ví của bạn.';
        return;
    }

    // Tạo URL cho yêu cầu GET tới API
    var apiUrl = 'https://laughing-funicular-rvp74v7gpgpcrxg-3000.app.github.dev/api/' + walletAddress;

    // Gửi yêu cầu GET tới API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Hiển thị kết quả trên trang web
            resultParagraph.textContent = 'Số token trúng thưởng của bạn là: ' + data.token;
        })
        .catch(error => {
            console.error('Đã xảy ra lỗi:', error);
            resultParagraph.textContent = 'Đã xảy ra lỗi. Vui lòng thử lại sau.';
        });
}
