import {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import WelcomeBanner from '@site/src/components/BannerChaomung';

const docTypes = [
  {
    index: '01',
    icon: '🏠',
    title: 'Hộ kinh doanh',
    desc: 'Nội dung đang được cập nhật. Hiện mục này sẽ được mở lại sau khi hoàn thiện và ra mắt chính thức.',
    href: '/coming-soon',
    badge: 'Sắp ra mắt',
  },
  {
    index: '02',
    icon: '🤝',
    title: 'Hợp tác xã',
    desc: 'Hạch toán theo Thông tư 71/2024/TT-BTC, quản lý vốn góp thành viên, quỹ chung không chia và báo cáo tài chính HTX.',
    href: '/docs/hop_tac_xa/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.1-cai-dat-chuong-trinh-phan-mem-acman-9.1',
    badge: 'Xem tài liệu',
  },
  {
    index: '03',
    icon: '💰',
    title: 'Quỹ tài chính',
    desc: 'Quản lý vốn, cho vay - thu nợ nội bộ, lãi vay, quỹ dự phòng rủi ro và báo cáo hoạt động của quỹ tài chính.',
    href: '/coming-soon',
    badge: 'Sắp ra mắt',
  },
];

const SEARCH_PLACEHOLDER_TEXT = 'Chúc bạn trải nghiệm tốt với PM ACMan';

// Hiệu ứng gõ chữ: gõ ra -> dừng -> xoá -> gõ lại, lặp vô hạn
function useTypewriter(text, {typeSpeed = 80, deleteSpeed = 35, pause = 1800} = {}) {
  const [display, setDisplay] = useState('');
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      if (!deleting) {
        charIndex += 1;
        setDisplay(text.slice(0, charIndex));
        if (charIndex >= text.length) {
          deleting = true;
          timeoutId = setTimeout(tick, pause);
          return;
        }
      } else {
        charIndex -= 1;
        setDisplay(text.slice(0, charIndex));
        if (charIndex <= 0) {
          deleting = false;
          timeoutId = setTimeout(tick, 400);
          return;
        }
      }
      timeoutId = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    };

    timeoutId = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timeoutId);
  }, [text, typeSpeed, deleteSpeed, pause]);

  useEffect(() => {
    const blinkId = setInterval(() => setCursorOn((v) => !v), 500);
    return () => clearInterval(blinkId);
  }, []);

  return `${display}${cursorOn ? '|' : ''}`;
}

function SearchBox() {
  const animatedPlaceholder = useTypewriter(SEARCH_PLACEHOLDER_TEXT);

  return (
    <div className="acSearchBox">
      <svg
        className="acSearchIcon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>

      <input
        className="acSearchInput"
        type="search"
        placeholder={animatedPlaceholder}
        aria-label="Tìm kiếm hướng dẫn"
      />
    </div>
  );
}

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <section className="acHero">
      <div className="acHeroInner">
        <div className="acHeroContent">
          <div className="acEyebrow">Tài liệu hướng dẫn sử dụng ACMan</div>

          <Heading as="h1" className="acHeroTitle">
            Làm kế toán trên <span className="acGlow">ACMan</span>
            <br />
            đúng quy trình ngay từ bước đầu
          </Heading>

          <p className="acHeroSubtitle">
            Hướng dẫn thiết lập, nhập liệu, hạch toán, đối chiếu và xử lý
            nghiệp vụ trên phần mềm ACMan — được tổ chức theo 3 mô hình Hộ kinh doanh - Hợp tác xã - Quỹ tài chính.
          </p>

          <SearchBox />
        </div>

        <div className="acHeroVisual">
          <div className="acProductFrame">
            <img
              className="acProductImage"
              src="/img/acman-hero.png"
              alt="Giao diện phần mềm kế toán ACMan"
            />
          </div>

          <div
            className="acVisualIcon acVisualIconBook"
            aria-hidden="true"
            title="Tài liệu hướng dẫn">
            📖
          </div>

          <div
            className="acVisualIcon acVisualIconChart"
            aria-hidden="true"
            title="Báo cáo">
            📊
          </div>
        </div>
      </div>
    </section>
  );
}

function DocTypeGrid() {
  return (
    <div className="acGridWrap">
      <div className="acGrid">
        {docTypes.map((doc) => (
          <Link key={doc.index} to={doc.href} className="acCard">
            <div className="acCardIndex">{doc.index}</div>
            <div className="acCardIcon">{doc.icon}</div>
            <div className="acCardTitle">{doc.title}</div>
            <div className="acCardDesc">{doc.desc}</div>
            <div className="acCardLink">{doc.badge}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Tài liệu hướng dẫn ACMan cho hộ kinh doanh, hợp tác xã và quỹ tài chính">
      <main className="acHomeMain">
        <HomepageHero />
        <DocTypeGrid />
      </main>
      <WelcomeBanner />
    </Layout>
  );
}