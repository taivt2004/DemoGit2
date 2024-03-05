function batLoi() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  

    
    // Kiểm tra định dạng email
    var DinhdangMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!DinhdangMail.test(email)) {
      alert("Vui lòng nhập email đúng định dạng!");
      return false;
    }
  
    // Kiểm tra mật khẩu có ít nhất 6 ký tự và chứa ít nhất một số và một chữ
    var ddPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!ddPass.test(password)) {
      alert("Mật khẩu phải có ít nhất 6 ký tự và chứa ít nhất một số và một chữ!");
      return false;
    }
  
    // Nếu các điều kiện đều đúng, form được submit
    alert("Đăng nhập thành công!");
    return true;
  }
  