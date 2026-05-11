/* ============================================================
   TRANSLATIONS
============================================================ */
const i18n = {
  en: {
    nav_about:     'About',
    nav_skills:    'Skills',
    nav_exp:       'Experience',
    nav_research:  'Research',
    nav_projects:  'Projects',
    nav_awards:    'Awards',
    nav_contact:   'Contact',

    hero_greeting:  "Hello, I'm",
    hero_subtitle:  'AI Engineer · Researcher · ML Practitioner',
    btn_cv:         'Download CV',
    btn_contact:    'Contact Info',

    about_sub:      'Get To Know More',
    about_title:    'About Me',
    about_box1_h:   'Experience',
    about_box1_p1:  '4+ years',
    about_box1_p2:  'AI Engineering & Research',
    about_box2_h:   'Education',
    about_box2_p1:  'B.Sc. Computer Science',
    about_box2_p2:  'VinUniversity',
    about_bio:      "I'm an AI Engineer at Viettel AI with a Bachelor's in Computer Science from VinUniversity. My journey spans ML/AI engineering in industry, research in NLP, computational biology, and multimodal AI, and an exchange semester at POSTECH in South Korea. I'm passionate about building AI systems that create real-world impact — from information extraction APIs serving enterprise clients to antibody design frameworks in drug discovery.",

    skills_sub:       'Explore My',
    skills_title:     'Skills',
    skill_ml_title:   'ML / AI Frameworks',
    skill_data_title: 'Data, Visualization & Languages',
    skill_comm_en:    'English',
    level_expert:     'Expert',
    level_exp:        'Experienced',
    level_inter:      'Intermediate',
    level_basic:      'Basic',

    exp_sub:   'Explore My Work',
    exp_title: 'Experience',

    exp1_role: 'AI Engineer',
    exp1_b1: 'Developed and deployed APIs for information extraction across multiple enterprise clients in healthcare, finance, and public services.',
    exp1_b2: 'Researched and optimized state-of-the-art LLMs to build a local information extraction model with accurate reasoning and structured output.',
    exp1_b3: 'Standardized training datasets and implemented model monitoring pipelines.',

    exp2_role:  'Research Assistant',
    exp2_topic: 'Antibody Redesign via Energy-Guided Directed Evolution',
    exp2_b1: 'Conducted research on therapeutic antibody design, optimizing CDRs to enhance binding affinity for drug discovery applications.',
    exp2_b2: 'Developed an energy-guided directed evolution framework using in silico ML to screen antibody variants and identify performance-improving mutations.',

    exp3_role:  'AI Engineer Intern',
    exp3_topic: 'Generative AI for Driver Monitoring System (DMS)',
    exp3_b1: 'Built a data analytics module implementing vector embeddings and similarity search to transform large-scale image repositories into actionable insights.',
    exp3_b2: 'Trained Human Activity Detection and Occlusion Detection models to identify dangerous driver behaviors in real-time.',

    exp5_role:  'Research Assistant',
    exp5_topic: 'Contrastive Disentanglement for Authorship Attribution',
    exp5_b1: 'Developed ContrastDistAA, leveraging contrastive learning and mutual information maximization to disentangle content from stylistic features.',
    exp5_b2: 'Extended the framework to regional-level analysis, uncovering linguistic patterns shaped by cultural and geographical factors.',

    exp6_role: 'Research Assistant',
    exp6_b1: 'Developed a mobile app for a smart kidney health support program for chronic kidney disease patients in Vietnam.',
    exp6_b2: 'Designed UI/UX and app flow for a multi-role health platform enabling patient-physician communication and real-time lab access.',

    exp7_role: 'Research Assistant',
    exp7_b1: "Designed UX flows and wireframes using Figma for VinUniversity's research websites.",
    exp7_b2: "Extracted insights from a self-collected survey dataset spanning VinUniversity's entire first cohort.",
    exp7_b3: 'Built a dynamic PowerBI dashboard providing faculty with up-to-date student information.',

    research_sub:   'My Published',
    research_title: 'Research',
    pub_venue: "Companion Proceedings of the ACM Web Conference 2024 (WWW '24). ACM, New York, NY, USA, pp. 1657–1666.",

    projects_sub:   'Browse My Recent',
    projects_title: 'Projects',
    proj_tags_nlp:  'NLP',
    proj1_title: 'Text Style Transfer — Text Detoxification',
    proj1_desc:  'A two-stage detoxification framework promoting safer online communication by identifying toxic text spans and replacing them with neutralized tokens, enhanced by contrastive learning.',
    proj1_tag:   'Contrastive Learning',
    proj2_title: 'Hate Speech Detection — Vietnamese',
    proj2_desc:  "A comprehensive hate speech detection framework for Vietnam's digital landscape with a user-friendly interface for real-world deployment.",
    proj2_tag1:  'Vietnamese NLP',
    proj3_title: 'Hate Speech Detection — Korean',
    proj3_desc:  'A shared-private Multitask Learning architecture for Korean online safety, capturing contextual representations across Offensive Speech Detection, Target & Rationale Identification.',
    proj3_tag:   'Korean NLP',
    proj4_title: 'Mental Health in Tech Workplace',
    proj4_desc:  'Analyzed mental health attitudes and disorder prevalence in the tech industry using Tableau, generating insights to inform workplace wellness policies.',
    proj4_tag:   'Data Analysis',
    proj5_title: 'COVID-19 Cases & Deaths Prediction',
    proj5_desc:  'Applied regression analysis to model and predict COVID-19 case and mortality trends across multiple countries to support public health decision-making.',
    proj5_tag1:  'Regression',

    awards_sub:   'My',
    awards_title: 'Honors & Awards',
    award1: 'NIIED Global Korea Scholarship (GKS) 2023',
    award2: 'OUR Research Project Fund 2023 by VinUniversity — "Reasoning in the Multimodal World with Multimodal Chain of Thought"',
    award3: "Dean's List Honoree — Fall 2020, Fall 2023, Spring 2024 (VinUniversity)",
    award4: 'VinUniversity Merit Scholarship (80%)',
    award5: 'FPTU Full Scholarship (100%)',
    award6: 'Second Prize — City-Level Mathematics Excellent Student Competition, 2019–2020',
    award7: 'Third Place — 5th International Tournament Mathematics Without Borders (Team & Individual), 2018',
    award8: 'Second Prize — City-Level Mathematics Excellent Student Competition, 2017–2018',

    contact_sub:   'Get in Touch',
    contact_title: 'Contact Me',
    footer_copy:   '© 2025 Thao Thanh Nguyen. All Rights Reserved.',
  },

  vi: {
    nav_about:     'Giới thiệu',
    nav_skills:    'Kỹ năng',
    nav_exp:       'Kinh nghiệm',
    nav_research:  'Nghiên cứu',
    nav_projects:  'Dự án',
    nav_awards:    'Giải thưởng',
    nav_contact:   'Liên hệ',

    hero_greeting:  'Xin chào, tôi là',
    hero_subtitle:  'Kỹ sư AI · Nhà nghiên cứu · Chuyên gia ML',
    btn_cv:         'Tải CV',
    btn_contact:    'Thông tin liên hệ',

    about_sub:      'Tìm Hiểu Thêm Về',
    about_title:    'Tôi',
    about_box1_h:   'Kinh nghiệm',
    about_box1_p1:  '4+ năm',
    about_box1_p2:  'Kỹ thuật AI & Nghiên cứu',
    about_box2_h:   'Học vấn',
    about_box2_p1:  'Cử nhân Khoa học Máy tính',
    about_box2_p2:  'VinUniversity',
    about_bio:      'Tôi là Kỹ sư AI tại Viettel AI với bằng Cử nhân Khoa học Máy tính từ VinUniversity. Hành trình của tôi trải rộng từ kỹ thuật ML/AI trong công nghiệp, nghiên cứu NLP, sinh học tính toán và AI đa phương thức, đến học kỳ trao đổi tại POSTECH, Hàn Quốc. Tôi đam mê xây dựng các hệ thống AI tạo ra tác động thực tế — từ API trích xuất thông tin phục vụ doanh nghiệp đến các khung thiết kế kháng thể trong nghiên cứu phát triển thuốc.',

    skills_sub:       'Khám Phá',
    skills_title:     'Kỹ Năng',
    skill_ml_title:   'Công cụ ML / AI',
    skill_data_title: 'Dữ liệu, Trực quan hóa & Ngôn ngữ',
    skill_comm_en:    'Tiếng Anh',
    level_expert:     'Thành thạo',
    level_exp:        'Kinh nghiệm',
    level_inter:      'Trung cấp',
    level_basic:      'Cơ bản',

    exp_sub:   'Khám Phá Công Việc',
    exp_title: 'Kinh Nghiệm',

    exp1_role: 'Kỹ sư AI',
    exp1_b1: 'Phát triển và triển khai API trích xuất thông tin cho nhiều khách hàng doanh nghiệp trong lĩnh vực y tế, tài chính và dịch vụ công.',
    exp1_b2: 'Nghiên cứu và tối ưu hóa các LLM tiên tiến để xây dựng mô hình trích xuất thông tin cục bộ với khả năng suy luận chính xác.',
    exp1_b3: 'Chuẩn hóa bộ dữ liệu huấn luyện và triển khai quy trình giám sát mô hình.',

    exp2_role:  'Trợ lý Nghiên cứu',
    exp2_topic: 'Thiết kế lại kháng thể qua Tiến hóa định hướng dẫn dắt bởi năng lượng',
    exp2_b1: 'Nghiên cứu thiết kế kháng thể trị liệu, tối ưu hóa các vùng CDR để tăng cường ái lực liên kết ứng dụng trong khám phá thuốc.',
    exp2_b2: 'Phát triển khung tiến hóa định hướng sử dụng học máy in silico để sàng lọc các biến thể kháng thể.',

    exp3_role:  'Thực tập sinh Kỹ sư AI',
    exp3_topic: 'AI tạo sinh cho Hệ thống Giám sát Lái xe (DMS)',
    exp3_b1: 'Xây dựng module phân tích dữ liệu triển khai vector embeddings và tìm kiếm tương đồng để chuyển đổi kho hình ảnh quy mô lớn thành thông tin hành động.',
    exp3_b2: 'Huấn luyện các mô hình Phát hiện Hoạt động và Phát hiện Tắc nghẽn để nhận dạng hành vi lái xe nguy hiểm theo thời gian thực.',

    exp5_role:  'Trợ lý Nghiên cứu',
    exp5_topic: 'Phân tách đối nghịch cho Gán tác giả',
    exp5_b1: 'Phát triển ContrastDistAA, tận dụng học đối nghịch và tối đa hóa thông tin tương hỗ để tách biệt nội dung khỏi đặc trưng phong cách.',
    exp5_b2: 'Mở rộng khung sang phân tích cấp khu vực, khám phá các mẫu ngôn ngữ được hình thành bởi các yếu tố văn hóa và địa lý.',

    exp6_role: 'Trợ lý Nghiên cứu',
    exp6_b1: 'Phát triển ứng dụng di động cho chương trình hỗ trợ sức khỏe thận thông minh dành cho bệnh nhân bệnh thận mãn tính tại Việt Nam.',
    exp6_b2: 'Thiết kế UI/UX và luồng ứng dụng cho nền tảng y tế đa vai trò cho phép giao tiếp bệnh nhân-bác sĩ và truy cập kết quả xét nghiệm.',

    exp7_role: 'Trợ lý Nghiên cứu',
    exp7_b1: 'Thiết kế luồng UX và wireframe bằng Figma cho các trang web nghiên cứu của VinUniversity.',
    exp7_b2: 'Trích xuất và phân tích thông tin từ bộ dữ liệu khảo sát trên toàn bộ khóa đầu tiên của VinUniversity.',
    exp7_b3: 'Xây dựng bảng điều khiển PowerBI động cung cấp thông tin sinh viên cập nhật cho giảng viên.',

    research_sub:   'Nghiên Cứu',
    research_title: 'Đã Công Bố',
    pub_venue: "Kỷ yếu đồng hành của Hội nghị Web ACM 2024 (WWW '24). ACM, New York, NY, USA, trang 1657–1666.",

    projects_sub:   'Khám Phá Các',
    projects_title: 'Dự Án',
    proj_tags_nlp:  'NLP',
    proj1_title: 'Chuyển đổi Phong cách Văn bản — Khử độc Văn bản',
    proj1_desc:  'Khung khử độc hai giai đoạn thúc đẩy giao tiếp trực tuyến an toàn hơn bằng cách xác định các khoảng văn bản độc hại và thay thế bằng token trung hòa, được tăng cường bởi học đối nghịch.',
    proj1_tag:   'Học đối nghịch',
    proj2_title: 'Phát hiện Ngôn ngữ Thù hận — Tiếng Việt',
    proj2_desc:  'Khung phát hiện ngôn ngữ thù hận toàn diện cho môi trường số Việt Nam với giao diện thân thiện để triển khai thực tế.',
    proj2_tag1:  'NLP Tiếng Việt',
    proj3_title: 'Phát hiện Ngôn ngữ Thù hận — Tiếng Hàn',
    proj3_desc:  'Kiến trúc Học đa nhiệm chia sẻ-riêng tư cho an toàn trực tuyến tiếng Hàn, nắm bắt ngữ cảnh qua các nhiệm vụ phụ: Phát hiện Lời nói xúc phạm, Nhận dạng Đích và Lý do.',
    proj3_tag:   'NLP Tiếng Hàn',
    proj4_title: 'Sức khỏe Tâm thần trong Môi trường Công nghệ',
    proj4_desc:  'Phân tích thái độ đối với sức khỏe tâm thần trong ngành công nghệ bằng Tableau, tạo thông tin dựa trên dữ liệu để định hình chính sách tại nơi làm việc.',
    proj4_tag:   'Phân tích Dữ liệu',
    proj5_title: 'Dự đoán Ca nhiễm & Tử vong COVID-19',
    proj5_desc:  'Áp dụng phân tích hồi quy để mô hình hóa và dự đoán xu hướng COVID-19 trên nhiều quốc gia, hỗ trợ ra quyết định y tế công cộng.',
    proj5_tag1:  'Hồi quy',

    awards_sub:   'Của Tôi',
    awards_title: 'Giải Thưởng & Danh Hiệu',
    award1: 'Học bổng Hàn Quốc Toàn cầu NIIED (GKS) 2023',
    award2: 'Quỹ Nghiên cứu OUR 2023 bởi VinUniversity — "Suy luận trong Thế giới Đa phương thức với Chuỗi Tư duy Đa phương thức"',
    award3: 'Danh sách Danh dự Khoa — Học kỳ Thu 2020, Thu 2023, Xuân 2024 (VinUniversity)',
    award4: 'Học bổng Thành tích VinUniversity (80%)',
    award5: 'Học bổng Toàn phần FPTU (100%)',
    award6: 'Giải Nhì — Thi Học sinh Giỏi Toán Thành phố, 2019–2020',
    award7: 'Giải Ba — Giải Toán Quốc tế Không Biên giới lần thứ 5 (Đồng đội & Cá nhân), 2018',
    award8: 'Giải Nhì — Thi Học sinh Giỏi Toán Thành phố, 2017–2018',

    contact_sub:   'Liên Hệ',
    contact_title: 'Với Tôi',
    footer_copy:   '© 2025 Nguyễn Thanh Thảo. Mọi quyền được bảo lưu.',
  }
};

