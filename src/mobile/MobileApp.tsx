import { useState } from 'react';
import {
  ArrowRightOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  LockOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import { Button, Card, Layout, Modal, Typography } from 'antd';
import { articleCatalog } from '../desktop/articleCatalog';

const { Paragraph, Text, Title } = Typography;

const latestMobileArticle = [...articleCatalog].sort(
  (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime(),
)[0];

const latestMobileArticleCardTitle =
  latestMobileArticle.title.length > 30 ? `${latestMobileArticle.focus} tại S8` : latestMobileArticle.title;

const navigationItems = [
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Bài viết', href: '#bai-viet' },
] as const;

const homepageHighlights = [
  'Giao diện nhanh, mượt và dễ sử dụng',
  'Hệ thống bảo mật và bảo vệ dữ liệu',
] as const;

const aboutValues = ['Đổi mới', 'Minh bạch', 'Trải nghiệm người dùng', 'Bảo mật dữ liệu'] as const;

const supportContacts = [
  {
    icon: <MailOutlined className="mt-0.5 text-[11px] text-[#90a098]" />,
    text: 'Email hỗ trợ: support@s8.com',
  },
  {
    icon: <MailOutlined className="mt-0.5 text-[11px] text-[#90a098]" />,
    text: 'Email hợp tác: business@s8.com',
  },
  {
    icon: <ClockCircleOutlined className="mt-0.5 text-[11px] text-[#90a098]" />,
    text: 'Thời gian hỗ trợ: 24/7',
  },
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

const mobileCardStyles = {
  body: {
    padding: 14,
  },
} as const;

const externalPlayUrl = 'https://s8com-vn1.pages.dev/';

export function MobileApp() {
  const [activeDetailModal, setActiveDetailModal] = useState<'contact' | 'terms' | null>(null);
  const [isAgeConfirmOpen, setIsAgeConfirmOpen] = useState(false);

  const openAgeConfirm = () => {
    setIsAgeConfirmOpen(true);
  };

  const closeAgeConfirm = () => {
    setIsAgeConfirmOpen(false);
  };

  const continueToExternalPlay = () => {
    setIsAgeConfirmOpen(false);
    window.location.href = externalPlayUrl;
  };

  return (
    <Layout className="relative min-h-screen overflow-hidden bg-transparent" style={{ background: 'transparent' }}>
      <Layout.Content className="relative z-10 px-4 pb-10 pt-4" style={{ background: 'transparent' }}>
        <div className="mx-auto max-w-xl">
          <div
            className="mobile-nav-shell rounded-[16px] px-4 py-3"
            id="trang-chu"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <img
                  alt="S8"
                  className="h-6 w-6 rounded-[7px] object-cover shadow-[0_6px_14px_rgba(53,111,219,0.12)]"
                  src="/favicon.ico"
                />
                <Text className="mobile-nav-brand font-display text-xl font-extrabold tracking-[-0.01em]">S8 Platform</Text>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium">
                {navigationItems.map((item) => (
                  <a key={item.label} className="mobile-nav-link transition" href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <section className="mobile-home-card relative mt-3 overflow-hidden rounded-[20px] border border-white/62 p-4 shadow-[0_18px_42px_rgba(12,25,45,0.18)]">
            <div className="pointer-events-none absolute -top-10 right-0 h-28 w-28 rounded-full bg-[#b8ddff]/42 blur-3xl" />
            <div className="pointer-events-none absolute left-0 top-16 h-24 w-24 rounded-full bg-white/16 blur-2xl" />

            <Text className="relative mx-auto flex w-fit rounded-full border border-white/72 bg-white/66 px-2 py-[3px] leading-none text-[4px] font-semibold uppercase tracking-[0.12em] text-[#35567c] shadow-[0_8px_24px_rgba(11,21,40,0.12)]">
              Nền tảng giải trí số
            </Text>
            <Title className="!mb-0 !mt-3 !font-display !text-[1.28rem] !leading-[1.14] !tracking-[-0.03em] !text-[#102a43]">
              Chào mừng đến với S8 Platform – Nền tảng giải trí số hiện đại
            </Title>
            <div className="mobile-home-copy relative mt-3">
              <Paragraph className="!mb-0 !text-[0.88rem] !leading-6 !text-[#36506b]">
                S8 là nền tảng giải trí số hiện đại, ưu tiên trải nghiệm thân thiện, ổn định và dễ sử dụng trên nhiều thiết bị.
              </Paragraph>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {homepageHighlights.map((item) => (
                <div
                  key={item}
                  className="mobile-home-chip flex items-start gap-2 rounded-[12px] border border-white/78 px-2.5 py-2.5 text-[10.5px] leading-[1.45] text-[#35506a]"
                >
                  <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f8dff]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <Button
                block
                className="mobile-cta-button !h-10 !rounded-[8px] !border-0 !font-medium !text-white hover:!text-white"
                onClick={openAgeConfirm}
              >
                Bắt đầu ngay
              </Button>
              <Button
                block
                className="mobile-secondary-button !h-10 !rounded-[10px] !border-0 !font-medium !text-[#26496d] hover:!text-[#173b64]"
                href="#gioi-thieu"
              >
                Khám phá nền tảng
              </Button>
            </div>
          </section>

          <section
            className="mobile-spotlight-card relative mt-3 overflow-hidden rounded-[20px] border border-white/58 p-4 text-center shadow-[0_18px_42px_rgba(12,25,45,0.16)]"
            id="giai-tri"
          >
            <div className="pointer-events-none absolute -left-10 top-8 h-24 w-24 rounded-full bg-[#8fd4ff]/36 blur-2xl" />
            <div className="pointer-events-none absolute -right-6 bottom-4 h-28 w-28 rounded-full bg-[#9ab8ff]/32 blur-2xl" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/36" />

            <Text className="relative block text-sm font-semibold uppercase tracking-[0.2em] text-[#214a7a]">
              Giải trí cùng S8
            </Text>
            <Paragraph className="relative !mx-auto !mb-0 !mt-2 !max-w-md !text-[0.9rem] !leading-6 !text-[#34506b]">
              Kho game hiện đại, dễ truy cập và sẵn sàng để bạn trải nghiệm mọi lúc.
            </Paragraph>

            <Button
              className="mobile-cta-button !relative !mt-3 !h-14 !rounded-[14px] !border-0 !px-10 !text-base !font-semibold !text-white hover:!text-white"
              onClick={openAgeConfirm}
              icon={<ArrowRightOutlined />}
            >
              Truy cập ngay
            </Button>
          </section>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <Card
              className="mobile-detail-card !h-full !rounded-[16px] !border-white/62 !bg-white/58 !shadow-[0_12px_28px_rgba(8,20,39,0.16)] !backdrop-blur-[12px]"
              id="bai-viet"
              styles={mobileCardStyles}
            >
              <Text className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47627e]">
                <FileTextOutlined />
                Bài viết mới nhất
              </Text>
              <Title className="!mb-0 !mt-2.5 !font-display !text-[0.98rem] !leading-[1.55] !text-[#102a43]" level={3}>
                {latestMobileArticleCardTitle}
              </Title>
              <Paragraph className="!mb-0 !mt-2.5 !text-[0.82rem] !leading-[1.8] !text-[#36506b]">
                Bài viết ngắn về {latestMobileArticle.focus.toLowerCase()}, cách S8 tối ưu trải nghiệm và giữ nhịp cải tiến rõ ràng hơn.
              </Paragraph>

              <Button
                className="mobile-detail-action !h-8 !rounded-[8px] !border-[#d8d4cc] !bg-white !px-3 !text-[12px] !text-[#556961] hover:!border-[#c2d0c8] hover:!text-[#2d5d50]"
                href={`/journal/${latestMobileArticle.slug}.html`}
                icon={<ArrowRightOutlined />}
              >
                Đọc tiếp
              </Button>
            </Card>

            <Card
              className="mobile-detail-card !h-full !rounded-[16px] !border-white/62 !bg-white/58 !shadow-[0_12px_28px_rgba(8,20,39,0.16)] !backdrop-blur-[12px]"
              id="gioi-thieu"
              styles={mobileCardStyles}
            >
              <Text className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47627e]">
                <InfoCircleOutlined />
                Giới thiệu về S8
              </Text>
              <Paragraph className="!mb-0 !mt-2.5 !text-[0.82rem] !leading-[1.8] !text-[#36506b]">
                S8 là nền tảng kỹ thuật số hiện đại, tập trung vào trải nghiệm rõ ràng, ổn định và thân thiện với người dùng.
              </Paragraph>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {aboutValues.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-[7px] border border-white/70 bg-white/72 px-2 py-1 text-[10px] text-[#3e5a76]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </Card>

            <Card
              className="mobile-detail-card !h-full !rounded-[16px] !border-white/62 !bg-white/58 !shadow-[0_12px_28px_rgba(8,20,39,0.16)] !backdrop-blur-[12px]"
              styles={mobileCardStyles}
            >
              <Text className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47627e]">
                <MailOutlined />
                Liên hệ
              </Text>
              <Paragraph className="!mb-0 !mt-2.5 !text-[0.76rem] !leading-[1.7] !text-[#36506b]">
                Chúng tôi luôn sẵn sàng hỗ trợ bạn qua các kênh liên hệ chính thức của S8.
              </Paragraph>

              <div className="mt-3 space-y-1.5 text-[0.74rem] leading-[1.65] text-[#36506b]">
                {supportContacts.slice(0, 2).map((item) => (
                  <div key={item.text} className="flex items-start gap-2">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <Paragraph className="!mb-0 !mt-3 !text-[0.72rem] !leading-[1.7] !text-[#5a7189]">
                Mọi yêu cầu hỗ trợ và hợp tác đều được tiếp nhận qua email chính thức để phản hồi rõ ràng hơn.
              </Paragraph>

              <Button
                className="mobile-detail-action !h-8 !rounded-[8px] !border-[#d8d4cc] !bg-white !px-3 !text-[12px] !text-[#556961] hover:!border-[#c2d0c8] hover:!text-[#2d5d50]"
                onClick={() => setActiveDetailModal('contact')}
              >
                Đọc thêm
              </Button>
            </Card>

            <Card
              className="mobile-detail-card !h-full !rounded-[16px] !border-white/62 !bg-white/58 !shadow-[0_12px_28px_rgba(8,20,39,0.16)] !backdrop-blur-[12px]"
              styles={mobileCardStyles}
            >
              <Text className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47627e]">
                <SafetyCertificateOutlined />
                Điều khoản sử dụng
              </Text>
              <ol className="mt-2.5 space-y-1.5 pl-4 text-[0.72rem] leading-[1.6] text-[#36506b]">
                {termsSections.slice(0, 2).map((item, index) => (
                  <li key={item.title}>
                    <span className="font-medium text-[#14324f]">
                      {index + 1}. {item.title}
                    </span>
                  </li>
                ))}
              </ol>
              <Paragraph className="!mb-0 !mt-3 !text-[0.72rem] !leading-[1.7] !text-[#5a7189]">
                Nội dung đầy đủ còn bao gồm quyền sở hữu, giới hạn trách nhiệm và các nguyên tắc sử dụng nền tảng.
              </Paragraph>

              <Button
                className="mobile-detail-action !h-8 !rounded-[8px] !border-[#d8d4cc] !bg-white !px-3 !text-[12px] !text-[#556961] hover:!border-[#c2d0c8] hover:!text-[#2d5d50]"
                onClick={() => setActiveDetailModal('terms')}
              >
                Đọc thêm
              </Button>
            </Card>
          </div>

          <Card className="!mt-4 !rounded-[16px] !border-white/62 !bg-white/58 !shadow-[0_12px_28px_rgba(8,20,39,0.16)] !backdrop-blur-[12px]">
            <Text className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#47627e]">
              <LockOutlined />
              Chính sách bảo mật
            </Text>
            <Paragraph className="!mb-0 !mt-3 !text-sm !leading-7 !text-[#36506b]">
              Tại S8, chúng tôi coi trọng quyền riêng tư của người dùng và cam kết bảo vệ thông tin cá nhân. Mọi dữ liệu
              đều được xử lý theo các tiêu chuẩn bảo mật hiện hành.
            </Paragraph>

            <div className="mt-4 space-y-4 text-[0.82rem] leading-7 text-[#36506b]">
              <div>
                <Text className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47627e]">
                  Thông tin có thể được thu thập
                </Text>
                <ul className="mt-2 space-y-1 pl-5">
                  {privacyCollectedData.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <Text className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47627e]">
                  Mục đích sử dụng dữ liệu
                </Text>
                <ul className="mt-2 space-y-1 pl-5">
                  {privacyUseCases.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <Paragraph className="!mb-0 !text-[0.82rem] !leading-7 !text-[#36506b]">
                Chúng tôi không bán hoặc chia sẻ dữ liệu cá nhân với bên thứ ba trái phép.
              </Paragraph>

              <div>
                <Text className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47627e]">
                  Quyền của người dùng
                </Text>
                <ul className="mt-2 space-y-1 pl-5">
                  {privacyRights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <footer className="mobile-footer-shell mt-4 flex flex-wrap items-center justify-between gap-3 rounded-[16px] px-4 py-3 text-xs">
            <span>© 2024 S8 Platform. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <a className="mobile-footer-link" href="#gioi-thieu">
                Chính sách bảo mật
              </a>
              <a className="mobile-footer-link" href="#bai-viet">
                Điều khoản sử dụng
              </a>
            </div>
          </footer>

          <Modal
            centered
            footer={null}
            onCancel={closeAgeConfirm}
            open={isAgeConfirmOpen}
          >
            <div className="flex flex-col items-center text-center">
              <img
                alt="18+"
                className="h-20 w-20 rounded-[18px] object-cover shadow-[0_16px_36px_rgba(53,111,219,0.18)]"
                src="/content-rating-symbol-vector.jpg"
              />
              <Title className="!mb-0 !mt-4 !font-display !text-[1.35rem] !leading-tight !text-[#173b64]" level={3}>
                Xác nhận độ tuổi
              </Title>
              <Paragraph className="!mb-0 !mt-3 !text-sm !leading-7 !text-[#55708d]">
                Bạn xác nhận mình đã đủ 18 tuổi để tiếp tục truy cập nội dung này. Khi tiếp tục, bạn tự chịu trách nhiệm với quyết định
                và hành vi sử dụng của mình.
              </Paragraph>
              <div className="mt-5 grid w-full grid-cols-2 gap-3">
                <Button
                  className="!h-11 !rounded-[12px] !border-[#d9e6f7] !bg-white !font-semibold !text-[#31577f] hover:!border-[#b7ceef] hover:!text-[#20466d]"
                  onClick={continueToExternalPlay}
                >
                  Chưa đủ 18 tuổi
                </Button>
                <Button
                  className="!h-11 !rounded-[12px] !border-0 !bg-[#356fdb] !font-semibold !text-white hover:!bg-[#2558bb] hover:!text-white"
                  onClick={continueToExternalPlay}
                >
                  Tôi đã đủ 18 tuổi
                </Button>
              </div>
            </div>
          </Modal>

          <Modal
            centered
            footer={null}
            onCancel={() => setActiveDetailModal(null)}
            open={activeDetailModal !== null}
            title={activeDetailModal === 'contact' ? 'Liên hệ' : 'Điều khoản sử dụng'}
          >
            {activeDetailModal === 'contact' ? (
              <>
                <Paragraph className="!mb-3 !mt-2 !text-sm !leading-7 !text-[#4e645c]">
                  Chúng tôi luôn sẵn sàng hỗ trợ bạn. Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, vui lòng liên hệ với
                  chúng tôi qua các kênh dưới đây:
                </Paragraph>
                <div className="space-y-3 text-sm leading-7 text-[#5b7067]">
                  {supportContacts.map((item) => (
                    <div key={item.text} className="flex items-start gap-3 rounded-[12px] border border-[#e7ece6] bg-[#f8faf7] px-3 py-3">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : activeDetailModal === 'terms' ? (
              <div className="space-y-4">
                {termsSections.map((item, index) => (
                  <div key={item.title} className="rounded-[14px] border border-[#e7ece6] bg-[#f8faf7] px-4 py-3">
                    <div className="text-sm font-semibold text-[#405851]">
                      {index + 1}. {item.title}
                    </div>
                    <Paragraph className="!mb-0 !mt-2 !text-sm !leading-7 !text-[#667d74]">{item.body}</Paragraph>
                  </div>
                ))}
              </div>
            ) : null}
          </Modal>

        </div>
      </Layout.Content>
    </Layout>
  );
}
