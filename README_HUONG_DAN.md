# RF WIRELESS LAB V2 — HƯỚNG DẪN NÂNG CẤP VÀ ĐĂNG NỘI DUNG

**Website:** https://rfwirelesslab.com  
**Repository hiện có:** https://github.com/trongtoando-rfsystem/rfwirelesslab  
**Ngôn ngữ:** Tiếng Việt (`vi`), English (`en`), 中文简体 (`zh`).

Bản này là **website tĩnh HTML/CSS/JavaScript**, dùng GitHub Pages miễn phí. **Không cần mua thêm hosting**, **không cần sửa DNS** vì tên miền đã được trỏ và xác minh thành công.

## A. NÂNG CẤP WEBSITE ĐANG HOẠT ĐỘNG

### Cách 1 — Dùng GitHub trực tiếp trong trình duyệt

1. **Sao lưu (khuyến nghị):** Vào repository, nhấn **Code → Download ZIP** để tải bản website đang chạy về máy tính.
2. Giải nén file `rfwirelesslab-v2.zip` mà ChatGPT gửi.
3. Mở repository: https://github.com/trongtoando-rfsystem/rfwirelesslab
4. Trong tab **Code**, chọn **Add file → Upload files**.
5. Kéo thả **TOÀN BỘ các tệp và thư mục BÊN TRONG thư mục `rfwirelesslab-v2`** vào vùng upload. Trong đó có:
   - `index.html`, `guide.html`, `favicon.svg`, `CNAME`, `.nojekyll`
   - Thư mục `assets/` (`style.css`, `i18n.js`, `content.js`, `site.js`)
   - Thư mục `lessons/`, `tools/`, `docs/`
6. Nếu GitHub hiển thị thay thế/cập nhật file trùng tên, xác nhận thay đổi phù hợp. **Không upload mỗi file ZIP và không để `index.html` trong thư mục con.**
7. Cuộn xuống, viết Commit message `Redesign RF Wireless Lab - VI EN ZH`, nhấn **Commit changes**.
8. Mở https://github.com/trongtoando-rfsystem/rfwirelesslab/actions — tác vụ triển khai Pages cần hoàn thành có dấu tích xanh. Sau đó dùng **Ctrl + Shift + R** trên https://rfwirelesslab.com để làm mới trang không dùng cache.

> Nếu GitHub trình duyệt không kéo được thư mục hoặc báo xung đột file, dùng **Cách 2**, ổn định hơn khi thay cả website.

### Cách 2 — Dùng GitHub Desktop (khuyên dùng về lâu dài)

1. Tải GitHub Desktop tại https://desktop.github.com/ và đăng nhập GitHub.
2. **File → Clone repository → URL**, điền `https://github.com/trongtoando-rfsystem/rfwirelesslab` và chọn thư mục chứa trên máy tính.
3. Sau khi clone, chọn **Repository → Show in Explorer** để mở thư mục repository.
4. Giải nén bản V2, **copy toàn bộ nội dung bên trong** vào thư mục repository vừa clone, cho phép **Replace files in destination** (ghi đè tệp cùng tên). **Đừng xóa tài liệu riêng của bạn đã đăng trước đó.**
5. Quay lại GitHub Desktop, bạn sẽ thấy các tệp thay đổi. Nhập **Summary**: `Redesign RF Wireless Lab V2`; chọn **Commit to main**.
6. Nhấn **Push origin**. Khi GitHub Pages triển khai xong, mở https://rfwirelesslab.com.

### Kiểm tra sau cập nhật

- Trên trang chủ phải hiển thị **RF Wireless Lab**, giao diện mới và biểu đồ Array Factor minh họa.
- Ở góc trên bên phải có tùy chọn **VI · Tiếng Việt / EN · English / 中文 · 简体**.
- Khi chuyển ngôn ngữ, menu, các thẻ bài học, trang bài học mẫu và giao diện công cụ mẫu sẽ thay đổi tương ứng.
- Hai công cụ hiện có: **ULA Array Factor 2D** và **Free-Space Path Loss Calculator** vẫn hoạt động.
- Không chỉnh **Settings → Pages** hoặc DNS PA Việt Nam nếu website đang hoạt động bình thường. `CNAME` vẫn giữ `rfwirelesslab.com`.

