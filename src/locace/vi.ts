export default {
  hello: "XIn Chao",
  action  : 'THAO TÁC',
  menu: {
    exam: {
      title: "Quản lý đề thi",
      child: {
        category: "Chuyên mục",
        type: "Loại đề thi",
        exam: "Đề thi",
        draft: "Bản nháp",
      },
    },
    schedule: "Quản lý lịch thi",
    company: "Quản lý đơn vị",
  },
  logout: "Đăng xuất",
  login: {
    description:
      "Nền tảng Thi trắc nghiệm, Trộn và Tạo đề thi miễn phí nhiều người sử dụng nhất",
    title: "Đăng nhập",
    email: "Nhập email",
    password: "Nhập mật khẩu",
  },
  validate: {
    required: "{field} là bắt buộc",
    invalid: "{field} không hợp lệ",
    format_img: "{field} chấp nhận jpg, png, jpeg",
    min: "Vui lòng nhập tối thiểu {number} ký tự",
    invalid_email: "Địa chỉ email không hợp lệ",
    confirmed: "Xác nhận mật khẩu không khớp với mật khẩu",
    invalid_password:
      "Mật khẩu chứa ít nhất 8 ký tự, một chữ in hoa, một số và một ký tự đặc biệt {character_special}",
  },
};
