import { Layout, Typography } from 'antd';

const { Paragraph, Text, Title } = Typography;

type LoadingShellProps = {
  isDesktop: boolean;
};

const loadingSignals = ['Hiệu suất tối ưu', 'Bảo vệ dữ liệu', 'Truy cập toàn cầu'] as const;

const loadingHighlights = [
  {
    title: 'Khởi tạo giao diện',
    body: 'Sắp xếp các lớp nội dung, khoảng trắng và chuyển động để S8 hiển thị mượt mà ngay khi mở trang.',
  },
  {
    title: 'Đồng bộ trải nghiệm',
    body: 'Chuẩn bị tốc độ phản hồi, cấu trúc hiển thị và các thành phần chính cho nhiều kích thước màn hình.',
  },
  {
    title: 'Kiểm tra ổn định',
    body: 'Hoàn thiện lớp hiển thị, khả năng truy cập và những chi tiết giúp trải nghiệm vận hành tin cậy hơn.',
  },
] as const;

const previewStats = [
  { label: 'Tốc độ', value: '98%' },
  { label: 'Ổn định', value: '24/7' },
  { label: 'Bảo mật', value: 'Active' },
] as const;

const mobileBadges = ['Giao diện', 'Nội dung', 'Bảo mật'] as const;

export function LoadingShell({ isDesktop }: LoadingShellProps) {
  if (!isDesktop) {
    return (
      <Layout className="min-h-screen bg-transparent px-4 pb-10 pt-5">
        <div className="mx-auto w-full max-w-sm" role="status" aria-live="polite">
          <div className="mobile-loading-shell relative overflow-hidden rounded-[34px] border border-[#d6e4fb] p-6 shadow-[0_24px_70px_rgba(53,111,219,0.16)] backdrop-blur-xl">
            <div className="pointer-events-none absolute -left-10 top-6 h-24 w-24 rounded-full bg-[#9fd3ff]/65 blur-3xl" />
            <div className="pointer-events-none absolute -right-8 bottom-6 h-28 w-28 rounded-full bg-[#a4bbff]/55 blur-3xl" />

            <div className="relative flex items-center justify-between">
              <Text className="font-display text-base tracking-[0.08em] text-[#204268]">S8 Platform</Text>
              <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4a72ad]">
                Đang tải
              </span>
            </div>

            <div className="relative mt-8 flex justify-center">
              <div className="mobile-loading-orbit relative flex h-36 w-36 items-center justify-center rounded-full border border-white/75 bg-white/46 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)]">
                <span className="mobile-loading-dot mobile-loading-dot-one" />
                <span className="mobile-loading-dot mobile-loading-dot-two" />
                <span className="mobile-loading-dot mobile-loading-dot-three" />
                <div className="mobile-loading-core flex h-20 w-20 items-center justify-center rounded-full border border-white/80 bg-white/88">
                  <span className="font-display text-xl tracking-[0.14em] text-[#356fdb]">S8</span>
                </div>
              </div>
            </div>

            <Title className="!mb-0 !mt-8 !text-center !font-display !text-[1.9rem] !leading-[1.08] !tracking-[-0.03em] !text-[#1a3654]">
              Đang khởi tạo trải nghiệm số
            </Title>
            <Paragraph className="!mb-0 !mt-4 !text-center !text-[0.95rem] !leading-7 !text-[#5b7593]">
              Giao diện, nội dung và các lớp bảo mật đang được đồng bộ để S8 hiển thị mượt mà trên thiết bị của bạn.
            </Paragraph>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {mobileBadges.map((badge) => (
                <span key={badge} className="mobile-loading-badge">
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              <div className="rounded-[20px] border border-white/78 bg-white/72 p-4">
                <Text className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6a83a1]">Đồng bộ nền tảng</Text>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#dce8fb]">
                  <span className="mobile-loading-progress block h-full rounded-full bg-[linear-gradient(90deg,#4f8dff,#74b7ff,#9fd3ff)]" />
                </div>
                <Text className="mt-3 block text-sm leading-6 text-[#5f7896]">
                  Chuẩn bị các thành phần chính để bạn vào trang nhanh hơn và ổn định hơn.
                </Text>
              </div>

              <div className="rounded-[20px] border border-white/78 bg-white/72 p-4">
                <Text className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6a83a1]">Đang mở nội dung</Text>
                <div className="mt-3 space-y-2.5">
                  <div className="mobile-loading-line h-2.5 w-11/12 rounded-full" />
                  <div className="mobile-loading-line h-2.5 w-4/5 rounded-full" />
                  <div className="mobile-loading-line h-2.5 w-3/5 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout className="min-h-screen bg-transparent px-4 pb-14 pt-4 lg:px-8 lg:pb-20 lg:pt-6">
      <div className="mx-auto w-full max-w-7xl" role="status" aria-live="polite">
        <div className="loading-shell-desktop relative overflow-hidden rounded-[42px] border border-white/60 p-6 shadow-[0_28px_90px_rgba(53,111,219,0.16)] backdrop-blur-xl md:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-14 -top-16 h-48 w-48 rounded-full bg-[#8dc5ff]/45 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#afcbff]/38 blur-3xl" />

          <div className="relative grid gap-8 xl:grid-cols-[1.04fr_0.96fr] xl:items-center">
            <div>
              <Text className="block text-xs font-semibold uppercase tracking-[0.32em] text-[#4f8dff]">S8 PLATFORM</Text>
              <Title className="!mb-4 !mt-4 !font-display !text-6xl !leading-[1.04] !text-[#16375b]">
                Đang mở không gian giải trí số của S8
              </Title>
              <Paragraph className="!mb-0 !max-w-2xl !text-base !leading-8 !text-[#5b7593]">
                Vui lòng chờ trong giây lát khi giao diện, nội dung, hỗ trợ và các lớp bảo mật được khởi tạo để mang đến trải nghiệm ổn định ngay từ lần
                truy cập đầu tiên.
              </Paragraph>

              <div className="mt-6 flex flex-wrap gap-3">
                {loadingSignals.map((signal) => (
                  <span key={signal} className="loading-shell-badge">
                    {signal}
                  </span>
                ))}
              </div>

              <div className="loading-shell-status mt-8 flex items-center gap-4 rounded-[26px] p-4">
                <div className="loading-shell-ripple flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/80">
                  <div className="h-4 w-4 rounded-full bg-[#356fdb]" />
                </div>

                <div className="min-w-0 flex-1">
                  <Text className="block text-xs font-semibold uppercase tracking-[0.24em] text-[#356fdb]">Chuẩn bị giao diện và nội dung</Text>
                  <Text className="mt-1 block text-sm leading-6 text-[#5a7593]">
                    Hệ thống đang đồng bộ các thành phần chính để tốc độ hiển thị và cảm giác sử dụng được mượt mà hơn.
                  </Text>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#d8e6fb]">
                    <span className="loading-shell-progress block h-full rounded-full bg-[linear-gradient(90deg,#356fdb,#5ea4ff,#94c8ff)]" />
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {loadingHighlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="rounded-[28px] border border-[#dce7f8] bg-white/76 p-4 shadow-[0_14px_40px_rgba(53,111,219,0.06)]"
                  >
                    <div className="loading-shell-shimmer h-2 w-16 rounded-full" />
                    <div className="mt-4 font-display text-2xl leading-tight text-[#17365a]">{highlight.title}</div>
                    <Paragraph className="!mb-0 !mt-3 !text-sm !leading-7 !text-[#607b98]">{highlight.body}</Paragraph>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="loading-shell-preview relative min-h-[520px] overflow-hidden rounded-[36px] border border-[#d9e6f8] p-5 shadow-[0_24px_70px_rgba(53,111,219,0.14)]">
                <div className="loading-shell-orb absolute right-6 top-6 h-20 w-20 rounded-full bg-white/60 blur-[2px]" />

                <div className="rounded-[20px] border border-white/75 bg-white/62 p-3 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#9fc5ff]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#bfd8ff]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#d8e7ff]" />
                    </div>
                    <span className="rounded-full border border-[#dde9fb] bg-white/74 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6a87ab]">
                      Live preview
                    </span>
                  </div>
                </div>

                <div className="loading-shell-shimmer mt-5 h-[220px] rounded-[28px] border border-white/72 bg-white/52" />

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {previewStats.map((stat) => (
                    <div key={stat.label} className="rounded-[22px] border border-white/76 bg-white/68 p-4">
                      <Text className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7a95b5]">{stat.label}</Text>
                      <div className="mt-3 font-display text-[1.85rem] leading-none text-[#16375b]">{stat.value}</div>
                      <div className="loading-shell-shimmer mt-4 h-2.5 w-4/5 rounded-full" />
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[24px] border border-white/80 bg-white/68 p-4">
                  <Text className="block text-xs font-semibold uppercase tracking-[0.24em] text-[#7894b4]">Khối nội dung chính</Text>
                  <div className="mt-4 grid gap-3">
                    <div className="loading-shell-shimmer h-3 w-full rounded-full" />
                    <div className="loading-shell-shimmer h-3 w-11/12 rounded-full" />
                    <div className="loading-shell-shimmer h-3 w-8/12 rounded-full" />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/80 bg-white/68 p-4">
                    <Text className="block text-xs font-semibold uppercase tracking-[0.24em] text-[#7894b4]">Hỗ trợ</Text>
                    <div className="loading-shell-shimmer mt-4 h-3 w-24 rounded-full" />
                    <div className="loading-shell-shimmer mt-3 h-3 w-full rounded-full" />
                    <div className="loading-shell-shimmer mt-3 h-3 w-4/5 rounded-full" />
                  </div>

                  <div className="rounded-[24px] border border-white/80 bg-white/68 p-4">
                    <Text className="block text-xs font-semibold uppercase tracking-[0.24em] text-[#7894b4]">Chính sách</Text>
                    <div className="loading-shell-shimmer mt-4 h-3 w-20 rounded-full" />
                    <div className="loading-shell-shimmer mt-3 h-3 w-full rounded-full" />
                    <div className="loading-shell-shimmer mt-3 h-3 w-5/6 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