/* ============================================================
   STATE
============================================================ */
let lang  = localStorage.getItem('lang')  || 'en';
let theme = localStorage.getItem('theme') || 'dark';

/* ============================================================
   APPLY LANGUAGE
============================================================ */
function applyLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.documentElement.lang = l;
  document.getElementById('langBtn').textContent = l.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[l][key] !== undefined) el.textContent = i18n[l][key];
  });
}

/* ============================================================
   APPLY THEME
============================================================ */
function applyTheme(t) {
  theme = t;
  localStorage.setItem('theme', t);
  document.documentElement.setAttribute('data-theme', t);
}

/* ============================================================
   BUTTONS
============================================================ */
document.getElementById('themeBtn').addEventListener('click', () =>
  applyTheme(theme === 'light' ? 'dark' : 'light')
);
document.getElementById('langBtn').addEventListener('click', () =>
  applyLang(lang === 'en' ? 'vi' : 'en')
);

/* ============================================================
   ACTIVE NAV HIGHLIGHT ON SCROLL
============================================================ */
const sections = document.querySelectorAll('section[id]');
function highlightNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  document.querySelectorAll('#navbar .nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', highlightNav, { passive: true });

/* ============================================================
   SMOOTH SCROLL WITH NAV OFFSET
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
  });
});

/* ============================================================
   CAROUSEL
============================================================ */
const carousels = {};

