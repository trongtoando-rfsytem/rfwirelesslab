/*
 * ĐỂ THÊM BÀI HỌC: sao chép một đối tượng bên dưới vào mảng LESSONS.
 * file có thể là: "docs/ten-tai-lieu.pdf" hoặc "lessons/ten-bai.html"
 * hoặc một URL đầy đủ của Google Drive/website khác.
 * Nên đặt dấu phẩy giữa các đối tượng.
 */
window.LESSONS = [
  {
    title: "Cơ sở Array Factor của anten mảng ULA",
    category: "Antenna",
    level: "Cơ bản",
    type: "BÀI HỌC",
    summary: "Nguyên lý giao thoa, điều khiển pha, hướng búp sóng và độ rộng búp sóng -3 dB.",
    href: "lessons/array-factor.html",
    tags: ["antenna", "beamforming", "ULA", "array factor"]
  },
  {
    title: "Suy hao truyền sóng trong không gian tự do",
    category: "RF & Propagation",
    level: "Cơ bản",
    type: "BÀI HỌC",
    summary: "Cách dùng công thức FSPL để ước lượng suy hao theo tần số và khoảng cách.",
    href: "lessons/fspl.html",
    tags: ["rf", "FSPL", "link budget"]
  }
  /* Ví dụ thêm PDF:
  ,{
    title: "Bài giảng thiết kế anten",
    category: "Antenna",
    level: "Nâng cao",
    type: "PDF",
    summary: "Tổng hợp phương pháp thiết kế anten.",
    href: "docs/bai-giang-anten.pdf",
    tags: ["antenna", "pdf"]
  }
  */
];

/* ĐỂ THÊM CÔNG CỤ: đưa file .html vào tools/, rồi thêm đối tượng. */
window.TOOLS = [
  {
    title: "ULA Array Factor 2D",
    category: "Antenna",
    icon: "⌁",
    summary: "Mô phỏng đồ thị búp sóng của mảng tuyến tính, đánh dấu góc cực đại và HPBW -3 dB.",
    href: "tools/array-factor.html",
    tags: ["beamforming", "phased array", "HPBW"]
  },
  {
    title: "Free-Space Path Loss Calculator",
    category: "RF & Propagation",
    icon: "∿",
    summary: "Tính suy hao đường truyền không gian tự do FSPL (dB) theo MHz và km.",
    href: "tools/fspl.html",
    tags: ["RF", "FSPL", "link budget"]
  }
];
