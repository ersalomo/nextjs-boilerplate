"use client"

const XX = () => {

  var defaultThemeMode = "light";
  var themeMode;
  if (window.document.documentElement) {
    if (window.document.documentElement.hasAttribute("data-bs-theme-mode")) {
      themeMode = window.document.documentElement.getAttribute("data-bs-theme-mode");
    } else {
      if (localStorage.getItem("data-bs-theme") !== null) {
        themeMode = localStorage.getItem("data-bs-theme");
      } else {
        themeMode = defaultThemeMode;
      }
    } if (themeMode === "system") {
      themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    window.document.documentElement.setAttribute("data-bs-theme", themeMode || "dark");
  }

  return (
    <>
      <div id="kt_body" data-bs-spy="scroll" data-bs-target="#kt_landing_menu" className="bg-body position-relative">
        {/* <!--begin::Theme mode setup on page load--> */}
        {/* <script>var defaultThemeMode = "light"; var themeMode; if ( document.documentElement ) { if ( document.documentElement.hasAttribute("data-bs-theme-mode")) {themeMode = document.documentElement.getAttribute("data-bs-theme-mode"); } else { if ( localStorage.getItem("data-bs-theme") !== null ) {themeMode = localStorage.getItem("data-bs-theme"); } else {themeMode = defaultThemeMode; } } if (themeMode === "system") {themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; } document.documentElement.setAttribute("data-bs-theme", themeMode); }</script> */}
        {/* <!--end::Theme mode setup on page load--> */}
        {/* <!--begin::Main--> */}
        {/* <!--begin::Root--> */}
        <div className="d-flex flex-column flex-root">
          {/* <!--begin::Header Section--> */}
          <div className="mb-0" id="home">
            {/* <!--begin::Wrapper--> */}
            <div className="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg" style={{ backgroundImage: "url(/fe/dist/assets/media/svg/illustrations/landing.svg)" }}>
              {/* <!--begin::Header--> */}
              <div className="landing-header" data-kt-sticky="true" data-kt-sticky-name="landing-header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
                {/* <!--begin::Container--> */}
                <div className="container">
                  {/* <!--begin::Wrapper--> */}
                  <div className="d-flex align-items-center justify-content-between">
                    {/* <!--begin::Logo--> */}
                    <div className="d-flex align-items-center flex-equal">
                      {/* <!--begin::Mobile menu toggle--> */}
                      <button className="btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none" id="kt_landing_menu_toggle">
                        <i className="ki-duotone ki-abstract-14 fs-2hx">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </button>
                      {/* <!--end::Mobile menu toggle--> */}
                      {/* <!--begin::Logo image--> */}
                      <a href="../../demo5/dist/landing.html">
                        <img alt="Logo" src="/fe/dist/assets/media/logos/landing.svg" className="logo-default h-25px h-lg-30px" />
                        <img alt="Logo" src="/fe/dist/assets/media/logos/landing-dark.svg" className="logo-sticky h-20px h-lg-25px" />
                      </a>
                      {/* <!--end::Logo image--> */}
                    </div>
                    {/* <!--end::Logo--> */}
                    {/* <!--begin::Menu wrapper--> */}
                    <div className="d-lg-block" id="kt_header_nav_wrapper">
                      <div className="d-lg-block p-5 p-lg-0" data-kt-drawer="true" data-kt-drawer-name="landing-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="200px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_landing_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}">
                        {/* <!--begin::Menu--> */}
                        <div className="menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-600 menu-state-title-primary nav nav-flush fs-5 fw-semibold" id="kt_landing_menu">
                          {/* <!--begin::Menu item--> */}
                          <div className="menu-item">
                            {/* <!--begin::Menu link--> */}
                            <a className="menu-link nav-link active py-3 px-4 px-xxl-6" href="#kt_body" data-kt-scroll-toggle="true" data-kt-drawer-dismiss="true">Home</a>
                            {/* <!--end::Menu link--> */}
                          </div>
                          {/* <!--end::Menu item--> */}
                          {/* <!--begin::Menu item--> */}
                          <div className="menu-item">
                            {/* <!--begin::Menu link--> */}
                            <a className="menu-link nav-link py-3 px-4 px-xxl-6" href="#how-it-works" data-kt-scroll-toggle="true" data-kt-drawer-dismiss="true">How it Works</a>
                            {/* <!--end::Menu link--> */}
                          </div>
                          {/* <!--end::Menu item--> */}
                          {/* <!--begin::Menu item--> */}
                          <div className="menu-item">
                            {/* <!--begin::Menu link--> */}
                            <a className="menu-link nav-link py-3 px-4 px-xxl-6" href="#achievements" data-kt-scroll-toggle="true" data-kt-drawer-dismiss="true">Achievements</a>
                            {/* <!--end::Menu link--> */}
                          </div>
                          {/* <!--end::Menu item--> */}
                          {/* <!--begin::Menu item--> */}
                          <div className="menu-item">
                            {/* <!--begin::Menu link--> */}
                            <a className="menu-link nav-link py-3 px-4 px-xxl-6" href="#team" data-kt-scroll-toggle="true" data-kt-drawer-dismiss="true">Team</a>
                            {/* <!--end::Menu link--> */}
                          </div>
                          {/* <!--end::Menu item--> */}
                          {/* <!--begin::Menu item--> */}
                          <div className="menu-item">
                            {/* <!--begin::Menu link--> */}
                            <a className="menu-link nav-link py-3 px-4 px-xxl-6" href="#portfolio" data-kt-scroll-toggle="true" data-kt-drawer-dismiss="true">Portfolio</a>
                            {/* <!--end::Menu link--> */}
                          </div>
                          {/* <!--end::Menu item--> */}
                          {/* <!--begin::Menu item--> */}
                          <div className="menu-item">
                            {/* <!--begin::Menu link--> */}
                            <a className="menu-link nav-link py-3 px-4 px-xxl-6" href="#pricing" data-kt-scroll-toggle="true" data-kt-drawer-dismiss="true">Pricing</a>
                            {/* <!--end::Menu link--> */}
                          </div>
                          {/* <!--end::Menu item--> */}
                        </div>
                        {/* <!--end::Menu--> */}
                      </div>
                    </div>
                    {/* <!--end::Menu wrapper--> */}
                    {/* <!--begin::Toolbar--> */}
                    <div className="flex-equal text-end ms-1">
                      <a href="../../demo5/dist/authentication/layouts/corporate/sign-in.html" className="btn btn-success">Sign In</a>
                    </div>
                    {/* <!--end::Toolbar--> */}
                  </div>
                  {/* <!--end::Wrapper--> */}
                </div>
                {/* <!--end::Container--> */}
              </div>
              {/* <!--end::Header--> */}
              {/* <!--begin::Landing hero--> */}
              <div className="d-flex flex-column flex-center w-100 min-h-350px min-h-lg-500px px-9">
                {/* <!--begin::Heading--> */}
                <div className="text-center mb-5 mb-lg-10 py-10 py-lg-20">
                  {/* <!--begin::Title--> */}
                  <h1 className="text-white lh-base fw-bold fs-2x fs-lg-3x mb-15">Build An Outstanding Solutions
                    <br />with
                    <span style={{ background: "linear-gradient(to right, #12CE5D 0%, #FFD80C 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;" }}>
                      <span id="kt_landing_hero_text">The Best Theme Ever</span>
                    </span></h1>
                  {/* <!--end::Title--> */}
                  {/* <!--begin::Action--> */}
                  <a href="../../demo5/dist/index.html" className="btn btn-primary">Try Metronic</a>
                  {/* <!--end::Action--> */}
                </div>
                {/* <!--end::Heading--> */}
                {/* <!--begin::Clients--> */}
                <div className="d-flex flex-center flex-wrap position-relative px-5">
                  {/* <!--begin::Client--> */}
                  <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Fujifilm">
                    <img src="/fe/dist/assets/media/svg/brand-logos/fujifilm.svg" className="mh-30px mh-lg-40px" alt="" />
                  </div>
                  {/* <!--end::Client--> */}
                  {/* <!--begin::Client--> */}
                  <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Vodafone">
                    <img src="/fe/dist/assets/media/svg/brand-logos/vodafone.svg" className="mh-30px mh-lg-40px" alt="" />
                  </div>
                  {/* <!--end::Client--> */}
                  {/* <!--begin::Client--> */}
                  <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="KPMG International">
                    <img src="/fe/dist/assets/media/svg/brand-logos/kpmg.svg" className="mh-30px mh-lg-40px" alt="" />
                  </div>
                  {/* <!--end::Client--> */}
                  {/* <!--begin::Client--> */}
                  <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Nasa">
                    <img src="/fe/dist/assets/media/svg/brand-logos/nasa.svg" className="mh-30px mh-lg-40px" alt="" />
                  </div>
                  {/* <!--end::Client--> */}
                  {/* <!--begin::Client--> */}
                  <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Aspnetzero">
                    <img src="/fe/dist/assets/media/svg/brand-logos/aspnetzero.svg" className="mh-30px mh-lg-40px" alt="" />
                  </div>
                  {/* <!--end::Client--> */}
                  {/* <!--begin::Client--> */}
                  <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="AON - Empower Results">
                    <img src="/fe/dist/assets/media/svg/brand-logos/aon.svg" className="mh-30px mh-lg-40px" alt="" />
                  </div>
                  {/* <!--end::Client--> */}
                  {/* <!--begin::Client--> */}
                  <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Hewlett-Packard">
                    <img src="/fe/dist/assets/media/svg/brand-logos/hp-3.svg" className="mh-30px mh-lg-40px" alt="" />
                  </div>
                  {/* <!--end::Client--> */}
                  {/* <!--begin::Client--> */}
                  <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Truman">
                    <img src="/fe/dist/assets/media/svg/brand-logos/truman.svg" className="mh-30px mh-lg-40px" alt="" />
                  </div>
                  {/* <!--end::Client--> */}
                </div>
                {/* <!--end::Clients--> */}
              </div>
              {/* <!--end::Landing hero--> */}
            </div>
            {/* <!--end::Wrapper--> */}
            {/* <!--begin::Curve bottom--> */}
            <div className="landing-curve landing-dark-color mb-10 mb-lg-20">
              <svg viewBox="15 12 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z" fill="currentColor"></path>
              </svg>
            </div>
            {/* <!--end::Curve bottom--> */}
          </div>
          {/* <!--end::Header Section--> */}
          {/* <!--begin::How It Works Section--> */}
          <div className="mb-n10 mb-lg-n20 z-index-2">
            {/* <!--begin::Container--> */}
            <div className="container">
              {/* <!--begin::Heading--> */}
              <div className="text-center mb-17">
                {/* <!--begin::Title--> */}
                <h3 className="fs-2hx text-dark mb-5" id="how-it-works" data-kt-scroll-offset="{default: 100, lg: 150}">How it Works</h3>
                {/* <!--end::Title--> */}
                {/* <!--begin::Text--> */}
                <div className="fs-5 text-muted fw-bold">Save thousands to millions of bucks by using single tool
                  <br />for different amazing and great useful admin</div>
                {/* <!--end::Text--> */}
              </div>
              {/* <!--end::Heading--> */}
              {/* <!--begin::Row--> */}
              <div className="row w-100 gy-10 mb-md-20">
                {/* <!--begin::Col--> */}
                <div className="col-md-4 px-5">
                  {/* <!--begin::Story--> */}
                  <div className="text-center mb-10 mb-md-0">
                    {/* <!--begin::Illustration--> */}
                    <img src="/fe/dist/assets/media/illustrations/sketchy-1/2.png" className="mh-125px mb-9" alt="" />
                    {/* <!--end::Illustration--> */}
                    {/* <!--begin::Heading--> */}
                    <div className="d-flex flex-center mb-5">
                      {/* <!--begin::Badge--> */}
                      <span className="badge badge-circle badge-light-success fw-bold p-5 me-3 fs-3">1</span>
                      {/* <!--end::Badge--> */}
                      {/* <!--begin::Title--> */}
                      <div className="fs-5 fs-lg-3 fw-bold text-dark">Jane Miller</div>
                      {/* <!--end::Title--> */}
                    </div>
                    {/* <!--end::Heading--> */}
                    {/* <!--begin::Description--> */}
                    <div className="fw-semibold fs-6 fs-lg-4 text-muted">Save thousands to millions of bucks
                      <br />by using single tool for different
                      <br />amazing and great</div>
                    {/* <!--end::Description--> */}
                  </div>
                  {/* <!--end::Story--> */}
                </div>
                {/* <!--end::Col--> */}
                {/* <!--begin::Col--> */}
                <div className="col-md-4 px-5">
                  {/* <!--begin::Story--> */}
                  <div className="text-center mb-10 mb-md-0">
                    {/* <!--begin::Illustration--> */}
                    <img src="/fe/dist/assets/media/illustrations/sketchy-1/8.png" className="mh-125px mb-9" alt="" />
                    {/* <!--end::Illustration--> */}
                    {/* <!--begin::Heading--> */}
                    <div className="d-flex flex-center mb-5">
                      {/* <!--begin::Badge--> */}
                      <span className="badge badge-circle badge-light-success fw-bold p-5 me-3 fs-3">2</span>
                      {/* <!--end::Badge--> */}
                      {/* <!--begin::Title--> */}
                      <div className="fs-5 fs-lg-3 fw-bold text-dark">Setup Your App</div>
                      {/* <!--end::Title--> */}
                    </div>
                    {/* <!--end::Heading--> */}
                    {/* <!--begin::Description--> */}
                    <div className="fw-semibold fs-6 fs-lg-4 text-muted">Save thousands to millions of bucks
                      <br />by using single tool for different
                      <br />amazing and great</div>
                    {/* <!--end::Description--> */}
                  </div>
                  {/* <!--end::Story--> */}
                </div>
                {/* <!--end::Col--> */}
                {/* <!--begin::Col--> */}
                <div className="col-md-4 px-5">
                  {/* <!--begin::Story--> */}
                  <div className="text-center mb-10 mb-md-0">
                    {/* <!--begin::Illustration--> */}
                    <img src="/fe/dist/assets/media/illustrations/sketchy-1/12.png" className="mh-125px mb-9" alt="" />
                    {/* <!--end::Illustration--> */}
                    {/* <!--begin::Heading--> */}
                    <div className="d-flex flex-center mb-5">
                      {/* <!--begin::Badge--> */}
                      <span className="badge badge-circle badge-light-success fw-bold p-5 me-3 fs-3">3</span>
                      {/* <!--end::Badge--> */}
                      {/* <!--begin::Title--> */}
                      <div className="fs-5 fs-lg-3 fw-bold text-dark">Enjoy Nautica App</div>
                      {/* <!--end::Title--> */}
                    </div>
                    {/* <!--end::Heading--> */}
                    {/* <!--begin::Description--> */}
                    <div className="fw-semibold fs-6 fs-lg-4 text-muted">Save thousands to millions of bucks
                      <br />by using single tool for different
                      <br />amazing and great</div>
                    {/* <!--end::Description--> */}
                  </div>
                  {/* <!--end::Story--> */}
                </div>
                {/* <!--end::Col--> */}
              </div>
              {/* <!--end::Row--> */}
              {/* <!--begin::Product slider--> */}
              <div className="tns tns-default">
                {/* <!--begin::Slider--> */}
                <div data-tns="true" data-tns-loop="true" data-tns-swipe-angle="false" data-tns-speed="2000" data-tns-autoplay="true" data-tns-autoplay-timeout="18000" data-tns-controls="true" data-tns-nav="false" data-tns-items="1" data-tns-center="false" data-tns-dots="false" data-tns-prev-button="#kt_team_slider_prev1" data-tns-next-button="#kt_team_slider_next1">
                  {/* <!--begin::Item--> */}
                  <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                    <img src="/fe/dist/assets/media/preview/demos/demo1/light-ltr.png" className="card-rounded shadow mh-lg-650px mw-100" alt="" />
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--begin::Item--> */}
                  <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                    <img src="/fe/dist/assets/media/preview/demos/demo2/light-ltr.png" className="card-rounded shadow mh-lg-650px mw-100" alt="" />
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--begin::Item--> */}
                  <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                    <img src="/fe/dist/assets/media/preview/demos/demo4/light-ltr.png" className="card-rounded shadow mh-lg-650px mw-100" alt="" />
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--begin::Item--> */}
                  <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                    <img src="/fe/dist/assets/media/preview/demos/demo5/light-ltr.png" className="card-rounded shadow mh-lg-650px mw-100" alt="" />
                  </div>
                  {/* <!--end::Item--> */}
                </div>
                {/* <!--end::Slider--> */}
                {/* <!--begin::Slider button--> */}
                <button className="btn btn-icon btn-active-color-primary" id="kt_team_slider_prev1">
                  <i className="ki-duotone ki-left fs-2x"></i>
                </button>
                {/* <!--end::Slider button--> */}
                {/* <!--begin::Slider button--> */}
                <button className="btn btn-icon btn-active-color-primary" id="kt_team_slider_next1">
                  <i className="ki-duotone ki-right fs-2x"></i>
                </button>
                {/* <!--end::Slider button--> */}
              </div>
              {/* <!--end::Product slider--> */}
            </div>
            {/* <!--end::Container--> */}
          </div>
          {/* <!--end::How It Works Section--> */}
          {/* <!--begin::Statistics Section--> */}
          <div className="mt-sm-n10">
            {/* <!--begin::Curve top--> */}
            <div className="landing-curve landing-dark-color">
              <svg viewBox="15 -1 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z" fill="currentColor"></path>
              </svg>
            </div>
            {/* <!--end::Curve top--> */}
            {/* <!--begin::Wrapper--> */}
            <div className="pb-15 pt-18 landing-dark-bg">
              {/* <!--begin::Container--> */}
              <div className="container">
                {/* <!--begin::Heading--> */}
                <div className="text-center mt-15 mb-18" id="achievements" data-kt-scroll-offset="{default: 100, lg: 150}">
                  {/* <!--begin::Title--> */}
                  <h3 className="fs-2hx text-white fw-bold mb-5">We Make Things Better</h3>
                  {/* <!--end::Title--> */}
                  {/* <!--begin::Description--> */}
                  <div className="fs-5 text-gray-700 fw-bold">Save thousands to millions of bucks by using single tool
                    <br />for different amazing and great useful admin</div>
                  {/* <!--end::Description--> */}
                </div>
                {/* <!--end::Heading--> */}
                {/* <!--begin::Statistics--> */}
                <div className="d-flex flex-center">
                  {/* <!--begin::Items--> */}
                  <div className="d-flex flex-wrap flex-center justify-content-lg-between mb-15 mx-auto w-xl-900px">
                    {/* <!--begin::Item--> */}
                    <div className="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain" style={{ backgroundImage: "url('/fe/dist/assets/media/svg/misc/octagon.svg')" }}>
                      {/* <!--begin::Symbol--> */}
                      <i className="ki-duotone ki-element-11 fs-2tx text-white mb-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                      </i>
                      {/* <!--end::Symbol--> */}
                      {/* <!--begin::Info--> */}
                      <div className="mb-0">
                        {/* <!--begin::Value--> */}
                        <div className="fs-lg-2hx fs-2x fw-bold text-white d-flex flex-center">
                          <div className="min-w-70px" data-kt-countup="true" data-kt-countup-value="700" data-kt-countup-suffix="+">0</div>
                        </div>
                        {/* <!--end::Value--> */}
                        {/* <!--begin::Label--> */}
                        <span className="text-gray-600 fw-semibold fs-5 lh-0">Known Companies</span>
                        {/* <!--end::Label--> */}
                      </div>
                      {/* <!--end::Info--> */}
                    </div>
                    {/* <!--end::Item--> */}
                    {/* <!--begin::Item--> */}
                    <div className="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain" style={{ backgroundImage: "url('/fe/dist/assets/media/svg/misc/octagon.svg')" }}>
                      {/* <!--begin::Symbol--> */}
                      <i className="ki-duotone ki-chart-pie-4 fs-2tx text-white mb-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                      </i>
                      {/* <!--end::Symbol--> */}
                      {/* <!--begin::Info--> */}
                      <div className="mb-0">
                        {/* <!--begin::Value--> */}
                        <div className="fs-lg-2hx fs-2x fw-bold text-white d-flex flex-center">
                          <div className="min-w-70px" data-kt-countup="true" data-kt-countup-value="80" data-kt-countup-suffix="K+">0</div>
                        </div>
                        {/* <!--end::Value--> */}
                        {/* <!--begin::Label--> */}
                        <span className="text-gray-600 fw-semibold fs-5 lh-0">Statistic Reports</span>
                        {/* <!--end::Label--> */}
                      </div>
                      {/* <!--end::Info--> */}
                    </div>
                    {/* <!--end::Item--> */}
                    {/* <!--begin::Item--> */}
                    <div className="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain" style={{ backgroundImage: "url('/fe/dist/assets/media/svg/misc/octagon.svg')" }}>
                      {/* <!--begin::Symbol--> */}
                      <i className="ki-duotone ki-basket fs-2tx text-white mb-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                      </i>
                      {/* <!--end::Symbol--> */}
                      {/* <!--begin::Info--> */}
                      <div className="mb-0">
                        {/* <!--begin::Value--> */}
                        <div className="fs-lg-2hx fs-2x fw-bold text-white d-flex flex-center">
                          <div className="min-w-70px" data-kt-countup="true" data-kt-countup-value="35" data-kt-countup-suffix="M+">0</div>
                        </div>
                        {/* <!--end::Value--> */}
                        {/* <!--begin::Label--> */}
                        <span className="text-gray-600 fw-semibold fs-5 lh-0">Secure Payments</span>
                        {/* <!--end::Label--> */}
                      </div>
                      {/* <!--end::Info--> */}
                    </div>
                    {/* <!--end::Item--> */}
                  </div>
                  {/* <!--end::Items--> */}
                </div>
                {/* <!--end::Statistics--> */}
                {/* <!--begin::Testimonial--> */}
                <div className="fs-2 fw-semibold text-muted text-center mb-3">
                  <span className="fs-1 lh-1 text-gray-700">“</span>When you care about your topic, you’ll write about it in a
                  <br />
                  <span className="text-gray-700 me-1">more powerful</span>, emotionally expressive way
                  <span className="fs-1 lh-1 text-gray-700">“</span></div>
                {/* <!--end::Testimonial--> */}
                {/* <!--begin::Author--> */}
                <div className="fs-2 fw-semibold text-muted text-center">
                  <a href="../../demo5/dist/account/security.html" className="link-primary fs-4 fw-bold">Marcus Levy,</a>
                  <span className="fs-4 fw-bold text-gray-600">KeenThemes CEO</span>
                </div>
                {/* <!--end::Author--> */}
              </div>
              {/* <!--end::Container--> */}
            </div>
            {/* <!--end::Wrapper--> */}
            {/* <!--begin::Curve bottom--> */}
            <div className="landing-curve landing-dark-color">
              <svg viewBox="15 12 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z" fill="currentColor"></path>
              </svg>
            </div>
            {/* <!--end::Curve bottom--> */}
          </div>
          {/* <!--end::Statistics Section--> */}
          {/* <!--begin::Team Section--> */}
          <div className="py-10 py-lg-20">
            {/* <!--begin::Container--> */}
            <div className="container">
              {/* <!--begin::Heading--> */}
              <div className="text-center mb-12">
                {/* <!--begin::Title--> */}
                <h3 className="fs-2hx text-dark mb-5" id="team" data-kt-scroll-offset="{default: 100, lg: 150}">Our Great Team</h3>
                {/* <!--end::Title--> */}
                {/* <!--begin::Sub-title--> */}
                <div className="fs-5 text-muted fw-bold">It’s no doubt that when a development takes longer to complete, additional costs to
                  <br />integrate and test each extra feature creeps up and haunts most of us.</div>
                {/* <!--end::Sub-title=--> */}
              </div>
              {/* <!--end::Heading--> */}
              {/* <!--begin::Slider--> */}
              <div className="tns tns-default" style={{ direction: "ltr" }}>
                {/* <!--begin::Wrapper--> */}
                <div data-tns="true" data-tns-loop="true" data-tns-swipe-angle="false" data-tns-speed="2000" data-tns-autoplay="true" data-tns-autoplay-timeout="18000" data-tns-controls="true" data-tns-nav="false" data-tns-items="1" data-tns-center="false" data-tns-dots="false" data-tns-prev-button="#kt_team_slider_prev" data-tns-next-button="#kt_team_slider_next" data-tns-responsive="{1200: {items: 3}, 992: {items: 2}}">
                  {/* <!--begin::Item--> */}
                  <div className="text-center">
                    {/* <!--begin::Photo--> */}
                    <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: "url('/fe/dist/assets/media/avatars/300-1.jpg')" }}></div>
                    {/* <!--end::Photo--> */}
                    {/* <!--begin::Person--> */}
                    <div className="mb-0">
                      {/* <!--begin::Name--> */}
                      <a href="#" className="text-dark fw-bold text-hover-primary fs-3">Paul Miles</a>
                      {/* <!--end::Name--> */}
                      {/* <!--begin::Position--> */}
                      <div className="text-muted fs-6 fw-semibold mt-1">Development Lead</div>
                      {/* <!--begin::Position--> */}
                    </div>
                    {/* <!--end::Person--> */}
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--begin::Item--> */}
                  <div className="text-center">
                    {/* <!--begin::Photo--> */}
                    <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: "url('/fe/dist/assets/media/avatars/300-2.jpg')" }}></div>
                    {/* <!--end::Photo--> */}
                    {/* <!--begin::Person--> */}
                    <div className="mb-0">
                      {/* <!--begin::Name--> */}
                      <a href="#" className="text-dark fw-bold text-hover-primary fs-3">Melisa Marcus</a>
                      {/* <!--end::Name--> */}
                      {/* <!--begin::Position--> */}
                      <div className="text-muted fs-6 fw-semibold mt-1">Creative Director</div>
                      {/* <!--begin::Position--> */}
                    </div>
                    {/* <!--end::Person--> */}
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--begin::Item--> */}
                  <div className="text-center">
                    {/* <!--begin::Photo--> */}
                    <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: "url('/fe/dist/assets/media/avatars/300-5.jpg')" }}></div>
                    {/* <!--end::Photo--> */}
                    {/* <!--begin::Person--> */}
                    <div className="mb-0">
                      {/* <!--begin::Name--> */}
                      <a href="#" className="text-dark fw-bold text-hover-primary fs-3">David Nilson</a>
                      {/* <!--end::Name--> */}
                      {/* <!--begin::Position--> */}
                      <div className="text-muted fs-6 fw-semibold mt-1">Python Expert</div>
                      {/* <!--begin::Position--> */}
                    </div>
                    {/* <!--end::Person--> */}
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--begin::Item--> */}
                  <div className="text-center">
                    {/* <!--begin::Photo--> */}
                    <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: "url('/fe/dist/assets/media/avatars/300-20.jpg')" }}></div>
                    {/* <!--end::Photo--> */}
                    {/* <!--begin::Person--> */}
                    <div className="mb-0">
                      {/* <!--begin::Name--> */}
                      <a href="#" className="text-dark fw-bold text-hover-primary fs-3">Anne Clarc</a>
                      {/* <!--end::Name--> */}
                      {/* <!--begin::Position--> */}
                      <div className="text-muted fs-6 fw-semibold mt-1">Project Manager</div>
                      {/* <!--begin::Position--> */}
                    </div>
                    {/* <!--end::Person--> */}
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--begin::Item--> */}
                  <div className="text-center">
                    {/* <!--begin::Photo--> */}
                    <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: "url('/fe/dist/assets/media/avatars/300-23.jpg')" }}></div>
                    {/* <!--end::Photo--> */}
                    {/* <!--begin::Person--> */}
                    <div className="mb-0">
                      {/* <!--begin::Name--> */}
                      <a href="#" className="text-dark fw-bold text-hover-primary fs-3">Ricky Hunt</a>
                      {/* <!--end::Name--> */}
                      {/* <!--begin::Position--> */}
                      <div className="text-muted fs-6 fw-semibold mt-1">Art Director</div>
                      {/* <!--begin::Position--> */}
                    </div>
                    {/* <!--end::Person--> */}
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--begin::Item--> */}
                  <div className="text-center">
                    {/* <!--begin::Photo--> */}
                    <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: "url('/fe/dist/assets/media/avatars/300-12.jpg')" }}></div>
                    {/* <!--end::Photo--> */}
                    {/* <!--begin::Person--> */}
                    <div className="mb-0">
                      {/* <!--begin::Name--> */}
                      <a href="#" className="text-dark fw-bold text-hover-primary fs-3">Alice Wayde</a>
                      {/* <!--end::Name--> */}
                      {/* <!--begin::Position--> */}
                      <div className="text-muted fs-6 fw-semibold mt-1">Marketing Manager</div>
                      {/* <!--begin::Position--> */}
                    </div>
                    {/* <!--end::Person--> */}
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--begin::Item--> */}
                  <div className="text-center">
                    {/* <!--begin::Photo--> */}
                    <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: "url('/fe/dist/assets/media/avatars/300-9.jpg')" }}></div>
                    {/* <!--end::Photo--> */}
                    {/* <!--begin::Person--> */}
                    <div className="mb-0">
                      {/* <!--begin::Name--> */}
                      <a href="#" className="text-dark fw-bold text-hover-primary fs-3">Carles Puyol</a>
                      {/* <!--end::Name--> */}
                      {/* <!--begin::Position--> */}
                      <div className="text-muted fs-6 fw-semibold mt-1">QA Managers</div>
                      {/* <!--begin::Position--> */}
                    </div>
                    {/* <!--end::Person--> */}
                  </div>
                  {/* <!--end::Item--> */}
                </div>
                {/* <!--end::Wrapper--> */}
                {/* <!--begin::Button--> */}
                <button className="btn btn-icon btn-active-color-primary" id="kt_team_slider_prev">
                  <i className="ki-duotone ki-left fs-2x"></i>
                </button>
                {/* <!--end::Button--> */}
                {/* <!--begin::Button--> */}
                <button className="btn btn-icon btn-active-color-primary" id="kt_team_slider_next">
                  <i className="ki-duotone ki-right fs-2x"></i>
                </button>
                {/* <!--end::Button--> */}
              </div>
              {/* <!--end::Slider--> */}
            </div>
            {/* <!--end::Container--> */}
          </div>
          {/* <!--end::Team Section--> */}
          {/* <!--begin::Projects Section--> */}
          <div className="mb-lg-n15 position-relative z-index-2">
            {/* <!--begin::Container--> */}
            <div className="container">
              {/* <!--begin::Card--> */}
              <div className="card" style={{ filter: "drop - shadow(0px 0px 40px rgba(68, 81, 96, 0.08))" }}>
                {/* <!--begin::Card body--> */}
                <div className="card-body p-lg-20">
                  {/* <!--begin::Heading--> */}
                  <div className="text-center mb-5 mb-lg-10">
                    {/* <!--begin::Title--> */}
                    <h3 className="fs-2hx text-dark mb-5" id="portfolio" data-kt-scroll-offset="{default: 100, lg: 250}">Our Projects</h3>
                    {/* <!--end::Title--> */}
                  </div>
                  {/* <!--end::Heading--> */}
                  {/* <!--begin::Tabs wrapper--> */}
                  <div className="d-flex flex-center mb-5 mb-lg-15">
                    {/* <!--begin::Tabs--> */}
                    <ul className="nav border-transparent flex-center fs-5 fw-bold">
                      <li className="nav-item">
                        <a className="nav-link text-gray-500 text-active-primary px-3 px-lg-6 active" href="#" data-bs-toggle="tab" data-bs-target="#kt_landing_projects_latest">Latest</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-gray-500 text-active-primary px-3 px-lg-6" href="#" data-bs-toggle="tab" data-bs-target="#kt_landing_projects_web_design">Web Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-gray-500 text-active-primary px-3 px-lg-6" href="#" data-bs-toggle="tab" data-bs-target="#kt_landing_projects_mobile_apps">Mobile Apps</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-gray-500 text-active-primary px-3 px-lg-6" href="#" data-bs-toggle="tab" data-bs-target="#kt_landing_projects_development">Development</a>
                      </li>
                    </ul>
                    {/* <!--end::Tabs--> */}
                  </div>
                  {/* <!--end::Tabs wrapper--> */}
                  {/* <!--begin::Tabs content--> */}
                  <div className="tab-content">
                    {/* <!--begin::Tab pane--> */}
                    <div className="tab-pane fade show active" id="kt_landing_projects_latest">
                      {/* <!--begin::Row--> */}
                      <div className="row g-10">
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-6">
                          {/* <!--begin::Item--> */}
                          <a className="d-block card-rounded overlay h-lg-100" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x600/img-23.jpg">
                            {/* <!--begin::Image--> */}
                            <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-23.jpg')" }}></div>
                            {/* <!--end::Image--> */}
                            {/* <!--begin::Action--> */}
                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="ki-duotone ki-eye fs-3x text-white">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </div>
                            {/* <!--end::Action--> */}
                          </a>
                          {/* <!--end::Item--> */}
                        </div>
                        {/* <!--end::Col--> */}
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-6">
                          {/* <!--begin::Row--> */}
                          <div className="row g-10 mb-10">
                            {/* <!--begin::Col--> */}
                            <div className="col-lg-6">
                              {/* <!--begin::Item--> */}
                              <a className="d-block card-rounded overlay" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x600/img-22.jpg">
                                {/* <!--begin::Image--> */}
                                <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-22.jpg')" }}></div>
                                {/* <!--end::Image--> */}
                                {/* <!--begin::Action--> */}
                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                  <i className="ki-duotone ki-eye fs-3x text-white">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </div>
                                {/* <!--end::Action--> */}
                              </a>
                              {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Col--> */}
                            {/* <!--begin::Col--> */}
                            <div className="col-lg-6">
                              {/* <!--begin::Item--> */}
                              <a className="d-block card-rounded overlay" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x600/img-21.jpg">
                                {/* <!--begin::Image--> */}
                                <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-21.jpg')" }}></div>
                                {/* <!--end::Image--> */}
                                {/* <!--begin::Action--> */}
                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                  <i className="ki-duotone ki-eye fs-3x text-white">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </div>
                                {/* <!--end::Action--> */}
                              </a>
                              {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Col--> */}
                          </div>
                          {/* <!--end::Row--> */}
                          {/* <!--begin::Item--> */}
                          <a className="d-block card-rounded overlay" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x400/img-20.jpg">
                            {/* <!--begin::Image--> */}
                            <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-20.jpg')" }}></div>
                            {/* <!--end::Image--> */}
                            {/* <!--begin::Action--> */}
                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="ki-duotone ki-eye fs-3x text-white">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </div>
                            {/* <!--end::Action--> */}
                          </a>
                          {/* <!--end::Item--> */}
                        </div>
                        {/* <!--end::Col--> */}
                      </div>
                      {/* <!--end::Row--> */}
                    </div>
                    {/* <!--end::Tab pane--> */}
                    {/* <!--begin::Tab pane--> */}
                    <div className="tab-pane fade" id="kt_landing_projects_web_design">
                      {/* <!--begin::Row--> */}
                      <div className="row g-10">
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-6">
                          {/* <!--begin::Item--> */}
                          <a className="d-block card-rounded overlay h-lg-100" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x600/img-11.jpg">
                            {/* <!--begin::Image--> */}
                            <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-11.jpg')" }}></div>
                            {/* <!--end::Image--> */}
                            {/* <!--begin::Action--> */}
                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="ki-duotone ki-eye fs-3x text-white">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </div>
                            {/* <!--end::Action--> */}
                          </a>
                          {/* <!--end::Item--> */}
                        </div>
                        {/* <!--end::Col--> */}
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-6">
                          {/* <!--begin::Row--> */}
                          <div className="row g-10 mb-10">
                            {/* <!--begin::Col--> */}
                            <div className="col-lg-6">
                              {/* <!--begin::Item--> */}
                              <a className="d-block card-rounded overlay" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x600/img-12.jpg">
                                {/* <!--begin::Image--> */}
                                <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-12.jpg')" }}></div>
                                {/* <!--end::Image--> */}
                                {/* <!--begin::Action--> */}
                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                  <i className="ki-duotone ki-eye fs-3x text-white">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </div>
                                {/* <!--end::Action--> */}
                              </a>
                              {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Col--> */}
                            {/* <!--begin::Col--> */}
                            <div className="col-lg-6">
                              {/* <!--begin::Item--> */}
                              <a className="d-block card-rounded overlay" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x600/img-21.jpg">
                                {/* <!--begin::Image--> */}
                                <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-21.jpg')" }}></div>
                                {/* <!--end::Image--> */}
                                {/* <!--begin::Action--> */}
                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                  <i className="ki-duotone ki-eye fs-3x text-white">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </div>
                                {/* <!--end::Action--> */}
                              </a>
                              {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Col--> */}
                          </div>
                          {/* <!--end::Row--> */}
                          {/* <!--begin::Item--> */}
                          <a className="d-block card-rounded overlay" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x400/img-20.jpg">
                            {/* <!--begin::Image--> */}
                            <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-20.jpg')" }}></div>
                            {/* <!--end::Image--> */}
                            {/* <!--begin::Action--> */}
                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="ki-duotone ki-eye fs-3x text-white">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </div>
                            {/* <!--end::Action--> */}
                          </a>
                          {/* <!--end::Item--> */}
                        </div>
                        {/* <!--end::Col--> */}
                      </div>
                      {/* <!--end::Row--> */}
                    </div>
                    {/* <!--end::Tab pane--> */}
                    {/* <!--begin::Tab pane--> */}
                    <div className="tab-pane fade" id="kt_landing_projects_mobile_apps">
                      {/* <!--begin::Row--> */}
                      <div className="row g-10">
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-6">
                          {/* <!--begin::Row--> */}
                          <div className="row g-10 mb-10">
                            {/* <!--begin::Col--> */}
                            <div className="col-lg-6">
                              {/* <!--begin::Item--> */}
                              <a className="d-block card-rounded overlay" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x600/img-16.jpg">
                                {/* <!--begin::Image--> */}
                                <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-16.jpg')" }}></div>
                                {/* <!--end::Image--> */}
                                {/* <!--begin::Action--> */}
                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                  <i className="ki-duotone ki-eye fs-3x text-white">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </div>
                                {/* <!--end::Action--> */}
                              </a>
                              {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Col--> */}
                            {/* <!--begin::Col--> */}
                            <div className="col-lg-6">
                              {/* <!--begin::Item--> */}
                              <a className="d-block card-rounded overlay" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x600/img-12.jpg">
                                {/* <!--begin::Image--> */}
                                <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-12.jpg')" }}></div>
                                {/* <!--end::Image--> */}
                                {/* <!--begin::Action--> */}
                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                  <i className="ki-duotone ki-eye fs-3x text-white">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </div>
                                {/* <!--end::Action--> */}
                              </a>
                              {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Col--> */}
                          </div>
                          {/* <!--end::Row--> */}
                          {/* <!--begin::Item--> */}
                          <a className="d-block card-rounded overlay" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x400/img-15.jpg">
                            {/* <!--begin::Image--> */}
                            <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-15.jpg')" }}></div>
                            {/* <!--end::Image--> */}
                            {/* <!--begin::Action--> */}
                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="ki-duotone ki-eye fs-3x text-white">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </div>
                            {/* <!--end::Action--> */}
                          </a>
                          {/* <!--end::Item--> */}
                        </div>
                        {/* <!--end::Col--> */}
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-6">
                          {/* <!--begin::Item--> */}
                          <a className="d-block card-rounded overlay h-lg-100" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x600/img-23.jpg">
                            {/* <!--begin::Image--> */}
                            <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-23.jpg')" }}></div>
                            {/* <!--end::Image--> */}
                            {/* <!--begin::Action--> */}
                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="ki-duotone ki-eye fs-3x text-white">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </div>
                            {/* <!--end::Action--> */}
                          </a>
                          {/* <!--end::Item--> */}
                        </div>
                        {/* <!--end::Col--> */}
                      </div>
                      {/* <!--end::Row--> */}
                    </div>
                    {/* <!--end::Tab pane--> */}
                    {/* <!--begin::Tab pane--> */}
                    <div className="tab-pane fade" id="kt_landing_projects_development">
                      {/* <!--begin::Row--> */}
                      <div className="row g-10">
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-6">
                          {/* <!--begin::Item--> */}
                          <a className="d-block card-rounded overlay h-lg-100" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x600/img-15.jpg">
                            {/* <!--begin::Image--> */}
                            <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-15.jpg')" }}></div>
                            {/* <!--end::Image--> */}
                            {/* <!--begin::Action--> */}
                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="ki-duotone ki-eye fs-3x text-white">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </div>
                            {/* <!--end::Action--> */}
                          </a>
                          {/* <!--end::Item--> */}
                        </div>
                        {/* <!--end::Col--> */}
                        {/* <!--begin::Col--> */}
                        <div className="col-lg-6">
                          {/* <!--begin::Row--> */}
                          <div className="row g-10 mb-10">
                            {/* <!--begin::Col--> */}
                            <div className="col-lg-6">
                              {/* <!--begin::Item--> */}
                              <a className="d-block card-rounded overlay" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x600/img-22.jpg">
                                {/* <!--begin::Image--> */}
                                <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-22.jpg')" }}></div>
                                {/* <!--end::Image--> */}
                                {/* <!--begin::Action--> */}
                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                  <i className="ki-duotone ki-eye fs-3x text-white">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </div>
                                {/* <!--end::Action--> */}
                              </a>
                              {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Col--> */}
                            {/* <!--begin::Col--> */}
                            <div className="col-lg-6">
                              {/* <!--begin::Item--> */}
                              <a className="d-block card-rounded overlay" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x600/img-21.jpg">
                                {/* <!--begin::Image--> */}
                                <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-21.jpg')" }}></div>
                                {/* <!--end::Image--> */}
                                {/* <!--begin::Action--> */}
                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                  <i className="ki-duotone ki-eye fs-3x text-white">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </div>
                                {/* <!--end::Action--> */}
                              </a>
                              {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Col--> */}
                          </div>
                          {/* <!--end::Row--> */}
                          {/* <!--begin::Item--> */}
                          <a className="d-block card-rounded overlay" data-fslightbox="lightbox-projects" href="/fe/dist/assets/media/stock/600x400/img-14.jpg">
                            {/* <!--begin::Image--> */}
                            <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px" style={{ backgroundImage: "url('/fe/dist/assets/media/stock/600x600/img-14.jpg')" }}></div>
                            {/* <!--end::Image--> */}
                            {/* <!--begin::Action--> */}
                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="ki-duotone ki-eye fs-3x text-white">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </div>
                            {/* <!--end::Action--> */}
                          </a>
                          {/* <!--end::Item--> */}
                        </div>
                        {/* <!--end::Col--> */}
                      </div>
                      {/* <!--end::Row--> */}
                    </div>
                    {/* <!--end::Tab pane--> */}
                  </div>
                  {/* <!--end::Tabs content--> */}
                </div>
                {/* <!--end::Card body--> */}
              </div>
              {/* <!--end::Card--> */}
            </div>
            {/* <!--end::Container--> */}
          </div>
          {/* <!--end::Projects Section--> */}
          {/* <!--begin::Pricing Section--> */}
          <div className="mt-sm-n20">
            {/* <!--begin::Curve top--> */}
            <div className="landing-curve landing-dark-color">
              <svg viewBox="15 -1 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z" fill="currentColor"></path>
              </svg>
            </div>
            {/* <!--end::Curve top--> */}
            {/* <!--begin::Wrapper--> */}
            <div className="py-20 landing-dark-bg">
              {/* <!--begin::Container--> */}
              <div className="container">
                {/* <!--begin::Plans--> */}
                <div className="d-flex flex-column container pt-lg-20">
                  {/* <!--begin::Heading--> */}
                  <div className="mb-13 text-center">
                    <h1 className="fs-2hx fw-bold text-white mb-5" id="pricing" data-kt-scroll-offset="{default: 100, lg: 150}">Clear Pricing Makes it Easy</h1>
                    <div className="text-gray-600 fw-semibold fs-5">Save thousands to millions of bucks by using single tool for different
                      <br />amazing and outstanding cool and great useful admin</div>
                  </div>
                  {/* <!--end::Heading--> */}
                  {/* <!--begin::Pricing--> */}
                  <div className="text-center" id="kt_pricing">
                    {/* <!--begin::Nav group--> */}
                    <div className="nav-group landing-dark-bg d-inline-flex mb-15" data-kt-buttons="true" style={{ border: "1px dashed #2B4666;" }}>
                      <a href="#" className="btn btn-color-gray-600 btn-active btn-active-success px-6 py-3 me-2 active" data-kt-plan="month">Monthly</a>
                      <a href="#" className="btn btn-color-gray-600 btn-active btn-active-success px-6 py-3" data-kt-plan="annual">Annual</a>
                    </div>
                    {/* <!--end::Nav group--> */}
                    {/* <!--begin::Row--> */}
                    <div className="row g-10">
                      {/* <!--begin::Col--> */}
                      <div className="col-xl-4">
                        <div className="d-flex h-100 align-items-center">
                          {/* <!--begin::Option--> */}
                          <div className="w-100 d-flex flex-column flex-center rounded-3 bg-body py-15 px-10">
                            {/* <!--begin::Heading--> */}
                            <div className="mb-7 text-center">
                              {/* <!--begin::Title--> */}
                              <h1 className="text-dark mb-5 fw-boldest">Startup</h1>
                              {/* <!--end::Title--> */}
                              {/* <!--begin::Description--> */}
                              <div className="text-gray-400 fw-semibold mb-5">Best Settings for Startups</div>
                              {/* <!--end::Description--> */}
                              {/* <!--begin::Price--> */}
                              <div className="text-center">
                                <span className="mb-2 text-primary">$</span>
                                <span className="fs-3x fw-bold text-primary" data-kt-plan-price-month="99" data-kt-plan-price-annual="999">99</span>
                                <span className="fs-7 fw-semibold opacity-50" data-kt-plan-price-month="/ Mon" data-kt-plan-price-annual="/ Ann">/ Mon</span>
                              </div>
                              {/* <!--end::Price--> */}
                            </div>
                            {/* <!--end::Heading--> */}
                            {/* <!--begin::Features--> */}
                            <div className="w-100 mb-10">
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack mb-5">
                                <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">Up to 10 Active Users</span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack mb-5">
                                <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">Up to 30 Project Integrations</span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack mb-5">
                                <span className="fw-semibold fs-6 text-gray-800">Keen Analytics Platform</span>
                                <i className="ki-duotone ki-cross-circle fs-1">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack mb-5">
                                <span className="fw-semibold fs-6 text-gray-800">Targets Timelines & Files</span>
                                <i className="ki-duotone ki-cross-circle fs-1">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack">
                                <span className="fw-semibold fs-6 text-gray-800">Unlimited Projects</span>
                                <i className="ki-duotone ki-cross-circle fs-1">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Features--> */}
                            {/* <!--begin::Select--> */}
                            <a href="#" className="btn btn-primary">Select</a>
                            {/* <!--end::Select--> */}
                          </div>
                          {/* <!--end::Option--> */}
                        </div>
                      </div>
                      {/* <!--end::Col--> */}
                      {/* <!--begin::Col--> */}
                      <div className="col-xl-4">
                        <div className="d-flex h-100 align-items-center">
                          {/* <!--begin::Option--> */}
                          <div className="w-100 d-flex flex-column flex-center rounded-3 bg-primary py-20 px-10">
                            {/* <!--begin::Heading--> */}
                            <div className="mb-7 text-center">
                              {/* <!--begin::Title--> */}
                              <h1 className="text-white mb-5 fw-boldest">Business</h1>
                              {/* <!--end::Title--> */}
                              {/* <!--begin::Description--> */}
                              <div className="text-white opacity-75 fw-semibold mb-5">Best Settings for Business</div>
                              {/* <!--end::Description--> */}
                              {/* <!--begin::Price--> */}
                              <div className="text-center">
                                <span className="mb-2 text-white">$</span>
                                <span className="fs-3x fw-bold text-white" data-kt-plan-price-month="199" data-kt-plan-price-annual="1999">199</span>
                                <span className="fs-7 fw-semibold text-white opacity-75" data-kt-plan-price-month="/ Mon" data-kt-plan-price-annual="/ Ann">/ Mon</span>
                              </div>
                              {/* <!--end::Price--> */}
                            </div>
                            {/* <!--end::Heading--> */}
                            {/* <!--begin::Features--> */}
                            <div className="w-100 mb-10">
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack mb-5">
                                <span className="fw-semibold fs-6 text-white opacity-75 text-start pe-3">Up to 10 Active Users</span>
                                <i className="ki-duotone ki-check-circle fs-1 text-white">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack mb-5">
                                <span className="fw-semibold fs-6 text-white opacity-75 text-start pe-3">Up to 30 Project Integrations</span>
                                <i className="ki-duotone ki-check-circle fs-1 text-white">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack mb-5">
                                <span className="fw-semibold fs-6 text-white opacity-75 text-start pe-3">Keen Analytics Platform</span>
                                <i className="ki-duotone ki-check-circle fs-1 text-white">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack mb-5">
                                <span className="fw-semibold fs-6 text-white opacity-75 text-start pe-3">Targets Timelines & Files</span>
                                <i className="ki-duotone ki-check-circle fs-1 text-white">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack">
                                <span className="fw-semibold fs-6 text-white opacity-75">Unlimited Projects</span>
                                <i className="ki-duotone ki-cross-circle fs-1 text-white">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Features--> */}
                            {/* <!--begin::Select--> */}
                            <a href="#" className="btn btn-color-primary btn-active-light-primary btn-light">Select</a>
                            {/* <!--end::Select--> */}
                          </div>
                          {/* <!--end::Option--> */}
                        </div>
                      </div>
                      {/* <!--end::Col--> */}
                      {/* <!--begin::Col--> */}
                      <div className="col-xl-4">
                        <div className="d-flex h-100 align-items-center">
                          {/* <!--begin::Option--> */}
                          <div className="w-100 d-flex flex-column flex-center rounded-3 bg-body py-15 px-10">
                            {/* <!--begin::Heading--> */}
                            <div className="mb-7 text-center">
                              {/* <!--begin::Title--> */}
                              <h1 className="text-dark mb-5 fw-boldest">Enterprise</h1>
                              {/* <!--end::Title--> */}
                              {/* <!--begin::Description--> */}
                              <div className="text-gray-400 fw-semibold mb-5">Best Settings for Enterprise</div>
                              {/* <!--end::Description--> */}
                              {/* <!--begin::Price--> */}
                              <div className="text-center">
                                <span className="mb-2 text-primary">$</span>
                                <span className="fs-3x fw-bold text-primary" data-kt-plan-price-month="999" data-kt-plan-price-annual="9999">999</span>
                                <span className="fs-7 fw-semibold opacity-50" data-kt-plan-price-month="/ Mon" data-kt-plan-price-annual="/ Ann">/ Mon</span>
                              </div>
                              {/* <!--end::Price--> */}
                            </div>
                            {/* <!--end::Heading--> */}
                            {/* <!--begin::Features--> */}
                            <div className="w-100 mb-10">
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack mb-5">
                                <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">Up to 10 Active Users</span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack mb-5">
                                <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">Up to 30 Project Integrations</span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack mb-5">
                                <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">Keen Analytics Platform</span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack mb-5">
                                <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">Targets Timelines & Files</span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                              {/* <!--begin::Item--> */}
                              <div className="d-flex flex-stack">
                                <span className="fw-semibold fs-6 text-gray-800 text-start pe-3">Unlimited Projects</span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Features--> */}
                            {/* <!--begin::Select--> */}
                            <a href="#" className="btn btn-primary">Select</a>
                            {/* <!--end::Select--> */}
                          </div>
                          {/* <!--end::Option--> */}
                        </div>
                      </div>
                      {/* <!--end::Col--> */}
                    </div>
                    {/* <!--end::Row--> */}
                  </div>
                  {/* <!--end::Pricing--> */}
                </div>
                {/* <!--end::Plans--> */}
              </div>
              {/* <!--end::Container--> */}
            </div>
            {/* <!--end::Wrapper--> */}
            {/* <!--begin::Curve bottom--> */}
            <div className="landing-curve landing-dark-color">
              <svg viewBox="15 12 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z" fill="currentColor"></path>
              </svg>
            </div>
            {/* <!--end::Curve bottom--> */}
          </div>
          {/* <!--end::Pricing Section--> */}
          {/* <!--begin::Testimonials Section--> */}
          <div className="mt-20 mb-n20 position-relative z-index-2">
            {/* <!--begin::Container--> */}
            <div className="container">
              {/* <!--begin::Heading--> */}
              <div className="text-center mb-17">
                {/* <!--begin::Title--> */}
                <h3 className="fs-2hx text-dark mb-5" id="clients" data-kt-scroll-offset="{default: 125, lg: 150}">What Our Clients Say</h3>
                {/* <!--end::Title--> */}
                {/* <!--begin::Description--> */}
                <div className="fs-5 text-muted fw-bold">Save thousands to millions of bucks by using single tool
                  <br />for different amazing and great useful admin</div>
                {/* <!--end::Description--> */}
              </div>
              {/* <!--end::Heading--> */}
              {/* <!--begin::Row--> */}
              <div className="row g-lg-10 mb-10 mb-lg-20">
                {/* <!--begin::Col--> */}
                <div className="col-lg-4">
                  {/* <!--begin::Testimonial--> */}
                  <div className="d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0">
                    {/* <!--begin::Wrapper--> */}
                    <div className="mb-7">
                      {/* <!--begin::Rating--> */}
                      <div className="rating mb-6">
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                      </div>
                      {/* <!--end::Rating--> */}
                      {/* <!--begin::Title--> */}
                      <div className="fs-2 fw-bold text-dark mb-3">This is by far the cleanest template
                        <br />and the most well structured</div>
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Feedback--> */}
                      <div className="text-gray-500 fw-semibold fs-4">The most well thought out design theme I have ever used. The codes are up to tandard. The css styles are very clean. In fact the cleanest and the most up to standard I have ever seen.</div>
                      {/* <!--end::Feedback--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                    {/* <!--begin::Author--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-circle symbol-50px me-5">
                        <img src="/fe/dist/assets/media/avatars/300-1.jpg" className="" alt="" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Name--> */}
                      <div className="flex-grow-1">
                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Paul Miles</a>
                        <span className="text-muted d-block fw-bold">Development Lead</span>
                      </div>
                      {/* <!--end::Name--> */}
                    </div>
                    {/* <!--end::Author--> */}
                  </div>
                  {/* <!--end::Testimonial--> */}
                </div>
                {/* <!--end::Col--> */}
                {/* <!--begin::Col--> */}
                <div className="col-lg-4">
                  {/* <!--begin::Testimonial--> */}
                  <div className="d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0">
                    {/* <!--begin::Wrapper--> */}
                    <div className="mb-7">
                      {/* <!--begin::Rating--> */}
                      <div className="rating mb-6">
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                      </div>
                      {/* <!--end::Rating--> */}
                      {/* <!--begin::Title--> */}
                      <div className="fs-2 fw-bold text-dark mb-3">This is by far the cleanest template
                        <br />and the most well structured</div>
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Feedback--> */}
                      <div className="text-gray-500 fw-semibold fs-4">The most well thought out design theme I have ever used. The codes are up to tandard. The css styles are very clean. In fact the cleanest and the most up to standard I have ever seen.</div>
                      {/* <!--end::Feedback--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                    {/* <!--begin::Author--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-circle symbol-50px me-5">
                        <img src="/fe/dist/assets/media/avatars/300-2.jpg" className="" alt="" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Name--> */}
                      <div className="flex-grow-1">
                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Janya Clebert</a>
                        <span className="text-muted d-block fw-bold">Development Lead</span>
                      </div>
                      {/* <!--end::Name--> */}
                    </div>
                    {/* <!--end::Author--> */}
                  </div>
                  {/* <!--end::Testimonial--> */}
                </div>
                {/* <!--end::Col--> */}
                {/* <!--begin::Col--> */}
                <div className="col-lg-4">
                  {/* <!--begin::Testimonial--> */}
                  <div className="d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0">
                    {/* <!--begin::Wrapper--> */}
                    <div className="mb-7">
                      {/* <!--begin::Rating--> */}
                      <div className="rating mb-6">
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                        <div className="rating-label me-2 checked">
                          <i className="ki-duotone ki-star fs-5"></i>
                        </div>
                      </div>
                      {/* <!--end::Rating--> */}
                      {/* <!--begin::Title--> */}
                      <div className="fs-2 fw-bold text-dark mb-3">This is by far the cleanest template
                        <br />and the most well structured</div>
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Feedback--> */}
                      <div className="text-gray-500 fw-semibold fs-4">The most well thought out design theme I have ever used. The codes are up to tandard. The css styles are very clean. In fact the cleanest and the most up to standard I have ever seen.</div>
                      {/* <!--end::Feedback--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                    {/* <!--begin::Author--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-circle symbol-50px me-5">
                        <img src="/fe/dist/assets/media/avatars/300-16.jpg" className="" alt="" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Name--> */}
                      <div className="flex-grow-1">
                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Steave Brown</a>
                        <span className="text-muted d-block fw-bold">Development Lead</span>
                      </div>
                      {/* <!--end::Name--> */}
                    </div>
                    {/* <!--end::Author--> */}
                  </div>
                  {/* <!--end::Testimonial--> */}
                </div>
                {/* <!--end::Col--> */}
              </div>
              {/* <!--end::Row--> */}
              {/* <!--begin::Highlight--> */}
              <div className="d-flex flex-stack flex-wrap flex-md-nowrap card-rounded shadow p-8 p-lg-12 mb-n5 mb-lg-n13" style={{ background: "linear - gradient(90deg, #20AA3E 0 %, #03A588 100 %); " }}>
                {/* <!--begin::Content--> */}
                <div className="my-2 me-5">
                  {/* <!--begin::Title--> */}
                  <div className="fs-1 fs-lg-2qx fw-bold text-white mb-2">Start With Metronic Today,
                    <span className="fw-normal">Speed Up Development!</span></div>
                  {/* <!--end::Title--> */}
                  {/* <!--begin::Description--> */}
                  <div className="fs-6 fs-lg-5 text-white fw-semibold opacity-75">Join over 100,000 Professionals Community to Stay Ahead</div>
                  {/* <!--end::Description--> */}
                </div>
                {/* <!--end::Content--> */}
                {/* <!--begin::Link--> */}
                <a href="https://1.envato.market/EA4JP" className="btn btn-lg btn-outline border-2 btn-outline-white flex-shrink-0 my-2">Purchase on Themeforest</a>
                {/* <!--end::Link--> */}
              </div>
              {/* <!--end::Highlight--> */}
            </div>
            {/* <!--end::Container--> */}
          </div>
          {/* <!--end::Testimonials Section--> */}
          {/* <!--begin::Footer Section--> */}
          <div className="mb-0">
            {/* <!--begin::Curve top--> */}
            <div className="landing-curve landing-dark-color">
              <svg viewBox="15 -1 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z" fill="currentColor"></path>
              </svg>
            </div>
            {/* <!--end::Curve top--> */}
            {/* <!--begin::Wrapper--> */}
            <div className="landing-dark-bg pt-20">
              {/* <!--begin::Container--> */}
              <div className="container">
                {/* <!--begin::Row--> */}
                <div className="row py-10 py-lg-20">
                  {/* <!--begin::Col--> */}
                  <div className="col-lg-6 pe-lg-16 mb-10 mb-lg-0">
                    {/* <!--begin::Block--> */}
                    <div className="rounded landing-dark-border p-9 mb-10">
                      {/* <!--begin::Title--> */}
                      <h2 className="text-white">Would you need a Custom License?</h2>
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Text--> */}
                      <span className="fw-normal fs-4 text-gray-700">Email us to
                        <a href="https://keenthemes.com/support" className="text-white opacity-50 text-hover-primary">support@keenthemes.com</a></span>
                      {/* <!--end::Text--> */}
                    </div>
                    {/* <!--end::Block--> */}
                    {/* <!--begin::Block--> */}
                    <div className="rounded landing-dark-border p-9">
                      {/* <!--begin::Title--> */}
                      <h2 className="text-white">How About a Custom Project?</h2>
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Text--> */}
                      <span className="fw-normal fs-4 text-gray-700">Use Our Custom Development Service.
                        <a href="../../demo5/dist/pages/user-profile/overview.html" className="text-white opacity-50 text-hover-primary">Click to Get a Quote</a></span>
                      {/* <!--end::Text--> */}
                    </div>
                    {/* <!--end::Block--> */}
                  </div>
                  {/* <!--end::Col--> */}
                  {/* <!--begin::Col--> */}
                  <div className="col-lg-6 ps-lg-16">
                    {/* <!--begin::Navs--> */}
                    <div className="d-flex justify-content-center">
                      {/* <!--begin::Links--> */}
                      <div className="d-flex fw-semibold flex-column me-20">
                        {/* <!--begin::Subtitle--> */}
                        <h4 className="fw-bold text-gray-400 mb-6">More for Metronic</h4>
                        {/* <!--end::Subtitle--> */}
                        {/* <!--begin::Link--> */}
                        <a href="https://keenthemes.com/faqs" className="text-white opacity-50 text-hover-primary fs-5 mb-6">FAQ</a>
                        {/* <!--end::Link--> */}
                        {/* <!--begin::Link--> */}
                        <a href="https://preview.keenthemes.com/html/metronic/docs" className="text-white opacity-50 text-hover-primary fs-5 mb-6">Documentaions</a>
                        {/* <!--end::Link--> */}
                        {/* <!--begin::Link--> */}
                        <a href="https://www.youtube.com/c/KeenThemesTuts/videos" className="text-white opacity-50 text-hover-primary fs-5 mb-6">Video Tuts</a>
                        {/* <!--end::Link--> */}
                        {/* <!--begin::Link--> */}
                        <a href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" className="text-white opacity-50 text-hover-primary fs-5 mb-6">Changelog</a>
                        {/* <!--end::Link--> */}
                        {/* <!--begin::Link--> */}
                        <a href="https://devs.keenthemes.com/" className="text-white opacity-50 text-hover-primary fs-5 mb-6">Support Forum</a>
                        {/* <!--end::Link--> */}
                        {/* <!--begin::Link--> */}
                        <a href="https://keenthemes.com/blog" className="text-white opacity-50 text-hover-primary fs-5">Blog</a>
                        {/* <!--end::Link--> */}
                      </div>
                      {/* <!--end::Links--> */}
                      {/* <!--begin::Links--> */}
                      <div className="d-flex fw-semibold flex-column ms-lg-20">
                        {/* <!--begin::Subtitle--> */}
                        <h4 className="fw-bold text-gray-400 mb-6">Stay Connected</h4>
                        {/* <!--end::Subtitle--> */}
                        {/* <!--begin::Link--> */}
                        <a href="https://www.facebook.com/keenthemes" className="mb-6">
                          <img src="/fe/dist/assets/media/svg/brand-logos/facebook-4.svg" className="h-20px me-2" alt="" />
                          <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">Facebook</span>
                        </a>
                        {/* <!--end::Link--> */}
                        {/* <!--begin::Link--> */}
                        <a href="https://github.com/KeenthemesHub" className="mb-6">
                          <img src="/fe/dist/assets/media/svg/brand-logos/github.svg" className="h-20px me-2" alt="" />
                          <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">Github</span>
                        </a>
                        {/* <!--end::Link--> */}
                        {/* <!--begin::Link--> */}
                        <a href="https://twitter.com/keenthemes" className="mb-6">
                          <img src="/fe/dist/assets/media/svg/brand-logos/twitter.svg" className="h-20px me-2" alt="" />
                          <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">Twitter</span>
                        </a>
                        {/* <!--end::Link--> */}
                        {/* <!--begin::Link--> */}
                        <a href="https://dribbble.com/keenthemes" className="mb-6">
                          <img src="/fe/dist/assets/media/svg/brand-logos/dribbble-icon-1.svg" className="h-20px me-2" alt="" />
                          <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">Dribbble</span>
                        </a>
                        {/* <!--end::Link--> */}
                        {/* <!--begin::Link--> */}
                        <a href="https://www.instagram.com/keenthemes" className="mb-6">
                          <img src="/fe/dist/assets/media/svg/brand-logos/instagram-2-1.svg" className="h-20px me-2" alt="" />
                          <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">Instagram</span>
                        </a>
                        {/* <!--end::Link--> */}
                      </div>
                      {/* <!--end::Links--> */}
                    </div>
                    {/* <!--end::Navs--> */}
                  </div>
                  {/* <!--end::Col--> */}
                </div>
                {/* <!--end::Row--> */}
              </div>
              {/* <!--end::Container--> */}
              {/* <!--begin::Separator--> */}
              <div className="landing-dark-separator"></div>
              {/* <!--end::Separator--> */}
              {/* <!--begin::Container--> */}
              <div className="container">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column flex-md-row flex-stack py-7 py-lg-10">
                  {/* <!--begin::Copyright--> */}
                  <div className="d-flex align-items-center order-2 order-md-1">
                    {/* <!--begin::Logo--> */}
                    <a href="../../demo5/dist/landing.html">
                      <img alt="Logo" src="/fe/dist/assets/media/logos/landing.svg" className="h-15px h-md-20px" />
                    </a>
                    {/* <!--end::Logo image--> */}
                    {/* <!--begin::Logo image--> */}
                    <span className="mx-5 fs-6 fw-semibold text-gray-600 pt-1" href="https://keenthemes.com">&copy; 2023 Keenthemes Inc.</span>
                    {/* <!--end::Logo image--> */}
                  </div>
                  {/* <!--end::Copyright--> */}
                  {/* <!--begin::Menu--> */}
                  <ul className="menu menu-gray-600 menu-hover-primary fw-semibold fs-6 fs-md-5 order-1 mb-5 mb-md-0">
                    <li className="menu-item">
                      <a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
                    </li>
                    <li className="menu-item mx-5">
                      <a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
                    </li>
                    <li className="menu-item">
                      <a href="" target="_blank" className="menu-link px-2">Purchase</a>
                    </li>
                  </ul>
                  {/* <!--end::Menu--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Container--> */}
            </div>
            {/* <!--end::Wrapper--> */}
          </div>
          {/* <!--end::Footer Section--> */}
          {/* <!--begin::Scrolltop--> */}
          <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
            <i className="ki-duotone ki-arrow-up">
              <span className="path1"></span>
              <span className="path2"></span>
            </i>
          </div>
          {/* <!--end::Scrolltop--> */}
        </div>
        {/* <!--end::Root--> */}
        {/* <!--end::Main--> */}
        {/* <!--begin::Scrolltop--> */}
        <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
          <i className="ki-duotone ki-arrow-up">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        </div>
        {/* <!--end::Scrolltop--> */}
        {/* <!--begin::Javascript--> */}
        <script>var hostUrl = "/fe/dist/assets/";</script>
        {/* <!--begin::Global Javascript Bundle(mandatory for all pages)--> */}
        <script src="/fe/dist/assets/plugins/global/plugins.bundle.js"></script>
        <script src="/fe/dist/assets/js/scripts.bundle.js"></script>
        {/* <!--end::Global Javascript Bundle--> */}
        {/* <!--begin::Vendors Javascript(used for this page only)--> */}
        <script src="/fe/dist/assets/plugins/custom/fslightbox/fslightbox.bundle.js"></script>
        <script src="/fe/dist/assets/plugins/custom/typedjs/typedjs.bundle.js"></script>
        {/* <!--end::Vendors Javascript--> */}
        {/* <!--begin::Custom Javascript(used for this page only)--> */}
        <script src="/fe/dist/assets/js/custom/landing.js"></script>
        <script src="/fe/dist/assets/js/custom/pages/pricing/general.js"></script>
        {/* <!--end::Custom Javascript--> */}
        {/* <!--end::Javascript--> */}
      </div>
    </>
  )
}

export default XX;