function initCarousel(id) {
  const slides = document.querySelectorAll(`#${id}-track .c-slide`);
  const count = slides.length;
  carousels[id] = { current: 0, count };

  // Build dots
  const dotsEl = document.getElementById(`${id}-dots`);
  dotsEl.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const d = document.createElement('button');
    d.className = 'c-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Slide ${i + 1}`);
    d.addEventListener('click', () => goTo(id, i));
    dotsEl.appendChild(d);
  }

  renderCarousel(id);
}

function renderCarousel(id) {
  const { current, count } = carousels[id];
  document.querySelectorAll(`#${id}-track .c-slide`).forEach((el, i) => {
    el.classList.toggle('c-active', i === current);
  });
  document.querySelectorAll(`#${id}-dots .c-dot`).forEach((d, i) => {
    d.classList.toggle('active', i === current);
  });
  const counter = document.getElementById(`${id}-counter`);
  if (counter) counter.textContent = `${current + 1} / ${count}`;
}

function goTo(id, index) {
  carousels[id].current = index;
  renderCarousel(id);
}

function carouselPrev(id) {
  const c = carousels[id];
  c.current = (c.current - 1 + c.count) % c.count;
  renderCarousel(id);
}

function carouselNext(id) {
  const c = carousels[id];
  c.current = (c.current + 1) % c.count;
  renderCarousel(id);
}

/* ============================================================
   INIT
============================================================ */
applyTheme(theme);
applyLang(lang);
initCarousel('exp');
initCarousel('proj');
