const appStoreUrl = "https://apps.apple.com/kr/app/%EB%9D%BC%EB%A7%B5/id6797046935";
const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.peto.ramap";


const navigationItems = [
  { href: "#map", label: "지도" },
  { href: "#discover", label: "탐색" },
  { href: "#ranking", label: "랭킹" },
  { href: "#events", label: "이벤트" },
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
    title: "가기 전 필요한 정보까지",
    description: "운영시간과 웨이팅 정보를 한 번에 확인하세요.",
  },
];

const exploreFeatures = [
  {
    number: "01",
    title: "동네를 고르고",
    description: "가고 싶은 지역을 먼저 골라보세요.",
  },
  {
    number: "02",
    title: "라멘집을 둘러보고",
    description: "지도에 모인 라멘집을 비교하며 다음 가게를 찾아보세요.",
  },
  {
    number: "03",
    title: "오늘의 한 그릇을 고르고",
    description: "여러 검색창을 오가지 않고 라맵에서 바로 결정하세요.",
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
      aria-label={isAppStore ? "App Store에서 라맵 다운로드" : "Google Play에서 라맵 다운로드"}
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
          <a className="brand" href="#top" aria-label="라맵 홈">
            <img src="assets/ramap-icon.png" alt="" />
            <span>라맵</span>
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
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="page-shell hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">
                <span className="hero-title-line">대한민국 라멘지도</span>
                <span className="hero-title-brand">라맵</span>
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
              <ul className="hero-points" aria-label="라맵의 주요 기능">
                <li>
                  <span>01</span> 전국 라멘집 지도
                </li>
                <li>
                  <span>02</span> 지역·장르별 탐색
                </li>
                <li>
                  <span>03</span> 랭킹과 이벤트
                </li>
              </ul>
            </div>

            <figure className="hero-device">
              <div className="hero-device__frame">
                <img
                  src="assets/01-map.png"
                  alt="라맵 앱 지도 화면. 지도 위에 여러 라멘집 위치가 표시되어 있다."
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
                  alt="라맵 지도 화면. 지도 위에 여러 라멘집 위치가 표시되어 있다."
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
                  오늘은 어느 동네에서
                  <br />
                  라멘을 먹을까요?
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
                    src="assets/ramap-physical-current.png"
                    alt="라맵 지도 위에 실제 매장 상세 바텀시트가 열린 화면."
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
                  alt="라맵 랭킹 화면. 지역별 라멘집 목록이 순위로 표시되어 있다."
                  loading="lazy"
                />
              </figure>
            </div>
            <div className="section-copy section-copy--light">
              <p className="eyebrow">03 / RANKING</p>
              <h2 id="ranking-title">
                이 동네에서 가장 많이 찾는
                <br />
                라멘집은?
              </h2>
              <p className="ranking-description">
                지도에서 찾은 라멘집을 지역별 인기 순위로 확인해 보세요. 다음
              </p>
            </div>
          </div>
        </section>

        <section className="section section-events" id="events" aria-labelledby="events-title">
          <div className="page-shell">
            <div className="section-heading section-heading--events">
              <div>
                <p className="eyebrow">04 / EVENTS</p>
                <h2 id="events-title">
                  새로운 메뉴와 이벤트 소식을
                  <br />
                  한곳에서 확인하세요.
                </h2>
              </div>
              <p>
                진행 중인 행사부터 곧 시작될 한정 메뉴까지, 라멘집의 소식을
                한곳에서 확인하세요.
              </p>
            </div>

            <div className="event-screens">
              <figure className="screen-card">
                <div className="screen-frame screen-frame--event">
                  <img
                    src="assets/events-device.png"
                    alt="라맵 이벤트 화면. 여름 한정, 오늘 진행 중, 진행 예정 이벤트가 보이는 현재 앱 화면."
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span>01</span>
                  진행 중 · 진행 예정
                </figcaption>
              </figure>
              <figure className="screen-card screen-card--offset">
                <div className="screen-frame screen-frame--event">
                  <img
                    src="assets/ramap-kakikoujo-event-detail.png"
                    alt="라맵 이벤트 상세 화면. 카키코우죠 행사 장소와 날짜, 내용을 보여주는 앱 화면."
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span>02</span>
                  이벤트 상세
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
                  alt="랭킹·지도·이벤트 화면을 담은 라맵 제품 이미지"
                  width={1672}
                  height={941}
                  loading="lazy"
                />
              </div>
              <div className="download-copy">
                <h2 id="download-title">
                  다음 라멘집
                  <br />
                  라맵에서 찾으세요.
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
          </div>
          <p className="copyright">© Ramap. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
