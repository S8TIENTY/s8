import {
  AppstoreOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  PlayCircleOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { Button, Card, Layout, Progress, Space, Tag, Typography } from 'antd';
import { articleCatalog } from './articleCatalog';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination as SwiperPagination } from 'swiper/modules';
import './desktop.css';

const { Paragraph, Text, Title } = Typography;

const latestDesktopArticle = [...articleCatalog].sort(
  (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime(),
)[0];

const homepageHighlights = [
  'Giao diện nhanh, mượt và dễ sử dụng',
  'Hệ thống bảo mật và bảo vệ dữ liệu',
  'Truy cập toàn cầu',
  'Nâng cấp hệ thống liên tục',
] as const;

const heroPanels = [
  {
    icon: <ThunderboltOutlined className="text-lg text-[#356fdb]" />,
    label: 'Điểm mạnh',
    title: 'Trải nghiệm hiện đại',
    body: 'S8 mang đến môi trường giải trí số rõ ràng, mượt mà và thân thiện với người dùng.',
  },
  {
    icon: <AppstoreOutlined className="text-lg text-[#356fdb]" />,
    label: 'Công nghệ',
    title: 'Hạ tầng ổn định',
    body: 'Nền tảng được tối ưu để duy trì tốc độ phản hồi tốt và khả năng vận hành bền vững.',
  },
  {
    icon: <GlobalOutlined className="text-lg text-[#356fdb]" />,
    label: 'Phạm vi',
    title: 'Sẵn sàng cho nhiều thị trường',
    body: 'Nội dung và giao diện được xây dựng để phù hợp với người dùng ở nhiều khu vực khác nhau.',
  },
  {
    icon: <SafetyCertificateOutlined className="text-lg text-[#356fdb]" />,
    label: 'Cam kết',
    title: 'Bảo mật và minh bạch',
    body: 'Các chính sách cốt lõi của S8 được trình bày rõ ràng để người dùng và đối tác dễ theo dõi.',
  },
] as const;

const heroQuickFacts = ['10 bài giới thiệu công ty', 'Hỗ trợ qua email 24/7', 'Chính sách trình bày rõ ràng'] as const;

const platformOverview = [
  {
    icon: <ThunderboltOutlined className="text-xl text-[#356fdb]" />,
    title: 'Hiệu suất tối ưu',
    body: 'Kết hợp công nghệ hiện đại với thiết kế tối ưu để giữ tốc độ, độ ổn định và trải nghiệm mượt trên mọi thiết bị.',
  },
  {
    icon: <SafetyCertificateOutlined className="text-xl text-[#356fdb]" />,
    title: 'Bảo vệ dữ liệu',
    body: 'Hệ thống được định hướng theo các tiêu chuẩn bảo mật hiện hành, tập trung vào an toàn dữ liệu và độ tin cậy.',
  },
  {
    icon: <GlobalOutlined className="text-xl text-[#356fdb]" />,
    title: 'Phạm vi toàn cầu',
    body: 'Nội dung và giao diện được xây dựng để thân thiện với người dùng ở nhiều thị trường khác nhau.',
  },
  {
    icon: <AppstoreOutlined className="text-xl text-[#356fdb]" />,
    title: 'Nâng cấp liên tục',
    body: 'Nền tảng luôn được cải tiến để nâng cao trải nghiệm người dùng và mở rộng khả năng vận hành.',
  },
] as const;

const showcaseSlides = [
  {
    label: 'Thương hiệu',
    title: 'Thông điệp về S8 được đặt ở vị trí trung tâm để người xem hiểu ngay định hướng của nền tảng.',
    body: 'S8 được giới thiệu như một nền tảng giải trí kỹ thuật số hiện đại, ổn định và thân thiện với người dùng trên nhiều thị trường.',
    notes: ['Định vị rõ ràng', 'Thông điệp ngắn gọn', 'Nút khám phá chính'],
    summary: 'Mục tiêu là giúp người xem nắm được S8 là gì, phục vụ ai và giá trị nào đang được đặt lên hàng đầu.',
  },
  {
    label: 'Giới thiệu',
    title: 'S8 theo đuổi môi trường số ổn định, đáng tin cậy và lấy người dùng làm trung tâm.',
    body: 'Phần giới thiệu tập trung vào tầm nhìn, sứ mệnh và những giá trị cốt lõi giúp thương hiệu xây dựng niềm tin với người dùng và đối tác.',
    notes: ['Đổi mới', 'Minh bạch', 'Trải nghiệm người dùng', 'Bảo mật dữ liệu'],
    summary: 'Đây là phần giải thích rõ doanh nghiệp đang xây dựng điều gì và vì sao cách tiếp cận của S8 khác biệt.',
  },
  {
    label: 'Hỗ trợ',
    title: 'Thông tin liên hệ chính thức luôn sẵn sàng cho người dùng và đối tác cần kết nối.',
    body: 'Email hỗ trợ, email hợp tác và thời gian phản hồi được đặt đúng cụm thông tin để người xem dễ tìm và dễ ghi nhớ hơn.',
    notes: ['support@s8.com', 'business@s8.com', 'Hỗ trợ 24/7'],
    summary: 'S8 duy trì các kênh liên hệ rõ ràng để bảo đảm mọi nhu cầu hỗ trợ đều được tiếp nhận đúng đầu mối.',
  },
  {
    label: 'Chính sách',
    title: 'Các cam kết về quyền riêng tư và điều khoản sử dụng được trình bày rõ ràng, dễ theo dõi.',
    body: 'Thông tin về bảo mật dữ liệu, quyền người dùng và giới hạn trách nhiệm được chia thành từng nhóm để người xem nắm nhanh nội dung quan trọng.',
    notes: ['Thu thập dữ liệu', 'Sử dụng dữ liệu', 'Quyền người dùng'],
    summary: 'Cách trình bày ngắn gọn nhưng đầy đủ giúp doanh nghiệp giữ được sự minh bạch trong giao tiếp với người dùng.',
  },
] as const;

const roadmapFocus = [
  { label: 'Trải nghiệm người dùng', percent: 32 },
  { label: 'Bảo mật và bảo vệ dữ liệu', percent: 28 },
  { label: 'Truy cập toàn cầu', percent: 20 },
  { label: 'Nâng cấp hệ thống liên tục', percent: 20 },
] as const;

const aboutValues = [
  {
    title: 'Đổi mới',
    body: 'Liên tục cải tiến công nghệ, giao diện và cách tổ chức nội dung để nền tảng luôn phù hợp với nhu cầu người dùng.',
  },
  {
    title: 'Minh bạch',
    body: 'Trình bày rõ thông tin hệ thống, chính sách, hỗ trợ và các nội dung công khai mà người dùng cần nắm được.',
  },
  {
    title: 'Trải nghiệm người dùng',
    body: 'Lấy khả năng sử dụng, tốc độ hiển thị và sự rõ ràng trong trải nghiệm làm trọng tâm trong mọi quyết định sản phẩm.',
  },
  {
    title: 'Bảo mật dữ liệu',
    body: 'Duy trì các lớp bảo vệ cần thiết để đảm bảo dữ liệu và thông tin người dùng được xử lý an toàn.',
  },
] as const;

const supportContacts = [
  'Email hỗ trợ: support@s8.com',
  'Email hợp tác: business@s8.com',
  'Thời gian hỗ trợ: 24/7',
] as const;

const privacyCollectedData = ['Thông tin thiết bị', 'Dữ liệu sử dụng', 'Thông tin liên hệ nếu người dùng cung cấp'] as const;

const privacyUseCases = ['Cải thiện trải nghiệm người dùng', 'Đảm bảo an toàn hệ thống', 'Hỗ trợ khách hàng'] as const;

const privacyRights = ['Yêu cầu truy cập dữ liệu', 'Yêu cầu chỉnh sửa hoặc xóa dữ liệu'] as const;

const termsSections = [
  {
    title: 'Sử dụng dịch vụ',
    body: 'Người dùng phải tuân thủ các quy định pháp luật hiện hành khi sử dụng nền tảng.',
  },
  {
    title: 'Trách nhiệm tài khoản',
    body: 'Người dùng chịu trách nhiệm bảo mật thông tin tài khoản của mình.',
  },
  {
    title: 'Tính sẵn sàng của hệ thống',
    body: 'Chúng tôi cố gắng duy trì hoạt động liên tục nhưng không đảm bảo hệ thống luôn không có lỗi.',
  },
  {
    title: 'Quyền sở hữu trí tuệ',
    body: 'Mọi nội dung, thương hiệu và tài nguyên thuộc quyền sở hữu của S8 và không được sử dụng khi chưa có sự cho phép.',
  },
  {
    title: 'Giới hạn trách nhiệm',
    body: 'S8 không chịu trách nhiệm đối với các thiệt hại gián tiếp phát sinh từ việc sử dụng nền tảng.',
  },
] as const;

export function DesktopApp() {
  return (
    <Layout className="project-maji-shell min-h-screen overflow-hidden bg-transparent text-[#18324e]" style={{ background: 'transparent' }}>
      <header className="relative z-20 px-6 pb-4 pt-6 xl:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 rounded-[34px] border border-[#d8e5f7] bg-white/82 px-5 py-[14px] shadow-[0_20px_60px_rgba(53,111,219,0.08)] backdrop-blur-xl">
          <div className="flex min-w-[280px] flex-1 items-center gap-3">
            <img
              alt="S8"
              className="h-11 w-11 rounded-[12px] object-cover shadow-[0_10px_24px_rgba(53,111,219,0.14)]"
              src="/favicon.ico"
            />
            <div className="origin-left whitespace-nowrap font-display text-[1.3rem] font-black uppercase leading-none tracking-[0.08em] text-[#18324e] [transform:scaleY(1.14)]">
              S8 PLATFORM
            </div>
          </div>

          <Space size="middle">
            <Button
              className="!border-[#d6e3f7] !bg-white/72 !text-[#274b73] hover:!border-[#4f8dff]/40 hover:!text-[#356fdb]"
              href="#gioi-thieu"
            >
              Giới thiệu
            </Button>
            <Button
              className="!rounded-full !border-0 !bg-[#356fdb] !px-6 !text-white hover:!bg-[#2456b7]"
              href="#noi-dung"
            >
              Nội dung nổi bật
            </Button>
          </Space>
        </div>
      </header>

      <Layout.Content className="relative z-10 px-6 pb-24 pt-4 xl:px-10" style={{ background: 'transparent' }}>
        <main className="mx-auto max-w-7xl">
          <section className="grid gap-8 xl:grid-cols-[1.04fr_0.96fr]" id="trang-chu">
            <div className="project-maji-grid flex h-full flex-col rounded-[42px] border border-[#d9e6f8] bg-white/84 p-10 shadow-[0_30px_90px_rgba(53,111,219,0.09)] backdrop-blur-xl xl:p-12">
              <Tag className="!mb-6 !rounded-full !border-0 !bg-[#edf5ff] !px-4 !py-2 !font-medium !text-[#356fdb]">
                Nền tảng giải trí kỹ thuật số
              </Tag>

              <Title className="!mb-5 !max-w-4xl !font-display !text-[2.65rem] !leading-[1.08] !text-[#18324e] xl:!text-[3.1rem]">
                Chào mừng đến với S8 Platform – Nền tảng giải trí kỹ thuật số hiện đại
              </Title>

              <Paragraph className="!mb-4 !max-w-3xl !text-lg !leading-8 !text-[#5b7593]">
                S8 là nền tảng kỹ thuật số được xây dựng nhằm mang đến trải nghiệm giải trí trực tuyến hiện đại và thân thiện với người dùng trên toàn
                cầu. Chúng tôi tập trung vào việc kết hợp công nghệ tiên tiến với thiết kế tối ưu để đảm bảo hiệu suất, tốc độ và tính ổn định.
              </Paragraph>
              <Paragraph className="!mb-8 !max-w-3xl !text-lg !leading-8 !text-[#5b7593]">
                Nền tảng của chúng tôi luôn được cải tiến liên tục nhằm nâng cao trải nghiệm người dùng trên mọi thiết bị.
              </Paragraph>

              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {homepageHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-[#e0eaf8] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(243,248,255,0.92))] px-4 py-4 text-sm leading-7 text-[#53708f] shadow-[0_14px_34px_rgba(53,111,219,0.06)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  className="!h-[54px] !rounded-full !border-0 !bg-[#356fdb] !px-7 !text-base !font-semibold !text-white hover:!bg-[#2456b7]"
                  href="#gioi-thieu"
                  icon={<ArrowRightOutlined />}
                  size="large"
                >
                  Khám phá nền tảng
                </Button>
                <Button
                  className="!h-[54px] !rounded-full !border-[#d7e4f8] !bg-white/84 !px-7 !text-base !text-[#274b73] hover:!border-[#4f8dff]/34 hover:!bg-white"
                  href="#tong-quan"
                  icon={<PlayCircleOutlined />}
                  size="large"
                >
                  Xem tổng quan
                </Button>
                <Text className="max-w-xl text-sm leading-7 text-[#66819f]">
                  Khám phá S8 qua các nhóm thông tin chính, giá trị cốt lõi và những cam kết vận hành của nền tảng.
                </Text>
              </div>

              <div className="mt-auto pt-8">
                <div className="rounded-[28px] border border-[#dfe9f7] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(242,247,255,0.86))] px-5 py-5 shadow-[0_16px_38px_rgba(53,111,219,0.05)]">
                  <Text className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6b87a8]">Thông tin nổi bật</Text>
                  <Paragraph className="!mb-0 !mt-3 !max-w-3xl !text-sm !leading-7 !text-[#5b7593]">
                    Từ màn đầu, người xem có thể nắm nhanh nhóm nội dung công khai quan trọng nhất của S8 mà không cần đi sâu ngay vào từng section.
                  </Paragraph>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {heroQuickFacts.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#dbe7f7] bg-white/88 px-4 py-2 text-sm leading-6 text-[#35506a] shadow-[0_10px_22px_rgba(53,111,219,0.04)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <Card className="desktop-overview-card !rounded-[40px] !border-[#d8e5f7] !bg-[linear-gradient(160deg,rgba(236,245,255,0.94),rgba(255,255,255,0.9))] !shadow-[0_30px_90px_rgba(53,111,219,0.08)]">
                <Text className="text-xs font-semibold uppercase tracking-[0.28em] text-[#356fdb]">Tổng quan S8</Text>
              <Title className="!mb-3 !mt-4 !font-display !text-[2.4rem] !leading-tight !text-[#18324e] xl:!text-[2.45rem]" level={2}>
                S8 xây dựng trải nghiệm giải trí kỹ thuật số hiện đại, ổn định và thân thiện với người dùng.
              </Title>
                <Paragraph className="!mb-0 !leading-8 !text-[#5b7593]">
                  Tại đây, S8 giới thiệu rõ định hướng phát triển, giá trị cốt lõi, hệ thống hỗ trợ và những chính sách quan trọng giúp người dùng an tâm
                  khi tìm hiểu về nền tảng.
                </Paragraph>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="desktop-overview-pill">
                    <Text className="desktop-overview-pill-label">Tầm nhìn</Text>
                    <div className="desktop-overview-pill-value">Trải nghiệm số hiện đại</div>
                  </div>
                  <div className="desktop-overview-pill">
                    <Text className="desktop-overview-pill-label">Cam kết</Text>
                    <div className="desktop-overview-pill-value">Ổn định và minh bạch</div>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                {heroPanels.map((item) => (
                  <Card key={item.title} className="desktop-quick-panel !rounded-[30px] !border-[#dfe9f7] !bg-white/84 !shadow-none">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edf5ff]">{item.icon}</div>
                    <Text className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6b87a8]">{item.label}</Text>
                    <Title className="!mb-2 !mt-3 !font-display !text-[1.55rem] !leading-[1.18] !text-[#18324e]" level={3}>
                      {item.title}
                    </Title>
                    <Paragraph className="!mb-0 !text-base !leading-7 !text-[#5b7593]">{item.body}</Paragraph>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-20" id="tong-quan">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <Text className="desktop-on-video-kicker text-xs font-semibold uppercase tracking-[0.28em]">Giá trị cốt lõi</Text>
                <Title className="desktop-on-video-title !mb-2 !mt-3 !font-display !text-5xl !leading-tight" level={2}>
                  Những giá trị cốt lõi định hình S8 trên mọi điểm chạm với người dùng.
                </Title>
                <Paragraph className="desktop-on-video-copy !mb-0 !max-w-3xl !text-base !leading-8">
                  Hiệu suất, khả năng sử dụng, bảo mật dữ liệu và độ tin cậy là nền tảng giúp S8 phát triển một môi trường giải trí số bền vững.
                </Paragraph>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {platformOverview.map((item) => (
                <Card key={item.title} className="desktop-on-video-card !rounded-[34px] !shadow-none">
                  <div className="desktop-on-video-icon mb-5 flex h-12 w-12 items-center justify-center rounded-2xl">{item.icon}</div>
                  <Title className="desktop-on-video-title !mb-3 !font-display !text-3xl !leading-tight" level={3}>
                    {item.title}
                  </Title>
                  <Paragraph className="desktop-on-video-copy !mb-0 !leading-8">{item.body}</Paragraph>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-24" id="noi-dung">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <Text className="desktop-on-video-kicker text-xs font-semibold uppercase tracking-[0.28em]">Nội dung nổi bật</Text>
                <Title className="desktop-on-video-title !mb-2 !mt-3 !font-display !text-5xl !leading-tight" level={2}>
                  Những nhóm thông tin quan trọng của S8 được trình bày rõ ràng cho người dùng và đối tác.
                </Title>
                <Paragraph className="desktop-on-video-copy !mb-0 !max-w-3xl !text-base !leading-8">
                  Từ giới thiệu doanh nghiệp, hỗ trợ liên hệ đến quyền riêng tư và điều khoản sử dụng, mọi nội dung đều tập trung vào việc truyền tải hình
                  ảnh chuyên nghiệp và đáng tin cậy của S8.
                </Paragraph>
              </div>
              <Tag className="desktop-on-video-chip !rounded-full !px-4 !py-2">Tổng quan doanh nghiệp</Tag>
            </div>

            <div className="desktop-impact-breakout">
              <Swiper
                autoplay={{ delay: 4200, disableOnInteraction: false }}
                className="desktop-impact-swiper"
                grabCursor
                loop
                modules={[Navigation, SwiperPagination, Autoplay, A11y]}
                navigation={{ enabled: true, addIcons: false }}
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={28}
                speed={850}
              >
                {showcaseSlides.map((slide) => (
                  <SwiperSlide key={slide.title}>
                    <Card className="desktop-impact-card !overflow-hidden !rounded-[38px] !border-[#d8e5f7] !bg-white/88 !p-0 !shadow-[0_28px_80px_rgba(53,111,219,0.08)]">
                      <div className="desktop-impact-frame relative overflow-hidden bg-[linear-gradient(140deg,rgba(234,244,255,0.98),rgba(244,248,255,0.92)_48%,rgba(255,255,255,0.98))] p-8 xl:p-10">
                        <div className="absolute -right-8 top-4 h-44 w-44 rounded-full bg-[#cfe4ff]/55 blur-3xl" />
                        <div className="absolute bottom-0 left-10 h-28 w-28 rounded-full bg-[#dceeff]/58 blur-3xl" />

                        <Tag className="!rounded-full !border-0 !bg-white/88 !px-4 !py-2 !text-[#274b73]">{slide.label}</Tag>
                        <div className="desktop-impact-layout mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                          <div>
                            <Title className="!mb-4 !max-w-4xl !font-display !text-4xl !leading-tight !text-[#18324e]" level={3}>
                              {slide.title}
                            </Title>
                            <Paragraph className="!mb-0 !max-w-3xl !text-lg !leading-8 !text-[#5b7593]">{slide.body}</Paragraph>
                          </div>

                          <div className="desktop-impact-side grid gap-4 md:grid-cols-2 xl:grid-cols-1">
                            <Card className="desktop-impact-meta-card !rounded-[26px] !border-[#dbe7f7] !bg-white/82 !shadow-none">
                              <Text className="text-xs uppercase tracking-[0.24em] text-[#7b95b5]">Nội dung chính</Text>
                              <div className="mt-4 flex flex-wrap gap-3">
                                {slide.notes.map((item) => (
                                  <span key={item} className="desktop-impact-note-chip">
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </Card>
                            <Card className="desktop-impact-summary-card !rounded-[26px] !border-[#d4e7ff] !bg-[#eef6ff] !shadow-none">
                              <Text className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6b87a8]">Tóm tắt</Text>
                              <Paragraph className="!mb-0 !mt-3 !leading-7 !text-[#5b7593]">{slide.summary}</Paragraph>
                            </Card>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          <section className="mt-24 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]" id="gioi-thieu">
            <Card className="desktop-on-video-card !rounded-[38px] !shadow-none">
              <Text className="desktop-on-video-kicker text-xs font-semibold uppercase tracking-[0.28em]">Giới thiệu về S8</Text>
              <Title className="desktop-on-video-title !mb-4 !mt-4 !font-display !text-4xl !leading-tight" level={2}>
                Môi trường ổn định, đáng tin cậy và thân thiện với người dùng.
              </Title>
              <Paragraph className="desktop-on-video-copy !mb-4 !leading-8">
                S8 là nền tảng kỹ thuật số quốc tế tập trung vào việc cung cấp các trải nghiệm giải trí tương tác thông qua công nghệ hiện đại.
              </Paragraph>
              <Paragraph className="desktop-on-video-copy !mb-4 !leading-8">
                Sứ mệnh của chúng tôi là xây dựng một môi trường ổn định, đáng tin cậy và thân thiện với người dùng, thông qua việc liên tục đổi mới,
                tối ưu hệ thống và lấy người dùng làm trung tâm.
              </Paragraph>
              <Paragraph className="desktop-on-video-copy !mb-8 !leading-8">
                Đội ngũ của chúng tôi bao gồm các chuyên gia giàu kinh nghiệm trong lĩnh vực công nghệ, vận hành số và phát triển nền tảng.
              </Paragraph>

              <div className="space-y-5">
                {roadmapFocus.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between">
                      <Text className="desktop-on-video-copy text-sm">{item.label}</Text>
                      <Text className="desktop-on-video-title font-display text-base">{item.percent}%</Text>
                    </div>
                    <Progress percent={item.percent} showInfo={false} strokeColor="#356fdb" trailColor="rgba(79,141,255,0.14)" />
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              {aboutValues.map((item) => (
                <Card key={item.title} className="!rounded-[34px] !border-[#dbe7f7] !bg-[#f7fbff] !shadow-none">
                  <Title className="!mb-3 !font-display !text-3xl !leading-tight !text-[#18324e]" level={3}>
                    {item.title}
                  </Title>
                  <Paragraph className="!mb-0 !leading-8 !text-[#5b7593]">{item.body}</Paragraph>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-24" id="chinh-sach">
            <div className="grid gap-6 xl:grid-cols-2">
              <Card className="!rounded-[38px] !border-[#d8e5f7] !bg-white/82 !shadow-none">
                <Text className="text-xs font-semibold uppercase tracking-[0.28em] text-[#356fdb]">Bài viết và hỗ trợ</Text>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="rounded-[28px] border border-[#dfe9f7] bg-[#f9fbff] p-5">
                    <Text className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6b87a8]">
                      <FileTextOutlined />
                      Bài viết mới nhất
                    </Text>
                    <Title className="!mb-0 !mt-4 !font-display !text-2xl !leading-tight !text-[#18324e]" level={3}>
                      {latestDesktopArticle.title}
                    </Title>
                    <Paragraph className="!mb-0 !mt-4 !leading-7 !text-[#5b7593]">
                      {latestDesktopArticle.excerpt}
                    </Paragraph>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <Tag className="!m-0 !rounded-full !border-[#d7e5f7] !bg-white !px-3 !py-1 !text-[#5b7593]">{latestDesktopArticle.category}</Tag>
                      <Tag className="!m-0 !rounded-full !border-[#d7e5f7] !bg-white !px-3 !py-1 !text-[#5b7593]">{latestDesktopArticle.readTime}</Tag>
                    </div>
                    <Button
                      className="!mt-5 !h-10 !rounded-full !border-0 !bg-[#356fdb] !px-5 !text-white hover:!bg-[#2456b7] hover:!text-white"
                      href={`/journal/${latestDesktopArticle.slug}.html`}
                      icon={<ArrowRightOutlined />}
                    >
                      Đọc bài viết
                    </Button>
                  </div>

                  <div className="rounded-[28px] border border-[#dfe9f7] bg-[#f9fbff] p-5">
                    <Text className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6b87a8]">
                      <InfoCircleOutlined />
                      Liên hệ
                    </Text>
                    <Paragraph className="!mb-0 !mt-4 !leading-7 !text-[#5b7593]">
                      Chúng tôi luôn sẵn sàng hỗ trợ bạn. Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, vui lòng liên hệ qua các kênh dưới đây:
                    </Paragraph>
                    <div className="mt-4 space-y-3 text-sm leading-7 text-[#5b7593]">
                      {supportContacts.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <ClockCircleOutlined className="mt-1 text-[#7b95b5]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="!rounded-[38px] !border-[#d8e5f7] !bg-[linear-gradient(160deg,rgba(238,245,255,0.94),rgba(255,255,255,0.92))] !shadow-none">
                <Text className="text-xs font-semibold uppercase tracking-[0.28em] text-[#356fdb]">Chính sách bảo mật</Text>
                <Title className="!mb-3 !mt-4 !font-display !text-4xl !leading-tight !text-[#18324e]" level={2}>
                  Quyền riêng tư được trình bày rõ ràng và dễ theo dõi.
                </Title>
                <Paragraph className="!mb-6 !leading-8 !text-[#5b7593]">
                  Tại S8, chúng tôi coi trọng quyền riêng tư của người dùng và cam kết bảo vệ thông tin cá nhân. Chúng tôi không bán hoặc chia sẻ dữ liệu
                  cá nhân với bên thứ ba trái phép.
                </Paragraph>

                <div className="grid gap-5 md:grid-cols-3">
                  <div className="rounded-[24px] border border-[#d9e6f8] bg-white/82 p-5">
                    <Text className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b87a8]">Thu thập</Text>
                    <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 text-[#5b7593]">
                      {privacyCollectedData.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[24px] border border-[#d9e6f8] bg-white/82 p-5">
                    <Text className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b87a8]">Sử dụng dữ liệu</Text>
                    <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 text-[#5b7593]">
                      {privacyUseCases.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[24px] border border-[#d9e6f8] bg-white/82 p-5">
                    <Text className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b87a8]">Quyền người dùng</Text>
                    <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 text-[#5b7593]">
                      {privacyRights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="mt-24" id="dieu-khoan">
            <Card className="!rounded-[42px] !border-[#d4e3f8] !bg-[linear-gradient(135deg,#eef5ff,#f8fbff_48%,#ffffff)] !shadow-[0_28px_90px_rgba(53,111,219,0.08)]">
              <div className="mb-8 max-w-3xl">
                <Text className="text-xs font-semibold uppercase tracking-[0.28em] text-[#356fdb]">Điều khoản sử dụng</Text>
                <Title className="!mb-4 !mt-4 !font-display !text-[2.8rem] !leading-tight !text-[#18324e] xl:!text-[3.1rem]" level={2}>
                  Các điều khoản chính được trình bày rõ ràng để người dùng nắm nhanh những nội dung quan trọng.
                </Title>
                <Paragraph className="!mb-0 !text-lg !leading-8 !text-[#5b7593]">
                  Khi truy cập và sử dụng nền tảng S8, người dùng đồng ý với các quy định về sử dụng dịch vụ, trách nhiệm tài khoản, tính sẵn sàng của hệ
                  thống, quyền sở hữu trí tuệ và giới hạn trách nhiệm.
                </Paragraph>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {termsSections.map((item, index) => (
                  <div key={item.title} className="rounded-[28px] border border-[#e3ebf8] bg-white/88 p-5 shadow-[0_14px_34px_rgba(53,111,219,0.05)]">
                    <Text className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b95b5]">Mục {index + 1}</Text>
                    <div className="mt-3 font-display text-2xl leading-tight text-[#18324e]">{item.title}</div>
                    <Paragraph className="!mb-0 !mt-3 !leading-7 !text-[#5b7593]">{item.body}</Paragraph>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </main>
      </Layout.Content>
    </Layout>
  );
}
