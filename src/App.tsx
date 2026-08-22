const appStoreUrl = "https://apps.apple.com/kr/app/%EB%9D%BC%EB%A7%B5/id6797046935";
const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.peto.ramap";


const navigationItems = [
  { href: "#map", label: "지도" },
  { href: "#discover", label: "탐색" },
  { href: "#ranking", label: "랭킹" },
  { href: "#events", label: "새소식" },
];

const mapFeatures = [
  {
    title: "전국 라멘집을 찾아보고",
    description: "전국 어디서든 가까운 라멘집을 찾아보세요.",
  },
  {
    title: "좋아하는 장르로 고르고",
    description: "쇼유·시오·이에케 등 좋아하는 장르로 골라보세요.",
  },
  {
    title: "가기 전 필요한 소식까지",
    description: "운영 변동은 새소식에서 미리 확인하세요.",
  },
];

const exploreFeatures = [
  {
    number: "01",
    title: "운영 상태를 확인하고",
    description: "임시 휴무와 조기 마감 등 운영 변동을 먼저 확인하세요.",
  },
  {
    number: "02",
    title: "매장 정보를 살펴보고",
    description: "장르, 주소, 영업시간과 브레이크타임을 한곳에서 확인하세요.",
  },
];

function StoreButton({
  store = "app-store",
  compact = false,
}: {
  store?: "app-store" | "google-play";
  compact?: boolean;
}) {
  const isAppStore = store === "app-store";

  return (
    <a
      className={compact ? "store-button store-button--compact" : "store-button"}
      href={isAppStore ? appStoreUrl : googlePlayUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={isAppStore ? "App Store에서 라멥 다운로드" : "Google Play에서 라멥 다운로드"}
    >
      <img
        className="store-icon"
        src={isAppStore ? "assets/apple.svg" : "assets/googleplay.svg"}
        alt=""
        aria-hidden="true"
      />
      <span className="store-copy">
        <small>{isAppStore ? "Download on the" : "GET IT ON"}</small>
        <strong>{isAppStore ? "App Store" : "Google Play"}</strong>
      </span>
    </a>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 바로가기
      </a>

      <header className="site-header">
        <div className="page-shell header-inner">
          <a className="brand" href="#top" aria-label="라멥 홈">
            <img src="assets/ramap-icon.png" alt="" />
            <span>라멥</span>
          </a>

          <nav className="site-nav" aria-label="주요 메뉴">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <StoreButton compact />
            <StoreButton store="google-play" compact />
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="page-shell hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">
                <span className="hero-title-line">대한민국 라멘지도</span>
                <span className="hero-title-brand">라멥</span>
              </h1>
              <p className="hero-lead">
                전국 라멘집을 지도에서 찾고
                <br />
                다양한 이벤트 소식까지 확인하세요.
              </p>
              <div className="hero-actions">
                <StoreButton />
                <StoreButton store="google-play" />
              </div>
            </div>

            <figure className="hero-device">
              <div className="hero-device__frame">
                <img
                  src="assets/01-map.png"
                  alt="라멥 앱 지도 화면. 지도 위에 여러 라멘집 위치가 표시되어 있다."
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="section section-map" id="map" aria-labelledby="map-title">
          <div className="page-shell section-grid">
            <div className="section-copy">
              <h2 id="map-title">
                오늘 갈 라멘집을
                <br />
                지도에서 찾고
              </h2>
              <ul className="feature-list">
                {mapFeatures.map((feature) => (
                  <li key={feature.title}>
                    <span className="feature-mark" aria-hidden="true">
                      +
                    </span>
                    <span>
                      <strong>{feature.title}</strong>
                      <small>{feature.description}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="screen-stage screen-stage--map">
              <span className="stage-label stage-label--top">MAP / KOREA</span>
              <figure className="screen-frame screen-frame--map">
                <img
                  src="assets/01-map.png"
                  alt="라멥 지도 화면. 지도 위에 여러 라멘집 위치가 표시되어 있다."
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="section section-discover" id="discover" aria-labelledby="discover-title">
          <div className="page-shell">
            <div className="section-heading section-heading--wide">
              <div>
                <p className="eyebrow">02 / EXPLORE</p>
                <h2 id="discover-title">
                  방문 전 필요한 매장 정보를
                  <br />
                  한눈에 확인하세요.
                </h2>
              </div>
            </div>

            <div className="explore-layout">
              <div className="explore-steps">
                {exploreFeatures.map((feature) => (
                  <article className="explore-card" key={feature.number}>
                    <span className="explore-number">{feature.number}</span>
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                    <span className="explore-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </article>
                ))}
              </div>

              <figure className="explore-visual">
                <div className="screen-frame screen-frame--bottom-sheet">
                  <img
                    src="assets/store-detail-device.png"
                    alt="라멥 매장 상세 화면. 임시 휴무 배지와 장르, 주소·전화, 영업시간, 브레이크타임, 정기휴무, 대기 및 Instagram·카카오맵·네이버지도·제보하기가 표시되어 있다."
                    loading="lazy"
                  />
                </div>
              </figure>
            </div>
          </div>
        </section>

        <section className="section section-ranking" id="ranking" aria-labelledby="ranking-title">
          <div className="page-shell ranking-layout">
            <div className="ranking-visual">
              <figure className="screen-frame screen-frame--ranking">
                <img
                  src="assets/02-ranking.png"
                  alt="라멥 랭킹 화면. 지역별 라멘집 목록이 순위로 표시되어 있다."
                  loading="lazy"
                />
              </figure>
            </div>
            <div className="section-copy section-copy--light">
              <p className="eyebrow">03 / RANKING</p>
              <h2 id="ranking-title">
                사람들이 가장 많이 선택한
                <br />
                라멘집은?
              </h2>
              <p className="ranking-description">
                지역별로 사용자들이 선택한 순위를 확인해 보세요.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-events" id="events" aria-labelledby="events-title">
          <div className="page-shell">
            <div className="section-heading section-heading--events">
              <div>
                <p className="eyebrow">04 / NEWS</p>
                <h2 id="events-title">
                  다양한 소식을
                  <br />
                  한 곳에서 확인하세요.
                </h2>
              </div>
              <p>
                임시 휴무와 영업 변동부터 이벤트·신메뉴·리뉴얼까지, 라멘집의
                새소식을 한곳에서 확인하세요.
              </p>
            </div>

            <div className="event-screens">
              <figure className="screen-card">
                <div className="screen-frame screen-frame--event">
                  <img
                    src="assets/operating-status-device.png"
                    alt="라멥 운영 변동 목록 화면. 임시 휴무와 영업 관련 새소식이 목록으로 표시되어 있다."
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span>01</span>
                  운영 변동
                </figcaption>
              </figure>
              <figure className="screen-card screen-card--offset">
                <div className="screen-frame screen-frame--event">
                  <img
                    src="assets/news-device.png"
                    alt="라멥 새소식 목록 화면. 이벤트·신메뉴·리뉴얼 소식이 목록으로 표시되어 있다."
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span>02</span>
                  이벤트 · 신메뉴 · 리뉴얼
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="download-section" aria-labelledby="download-title">
          <div className="page-shell">
            <div className="download-card">
              <div className="download-visual">
                <img
                  src="assets/ramap-product-hero.png"
                  alt="랭킹·지도·이벤트 화면을 담은 라멥 제품 이미지"
                  width={1672}
                  height={941}
                  loading="lazy"
                />
              </div>
              <div className="download-copy">
                <h2 id="download-title">
                  다음 라멘집
                  <br />
                  라멥에서 찾으세요.
                </h2>
                <p>대한민국 라멘집을 한곳에서 찾아보세요.</p>
                <div className="download-actions">
                  <StoreButton />
                  <StoreButton store="google-play" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <div className="footer-links">
            <a href="https://ramap-orgranization.github.io/Ramap-KMP/" target="_blank" rel="noreferrer">
              개인정보처리방침
            </a>
            <a href="mailto:uni070@naver.com">문의하기</a>
            <a href="https://www.instagram.com/ramap_official_kr/" target="_blank" rel="noreferrer">
              인스타그램
            </a>
          </div>
          <p className="copyright">© Ramap. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
