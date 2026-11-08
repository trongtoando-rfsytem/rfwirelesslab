/*
 * RF WIRELESS LAB — NƠI QUẢN LÝ NỘI DUNG
 *
 * Cách thêm bài học / công cụ / tài liệu:
 * 1. Upload PDF vào docs/, bài HTML vào lessons/, công cụ vào tools/.
 * 2. Thêm một đối tượng vào lessons, tools hoặc resources bên dưới.
 * 3. Commit changes trên GitHub; chờ Pages xuất bản.
 *
 * Các trường title, description dùng 3 ngôn ngữ: vi / en / zh.
 * Dùng dấu phẩy giữa các mục. Không sửa phần khác nếu không cần.
 * LƯU Ý: Không đặt tài liệu mật vào repository Public.
 */
window.RFW_CONTENT = {
  lessons: [
    {
      id: 'array-factor-basics',
      category: 'antenna',
      level: 'beginner',
      format: 'HTML',
      href: 'lessons/array-factor.html',
      title: {
        vi: 'Cơ sở Array Factor của anten mảng ULA',
        en: 'Array Factor Fundamentals for ULA Antennas',
        zh: '均匀线阵（ULA）阵列因子基础'
      },
      description: {
        vi: 'Nguyên lý giao thoa, điều khiển pha, quét búp sóng và độ rộng búp sóng −3 dB.',
        en: 'Interference, phase control, beam steering, and −3 dB beamwidth.',
        zh: '了解干涉、相位控制、波束扫描和 −3 dB 波束宽度。'
      },
      tags: ['array factor', 'ULA', 'antenna', 'beamforming']
    },
    {
      id: 'free-space-path-loss',
      category: 'propagation',
      level: 'beginner',
      format: 'HTML',
      href: 'lessons/fspl.html',
      title: {
        vi: 'Suy hao truyền sóng trong không gian tự do',
        en: 'Understanding Free-Space Path Loss',
        zh: '自由空间路径损耗基础'
      },
      description: {
        vi: 'Công thức Friis, suy hao theo tần số và khoảng cách, ví dụ link budget.',
        en: 'Friis transmission, frequency and distance effects, and a link-budget example.',
        zh: 'Friis 传输公式、频率与距离的影响及链路预算示例。'
      },
      tags: ['FSPL', 'Friis', 'propagation', 'link budget']
    }
    /* THÊM BÀI HỌC MỚI Ở ĐÂY, ví dụ:
    ,{
      id: 'beamforming-lesson-01',
      category: 'beamforming',
      level: 'advanced',
      format: 'PDF',
      href: 'docs/beamforming-lesson-01.pdf',
      title: {vi:'Bài học Beamforming', en:'Beamforming Lesson', zh:'波束赋形课程'},
      description: {vi:'Mô tả ngắn.', en:'Short description.', zh:'简短介绍。'},
      tags: ['MIMO','5G','beamforming']
    }
    */
  ],
  tools: [
    {
      id: 'array-factor-tool',
      category: 'antenna',
      href: 'tools/array-factor.html',
      symbol: 'AF',
      title: {vi:'ULA Array Factor 2D',en:'ULA Array Factor 2D',zh:'ULA 阵列因子二维计算器'},
      description: {
        vi:'Đồ thị búp sóng 2D, góc lái búp, HPBW và khoảng cách phần tử.',
        en:'2D radiation-pattern plot with steering angle, HPBW, and element spacing.',
        zh:'二维波束图、扫描角、半功率波束宽度及阵元间距。'
      },
      tags: ['ULA','HPBW','antenna','phased array']
    },
    {
      id: 'fspl-tool',
      category: 'propagation',
      href: 'tools/fspl.html',
      symbol: 'dB',
      title: {vi:'Free-Space Path Loss Calculator',en:'Free-Space Path Loss Calculator',zh:'自由空间路径损耗计算器'},
      description: {
        vi:'Tính FSPL, công suất thu lý tưởng và bước sóng theo tần số, khoảng cách.',
        en:'Calculate FSPL, ideal received power, and wavelength from frequency and distance.',
        zh:'根据频率和距离计算路径损耗、理想接收功率和波长。'
      },
      tags: ['FSPL','link budget','RF']
    },
    {
      id: 'antenna-array-studio-pro-v5',
      category: 'antenna',
      href: 'tools/antenna-array-studio-pro-v5.html',
      symbol: '3D',
      title: {
        vi: 'Antenna Array Studio PRO V5',
        en: 'Antenna Array Studio PRO V5',
        zh: '天线阵列设计工作室 PRO V5'
      },
      description: {
        vi: 'Thiết kế mảng ULA/URA tới 4096 phần tử; búp sóng 2D/3D, RF port/subarray, import CST và CSV.',
        en: 'Design ULA/URA arrays up to 4096 elements with 2D/3D patterns, RF port/subarray mapping, CST and CSV import.',
        zh: '设计最多4096阵元的ULA/URA阵列，支持二维/三维方向图、RF端口/子阵映射以及CST和CSV导入。'
      },
      tags: ['antenna', 'array', 'URA', 'ULA', '4096', '3D', 'CST', 'RF port', 'subarray', 'beamforming']
    }
    /* THÊM CÔNG CỤ MỚI Ở ĐÂY */
  ],
  resources: [
    /* THÊM PDF / SLIDE / MÃ NGUỒN Ở ĐÂY. VÍ DỤ:
    {
      id:'antenna-slides-01',
      category:'antenna',
      format:'PDF',
      href:'docs/antenna-slides-01.pdf',
      title:{vi:'Slide anten', en:'Antenna Slides', zh:'天线课件'},
      description:{vi:'Slide mở đầu',en:'Introductory slides',zh:'入门课件'},
      tags:['antenna','slides']
    }
    */
  ]
};