---

## B. ĐĂNG MỘT TÀI LIỆU PDF MỚI

Ví dụ: bạn muốn đăng `beamforming-intro.pdf`.

**Bước 1. Tải file PDF lên**

1. Đổi tên file thành `beamforming-intro.pdf`, tránh dấu tiếng Việt hoặc dấu cách.
2. Vào https://github.com/trongtoando-rfsystem/rfwirelesslab/tree/main/docs
3. Chọn **Add file → Upload files**, chọn PDF, nhấn **Commit changes**.
4. Khi đó đường dẫn file trong website là: `docs/beamforming-intro.pdf`.

**Bước 2. Thêm vào danh mục**

1. Vào https://github.com/trongtoando-rfsystem/rfwirelesslab/blob/main/assets/content.js
2. Nhấn biểu tượng cây bút **Edit this file**.
3. Tìm mục `resources: [ ... ]`. Thêm đoạn này **bên trong cặp ngoặc vuông**, không đặt ngoài:

```js
{
  id: 'beamforming-intro',
  category: 'beamforming',
  format: 'PDF',
  href: 'docs/beamforming-intro.pdf',
  title: {
    vi: 'Nhập môn Beamforming',
    en: 'Introduction to Beamforming',
    zh: '波束赋形入门'
  },
  description: {
    vi: 'Slide kiến thức cơ bản về kỹ thuật tạo dạng búp sóng.',
    en: 'Introductory slides on beamforming techniques.',
    zh: '介绍波束赋形技术的基础课件。'
  },
  tags: ['beamforming', 'MIMO', 'antenna']
},
```

4. Nhấn **Commit changes**. Chờ GitHub Pages cập nhật, vào **Tài liệu & mã nguồn** trên trang chủ để xem.

**Lưu ý về dấu phẩy:** Giữa các đối tượng JavaScript phải có dấu phẩy. Với danh sách rỗng `resources: []`, chỉ việc dán một đối tượng bên trong. Với danh sách đã có dữ liệu, đảm bảo mục trước kết thúc bằng dấu phẩy.

### Nếu muốn PDF xuất hiện trong phần Bài học

Dùng chính cấu trúc trên nhưng đưa vào `lessons: [ ... ]` và thêm trường `level: 'beginner'` (hoặc `intermediate` / `advanced`).

---

## C. THÊM BÀI HỌC HTML

1. Tạo file `lessons/antenna-lesson-02.html` (có thể sao chép cấu trúc `lessons/array-factor.html`).
2. Upload lên thư mục `lessons/` trên GitHub.
3. Thêm đối tượng vào mảng `lessons` trong `assets/content.js` và dùng `href: 'lessons/antenna-lesson-02.html'`.
4. Để **nội dung bài học** đổi được 3 ngôn ngữ, dùng ba phần có `data-lang-section="vi"`, `data-lang-section="en"`, `data-lang-section="zh"`, đồng thời tải `assets/i18n.js` trong HTML và thêm một `<select data-lang-switch>` như file mẫu.

Nếu bài HTML chỉ viết một ngôn ngữ, lựa chọn ngôn ngữ trên trang chủ **không thể tự dịch phần nội dung bài đó**. Hãy tạo bản dịch hoặc hỏi ChatGPT hỗ trợ soạn 3 bản.

---

## D. THÊM CÔNG CỤ TÍNH TOÁN

1. Chuẩn bị công cụ HTML/JavaScript có thể chạy tĩnh, ví dụ `ris-calculator.html`.
2. Upload file vào `tools/` trên GitHub.
3. Trong `assets/content.js`, thêm một mục vào mảng `tools`:

```js
{
  id: 'ris-calculator',
  category: 'ris',
  symbol: 'RIS',
  href: 'tools/ris-calculator.html',
  title: {
    vi: 'Công cụ tính RIS',
    en: 'RIS Calculator',
    zh: 'RIS 计算工具'
  },
  description: {
    vi: 'Tính các thông số mô hình RIS cơ bản.',
    en: 'Explore key parameters of an idealized RIS model.',
    zh: '计算理想化 RIS 模型的关键参数。'
  },
  tags: ['RIS', '6G', 'simulation']
},
```

4. Commit. Công cụ sẽ có thẻ riêng ở phần Công cụ kỹ thuật.

**Lưu ý:** Các tệp HTML công cụ tự viết sẽ không tự có bản dịch. Muốn các trường nhập, nhãn và ghi chú đổi ngôn ngữ, tích hợp `../assets/i18n.js` và khai báo các chuỗi tương ứng trong `assets/i18n.js` (hoặc làm 3 phiên bản).

---

## E. CẤU TRÚC THƯ MỤC

```text
rfwirelesslab.com (repository rfwirelesslab)
├── index.html            ← Trang chủ mới
├── guide.html            ← Hướng dẫn đăng nội dung
├── CNAME                 ← Tên miền riêng: KHÔNG XÓA
├── .nojekyll             ← GitHub Pages tĩnh
├── favicon.svg           ← Biểu tượng RF Wireless Lab
├── assets/
│   ├── style.css         ← Giao diện
│   ├── i18n.js           ← Từ điển 3 ngôn ngữ / chuyển ngôn ngữ
│   ├── site.js           ← Render nội dung, tìm kiếm, lọc
│   └── content.js        ← THÊM BÀI HỌC / CÔNG CỤ / PDF TẠI ĐÂY
├── lessons/
│   ├── array-factor.html
│   └── fspl.html
├── tools/
│   ├── array-factor.html
│   └── fspl.html
└── docs/
    └── README.txt
```

## F. QUẢN LÝ NỘI DUNG 3 NGÔN NGỮ

- Mỗi bài có `title: { vi:..., en:..., zh:... }` và `description: { vi:..., en:..., zh:... }`.
- Bộ chọn ngôn ngữ lưu trên trình duyệt để sử dụng trong các trang cùng website.
- `assets/i18n.js`: dịch menu, nút, thông báo, ghi chú, trang hướng dẫn và giao diện các công cụ mẫu.
- `assets/content.js`: nội dung riêng từng bài học, tài liệu, công cụ.
- Tìm kiếm hoạt động trên tiêu đề/mô tả của cả 3 ngôn ngữ và các thẻ `tags`.
- PDF, file tải xuống, mã MATLAB/Python và công cụ ngoài **không được tự dịch**. Tạo nhiều bản ngôn ngữ nếu cần.

## G. BẢO MẬT VÀ GIỚI HẠN

- Repository **Public** và GitHub Pages công khai: ai cũng có thể xem/tải file và mã nguồn.
- Không upload tài liệu nội bộ, thông số độc quyền, dữ liệu nhạy cảm, mật khẩu, mã nguồn mật hoặc khóa API.
- Người truy cập website **không thể upload trực tiếp**; muốn có hệ thống đăng nhập và upload sẽ cần backend phù hợp.
- Không dùng GitHub Pages làm kho lưu file dữ liệu kỹ thuật dung lượng lớn.
- Công cụ hiện có chỉ dùng mô hình lý tưởng: ULA Array Factor 2D (2–64 phần tử) và FSPL; chưa có mô phỏng URA 4096 phần tử hay import CST Pattern trong bản này.
- Các thay đổi cập nhật GitHub Pages có thể mất vài phút; nếu trình duyệt còn giao diện cũ, thử **Ctrl + Shift + R**.
