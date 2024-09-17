"use client"

const Dashboard = () => {
    var defaultThemeMode = "light";
    var themeMode;
    if (document.documentElement) {
        if (document.documentElement.hasAttribute("data-bs-theme-mode")) {
            themeMode = document.documentElement.getAttribute("data-bs-theme-mode");
        } else {
            if (localStorage.getItem("data-bs-theme") !== null) {
                themeMode = localStorage.getItem("data-bs-theme");
            } else {
                themeMode = defaultThemeMode;
            }
        } if (themeMode === "system") {
            themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }

        document.documentElement.setAttribute("data-bs-theme", themeMode || "dark");
    }

    return (
        <>
            <div id="kt_body" className="header-fixed header-tablet-and-mobile-fixed aside-enabled sidebar-enabled">
                {/* <!--begin::Theme mode setup on page load--> */}
                {/* <!--end::Theme mode setup on page load--> */}
                {/* <!--begin::Main--> */}
                {/* <!--begin::Root--> */}
                <div className="d-flex flex-column flex-root">
                    {/* <!--begin::Page--> */}
                    <div className="page d-flex flex-column flex-column-fluid">
                        {/* <!--begin::Header--> */}
                        <div id="kt_header" className="header align-items-stretch">
                            {/* <!--begin::Container--> */}
                            <div className="container-xxl d-flex align-items-stretch justify-content-between">
                                {/* <!--begin::Brand--> */}
                                <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0 w-lg-225px me-5">
                                    {/* <!--begin::Aside mobile toggle--> */}
                                    <div className="btn btn-icon btn-active-icon-primary ms-n2 me-2 d-flex d-lg-none" id="kt_aside_toggle">
                                        <i className="ki-duotone ki-abstract-14 fs-1">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </div>
                                    {/* <!--end::Aside mobile toggle--> */}
                                    {/* <!--begin::Logo--> */}
                                    <a href="../../demo5/dist/index.html">
                                        <img alt="Logo" src="/fe/dist/assets/media/logos/demo5.svg" className="d-none d-lg-inline h-30px theme-light-show" />
                                        <img alt="Logo" src="/fe/dist/assets/media/logos/demo5-dark.svg" className="d-none d-lg-inline h-30px theme-dark-show" />
                                        <img alt="Logo" src="/fe/dist/assets/media/logos/demo5-mobile.svg" className="d-lg-none h-25px" />
                                    </a>
                                    {/* <!--end::Logo--> */}
                                </div>
                                {/* <!--end::Brand--> */}
                                {/* <!--begin::Wrapper--> */}
                                <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                                    {/* <!--begin::Navbar--> */}
                                    <div className="d-flex align-items-stretch" id="kt_header_nav">
                                        {/* <!--begin::Menu wrapper--> */}
                                        <div className="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
                                            {/* <!--begin::Menu--> */}
                                            <div className="menu menu-rounded menu-column menu-lg-row menu-root-here-bg-desktop menu-active-bg menu-state-primary menu-title-gray-800 menu-arrow-gray-400 align-items-stretch my-5 my-lg-0 px-2 px-lg-0 fw-semibold fs-6" id="#kt_header_menu" data-kt-menu="true">
                                                {/* <!--begin:Menu item--> */}
                                                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
                                                    {/* <!--begin:Menu link--> */}
                                                    <span className="menu-link py-3">
                                                        <span className="menu-title">Dashboards</span>
                                                        <span className="menu-arrow d-lg-none"></span>
                                                    </span>
                                                    {/* <!--end:Menu link--> */}
                                                    {/* <!--begin:Menu sub--> */}
                                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">
                                                        {/* <!--begin:Dashboards menu--> */}
                                                        <div className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible" data-kt-menu-dismiss="true">
                                                            {/* <!--begin:Row--> */}
                                                            <div className="row">
                                                                {/* <!--begin:Col--> */}
                                                                <div className="col-lg-8 mb-3 mb-lg-0 py-3 px-3 py-lg-6 px-lg-6">
                                                                    {/* <!--begin:Row--> */}
                                                                    <div className="row">
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-6 mb-3">
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/index.html" className="menu-link active">
                                                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                        <i className="ki-duotone ki-element-11 text-primary fs-1">
                                                                                            <span className="path1"></span>
                                                                                            <span className="path2"></span>
                                                                                            <span className="path3"></span>
                                                                                            <span className="path4"></span>
                                                                                        </i>
                                                                                    </span>
                                                                                    <span className="d-flex flex-column">
                                                                                        <span className="fs-6 fw-bold text-gray-800">Default</span>
                                                                                        <span className="fs-7 fw-semibold text-muted">Reports & statistics</span>
                                                                                    </span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-6 mb-3">
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/dashboards/ecommerce.html" className="menu-link">
                                                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                        <i className="ki-duotone ki-basket text-danger fs-1">
                                                                                            <span className="path1"></span>
                                                                                            <span className="path2"></span>
                                                                                            <span className="path3"></span>
                                                                                            <span className="path4"></span>
                                                                                        </i>
                                                                                    </span>
                                                                                    <span className="d-flex flex-column">
                                                                                        <span className="fs-6 fw-bold text-gray-800">eCommerce</span>
                                                                                        <span className="fs-7 fw-semibold text-muted">Sales reports</span>
                                                                                    </span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-6 mb-3">
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/dashboards/projects.html" className="menu-link">
                                                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                        <i className="ki-duotone ki-abstract-44 text-info fs-1">
                                                                                            <span className="path1"></span>
                                                                                            <span className="path2"></span>
                                                                                        </i>
                                                                                    </span>
                                                                                    <span className="d-flex flex-column">
                                                                                        <span className="fs-6 fw-bold text-gray-800">Projects</span>
                                                                                        <span className="fs-7 fw-semibold text-muted">Tasts, graphs & charts</span>
                                                                                    </span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-6 mb-3">
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/dashboards/online-courses.html" className="menu-link">
                                                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                        <i className="ki-duotone ki-color-swatch text-success fs-1">
                                                                                            <span className="path1"></span>
                                                                                            <span className="path2"></span>
                                                                                            <span className="path3"></span>
                                                                                            <span className="path4"></span>
                                                                                            <span className="path5"></span>
                                                                                            <span className="path6"></span>
                                                                                            <span className="path7"></span>
                                                                                            <span className="path8"></span>
                                                                                            <span className="path9"></span>
                                                                                            <span className="path10"></span>
                                                                                            <span className="path11"></span>
                                                                                            <span className="path12"></span>
                                                                                            <span className="path13"></span>
                                                                                            <span className="path14"></span>
                                                                                            <span className="path15"></span>
                                                                                            <span className="path16"></span>
                                                                                            <span className="path17"></span>
                                                                                            <span className="path18"></span>
                                                                                            <span className="path19"></span>
                                                                                            <span className="path20"></span>
                                                                                            <span className="path21"></span>
                                                                                        </i>
                                                                                    </span>
                                                                                    <span className="d-flex flex-column">
                                                                                        <span className="fs-6 fw-bold text-gray-800">Online Courses</span>
                                                                                        <span className="fs-7 fw-semibold text-muted">Student progress</span>
                                                                                    </span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-6 mb-3">
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/dashboards/marketing.html" className="menu-link">
                                                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                        <i className="ki-duotone ki-chart-simple text-dark fs-1">
                                                                                            <span className="path1"></span>
                                                                                            <span className="path2"></span>
                                                                                            <span className="path3"></span>
                                                                                            <span className="path4"></span>
                                                                                        </i>
                                                                                    </span>
                                                                                    <span className="d-flex flex-column">
                                                                                        <span className="fs-6 fw-bold text-gray-800">Marketing</span>
                                                                                        <span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
                                                                                    </span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-6 mb-3">
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/dashboards/bidding.html" className="menu-link">
                                                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                        <i className="ki-duotone ki-switch text-warning fs-1">
                                                                                            <span className="path1"></span>
                                                                                            <span className="path2"></span>
                                                                                        </i>
                                                                                    </span>
                                                                                    <span className="d-flex flex-column">
                                                                                        <span className="fs-6 fw-bold text-gray-800">Bidding</span>
                                                                                        <span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
                                                                                    </span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-6 mb-3">
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/dashboards/pos.html" className="menu-link">
                                                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                        <i className="ki-duotone ki-abstract-42 text-danger fs-1">
                                                                                            <span className="path1"></span>
                                                                                            <span className="path2"></span>
                                                                                        </i>
                                                                                    </span>
                                                                                    <span className="d-flex flex-column">
                                                                                        <span className="fs-6 fw-bold text-gray-800">POS System</span>
                                                                                        <span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
                                                                                    </span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-6 mb-3">
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/dashboards/call-center.html" className="menu-link">
                                                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                        <i className="ki-duotone ki-call text-primary fs-1">
                                                                                            <span className="path1"></span>
                                                                                            <span className="path2"></span>
                                                                                            <span className="path3"></span>
                                                                                            <span className="path4"></span>
                                                                                            <span className="path5"></span>
                                                                                            <span className="path6"></span>
                                                                                            <span className="path7"></span>
                                                                                            <span className="path8"></span>
                                                                                        </i>
                                                                                    </span>
                                                                                    <span className="d-flex flex-column">
                                                                                        <span className="fs-6 fw-bold text-gray-800">Call Center</span>
                                                                                        <span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
                                                                                    </span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                    </div>
                                                                    {/* <!--end:Row--> */}
                                                                    <div className="separator separator-dashed mx-5 my-5"></div>
                                                                    {/* <!--begin:Landing--> */}
                                                                    <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-5">
                                                                        <div className="d-flex flex-column me-5">
                                                                            <div className="fs-6 fw-bold text-gray-800">Landing Page Template</div>
                                                                            <div className="fs-7 fw-semibold text-muted">Onpe page landing template with pricing & others</div>
                                                                        </div>
                                                                        <a href="../../demo5/dist/landing.html" className="btn btn-sm btn-primary fw-bold">Explore</a>
                                                                    </div>
                                                                    {/* <!--end:Landing--> */}
                                                                </div>
                                                                {/* <!--end:Col--> */}
                                                                {/* <!--begin:Col--> */}
                                                                <div className="menu-more bg-light col-lg-4 py-3 px-3 py-lg-6 px-lg-6 rounded-end">
                                                                    {/* <!--begin:Heading--> */}
                                                                    <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">More Dashboards</h4>
                                                                    {/* <!--end:Heading--> */}
                                                                    {/* <!--begin:Menu item--> */}
                                                                    <div className="menu-item p-0 m-0">
                                                                        {/* <!--begin:Menu link--> */}
                                                                        <a href="../../demo5/dist/dashboards/logistics.html" className="menu-link py-2">
                                                                            <span className="menu-title">Logistics</span>
                                                                        </a>
                                                                        {/* <!--end:Menu link--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu item--> */}
                                                                    {/* <!--begin:Menu item--> */}
                                                                    <div className="menu-item p-0 m-0">
                                                                        {/* <!--begin:Menu link--> */}
                                                                        <a href="../../demo5/dist/dashboards/website-analytics.html" className="menu-link py-2">
                                                                            <span className="menu-title">Website Analytics</span>
                                                                        </a>
                                                                        {/* <!--end:Menu link--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu item--> */}
                                                                    {/* <!--begin:Menu item--> */}
                                                                    <div className="menu-item p-0 m-0">
                                                                        {/* <!--begin:Menu link--> */}
                                                                        <a href="../../demo5/dist/dashboards/finance-performance.html" className="menu-link py-2">
                                                                            <span className="menu-title">Finance Performance</span>
                                                                        </a>
                                                                        {/* <!--end:Menu link--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu item--> */}
                                                                    {/* <!--begin:Menu item--> */}
                                                                    <div className="menu-item p-0 m-0">
                                                                        {/* <!--begin:Menu link--> */}
                                                                        <a href="../../demo5/dist/dashboards/store-analytics.html" className="menu-link py-2">
                                                                            <span className="menu-title">Store Analytics</span>
                                                                        </a>
                                                                        {/* <!--end:Menu link--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu item--> */}
                                                                    {/* <!--begin:Menu item--> */}
                                                                    <div className="menu-item p-0 m-0">
                                                                        {/* <!--begin:Menu link--> */}
                                                                        <a href="../../demo5/dist/dashboards/social.html" className="menu-link py-2">
                                                                            <span className="menu-title">Social</span>
                                                                        </a>
                                                                        {/* <!--end:Menu link--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu item--> */}
                                                                    {/* <!--begin:Menu item--> */}
                                                                    <div className="menu-item p-0 m-0">
                                                                        {/* <!--begin:Menu link--> */}
                                                                        <a href="../../demo5/dist/dashboards/delivery.html" className="menu-link py-2">
                                                                            <span className="menu-title">Delivery</span>
                                                                        </a>
                                                                        {/* <!--end:Menu link--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu item--> */}
                                                                    {/* <!--begin:Menu item--> */}
                                                                    <div className="menu-item p-0 m-0">
                                                                        {/* <!--begin:Menu link--> */}
                                                                        <a href="../../demo5/dist/dashboards/crypto.html" className="menu-link py-2">
                                                                            <span className="menu-title">Crypto</span>
                                                                        </a>
                                                                        {/* <!--end:Menu link--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu item--> */}
                                                                    {/* <!--begin:Menu item--> */}
                                                                    <div className="menu-item p-0 m-0">
                                                                        {/* <!--begin:Menu link--> */}
                                                                        <a href="../../demo5/dist/dashboards/school.html" className="menu-link py-2">
                                                                            <span className="menu-title">School</span>
                                                                        </a>
                                                                        {/* <!--end:Menu link--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu item--> */}
                                                                    {/* <!--begin:Menu item--> */}
                                                                    <div className="menu-item p-0 m-0">
                                                                        {/* <!--begin:Menu link--> */}
                                                                        <a href="../../demo5/dist/dashboards/podcast.html" className="menu-link py-2">
                                                                            <span className="menu-title">Podcast</span>
                                                                        </a>
                                                                        {/* <!--end:Menu link--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu item--> */}
                                                                </div>
                                                                {/* <!--end:Col--> */}
                                                            </div>
                                                            {/* <!--end:Row--> */}
                                                        </div>
                                                        {/* <!--end:Dashboards menu--> */}
                                                    </div>
                                                    {/* <!--end:Menu sub--> */}
                                                </div>
                                                {/* <!--end:Menu item--> */}
                                                {/* <!--begin:Menu item--> */}
                                                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2">
                                                    {/* <!--begin:Menu link--> */}
                                                    <span className="menu-link py-3">
                                                        <span className="menu-title">Pages</span>
                                                        <span className="menu-arrow d-lg-none"></span>
                                                    </span>
                                                    {/* <!--end:Menu link--> */}
                                                    {/* <!--begin:Menu sub--> */}
                                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                                                        {/* <!--begin:Pages menu--> */}
                                                        <div className="menu-active-bg px-4 px-lg-0">
                                                            {/* <!--begin:Tabs nav--> */}
                                                            <div className="d-flex w-100 overflow-auto">
                                                                <ul className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
                                                                    {/* <!--begin:Nav item--> */}
                                                                    <li className="nav-item mx-lg-1">
                                                                        <a className="nav-link py-3 py-lg-6 active text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_pages">General</a>
                                                                    </li>
                                                                    {/* <!--end:Nav item--> */}
                                                                    {/* <!--begin:Nav item--> */}
                                                                    <li className="nav-item mx-lg-1">
                                                                        <a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_account">Account</a>
                                                                    </li>
                                                                    {/* <!--end:Nav item--> */}
                                                                    {/* <!--begin:Nav item--> */}
                                                                    <li className="nav-item mx-lg-1">
                                                                        <a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_authentication">Authentication</a>
                                                                    </li>
                                                                    {/* <!--end:Nav item--> */}
                                                                    {/* <!--begin:Nav item--> */}
                                                                    <li className="nav-item mx-lg-1">
                                                                        <a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_utilities">Utilities</a>
                                                                    </li>
                                                                    {/* <!--end:Nav item--> */}
                                                                    {/* <!--begin:Nav item--> */}
                                                                    <li className="nav-item mx-lg-1">
                                                                        <a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_widgets">Widgets</a>
                                                                    </li>
                                                                    {/* <!--end:Nav item--> */}
                                                                </ul>
                                                            </div>
                                                            {/* <!--end:Tabs nav--> */}
                                                            {/* <!--begin:Tab content--> */}
                                                            <div className="tab-content py-4 py-lg-8 px-lg-7">
                                                                {/* <!--begin:Tab pane--> */}
                                                                <div className="tab-pane active w-lg-1000px" id="kt_app_header_menu_pages_pages">
                                                                    {/* <!--begin:Row--> */}
                                                                    <div className="row">
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-8">
                                                                            {/* <!--begin:Row--> */}
                                                                            <div className="row">
                                                                                {/* <!--begin:Col--> */}
                                                                                <div className="col-lg-3 mb-6 mb-lg-0">
                                                                                    {/* <!--begin:Menu heading--> */}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">User Profile</h4>
                                                                                    {/* <!--end:Menu heading--> */}
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/pages/user-profile/overview.html" className="menu-link">
                                                                                            <span className="menu-title">Overview</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/pages/user-profile/projects.html" className="menu-link">
                                                                                            <span className="menu-title">Projects</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/pages/user-profile/campaigns.html" className="menu-link">
                                                                                            <span className="menu-title">Campaigns</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/pages/user-profile/documents.html" className="menu-link">
                                                                                            <span className="menu-title">Documents</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/pages/user-profile/followers.html" className="menu-link">
                                                                                            <span className="menu-title">Followers</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/pages/user-profile/activity.html" className="menu-link">
                                                                                            <span className="menu-title">Activity</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                </div>
                                                                                {/* <!--end:Col--> */}
                                                                                {/* <!--begin:Col--> */}
                                                                                <div className="col-lg-3 mb-6 mb-lg-0">
                                                                                    {/* <!--begin:Menu section--> */}
                                                                                    <div className="mb-6">
                                                                                        {/* <!--begin:Menu heading--> */}
                                                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate</h4>
                                                                                        {/* <!--end:Menu heading--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/about.html" className="menu-link">
                                                                                                <span className="menu-title">About</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/team.html" className="menu-link">
                                                                                                <span className="menu-title">Our Team</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/contact.html" className="menu-link">
                                                                                                <span className="menu-title">Contact Us</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/licenses.html" className="menu-link">
                                                                                                <span className="menu-title">Licenses</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/sitemap.html" className="menu-link">
                                                                                                <span className="menu-title">Sitemap</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu section--> */}
                                                                                    {/* <!--begin:Menu section--> */}
                                                                                    <div className="mb-0">
                                                                                        {/* <!--begin:Menu heading--> */}
                                                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Careers</h4>
                                                                                        {/* <!--end:Menu heading--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/careers/list.html" className="menu-link">
                                                                                                <span className="menu-title">Careers List</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/careers/apply.html" className="menu-link">
                                                                                                <span className="menu-title">Careers Apply</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu section--> */}
                                                                                </div>
                                                                                {/* <!--end:Col--> */}
                                                                                {/* <!--begin:Col--> */}
                                                                                <div className="col-lg-3 mb-6 mb-lg-0">
                                                                                    {/* <!--begin:Menu section--> */}
                                                                                    <div className="mb-6">
                                                                                        {/* <!--begin:Menu heading--> */}
                                                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">FAQ</h4>
                                                                                        {/* <!--end:Menu heading--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/faq/classic.html" className="menu-link">
                                                                                                <span className="menu-title">FAQ Classic</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/faq/extended.html" className="menu-link">
                                                                                                <span className="menu-title">FAQ Extended</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu section--> */}
                                                                                    {/* <!--begin:Menu section--> */}
                                                                                    <div className="mb-6">
                                                                                        {/* <!--begin:Menu heading--> */}
                                                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Blog</h4>
                                                                                        {/* <!--end:Menu heading--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/blog/home.html" className="menu-link">
                                                                                                <span className="menu-title">Blog Home</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/blog/post.html" className="menu-link">
                                                                                                <span className="menu-title">Blog Post</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu section--> */}
                                                                                    {/* <!--begin:Menu section--> */}
                                                                                    <div className="mb-0">
                                                                                        {/* <!--begin:Menu heading--> */}
                                                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Pricing</h4>
                                                                                        {/* <!--end:Menu heading--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/pricing.html" className="menu-link">
                                                                                                <span className="menu-title">Column Pricing</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/pricing/table.html" className="menu-link">
                                                                                                <span className="menu-title">Table Pricing</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu section--> */}
                                                                                </div>
                                                                                {/* <!--end:Col--> */}
                                                                                {/* <!--begin:Col--> */}
                                                                                <div className="col-lg-3 mb-6 mb-lg-0">
                                                                                    {/* <!--begin:Menu section--> */}
                                                                                    <div className="mb-0">
                                                                                        {/* <!--begin:Menu heading--> */}
                                                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Social</h4>
                                                                                        {/* <!--end:Menu heading--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/social/feeds.html" className="menu-link">
                                                                                                <span className="menu-title">Feeds</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/social/activity.html" className="menu-link">
                                                                                                <span className="menu-title">Activty</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/social/followers.html" className="menu-link">
                                                                                                <span className="menu-title">Followers</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/pages/social/settings.html" className="menu-link">
                                                                                                <span className="menu-title">Settings</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu section--> */}
                                                                                </div>
                                                                                {/* <!--end:Col--> */}
                                                                            </div>
                                                                            {/* <!--end:Row--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-4">
                                                                            <img src="/fe/dist/assets/media/stock/600x600/img-82.jpg" className="rounded mw-100" alt="" />
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                    </div>
                                                                    {/* <!--end:Row--> */}
                                                                </div>
                                                                {/* <!--end:Tab pane--> */}
                                                                {/* <!--begin:Tab pane--> */}
                                                                <div className="tab-pane w-lg-600px" id="kt_app_header_menu_pages_account">
                                                                    {/* <!--begin:Row--> */}
                                                                    <div className="row">
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-5 mb-6 mb-lg-0">
                                                                            {/* <!--begin:Row--> */}
                                                                            <div className="row">
                                                                                {/* <!--begin:Col--> */}
                                                                                <div className="col-lg-6">
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/account/overview.html" className="menu-link">
                                                                                            <span className="menu-title">Overview</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/account/settings.html" className="menu-link">
                                                                                            <span className="menu-title">Settings</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/account/security.html" className="menu-link">
                                                                                            <span className="menu-title">Security</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/account/activity.html" className="menu-link">
                                                                                            <span className="menu-title">Activity</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/account/billing.html" className="menu-link">
                                                                                            <span className="menu-title">Billing</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                </div>
                                                                                {/* <!--end:Col--> */}
                                                                                {/* <!--begin:Col--> */}
                                                                                <div className="col-lg-6">
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/account/statements.html" className="menu-link">
                                                                                            <span className="menu-title">Statements</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/account/referrals.html" className="menu-link">
                                                                                            <span className="menu-title">Referrals</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/account/api-keys.html" className="menu-link">
                                                                                            <span className="menu-title">API Keys</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                    {/* <!--begin:Menu item--> */}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* <!--begin:Menu link--> */}
                                                                                        <a href="../../demo5/dist/account/logs.html" className="menu-link">
                                                                                            <span className="menu-title">Logs</span>
                                                                                        </a>
                                                                                        {/* <!--end:Menu link--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu item--> */}
                                                                                </div>
                                                                                {/* <!--end:Col--> */}
                                                                            </div>
                                                                            {/* <!--end:Row--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-7">
                                                                            <img src="/fe/dist/assets/media/stock/900x600/46.jpg" className="rounded mw-100" alt="" />
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                    </div>
                                                                    {/* <!--end:Row--> */}
                                                                </div>
                                                                {/* <!--end:Tab pane--> */}
                                                                {/* <!--begin:Tab pane--> */}
                                                                <div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_authentication">
                                                                    {/* <!--begin:Row--> */}
                                                                    <div className="row">
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-3 mb-6 mb-lg-0">
                                                                            {/* <!--begin:Menu section--> */}
                                                                            <div className="mb-6">
                                                                                {/* <!--begin:Menu heading--> */}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate Layout</h4>
                                                                                {/* <!--end:Menu heading--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/corporate/sign-in.html" className="menu-link">
                                                                                        <span className="menu-title">Sign-In</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/corporate/sign-up.html" className="menu-link">
                                                                                        <span className="menu-title">Sign-Up</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/corporate/two-factor.html" className="menu-link">
                                                                                        <span className="menu-title">Two-Factor</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/corporate/reset-password.html" className="menu-link">
                                                                                        <span className="menu-title">Reset Password</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/corporate/new-password.html" className="menu-link">
                                                                                        <span className="menu-title">New Password</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu section--> */}
                                                                            {/* <!--begin:Menu section--> */}
                                                                            <div className="mb-0">
                                                                                {/* <!--begin:Menu heading--> */}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Overlay Layout</h4>
                                                                                {/* <!--end:Menu heading--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/overlay/sign-in.html" className="menu-link">
                                                                                        <span className="menu-title">Sign-In</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/overlay/sign-up.html" className="menu-link">
                                                                                        <span className="menu-title">Sign-Up</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/overlay/two-factor.html" className="menu-link">
                                                                                        <span className="menu-title">Two-Factor</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/overlay/reset-password.html" className="menu-link">
                                                                                        <span className="menu-title">Reset Password</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/overlay/new-password.html" className="menu-link">
                                                                                        <span className="menu-title">New Password</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu section--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-3 mb-6 mb-lg-0">
                                                                            {/* <!--begin:Menu section--> */}
                                                                            <div className="mb-6">
                                                                                {/* <!--begin:Menu heading--> */}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Creative Layout</h4>
                                                                                {/* <!--end:Menu heading--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/creative/sign-in.html" className="menu-link">
                                                                                        <span className="menu-title">Sign-in</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/creative/sign-up.html" className="menu-link">
                                                                                        <span className="menu-title">Sign-up</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/creative/two-factor.html" className="menu-link">
                                                                                        <span className="menu-title">Two-Factor</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/creative/reset-password.html" className="menu-link">
                                                                                        <span className="menu-title">Reset Password</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/creative/new-password.html" className="menu-link">
                                                                                        <span className="menu-title">New Password</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu section--> */}
                                                                            {/* <!--begin:Menu section--> */}
                                                                            <div className="mb-6">
                                                                                {/* <!--begin:Menu heading--> */}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Fancy Layout</h4>
                                                                                {/* <!--end:Menu heading--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/fancy/sign-in.html" className="menu-link">
                                                                                        <span className="menu-title">Sign-In</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/fancy/sign-up.html" className="menu-link">
                                                                                        <span className="menu-title">Sign-Up</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/fancy/two-factor.html" className="menu-link">
                                                                                        <span className="menu-title">Two-Factor</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/fancy/reset-password.html" className="menu-link">
                                                                                        <span className="menu-title">Reset Password</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/layouts/fancy/new-password.html" className="menu-link">
                                                                                        <span className="menu-title">New Password</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu section--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-3 mb-6 mb-lg-0">
                                                                            {/* <!--begin:Menu section--> */}
                                                                            <div className="mb-0">
                                                                                {/* <!--begin:Menu heading--> */}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General</h4>
                                                                                {/* <!--end:Menu heading--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/extended/multi-steps-sign-up.html" className="menu-link">
                                                                                        <span className="menu-title">Multi-Steps Sign-Up</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/general/welcome.html" className="menu-link">
                                                                                        <span className="menu-title">Welcome Message</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/general/verify-email.html" className="menu-link">
                                                                                        <span className="menu-title">Verify Email</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/general/coming-soon.html" className="menu-link">
                                                                                        <span className="menu-title">Coming Soon</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/general/password-confirmation.html" className="menu-link">
                                                                                        <span className="menu-title">Password Confirmation</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/general/account-deactivated.html" className="menu-link">
                                                                                        <span className="menu-title">Account Deactivation</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/general/error-404.html" className="menu-link">
                                                                                        <span className="menu-title">Error 404</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/general/error-500.html" className="menu-link">
                                                                                        <span className="menu-title">Error 500</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu section--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-3 mb-6 mb-lg-0">
                                                                            {/* <!--begin:Menu section--> */}
                                                                            <div className="mb-0">
                                                                                {/* <!--begin:Menu heading--> */}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Email Templates</h4>
                                                                                {/* <!--end:Menu heading--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/email/welcome-message.html" className="menu-link">
                                                                                        <span className="menu-title">Welcome Message</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/email/reset-password.html" className="menu-link">
                                                                                        <span className="menu-title">Reset Password</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/email/subscription-confirmed.html" className="menu-link">
                                                                                        <span className="menu-title">Subscription Confirmed</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/email/card-declined.html" className="menu-link">
                                                                                        <span className="menu-title">Credit Card Declined</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/email/promo-1.html" className="menu-link">
                                                                                        <span className="menu-title">Promo 1</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/email/promo-2.html" className="menu-link">
                                                                                        <span className="menu-title">Promo 2</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                                {/* <!--begin:Menu item--> */}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* <!--begin:Menu link--> */}
                                                                                    <a href="../../demo5/dist/authentication/email/promo-3.html" className="menu-link">
                                                                                        <span className="menu-title">Promo 3</span>
                                                                                    </a>
                                                                                    {/* <!--end:Menu link--> */}
                                                                                </div>
                                                                                {/* <!--end:Menu item--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu section--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                    </div>
                                                                    {/* <!--end:Row--> */}
                                                                </div>
                                                                {/* <!--end:Tab pane--> */}
                                                                {/* <!--begin:Tab pane--> */}
                                                                <div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_utilities">
                                                                    {/* <!--begin:Row--> */}
                                                                    <div className="row">
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-7">
                                                                            {/* <!--begin:Row--> */}
                                                                            <div className="row">
                                                                                {/* <!--begin:Col--> */}
                                                                                <div className="col-lg-4 mb-6 mb-lg-0">
                                                                                    {/* <!--begin:Menu section--> */}
                                                                                    <div className="mb-0">
                                                                                        {/* <!--begin:Menu heading--> */}
                                                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General Modals</h4>
                                                                                        {/* <!--end:Menu heading--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/general/invite-friends.html" className="menu-link">
                                                                                                <span className="menu-title">Invite Friends</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/general/view-users.html" className="menu-link">
                                                                                                <span className="menu-title">View Users</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/general/select-users.html" className="menu-link">
                                                                                                <span className="menu-title">Select Users</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/general/upgrade-plan.html" className="menu-link">
                                                                                                <span className="menu-title">Upgrade Plan</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/general/share-earn.html" className="menu-link">
                                                                                                <span className="menu-title">Share & Earn</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/forms/new-target.html" className="menu-link">
                                                                                                <span className="menu-title">New Target</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/forms/new-card.html" className="menu-link">
                                                                                                <span className="menu-title">New Card</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/forms/new-address.html" className="menu-link">
                                                                                                <span className="menu-title">New Address</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/forms/create-api-key.html" className="menu-link">
                                                                                                <span className="menu-title">Create API Key</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/forms/bidding.html" className="menu-link">
                                                                                                <span className="menu-title">Bidding</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu section--> */}
                                                                                </div>
                                                                                {/* <!--end:Col--> */}
                                                                                {/* <!--begin:Col--> */}
                                                                                <div className="col-lg-4 mb-6 mb-lg-0">
                                                                                    {/* <!--begin:Menu section--> */}
                                                                                    <div className="mb-6">
                                                                                        {/* <!--begin:Menu heading--> */}
                                                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Advanced Modals</h4>
                                                                                        {/* <!--end:Menu heading--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/wizards/create-app.html" className="menu-link">
                                                                                                <span className="menu-title">Create App</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/wizards/create-campaign.html" className="menu-link">
                                                                                                <span className="menu-title">Create Campaign</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/wizards/create-account.html" className="menu-link">
                                                                                                <span className="menu-title">Create Business Acc</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/wizards/create-project.html" className="menu-link">
                                                                                                <span className="menu-title">Create Project</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/wizards/top-up-wallet.html" className="menu-link">
                                                                                                <span className="menu-title">Top Up Wallet</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/wizards/offer-a-deal.html" className="menu-link">
                                                                                                <span className="menu-title">Offer a Deal</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/wizards/two-factor-authentication.html" className="menu-link">
                                                                                                <span className="menu-title">Two Factor Auth</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu section--> */}
                                                                                    {/* <!--begin:Menu section--> */}
                                                                                    <div className="mb-0">
                                                                                        {/* <!--begin:Menu heading--> */}
                                                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Search</h4>
                                                                                        {/* <!--end:Menu heading--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/search/horizontal.html" className="menu-link">
                                                                                                <span className="menu-title">Horizontal</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/search/vertical.html" className="menu-link">
                                                                                                <span className="menu-title">Vertical</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/search/users.html" className="menu-link">
                                                                                                <span className="menu-title">Users</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/search/select-location.html" className="menu-link">
                                                                                                <span className="menu-title">Select Location</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu section--> */}
                                                                                </div>
                                                                                {/* <!--end:Col--> */}
                                                                                {/* <!--begin:Col--> */}
                                                                                <div className="col-lg-4 mb-6 mb-lg-0">
                                                                                    {/* <!--begin:Menu section--> */}
                                                                                    <div className="mb-0">
                                                                                        {/* <!--begin:Menu heading--> */}
                                                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Wizards</h4>
                                                                                        {/* <!--end:Menu heading--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/wizards/horizontal.html" className="menu-link">
                                                                                                <span className="menu-title">Horizontal</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/wizards/vertical.html" className="menu-link">
                                                                                                <span className="menu-title">Vertical</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/wizards/two-factor-authentication.html" className="menu-link">
                                                                                                <span className="menu-title">Two Factor Auth</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/wizards/create-app.html" className="menu-link">
                                                                                                <span className="menu-title">Create App</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/wizards/create-campaign.html" className="menu-link">
                                                                                                <span className="menu-title">Create Campaign</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/wizards/create-account.html" className="menu-link">
                                                                                                <span className="menu-title">Create Account</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/wizards/create-project.html" className="menu-link">
                                                                                                <span className="menu-title">Create Project</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/modals/wizards/top-up-wallet.html" className="menu-link">
                                                                                                <span className="menu-title">Top Up Wallet</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                        {/* <!--begin:Menu item--> */}
                                                                                        <div className="menu-item p-0 m-0">
                                                                                            {/* <!--begin:Menu link--> */}
                                                                                            <a href="../../demo5/dist/utilities/wizards/offer-a-deal.html" className="menu-link">
                                                                                                <span className="menu-title">Offer a Deal</span>
                                                                                            </a>
                                                                                            {/* <!--end:Menu link--> */}
                                                                                        </div>
                                                                                        {/* <!--end:Menu item--> */}
                                                                                    </div>
                                                                                    {/* <!--end:Menu section--> */}
                                                                                </div>
                                                                                {/* <!--end:Col--> */}
                                                                            </div>
                                                                            {/* <!--end:Row--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-5 pe-lg-5">
                                                                            <img src="/fe/dist/assets/media/stock/600x600/img-84.jpg" className="rounded mw-100" alt="" />
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                    </div>
                                                                    {/* <!--end:Row--> */}
                                                                </div>
                                                                {/* <!--end:Tab pane--> */}
                                                                {/* <!--begin:Tab pane--> */}
                                                                <div className="tab-pane w-lg-500px" id="kt_app_header_menu_pages_widgets">
                                                                    {/* <!--begin:Row--> */}
                                                                    <div className="row">
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-4 mb-6 mb-lg-0">
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/widgets/lists.html" className="menu-link">
                                                                                    <span className="menu-title">Lists</span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/widgets/statistics.html" className="menu-link">
                                                                                    <span className="menu-title">Statistics</span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/widgets/charts.html" className="menu-link">
                                                                                    <span className="menu-title">Charts</span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/widgets/mixed.html" className="menu-link">
                                                                                    <span className="menu-title">Mixed</span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/widgets/tables.html" className="menu-link">
                                                                                    <span className="menu-title">Tables</span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                            {/* <!--begin:Menu item--> */}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* <!--begin:Menu link--> */}
                                                                                <a href="../../demo5/dist/widgets/feeds.html" className="menu-link">
                                                                                    <span className="menu-title">Feeds</span>
                                                                                </a>
                                                                                {/* <!--end:Menu link--> */}
                                                                            </div>
                                                                            {/* <!--end:Menu item--> */}
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                        {/* <!--begin:Col--> */}
                                                                        <div className="col-lg-8">
                                                                            <img src="/fe/dist/assets/media/stock/900x600/44.jpg" className="rounded mw-100" alt="" />
                                                                        </div>
                                                                        {/* <!--end:Col--> */}
                                                                    </div>
                                                                    {/* <!--end:Row--> */}
                                                                </div>
                                                                {/* <!--end:Tab pane--> */}
                                                            </div>
                                                            {/* <!--end:Tab content--> */}
                                                        </div>
                                                        {/* <!--end:Pages menu--> */}
                                                    </div>
                                                    {/* <!--end:Menu sub--> */}
                                                </div>
                                                {/* <!--end:Menu item--> */}
                                                {/* <!--begin:Menu item--> */}
                                                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
                                                    {/* <!--begin:Menu link--> */}
                                                    <span className="menu-link py-3">
                                                        <span className="menu-title">Apps</span>
                                                        <span className="menu-arrow d-lg-none"></span>
                                                    </span>
                                                    {/* <!--end:Menu link--> */}
                                                    {/* <!--begin:Menu sub--> */}
                                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
                                                        {/* <!--begin:Menu item--> */}
                                                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                            {/* <!--begin:Menu link--> */}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-rocket fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Projects</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            {/* <!--end:Menu link--> */}
                                                            {/* <!--begin:Menu sub--> */}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/projects/list.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">My Projects</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/projects/project.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">View Project</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/projects/targets.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Targets</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/projects/budget.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Budget</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/projects/users.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Users</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/projects/files.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Files</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/projects/activity.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Activity</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/projects/settings.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Settings</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                            </div>
                                                            {/* <!--end:Menu sub--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                            {/* <!--begin:Menu link--> */}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-handcart fs-2"></i>
                                                                </span>
                                                                <span className="menu-title">eCommerce</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            {/* <!--end:Menu link--> */}
                                                            {/* <!--begin:Menu sub--> */}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/* <!--begin:Menu item--> */}
                                                                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <span className="menu-link py-3">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Catalog</span>
                                                                        <span className="menu-arrow"></span>
                                                                    </span>
                                                                    {/* <!--end:Menu link--> */}
                                                                    {/* <!--begin:Menu sub--> */}
                                                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/catalog/products.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Products</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/catalog/categories.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Categories</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/catalog/add-product.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Add Product</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/catalog/edit-product.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Edit Product</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/catalog/add-category.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Add Category</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/catalog/edit-category.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Edit Category</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu sub--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <span className="menu-link py-3">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Sales</span>
                                                                        <span className="menu-arrow"></span>
                                                                    </span>
                                                                    {/* <!--end:Menu link--> */}
                                                                    {/* <!--begin:Menu sub--> */}
                                                                    <div className="menu-sub menu-sub-accordion">
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/sales/listing.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Orders Listing</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/sales/details.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Order Details</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/sales/add-order.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Add Order</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/sales/edit-order.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Edit Order</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu sub--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <span className="menu-link py-3">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Customers</span>
                                                                        <span className="menu-arrow"></span>
                                                                    </span>
                                                                    {/* <!--end:Menu link--> */}
                                                                    {/* <!--begin:Menu sub--> */}
                                                                    <div className="menu-sub menu-sub-accordion">
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/customers/listing.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Customers Listing</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/customers/details.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Customers Details</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu sub--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <span className="menu-link py-3">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Reports</span>
                                                                        <span className="menu-arrow"></span>
                                                                    </span>
                                                                    {/* <!--end:Menu link--> */}
                                                                    {/* <!--begin:Menu sub--> */}
                                                                    <div className="menu-sub menu-sub-accordion">
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/reports/view.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Products Viewed</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/reports/sales.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Sales</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/reports/returns.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Returns</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/reports/customer-orders.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Customer Orders</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/reports/shipping.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Shipping</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu sub--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/ecommerce/settings.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Settings</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                            </div>
                                                            {/* <!--end:Menu sub--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                            {/* <!--begin:Menu link--> */}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-chart fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Support Center</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            {/* <!--end:Menu link--> */}
                                                            {/* <!--begin:Menu sub--> */}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/support-center/overview.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Overview</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <span className="menu-link py-3">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Tickets</span>
                                                                        <span className="menu-arrow"></span>
                                                                    </span>
                                                                    {/* <!--end:Menu link--> */}
                                                                    {/* <!--begin:Menu sub--> */}
                                                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/support-center/tickets/list.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Ticket List</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/support-center/tickets/view.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Ticket View</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu sub--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <span className="menu-link py-3">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Tutorials</span>
                                                                        <span className="menu-arrow"></span>
                                                                    </span>
                                                                    {/* <!--end:Menu link--> */}
                                                                    {/* <!--begin:Menu sub--> */}
                                                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/support-center/tutorials/list.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Tutorials List</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/support-center/tutorials/post.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Tutorials Post</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu sub--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/support-center/faq.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">FAQ</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/support-center/licenses.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Licenses</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/support-center/contact.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Contact Us</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                            </div>
                                                            {/* <!--end:Menu sub--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                            {/* <!--begin:Menu link--> */}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-shield-tick fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">User Management</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            {/* <!--end:Menu link--> */}
                                                            {/* <!--begin:Menu sub--> */}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/* <!--begin:Menu item--> */}
                                                                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <span className="menu-link py-3">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Users</span>
                                                                        <span className="menu-arrow"></span>
                                                                    </span>
                                                                    {/* <!--end:Menu link--> */}
                                                                    {/* <!--begin:Menu sub--> */}
                                                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/user-management/users/list.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Users List</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/user-management/users/view.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">View User</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu sub--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <span className="menu-link py-3">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Roles</span>
                                                                        <span className="menu-arrow"></span>
                                                                    </span>
                                                                    {/* <!--end:Menu link--> */}
                                                                    {/* <!--begin:Menu sub--> */}
                                                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/user-management/roles/list.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Roles List</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/user-management/roles/view.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">View Roles</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu sub--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/user-management/permissions.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Permissions</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                            </div>
                                                            {/* <!--end:Menu sub--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                            {/* <!--begin:Menu link--> */}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-phone fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Contacts</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            {/* <!--end:Menu link--> */}
                                                            {/* <!--begin:Menu sub--> */}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/contacts/getting-started.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Getting Started</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/contacts/add-contact.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Add Contact</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/contacts/edit-contact.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Edit Contact</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/contacts/view-contact.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">View Contact</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                            </div>
                                                            {/* <!--end:Menu sub--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                            {/* <!--begin:Menu link--> */}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-basket fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                        <span className="path3"></span>
                                                                        <span className="path4"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Subscriptions</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            {/* <!--end:Menu link--> */}
                                                            {/* <!--begin:Menu sub--> */}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/subscriptions/getting-started.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Getting Started</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/subscriptions/list.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Subscription List</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/subscriptions/add.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Add Subscription</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/subscriptions/view.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">View Subscription</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                            </div>
                                                            {/* <!--end:Menu sub--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                            {/* <!--begin:Menu link--> */}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-briefcase fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Customers</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            {/* <!--end:Menu link--> */}
                                                            {/* <!--begin:Menu sub--> */}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/customers/getting-started.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Getting Started</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/customers/list.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Customer Listing</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/customers/view.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Customer Details</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                            </div>
                                                            {/* <!--end:Menu sub--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                            {/* <!--begin:Menu link--> */}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-credit-cart fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Invoice Management</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            {/* <!--end:Menu link--> */}
                                                            {/* <!--begin:Menu sub--> */}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/* <!--begin:Menu item--> */}
                                                                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <span className="menu-link py-3">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Profile</span>
                                                                        <span className="menu-arrow"></span>
                                                                    </span>
                                                                    {/* <!--end:Menu link--> */}
                                                                    {/* <!--begin:Menu sub--> */}
                                                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/invoices/view/invoice-1.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Invoice 1</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/invoices/view/invoice-2.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Invoice 2</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                        {/* <!--begin:Menu item--> */}
                                                                        <div className="menu-item">
                                                                            {/* <!--begin:Menu link--> */}
                                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/invoices/view/invoice-3.html">
                                                                                <span className="menu-bullet">
                                                                                    <span className="bullet bullet-dot"></span>
                                                                                </span>
                                                                                <span className="menu-title">Invoice 3</span>
                                                                            </a>
                                                                            {/* <!--end:Menu link--> */}
                                                                        </div>
                                                                        {/* <!--end:Menu item--> */}
                                                                    </div>
                                                                    {/* <!--end:Menu sub--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/invoices/create.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Create Invoice</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                            </div>
                                                            {/* <!--end:Menu sub--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                            {/* <!--begin:Menu link--> */}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-file-added fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">File Manager</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            {/* <!--end:Menu link--> */}
                                                            {/* <!--begin:Menu sub--> */}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/file-manager/folders.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Folders</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/file-manager/files.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Files</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/file-manager/blank.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Blank Directory</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/file-manager/settings.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Settings</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                            </div>
                                                            {/* <!--end:Menu sub--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                            {/* <!--begin:Menu link--> */}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-sms fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Inbox</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            {/* <!--end:Menu link--> */}
                                                            {/* <!--begin:Menu sub--> */}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/inbox/listing.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Messages</span>
                                                                        <span className="menu-badge">
                                                                            <span className="badge badge-light-success">3</span>
                                                                        </span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/inbox/compose.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Compose</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/inbox/reply.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">View & Reply</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                            </div>
                                                            {/* <!--end:Menu sub--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                            {/* <!--begin:Menu link--> */}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-message-text-2 fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                        <span className="path3"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Chat</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            {/* <!--end:Menu link--> */}
                                                            {/* <!--begin:Menu sub--> */}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/chat/private.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Private Chat</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/chat/group.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Group Chat</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/chat/drawer.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Drawer Chat</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                            </div>
                                                            {/* <!--end:Menu sub--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div className="menu-item">
                                                            {/* <!--begin:Menu link--> */}
                                                            <a className="menu-link py-3" href="../../demo5/dist/apps/calendar.html">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-calendar-8 fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                        <span className="path3"></span>
                                                                        <span className="path4"></span>
                                                                        <span className="path5"></span>
                                                                        <span className="path6"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Calendar</span>
                                                            </a>
                                                            {/* <!--end:Menu link--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                            {/* <!--begin:Menu link--> */}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-faceid fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                        <span className="path3"></span>
                                                                        <span className="path4"></span>
                                                                        <span className="path5"></span>
                                                                        <span className="path6"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Devs</span>
                                                                <span className="menu-arrow"></span>
                                                            </span>
                                                            {/* <!--end:Menu link--> */}
                                                            {/* <!--begin:Menu sub--> */}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/devs/question.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">View Question</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/devs/ask.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Ask Question</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/devs/search.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Search Questions</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                                {/* <!--begin:Menu item--> */}
                                                                <div className="menu-item">
                                                                    {/* <!--begin:Menu link--> */}
                                                                    <a className="menu-link py-3" href="../../demo5/dist/apps/devs/tag.html">
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">Tags</span>
                                                                    </a>
                                                                    {/* <!--end:Menu link--> */}
                                                                </div>
                                                                {/* <!--end:Menu item--> */}
                                                            </div>
                                                            {/* <!--end:Menu sub--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                    </div>
                                                    {/* <!--end:Menu sub--> */}
                                                </div>
                                                {/* <!--end:Menu item--> */}
                                                {/* <!--begin:Menu item--> */}
                                                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
                                                    {/* <!--begin:Menu link--> */}
                                                    <span className="menu-link py-3">
                                                        <span className="menu-title">Help</span>
                                                        <span className="menu-arrow d-lg-none"></span>
                                                    </span>
                                                    {/* <!--end:Menu link--> */}
                                                    {/* <!--begin:Menu sub--> */}
                                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
                                                        {/* <!--begin:Menu item--> */}
                                                        <div className="menu-item">
                                                            {/* <!--begin:Menu link--> */}
                                                            <a className="menu-link py-3" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank" title="Check out over 200 in-house components, plugins and ready for use solutions" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-rocket fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Components</span>
                                                            </a>
                                                            {/* <!--end:Menu link--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div className="menu-item">
                                                            {/* <!--begin:Menu link--> */}
                                                            <a className="menu-link py-3" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-abstract-26 fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Documentation</span>
                                                            </a>
                                                            {/* <!--end:Menu link--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div className="menu-item">
                                                            {/* <!--begin:Menu link--> */}
                                                            <a className="menu-link py-3" href="https://preview.keenthemes.com/metronic8/demo5/layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-switch fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Layout Builder</span>
                                                            </a>
                                                            {/* <!--end:Menu link--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                        {/* <!--begin:Menu item--> */}
                                                        <div className="menu-item">
                                                            {/* <!--begin:Menu link--> */}
                                                            <a className="menu-link py-3" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank">
                                                                <span className="menu-icon">
                                                                    <i className="ki-duotone ki-code fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                        <span className="path3"></span>
                                                                        <span className="path4"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="menu-title">Changelog v8.2.0</span>
                                                            </a>
                                                            {/* <!--end:Menu link--> */}
                                                        </div>
                                                        {/* <!--end:Menu item--> */}
                                                    </div>
                                                    {/* <!--end:Menu sub--> */}
                                                </div>
                                                {/* <!--end:Menu item--> */}
                                            </div>
                                            {/* <!--end::Menu--> */}
                                        </div>
                                        {/* <!--end::Menu wrapper--> */}
                                    </div>
                                    {/* <!--end::Navbar--> */}
                                    {/* <!--begin::Toolbar wrapper--> */}
                                    <div className="d-flex align-items-stretch flex-shrink-0">
                                        {/* <!--begin::Search--> */}
                                        <div className="d-flex align-items-stretch ms-1 ms-lg-2">
                                            {/* <!--begin::Search--> */}
                                            <div id="kt_header_search" className="header-search d-flex align-items-stretch" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto" data-kt-menu-overflow="false" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
                                                {/* <!--begin::Search toggle--> */}
                                                <div className="d-flex align-items-center" data-kt-search-element="toggle" id="kt_header_search_toggle">
                                                    <div className="btn btn-icon btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px">
                                                        <i className="ki-duotone ki-magnifier fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                </div>
                                                {/* <!--end::Search toggle--> */}
                                                {/* <!--begin::Menu--> */}
                                                <div data-kt-search-element="content" className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px">
                                                    {/* <!--begin::Wrapper--> */}
                                                    <div data-kt-search-element="wrapper">
                                                        {/* <!--begin::Form--> */}
                                                        <form data-kt-search-element="form" className="w-100 position-relative mb-3" autocomplete="off">
                                                            {/* <!--begin::Icon--> */}
                                                            <i className="ki-duotone ki-magnifier fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-0">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                            {/* <!--end::Icon--> */}
                                                            {/* <!--begin::Input--> */}
                                                            <input type="text" className="search-input form-control form-control-flush ps-10" name="search" value="" placeholder="Search..." data-kt-search-element="input" />
                                                            {/* <!--end::Input--> */}
                                                            {/* <!--begin::Spinner--> */}
                                                            <span className="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1" data-kt-search-element="spinner">
                                                                <span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
                                                            </span>
                                                            {/* <!--end::Spinner--> */}
                                                            {/* <!--begin::Reset--> */}
                                                            <span className="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none" data-kt-search-element="clear">
                                                                <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </span>
                                                            {/* <!--end::Reset--> */}
                                                            {/* <!--begin::Toolbar--> */}
                                                            <div className="position-absolute top-50 end-0 translate-middle-y" data-kt-search-element="toolbar">
                                                                {/* <!--begin::Preferences toggle--> */}
                                                                <div data-kt-search-element="preferences-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1" data-bs-toggle="tooltip" title="Show search preferences">
                                                                    <i className="ki-duotone ki-setting-2 fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </div>
                                                                {/* <!--end::Preferences toggle--> */}
                                                                {/* <!--begin::Advanced search toggle--> */}
                                                                <div data-kt-search-element="advanced-options-form-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary" data-bs-toggle="tooltip" title="Show more search options">
                                                                    <i className="ki-duotone ki-down fs-2"></i>
                                                                </div>
                                                                {/* <!--end::Advanced search toggle--> */}
                                                            </div>
                                                            {/* <!--end::Toolbar--> */}
                                                        </form>
                                                        {/* <!--end::Form--> */}
                                                        {/* <!--begin::Separator--> */}
                                                        <div className="separator border-gray-200 mb-6"></div>
                                                        {/* <!--end::Separator--> */}
                                                        {/* <!--begin::Recently viewed--> */}
                                                        <div data-kt-search-element="results" className="d-none">
                                                            {/* <!--begin::Items--> */}
                                                            <div className="scroll-y mh-200px mh-lg-350px">
                                                                {/* <!--begin::Category title--> */}
                                                                <h3 className="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">Users</h3>
                                                                {/* <!--end::Category title--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <img src="/fe/dist/assets/media/avatars/300-6.jpg" alt="" />
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                        <span className="fs-6 fw-semibold">Karina Clark</span>
                                                                        <span className="fs-7 fw-semibold text-muted">Marketing Manager</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <img src="/fe/dist/assets/media/avatars/300-2.jpg" alt="" />
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                        <span className="fs-6 fw-semibold">Olivia Bold</span>
                                                                        <span className="fs-7 fw-semibold text-muted">Software Engineer</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <img src="/fe/dist/assets/media/avatars/300-9.jpg" alt="" />
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                        <span className="fs-6 fw-semibold">Ana Clark</span>
                                                                        <span className="fs-7 fw-semibold text-muted">UI/UX Designer</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <img src="/fe/dist/assets/media/avatars/300-14.jpg" alt="" />
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                        <span className="fs-6 fw-semibold">Nick Pitola</span>
                                                                        <span className="fs-7 fw-semibold text-muted">Art Director</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <img src="/fe/dist/assets/media/avatars/300-11.jpg" alt="" />
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                        <span className="fs-6 fw-semibold">Edward Kulnic</span>
                                                                        <span className="fs-7 fw-semibold text-muted">System Administrator</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Category title--> */}
                                                                <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Customers</h3>
                                                                {/* <!--end::Category title--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <img className="w-20px h-20px" src="/fe/dist/assets/media/svg/brand-logos/volicity-9.svg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                        <span className="fs-6 fw-semibold">Company Rbranding</span>
                                                                        <span className="fs-7 fw-semibold text-muted">UI Design</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <img className="w-20px h-20px" src="/fe/dist/assets/media/svg/brand-logos/tvit.svg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                        <span className="fs-6 fw-semibold">Company Re-branding</span>
                                                                        <span className="fs-7 fw-semibold text-muted">Web Development</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <img className="w-20px h-20px" src="/fe/dist/assets/media/svg/misc/infography.svg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                        <span className="fs-6 fw-semibold">Business Analytics App</span>
                                                                        <span className="fs-7 fw-semibold text-muted">Administration</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <img className="w-20px h-20px" src="/fe/dist/assets/media/svg/brand-logos/leaf.svg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                        <span className="fs-6 fw-semibold">EcoLeaf App Launch</span>
                                                                        <span className="fs-7 fw-semibold text-muted">Marketing</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <img className="w-20px h-20px" src="/fe/dist/assets/media/svg/brand-logos/tower.svg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                        <span className="fs-6 fw-semibold">Tower Group Website</span>
                                                                        <span className="fs-7 fw-semibold text-muted">Google Adwords</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Category title--> */}
                                                                <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Projects</h3>
                                                                {/* <!--end::Category title--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <i className="ki-duotone ki-notepad fs-2 text-primary">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                                <span className="path3"></span>
                                                                                <span className="path4"></span>
                                                                                <span className="path5"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column">
                                                                        <span className="fs-6 fw-semibold">Si-Fi Project by AU Themes</span>
                                                                        <span className="fs-7 fw-semibold text-muted">#45670</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <i className="ki-duotone ki-frame fs-2 text-primary">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                                <span className="path3"></span>
                                                                                <span className="path4"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column">
                                                                        <span className="fs-6 fw-semibold">Shopix Mobile App Planning</span>
                                                                        <span className="fs-7 fw-semibold text-muted">#45690</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <i className="ki-duotone ki-message-text-2 fs-2 text-primary">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                                <span className="path3"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column">
                                                                        <span className="fs-6 fw-semibold">Finance Monitoring SAAS Discussion</span>
                                                                        <span className="fs-7 fw-semibold text-muted">#21090</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <i className="ki-duotone ki-profile-circle fs-2 text-primary">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                                <span className="path3"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column">
                                                                        <span className="fs-6 fw-semibold">Dashboard Analitics Launch</span>
                                                                        <span className="fs-7 fw-semibold text-muted">#34560</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </a>
                                                                {/* <!--end::Item--> */}
                                                            </div>
                                                            {/* <!--end::Items--> */}
                                                        </div>
                                                        {/* <!--end::Recently viewed--> */}
                                                        {/* <!--begin::Recently viewed--> */}
                                                        <div className="mb-5" data-kt-search-element="main">
                                                            {/* <!--begin::Heading--> */}
                                                            <div className="d-flex flex-stack fw-semibold mb-4">
                                                                {/* <!--begin::Label--> */}
                                                                <span className="text-muted fs-6 me-2">Recently Searched:</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Heading--> */}
                                                            {/* <!--begin::Items--> */}
                                                            <div className="scroll-y mh-200px mh-lg-325px">
                                                                {/* <!--begin::Item--> */}
                                                                <div className="d-flex align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <i className="ki-duotone ki-laptop fs-2 text-primary">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">BoomApp by Keenthemes</a>
                                                                        <span className="fs-7 text-muted fw-semibold">#45789</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <div className="d-flex align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <i className="ki-duotone ki-chart-simple fs-2 text-primary">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                                <span className="path3"></span>
                                                                                <span className="path4"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Kept API Project Meeting</a>
                                                                        <span className="fs-7 text-muted fw-semibold">#84050</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <div className="d-flex align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <i className="ki-duotone ki-chart fs-2 text-primary">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"KPI Monitoring App Launch</a>
                                                                        <span className="fs-7 text-muted fw-semibold">#84250</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <div className="d-flex align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Project Reference FAQ</a>
                                                                        <span className="fs-7 text-muted fw-semibold">#67945</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <div className="d-flex align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <i className="ki-duotone ki-sms fs-2 text-primary">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"FitPro App Development</a>
                                                                        <span className="fs-7 text-muted fw-semibold">#84250</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <div className="d-flex align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <i className="ki-duotone ki-bank fs-2 text-primary">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Shopix Mobile App</a>
                                                                        <span className="fs-7 text-muted fw-semibold">#45690</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Item--> */}
                                                                {/* <!--begin::Item--> */}
                                                                <div className="d-flex align-items-center mb-5">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-40px me-4">
                                                                        <span className="symbol-label bg-light">
                                                                            <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="d-flex flex-column">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Landing UI Design" Launch</a>
                                                                        <span className="fs-7 text-muted fw-semibold">#24005</span>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Item--> */}
                                                            </div>
                                                            {/* <!--end::Items--> */}
                                                        </div>
                                                        {/* <!--end::Recently viewed--> */}
                                                        {/* <!--begin::Empty--> */}
                                                        <div data-kt-search-element="empty" className="text-center d-none">
                                                            {/* <!--begin::Icon--> */}
                                                            <div className="pt-10 pb-10">
                                                                <i className="ki-duotone ki-search-list fs-4x opacity-50">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                </i>
                                                            </div>
                                                            {/* <!--end::Icon--> */}
                                                            {/* <!--begin::Message--> */}
                                                            <div className="pb-15 fw-semibold">
                                                                <h3 className="text-gray-600 fs-5 mb-2">No result found</h3>
                                                                <div className="text-muted fs-7">Please try again with a different query</div>
                                                            </div>
                                                            {/* <!--end::Message--> */}
                                                        </div>
                                                        {/* <!--end::Empty--> */}
                                                    </div>
                                                    {/* <!--end::Wrapper--> */}
                                                    {/* <!--begin::Preferences--> */}
                                                    <form data-kt-search-element="advanced-options-form" className="pt-1 d-none">
                                                        {/* <!--begin::Heading--> */}
                                                        <h3 className="fw-semibold text-dark mb-7">Advanced Search</h3>
                                                        {/* <!--end::Heading--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="mb-5">
                                                            <input type="text" className="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query" />
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="mb-5">
                                                            {/* <!--begin::Radio group--> */}
                                                            <div className="nav-group nav-group-fluid">
                                                                {/* <!--begin::Option--> */}
                                                                <label>
                                                                    <input type="radio" className="btn-check" name="type" value="has" checked="checked" />
                                                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">All</span>
                                                                </label>
                                                                {/* <!--end::Option--> */}
                                                                {/* <!--begin::Option--> */}
                                                                <label>
                                                                    <input type="radio" className="btn-check" name="type" value="users" />
                                                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Users</span>
                                                                </label>
                                                                {/* <!--end::Option--> */}
                                                                {/* <!--begin::Option--> */}
                                                                <label>
                                                                    <input type="radio" className="btn-check" name="type" value="orders" />
                                                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Orders</span>
                                                                </label>
                                                                {/* <!--end::Option--> */}
                                                                {/* <!--begin::Option--> */}
                                                                <label>
                                                                    <input type="radio" className="btn-check" name="type" value="projects" />
                                                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Projects</span>
                                                                </label>
                                                                {/* <!--end::Option--> */}
                                                            </div>
                                                            {/* <!--end::Radio group--> */}
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="mb-5">
                                                            <input type="text" name="assignedto" className="form-control form-control-sm form-control-solid" placeholder="Assigned to" value="" />
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="mb-5">
                                                            <input type="text" name="collaborators" className="form-control form-control-sm form-control-solid" placeholder="Collaborators" value="" />
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="mb-5">
                                                            {/* <!--begin::Radio group--> */}
                                                            <div className="nav-group nav-group-fluid">
                                                                {/* <!--begin::Option--> */}
                                                                <label>
                                                                    <input type="radio" className="btn-check" name="attachment" value="has" checked="checked" />
                                                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">Has attachment</span>
                                                                </label>
                                                                {/* <!--end::Option--> */}
                                                                {/* <!--begin::Option--> */}
                                                                <label>
                                                                    <input type="radio" className="btn-check" name="attachment" value="any" />
                                                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Any</span>
                                                                </label>
                                                                {/* <!--end::Option--> */}
                                                            </div>
                                                            {/* <!--end::Radio group--> */}
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="mb-5">
                                                            <select name="timezone" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="date_period" className="form-select form-select-sm form-select-solid">
                                                                <option value="next">Within the next</option>
                                                                <option value="last">Within the last</option>
                                                                <option value="between">Between</option>
                                                                <option value="on">On</option>
                                                            </select>
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="row mb-8">
                                                            {/* <!--begin::Col--> */}
                                                            <div className="col-6">
                                                                <input type="number" name="date_number" className="form-control form-control-sm form-control-solid" placeholder="Lenght" value="" />
                                                            </div>
                                                            {/* <!--end::Col--> */}
                                                            {/* <!--begin::Col--> */}
                                                            <div className="col-6">
                                                                <select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="Period" className="form-select form-select-sm form-select-solid">
                                                                    <option value="days">Days</option>
                                                                    <option value="weeks">Weeks</option>
                                                                    <option value="months">Months</option>
                                                                    <option value="years">Years</option>
                                                                </select>
                                                            </div>
                                                            {/* <!--end::Col--> */}
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Actions--> */}
                                                        <div className="d-flex justify-content-end">
                                                            <button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">Cancel</button>
                                                            <a href="../../demo5/dist/pages/search/horizontal.html" className="btn btn-sm fw-bold btn-primary" data-kt-search-element="advanced-options-form-search">Search</a>
                                                        </div>
                                                        {/* <!--end::Actions--> */}
                                                    </form>
                                                    {/* <!--end::Preferences--> */}
                                                    {/* <!--begin::Preferences--> */}
                                                    <form data-kt-search-element="preferences" className="pt-1 d-none">
                                                        {/* <!--begin::Heading--> */}
                                                        <h3 className="fw-semibold text-dark mb-7">Search Preferences</h3>
                                                        {/* <!--end::Heading--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="pb-4 border-bottom">
                                                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Projects</span>
                                                                <input className="form-check-input" type="checkbox" value="1" checked="checked" />
                                                            </label>
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="py-4 border-bottom">
                                                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Targets</span>
                                                                <input className="form-check-input" type="checkbox" value="1" checked="checked" />
                                                            </label>
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="py-4 border-bottom">
                                                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Affiliate Programs</span>
                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                            </label>
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="py-4 border-bottom">
                                                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Referrals</span>
                                                                <input className="form-check-input" type="checkbox" value="1" checked="checked" />
                                                            </label>
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="py-4 border-bottom">
                                                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Users</span>
                                                                <input className="form-check-input" type="checkbox" value="1" />
                                                            </label>
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Actions--> */}
                                                        <div className="d-flex justify-content-end pt-7">
                                                            <button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">Cancel</button>
                                                            <button type="submit" className="btn btn-sm fw-bold btn-primary">Save Changes</button>
                                                        </div>
                                                        {/* <!--end::Actions--> */}
                                                    </form>
                                                    {/* <!--end::Preferences--> */}
                                                </div>
                                                {/* <!--end::Menu--> */}
                                            </div>
                                            {/* <!--end::Search--> */}
                                        </div>
                                        {/* <!--end::Search--> */}
                                        {/* <!--begin::Activities--> */}
                                        <div className="d-flex align-items-center ms-1 ms-lg-2">
                                            {/* <!--begin::Drawer toggle--> */}
                                            <div className="btn btn-icon btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px" id="kt_activities_toggle">
                                                <i className="ki-duotone ki-chart-simple fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                    <span className="path4"></span>
                                                </i>
                                            </div>
                                            {/* <!--end::Drawer toggle--> */}
                                        </div>
                                        {/* <!--end::Activities--> */}
                                        {/* <!--begin::Chat--> */}
                                        <div className="d-flex align-items-center ms-1 ms-lg-2">
                                            {/* <!--begin::Menu wrapper--> */}
                                            <div className="btn btn-icon btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px position-relative" id="kt_drawer_chat_toggle">
                                                <i className="ki-duotone ki-message-text-2 fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                </i>
                                                <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
                                            </div>
                                            {/* <!--end::Menu wrapper--> */}
                                        </div>
                                        {/* <!--end::Chat--> */}
                                        {/* <!--begin::Notifications--> */}
                                        <div className="d-flex align-items-center ms-1 ms-lg-2">
                                            {/* <!--begin::Menu- wrapper--> */}
                                            <div className="btn btn-icon btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px position-relative" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                                <i className="ki-duotone ki-abstract-36 fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </div>
                                            {/* <!--begin::Menu--> */}
                                            <div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true" id="kt_menu_notifications">
                                                {/* <!--begin::Heading--> */}
                                                <div className="d-flex flex-column bgi-no-repeat rounded-top" style={{ backgroundImage: "url('assets/media/misc/menu-header-bg.jpg')" }}>
                                                    {/* <!--begin::Title--> */}
                                                    <h3 className="text-white fw-semibold px-9 mt-10 mb-6">Notifications
                                                        <span className="fs-8 opacity-75 ps-3">24 reports</span></h3>
                                                    {/* <!--end::Title--> */}
                                                    {/* <!--begin::Tabs--> */}
                                                    <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
                                                        <li className="nav-item">
                                                            <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
                                                        </li>
                                                    </ul>
                                                    {/* <!--end::Tabs--> */}
                                                </div>
                                                {/* <!--end::Heading--> */}
                                                {/* <!--begin::Tab content--> */}
                                                <div className="tab-content">
                                                    {/* <!--begin::Tab panel--> */}
                                                    <div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
                                                        {/* <!--begin::Items--> */}
                                                        <div className="scroll-y mh-325px my-5 px-8">
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-35px me-4">
                                                                        <span className="symbol-label bg-light-primary">
                                                                            <i className="ki-duotone ki-abstract-28 fs-2 text-primary">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="mb-0 me-2">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Alice</a>
                                                                        <div className="text-gray-400 fs-7">Phase 1 development</div>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">1 hr</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-35px me-4">
                                                                        <span className="symbol-label bg-light-danger">
                                                                            <i className="ki-duotone ki-information fs-2 text-danger">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                                <span className="path3"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="mb-0 me-2">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">HR Confidential</a>
                                                                        <div className="text-gray-400 fs-7">Confidential staff documents</div>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">2 hrs</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-35px me-4">
                                                                        <span className="symbol-label bg-light-warning">
                                                                            <i className="ki-duotone ki-briefcase fs-2 text-warning">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="mb-0 me-2">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Company HR</a>
                                                                        <div className="text-gray-400 fs-7">Corporeate staff profiles</div>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">5 hrs</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-35px me-4">
                                                                        <span className="symbol-label bg-light-success">
                                                                            <i className="ki-duotone ki-abstract-12 fs-2 text-success">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="mb-0 me-2">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Redux</a>
                                                                        <div className="text-gray-400 fs-7">New frontend admin theme</div>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">2 days</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-35px me-4">
                                                                        <span className="symbol-label bg-light-primary">
                                                                            <i className="ki-duotone ki-colors-square fs-2 text-primary">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                                <span className="path3"></span>
                                                                                <span className="path4"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="mb-0 me-2">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Breafing</a>
                                                                        <div className="text-gray-400 fs-7">Product launch status update</div>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">21 Jan</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-35px me-4">
                                                                        <span className="symbol-label bg-light-info">
                                                                            <i className="ki-duotone ki-picture fs-2 text-info"></i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="mb-0 me-2">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Banner Assets</a>
                                                                        <div className="text-gray-400 fs-7">Collection of banner images</div>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">21 Jan</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center">
                                                                    {/* <!--begin::Symbol--> */}
                                                                    <div className="symbol symbol-35px me-4">
                                                                        <span className="symbol-label bg-light-warning">
                                                                            <i className="ki-duotone ki-color-swatch fs-2 text-warning">
                                                                                <span className="path1"></span>
                                                                                <span className="path2"></span>
                                                                                <span className="path3"></span>
                                                                                <span className="path4"></span>
                                                                                <span className="path5"></span>
                                                                                <span className="path6"></span>
                                                                                <span className="path7"></span>
                                                                                <span className="path8"></span>
                                                                                <span className="path9"></span>
                                                                                <span className="path10"></span>
                                                                                <span className="path11"></span>
                                                                                <span className="path12"></span>
                                                                                <span className="path13"></span>
                                                                                <span className="path14"></span>
                                                                                <span className="path15"></span>
                                                                                <span className="path16"></span>
                                                                                <span className="path17"></span>
                                                                                <span className="path18"></span>
                                                                                <span className="path19"></span>
                                                                                <span className="path20"></span>
                                                                                <span className="path21"></span>
                                                                            </i>
                                                                        </span>
                                                                    </div>
                                                                    {/* <!--end::Symbol--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <div className="mb-0 me-2">
                                                                        <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Icon Assets</a>
                                                                        <div className="text-gray-400 fs-7">Collection of SVG icons</div>
                                                                    </div>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">20 March</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                        </div>
                                                        {/* <!--end::Items--> */}
                                                        {/* <!--begin::View more--> */}
                                                        <div className="py-3 text-center border-top">
                                                            <a href="../../demo5/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                                                <i className="ki-duotone ki-arrow-right fs-5">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i></a>
                                                        </div>
                                                        {/* <!--end::View more--> */}
                                                    </div>
                                                    {/* <!--end::Tab panel--> */}
                                                    {/* <!--begin::Tab panel--> */}
                                                    <div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">
                                                        {/* <!--begin::Wrapper--> */}
                                                        <div className="d-flex flex-column px-9">
                                                            {/* <!--begin::Section--> */}
                                                            <div className="pt-10 pb-0">
                                                                {/* <!--begin::Title--> */}
                                                                <h3 className="text-dark text-center fw-bold">Get Pro Access</h3>
                                                                {/* <!--end::Title--> */}
                                                                {/* <!--begin::Text--> */}
                                                                <div className="text-center text-gray-600 fw-semibold pt-1">Outlines keep you honest. They stoping you from amazing poorly about drive</div>
                                                                {/* <!--end::Text--> */}
                                                                {/* <!--begin::Action--> */}
                                                                <div className="text-center mt-5 mb-9">
                                                                    <a href="#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
                                                                </div>
                                                                {/* <!--end::Action--> */}
                                                            </div>
                                                            {/* <!--end::Section--> */}
                                                            {/* <!--begin::Illustration--> */}
                                                            <div className="text-center px-4">
                                                                <img className="mw-100 mh-200px" alt="image" src="/fe/dist/assets/media/illustrations/sketchy-1/1.png" />
                                                            </div>
                                                            {/* <!--end::Illustration--> */}
                                                        </div>
                                                        {/* <!--end::Wrapper--> */}
                                                    </div>
                                                    {/* <!--end::Tab panel--> */}
                                                    {/* <!--begin::Tab panel--> */}
                                                    <div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
                                                        {/* <!--begin::Items--> */}
                                                        <div className="scroll-y mh-325px my-5 px-8">
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center me-2">
                                                                    {/* <!--begin::Code--> */}
                                                                    <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                                    {/* <!--end::Code--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <a href="#" className="text-gray-800 text-hover-primary fw-semibold">New order</a>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">Just now</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center me-2">
                                                                    {/* <!--begin::Code--> */}
                                                                    <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                                    {/* <!--end::Code--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <a href="#" className="text-gray-800 text-hover-primary fw-semibold">New customer</a>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">2 hrs</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center me-2">
                                                                    {/* <!--begin::Code--> */}
                                                                    <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                                    {/* <!--end::Code--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Payment process</a>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">5 hrs</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center me-2">
                                                                    {/* <!--begin::Code--> */}
                                                                    <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                                    {/* <!--end::Code--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Search query</a>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">2 days</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center me-2">
                                                                    {/* <!--begin::Code--> */}
                                                                    <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                                    {/* <!--end::Code--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <a href="#" className="text-gray-800 text-hover-primary fw-semibold">API connection</a>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">1 week</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center me-2">
                                                                    {/* <!--begin::Code--> */}
                                                                    <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                                    {/* <!--end::Code--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Database restore</a>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">Mar 5</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center me-2">
                                                                    {/* <!--begin::Code--> */}
                                                                    <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                                    {/* <!--end::Code--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <a href="#" className="text-gray-800 text-hover-primary fw-semibold">System update</a>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">May 15</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center me-2">
                                                                    {/* <!--begin::Code--> */}
                                                                    <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                                    {/* <!--end::Code--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Server OS update</a>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">Apr 3</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center me-2">
                                                                    {/* <!--begin::Code--> */}
                                                                    <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                                    {/* <!--end::Code--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <a href="#" className="text-gray-800 text-hover-primary fw-semibold">API rollback</a>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">Jun 30</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center me-2">
                                                                    {/* <!--begin::Code--> */}
                                                                    <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                                    {/* <!--end::Code--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Refund process</a>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">Jul 10</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center me-2">
                                                                    {/* <!--begin::Code--> */}
                                                                    <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                                    {/* <!--end::Code--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Withdrawal process</a>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">Sep 10</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack py-4">
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center me-2">
                                                                    {/* <!--begin::Code--> */}
                                                                    <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                                    {/* <!--end::Code--> */}
                                                                    {/* <!--begin::Title--> */}
                                                                    <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Mail tasks</a>
                                                                    {/* <!--end::Title--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <span className="badge badge-light fs-8">Dec 10</span>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                        </div>
                                                        {/* <!--end::Items--> */}
                                                        {/* <!--begin::View more--> */}
                                                        <div className="py-3 text-center border-top">
                                                            <a href="../../demo5/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                                                <i className="ki-duotone ki-arrow-right fs-5">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i></a>
                                                        </div>
                                                        {/* <!--end::View more--> */}
                                                    </div>
                                                    {/* <!--end::Tab panel--> */}
                                                </div>
                                                {/* <!--end::Tab content--> */}
                                            </div>
                                            {/* <!--end::Menu--> */}
                                            {/* <!--end::Menu wrapper--> */}
                                        </div>
                                        {/* <!--end::Notifications--> */}
                                        {/* <!--begin::Theme mode--> */}
                                        <div className="d-flex align-items-center ms-1 ms-lg-2">
                                            {/* <!--begin::Menu toggle--> */}
                                            <a href="#" className="btn btn-icon btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                                <i className="ki-duotone ki-night-day theme-light-show fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                    <span className="path4"></span>
                                                    <span className="path5"></span>
                                                    <span className="path6"></span>
                                                    <span className="path7"></span>
                                                    <span className="path8"></span>
                                                    <span className="path9"></span>
                                                    <span className="path10"></span>
                                                </i>
                                                <i className="ki-duotone ki-moon theme-dark-show fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </a>
                                            {/* <!--begin::Menu toggle--> */}
                                            {/* <!--begin::Menu--> */}
                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-3 my-0">
                                                    <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
                                                        <span className="menu-icon" data-kt-element="icon">
                                                            <i className="ki-duotone ki-night-day fs-2">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                                <span className="path4"></span>
                                                                <span className="path5"></span>
                                                                <span className="path6"></span>
                                                                <span className="path7"></span>
                                                                <span className="path8"></span>
                                                                <span className="path9"></span>
                                                                <span className="path10"></span>
                                                            </i>
                                                        </span>
                                                        <span className="menu-title">Light</span>
                                                    </a>
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-3 my-0">
                                                    <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
                                                        <span className="menu-icon" data-kt-element="icon">
                                                            <i className="ki-duotone ki-moon fs-2">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </span>
                                                        <span className="menu-title">Dark</span>
                                                    </a>
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-3 my-0">
                                                    <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
                                                        <span className="menu-icon" data-kt-element="icon">
                                                            <i className="ki-duotone ki-screen fs-2">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                                <span className="path4"></span>
                                                            </i>
                                                        </span>
                                                        <span className="menu-title">System</span>
                                                    </a>
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                            </div>
                                            {/* <!--end::Menu--> */}
                                        </div>
                                        {/* <!--end::Theme mode--> */}
                                        {/* <!--begin::Sidebar Toggler--> */}
                                        <div className="d-flex align-items-center ms-1 ms-lg-2 d-lg-none" title="Show header menu">
                                            <button className="btn btn-icon btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px" id="kt_sidebar_toggle">
                                                <i className="ki-duotone ki-document fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </button>
                                        </div>
                                        {/* <!--end::Sidebar Toggler--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex align-items-center ms-lg-5" id="kt_header_user_menu_toggle">
                                            {/* <!--begin::User info--> */}
                                            <div className="btn btn-active-light d-flex align-items-center bg-hover-light py-2 px-2 px-md-3" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                                {/* <!--begin::Name--> */}
                                                <div className="d-none d-md-flex flex-column align-items-end justify-content-center me-2">
                                                    <span className="text-muted fs-7 fw-semibold lh-1 mb-2">Hello</span>
                                                    <span className="text-dark fs-base fw-bold lh-1">Richard</span>
                                                </div>
                                                {/* <!--end::Name--> */}
                                                {/* <!--begin::Symbol--> */}
                                                <div className="symbol symbol-30px symbol-md-40px">
                                                    <img src="/fe/dist/assets/media/avatars/300-1.jpg" alt="image" />
                                                </div>
                                                {/* <!--end::Symbol--> */}
                                            </div>
                                            {/* <!--end::User info--> */}
                                            {/* <!--begin::User account menu--> */}
                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-3">
                                                    <div className="menu-content d-flex align-items-center px-3">
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-50px me-5">
                                                            <img alt="Logo" src="/fe/dist/assets/media/avatars/300-1.jpg" />
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Username--> */}
                                                        <div className="d-flex flex-column">
                                                            <div className="fw-bold d-flex align-items-center fs-5">Max Smith
                                                                <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
                                                            <a href="#" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
                                                        </div>
                                                        {/* <!--end::Username--> */}
                                                    </div>
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                                {/* <!--begin::Menu separator--> */}
                                                <div className="separator my-2"></div>
                                                {/* <!--end::Menu separator--> */}
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-5">
                                                    <a href="../../demo5/dist/account/overview.html" className="menu-link px-5">My Profile</a>
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-5">
                                                    <a href="../../demo5/dist/apps/projects/list.html" className="menu-link px-5">
                                                        <span className="menu-text">My Projects</span>
                                                        <span className="menu-badge">
                                                            <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
                                                        </span>
                                                    </a>
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                                    <a href="#" className="menu-link px-5">
                                                        <span className="menu-title">My Subscription</span>
                                                        <span className="menu-arrow"></span>
                                                    </a>
                                                    {/* <!--begin::Menu sub--> */}
                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                        {/* <!--begin::Menu item--> */}
                                                        <div className="menu-item px-3">
                                                            <a href="../../demo5/dist/account/referrals.html" className="menu-link px-5">Referrals</a>
                                                        </div>
                                                        {/* <!--end::Menu item--> */}
                                                        {/* <!--begin::Menu item--> */}
                                                        <div className="menu-item px-3">
                                                            <a href="../../demo5/dist/account/billing.html" className="menu-link px-5">Billing</a>
                                                        </div>
                                                        {/* <!--end::Menu item--> */}
                                                        {/* <!--begin::Menu item--> */}
                                                        <div className="menu-item px-3">
                                                            <a href="../../demo5/dist/account/statements.html" className="menu-link px-5">Payments</a>
                                                        </div>
                                                        {/* <!--end::Menu item--> */}
                                                        {/* <!--begin::Menu item--> */}
                                                        <div className="menu-item px-3">
                                                            <a href="../../demo5/dist/account/statements.html" className="menu-link d-flex flex-stack px-5">Statements
                                                                <span className="ms-2 lh-0" data-bs-toggle="tooltip" title="View your statements">
                                                                    <i className="ki-duotone ki-information-5 fs-5">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                        <span className="path3"></span>
                                                                    </i>
                                                                </span></a>
                                                        </div>
                                                        {/* <!--end::Menu item--> */}
                                                        {/* <!--begin::Menu separator--> */}
                                                        <div className="separator my-2"></div>
                                                        {/* <!--end::Menu separator--> */}
                                                        {/* <!--begin::Menu item--> */}
                                                        <div className="menu-item px-3">
                                                            <div className="menu-content px-3">
                                                                <label className="form-check form-switch form-check-custom form-check-solid">
                                                                    <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
                                                                    <span className="form-check-label text-muted fs-7">Notifications</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {/* <!--end::Menu item--> */}
                                                    </div>
                                                    {/* <!--end::Menu sub--> */}
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-5">
                                                    <a href="../../demo5/dist/account/statements.html" className="menu-link px-5">My Statements</a>
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                                {/* <!--begin::Menu separator--> */}
                                                <div className="separator my-2"></div>
                                                {/* <!--end::Menu separator--> */}
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                                    <a href="#" className="menu-link px-5">
                                                        <span className="menu-title position-relative">Language
                                                            <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
                                                                <img className="w-15px h-15px rounded-1 ms-2" src="/fe/dist/assets/media/flags/united-states.svg" alt="" /></span></span>
                                                    </a>
                                                    {/* <!--begin::Menu sub--> */}
                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                        {/* <!--begin::Menu item--> */}
                                                        <div className="menu-item px-3">
                                                            <a href="../../demo5/dist/account/settings.html" className="menu-link d-flex px-5 active">
                                                                <span className="symbol symbol-20px me-4">
                                                                    <img className="rounded-1" src="/fe/dist/assets/media/flags/united-states.svg" alt="" />
                                                                </span>English</a>
                                                        </div>
                                                        {/* <!--end::Menu item--> */}
                                                        {/* <!--begin::Menu item--> */}
                                                        <div className="menu-item px-3">
                                                            <a href="../../demo5/dist/account/settings.html" className="menu-link d-flex px-5">
                                                                <span className="symbol symbol-20px me-4">
                                                                    <img className="rounded-1" src="/fe/dist/assets/media/flags/spain.svg" alt="" />
                                                                </span>Spanish</a>
                                                        </div>
                                                        {/* <!--end::Menu item--> */}
                                                        {/* <!--begin::Menu item--> */}
                                                        <div className="menu-item px-3">
                                                            <a href="../../demo5/dist/account/settings.html" className="menu-link d-flex px-5">
                                                                <span className="symbol symbol-20px me-4">
                                                                    <img className="rounded-1" src="/fe/dist/assets/media/flags/germany.svg" alt="" />
                                                                </span>German</a>
                                                        </div>
                                                        {/* <!--end::Menu item--> */}
                                                        {/* <!--begin::Menu item--> */}
                                                        <div className="menu-item px-3">
                                                            <a href="../../demo5/dist/account/settings.html" className="menu-link d-flex px-5">
                                                                <span className="symbol symbol-20px me-4">
                                                                    <img className="rounded-1" src="/fe/dist/assets/media/flags/japan.svg" alt="" />
                                                                </span>Japanese</a>
                                                        </div>
                                                        {/* <!--end::Menu item--> */}
                                                        {/* <!--begin::Menu item--> */}
                                                        <div className="menu-item px-3">
                                                            <a href="../../demo5/dist/account/settings.html" className="menu-link d-flex px-5">
                                                                <span className="symbol symbol-20px me-4">
                                                                    <img className="rounded-1" src="/fe/dist/assets/media/flags/france.svg" alt="" />
                                                                </span>French</a>
                                                        </div>
                                                        {/* <!--end::Menu item--> */}
                                                    </div>
                                                    {/* <!--end::Menu sub--> */}
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-5 my-1">
                                                    <a href="../../demo5/dist/account/settings.html" className="menu-link px-5">Account Settings</a>
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-5">
                                                    <a href="../../demo5/dist/authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                            </div>
                                            {/* <!--end::User account menu--> */}
                                        </div>
                                        {/* <!--end::User --> */}
                                        {/* <!--begin::Header menu toggle--> */}
                                        <div className="d-flex d-lg-none align-items-center" title="Show header menu">
                                            <button className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_header_menu_mobile_toggle">
                                                <i className="ki-duotone ki-text-align-left fs-1 fw-bold">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                    <span className="path4"></span>
                                                </i>
                                            </button>
                                        </div>
                                        {/* <!--end::Header menu toggle--> */}
                                    </div>
                                    {/* <!--end::Toolbar wrapper--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                            </div>
                            {/* <!--end::Container--> */}
                        </div>
                        {/* <!--end::Header--> */}
                        {/* <!--begin::Container--> */}
                        <div id="kt_content_container" className="d-flex flex-column-fluid align-items-stretch container-xxl">
                            {/* <!--begin::Aside--> */}
                            <div id="kt_aside" className="aside" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '225px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_toggle" data-kt-sticky="true" data-kt-sticky-name="aside-sticky" data-kt-sticky-offset="{default: false, lg: '1px'}" data-kt-sticky-width="{lg: '225px'}" data-kt-sticky-left="auto" data-kt-sticky-top="94px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
                                {/* <!--begin::Aside nav--> */}
                                <div className="hover-scroll-overlay-y my-5 my-lg-5 w-100 ps-4 ps-lg-0 pe-4 me-1" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_header" data-kt-scroll-wrappers="#kt_aside" data-kt-scroll-offset="5px">
                                    {/* <!--begin::Menu--> */}
                                    <div className="menu menu-column menu-active-bg menu-hover-bg menu-title-gray-700 fs-6 menu-rounded w-100" id="#kt_aside_menu" data-kt-menu="true">
                                        {/* <!--begin::Heading--> */}
                                        <div className="menu-item">
                                            <div className="menu-content pb-2">
                                                <span className="menu-section text-muted text-uppercase fs-7 fw-bold">Public</span>
                                            </div>
                                        </div>
                                        {/* <!--end::Heading--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item">
                                            <a href="../../demo5/dist/index.html" className="menu-link active">
                                                <span className="menu-title">All Questions</span>
                                                <span className="menu-badge">6,234</span>
                                            </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item">
                                            <a href="../../demo5/dist/apps/devs/search.html" className="menu-link">
                                                <span className="menu-title">Search</span>
                                            </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item">
                                            <a href="../../demo5/dist/apps/devs/tag.html" className="menu-link">
                                                <span className="menu-title">Tags</span>
                                            </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item">
                                            <a href="../../demo5/dist/apps/devs/ask.html" className="menu-link">
                                                <span className="menu-title">Ask Question</span>
                                            </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Heading--> */}
                                        <div className="menu-item pt-5">
                                            <div className="menu-content pb-2">
                                                <span className="menu-section text-muted text-uppercase fs-7 fw-bold">My Activity</span>
                                            </div>
                                        </div>
                                        {/* <!--end::Heading--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item">
                                            <a href="../../demo5/dist/apps/devs/question.html" className="menu-link">
                                                <span className="menu-title">My Questions</span>
                                                <span className="menu-badge">24</span>
                                            </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item">
                                            <a href="../../demo5/dist/index.html" className="menu-link">
                                                <span className="menu-title">Resolved</span>
                                                <span className="menu-badge">120</span>
                                            </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item">
                                            <a href="../../demo5/dist/index.html" className="menu-link">
                                                <span className="menu-title">Enrolled</span>
                                                <span className="menu-badge">10</span>
                                            </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item">
                                            <a href="../../demo5/dist/index.html" className="menu-link">
                                                <span className="menu-title">Saved</span>
                                                <span className="menu-badge">6</span>
                                            </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Heading--> */}
                                        <div className="menu-item pt-5">
                                            <div className="menu-content pb-2">
                                                <span className="menu-section text-muted text-uppercase fs-7 fw-bold">Categories</span>
                                            </div>
                                        </div>
                                        {/* <!--end::Heading--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item">
                                            <a href="../../demo5/dist/index.html" className="menu-link">
                                                <span className="menu-title">Metronic Admin</span>
                                                <span className="menu-badge">1,400</span>
                                            </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item">
                                            <a href="../../demo5/dist/index.html" className="menu-link">
                                                <span className="menu-title">Backend Integration</span>
                                                <span className="menu-badge">235</span>
                                            </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item">
                                            <a href="../../demo5/dist/index.html" className="menu-link">
                                                <span className="menu-title">Suggestions</span>
                                                <span className="menu-badge">25</span>
                                            </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item">
                                            <a href="../../demo5/dist/index.html" className="menu-link">
                                                <span className="menu-title">Pre-sale Questions</span>
                                                <span className="menu-badge">145</span>
                                            </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item">
                                            <a href="../../demo5/dist/index.html" className="menu-link">
                                                <span className="menu-title">Laravel Starter Kit</span>
                                                <span className="menu-badge">750</span>
                                            </a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Collapse--> */}
                                        <div className="collapse" id="kt_aside_categories_more">
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item">
                                                <a href="../../demo5/dist/index.html" className="menu-link">
                                                    <span className="menu-title">Blazor Integration</span>
                                                    <span className="menu-badge">100</span>
                                                </a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item">
                                                <a href="../../demo5/dist/index.html" className="menu-link">
                                                    <span className="menu-title">Django Dashboard</span>
                                                    <span className="menu-badge">90</span>
                                                </a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item">
                                                <a href="../../demo5/dist/index.html" className="menu-link">
                                                    <span className="menu-title">Rails CRUD</span>
                                                    <span className="menu-badge">14</span>
                                                </a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item">
                                                <a href="../../demo5/dist/index.html" className="menu-link">
                                                    <span className="menu-title">.NET Starter Kit</span>
                                                    <span className="menu-badge">30</span>
                                                </a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                        </div>
                                        {/* <!--end::Collapse--> */}
                                        {/* <!--begin::Heading--> */}
                                        <div className="menu-item">
                                            <div className="menu-link">
                                                <a hred="#" className="menu-title text-muted fs-7" id="kt_aside_categories_toggle" data-bs-toggle="collapse" data-bs-target="#kt_aside_categories_more">More Categories</a>
                                            </div>
                                        </div>
                                        {/* <!--end::Heading--> */}
                                    </div>
                                    {/* <!--end::Menu--> */}
                                </div>
                                {/* <!--end::Aside nav--> */}
                            </div>
                            {/* <!--end::Aside--> */}
                            {/* <!--begin::Wrapper--> */}
                            <div className="wrapper d-flex flex-column flex-row-fluid mt-5 mt-lg-10" id="kt_wrapper">
                                {/* <!--begin::Content--> */}
                                <div className="content flex-column-fluid" id="kt_content">
                                    {/* <!--begin::Toolbar--> */}
                                    <div className="toolbar d-flex flex-stack flex-wrap mb-5 mb-lg-7" id="kt_toolbar">
                                        {/* <!--begin::Page title--> */}
                                        <div className="page-title d-flex flex-column py-1">
                                            {/* <!--begin::Title--> */}
                                            <h1 className="d-flex align-items-center my-1">
                                                <span className="text-dark fw-bold fs-1">All Questions</span>
                                                {/* <!--begin::Description--> */}
                                                <small className="text-muted fs-6 fw-semibold ms-1">(6,299)</small>
                                                {/* <!--end::Description--> */}
                                            </h1>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Page title--> */}
                                        {/* <!--begin::Actions--> */}
                                        <div className="d-flex align-items-center py-1">
                                            {/* <!--begin::Button--> */}
                                            <a href="../../demo5/dist/apps/devs/ask.html" className="btn btn-flex btn-sm btn-primary fw-bold border-0 fs-6 h-40px" id="kt_toolbar_primary_button">Ask Question</a>
                                            {/* <!--end::Button--> */}
                                        </div>
                                        {/* <!--end::Actions--> */}
                                    </div>
                                    {/* <!--end::Toolbar--> */}
                                    {/* <!--begin::Post--> */}
                                    <div className="post" id="kt_post">
                                        {/* <!--begin::Questions--> */}
                                        <div className="mb-10">
                                            {/* <!--begin::Question--> */}
                                            <div className="mb-0">
                                                {/* <!--begin::Head--> */}
                                                <div className="d-flex align-items-center mb-4">
                                                    {/* <!--begin::Title--> */}
                                                    <a href="../../demo5/dist/apps/devs/question.html" className="fs-2 fw-bold text-gray-900 text-hover-primary me-1">How to use Metronic with Django Framework ?</a>
                                                    {/* <!--end::Title--> */}
                                                    {/* <!--begin::Icons--> */}
                                                    <div className="d-flex align-items-center">
                                                        <span className="ms-1" data-bs-toggle="tooltip" title="New question">
                                                            <i className="ki-duotone ki-information-5 text-primary fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>
                                                        <span className="ms-1" data-bs-toggle="tooltip" title="User replied">
                                                            <i className="ki-duotone ki-sms text-danger fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </span>
                                                    </div>
                                                    {/* <!--end::Icons--> */}
                                                </div>
                                                {/* <!--end::Head--> */}
                                                {/* <!--begin::Summary--> */}
                                                <div className="fs-base fw-normal text-gray-700 mb-4">I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.</div>
                                                {/* <!--end::Summary--> */}
                                                {/* <!--begin::Foot--> */}
                                                <div className="d-flex flex-stack flex-wrap">
                                                    {/* <!--begin::Author--> */}
                                                    <div className="d-flex align-items-center py-1">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-35px me-2">
                                                            <div className="symbol-label bg-light-success fs-3 fw-semibold text-success text-uppercase">J</div>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Name--> */}
                                                        <div className="d-flex flex-column align-items-start justify-content-center">
                                                            <span className="text-gray-900 fs-7 fw-semibold lh-1 mb-2">James Hunt</span>
                                                            <span className="text-muted fs-8 fw-semibold lh-1">24 minutes ago</span>
                                                        </div>
                                                        {/* <!--end::Name--> */}
                                                    </div>
                                                    {/* <!--end::Author--> */}
                                                    {/* <!--begin::Info--> */}
                                                    <div className="d-flex align-items-center py-1">
                                                        {/* <!--begin::Answers--> */}
                                                        <a href="../../demo5/dist/apps/devs/question.html#answers" className="btn btn-sm btn-outline btn-outline-dashed btn-outline-default px-4 me-2">16 Answers</a>
                                                        {/* <!--end::Answers--> */}
                                                        {/* <!--begin::Tags--> */}
                                                        <a href="../../demo5/dist/apps/devs/tag.html" className="btn btn-sm btn-light px-4 me-2">Metronic</a>
                                                        {/* <!--end::Tags--> */}
                                                        {/* <!--begin::Upvote--> */}
                                                        <a href="#" className="btn btn-sm btn-flex btn-light px-3" data-bs-toggle="tooltip" title="Upvote this question" data-bs-dismiss="click">23
                                                            <i className="ki-duotone ki-black-right fs-3ms-2 me-0 fs-3"></i></a>
                                                        {/* <!--end::Upvote--> */}
                                                    </div>
                                                    {/* <!--end::Info--> */}
                                                </div>
                                                {/* <!--end::Foot--> */}
                                            </div>
                                            {/* <!--end::Question--> */}
                                            {/* <!--begin::Separator--> */}
                                            <div className="separator separator-dashed border-gray-300 my-8"></div>
                                            {/* <!--end::Separator--> */}
                                            {/* <!--begin::Question--> */}
                                            <div className="mb-0">
                                                {/* <!--begin::Head--> */}
                                                <div className="d-flex align-items-center mb-4">
                                                    {/* <!--begin::Title--> */}
                                                    <a href="../../demo5/dist/apps/devs/question.html" className="fs-2 fw-bold text-gray-900 text-hover-primary me-1">When to expect new version of Laravel ?</a>
                                                    {/* <!--end::Title--> */}
                                                    {/* <!--begin::Icons--> */}
                                                    <div className="d-flex align-items-center">
                                                        <span className="ms-1" data-bs-toggle="tooltip" title="In-process">
                                                            <i className="ki-duotone ki-information-5 text-warning fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>
                                                    </div>
                                                    {/* <!--end::Icons--> */}
                                                </div>
                                                {/* <!--end::Head--> */}
                                                {/* <!--begin::Summary--> */}
                                                <div className="fs-base fw-normal text-gray-700 mb-4">When approx. is the next update for the Laravel version planned? Waiting for the CRUD, 2nd factor etc. features before starting my project. Also can we expect the Laravel + Vue version in the next update ?</div>
                                                {/* <!--end::Summary--> */}
                                                {/* <!--begin::Foot--> */}
                                                <div className="d-flex flex-stack flex-wrap">
                                                    {/* <!--begin::Author--> */}
                                                    <div className="d-flex align-items-center py-1">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-35px me-2">
                                                            <img src="/fe/dist/assets/media/avatars/300-2.jpg" alt="user" />
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Name--> */}
                                                        <div className="d-flex flex-column align-items-start justify-content-center">
                                                            <span className="text-gray-900 fs-7 fw-semibold lh-1 mb-2">Sandra Piquet</span>
                                                            <span className="text-muted fs-8 fw-semibold lh-1">1 day ago</span>
                                                        </div>
                                                        {/* <!--end::Name--> */}
                                                    </div>
                                                    {/* <!--end::Author--> */}
                                                    {/* <!--begin::Info--> */}
                                                    <div className="d-flex align-items-center py-1">
                                                        {/* <!--begin::Answers--> */}
                                                        <a href="../../demo5/dist/apps/devs/question.html#answers" className="btn btn-sm btn-outline btn-outline-dashed btn-outline-default px-4 me-2">2 Answers</a>
                                                        {/* <!--end::Answers--> */}
                                                        {/* <!--begin::Tags--> */}
                                                        <a href="../../demo5/dist/apps/devs/tag.html" className="btn btn-sm btn-light px-4 me-2">Pre-sale</a>
                                                        {/* <!--end::Tags--> */}
                                                        {/* <!--begin::Upvote--> */}
                                                        <a href="#" className="btn btn-sm btn-flex btn-light px-3" data-bs-toggle="tooltip" title="Upvote this question" data-bs-dismiss="click">4
                                                            <i className="ki-duotone ki-black-right fs-3ms-2 me-0 fs-3"></i></a>
                                                        {/* <!--end::Upvote--> */}
                                                    </div>
                                                    {/* <!--end::Info--> */}
                                                </div>
                                                {/* <!--end::Foot--> */}
                                            </div>
                                            {/* <!--end::Question--> */}
                                            {/* <!--begin::Separator--> */}
                                            <div className="separator separator-dashed border-gray-300 my-8"></div>
                                            {/* <!--end::Separator--> */}
                                            {/* <!--begin::Question--> */}
                                            <div className="mb-0">
                                                {/* <!--begin::Head--> */}
                                                <div className="d-flex align-items-center mb-4">
                                                    {/* <!--begin::Title--> */}
                                                    <a href="../../demo5/dist/apps/devs/question.html" className="fs-2 fw-bold text-gray-900 text-hover-primary me-1">Could not get Demo 7 working</a>
                                                    {/* <!--end::Title--> */}
                                                    {/* <!--begin::Icons--> */}
                                                    <div className="d-flex align-items-center">
                                                        <span className="ms-1" data-bs-toggle="tooltip" title="In-process">
                                                            <i className="ki-duotone ki-information-5 text-warning fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>
                                                    </div>
                                                    {/* <!--end::Icons--> */}
                                                </div>
                                                {/* <!--end::Head--> */}
                                                {/* <!--begin::Summary--> */}
                                                <div className="fs-base fw-normal text-gray-700 mb-4">could not get demo7 working from latest metronic version. Had a lot of issues installing, I had to downgrade my npm to 6.14.4 as someone else recommended here in the comments, this goot it to compile but when I ran it, the browser showed errors TypeErr..</div>
                                                {/* <!--end::Summary--> */}
                                                {/* <!--begin::Foot--> */}
                                                <div className="d-flex flex-stack flex-wrap">
                                                    {/* <!--begin::Author--> */}
                                                    <div className="d-flex align-items-center py-1">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-35px me-2">
                                                            <div className="symbol-label bg-light-success fs-3 fw-semibold text-success text-uppercase">N</div>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Name--> */}
                                                        <div className="d-flex flex-column align-items-start justify-content-center">
                                                            <span className="text-gray-900 fs-7 fw-semibold lh-1 mb-2">Niko Roseberg</span>
                                                            <span className="text-muted fs-8 fw-semibold lh-1">2 days ago</span>
                                                        </div>
                                                        {/* <!--end::Name--> */}
                                                    </div>
                                                    {/* <!--end::Author--> */}
                                                    {/* <!--begin::Info--> */}
                                                    <div className="d-flex align-items-center py-1">
                                                        {/* <!--begin::Answers--> */}
                                                        <a href="../../demo5/dist/apps/devs/question.html#answers" className="btn btn-sm btn-outline btn-outline-dashed btn-outline-default px-4 me-2">4 Answers</a>
                                                        {/* <!--end::Answers--> */}
                                                        {/* <!--begin::Tags--> */}
                                                        <a href="../../demo5/dist/apps/devs/tag.html" className="btn btn-sm btn-light px-4 me-2">Angular</a>
                                                        {/* <!--end::Tags--> */}
                                                        {/* <!--begin::Upvote--> */}
                                                        <a href="#" className="btn btn-sm btn-flex btn-light btn-icon" data-bs-toggle="tooltip" title="Upvote this question" data-bs-dismiss="click">
                                                            <i className="ki-duotone ki-black-right fs-3"></i>
                                                        </a>
                                                        {/* <!--end::Upvote--> */}
                                                    </div>
                                                    {/* <!--end::Info--> */}
                                                </div>
                                                {/* <!--end::Foot--> */}
                                            </div>
                                            {/* <!--end::Question--> */}
                                            {/* <!--begin::Separator--> */}
                                            <div className="separator separator-dashed border-gray-300 my-8"></div>
                                            {/* <!--end::Separator--> */}
                                            {/* <!--begin::Question--> */}
                                            <div className="mb-0">
                                                {/* <!--begin::Head--> */}
                                                <div className="d-flex align-items-center mb-4">
                                                    {/* <!--begin::Title--> */}
                                                    <a href="../../demo5/dist/apps/devs/question.html" className="fs-2 fw-bold text-gray-900 text-hover-primary me-1">I want to get refund</a>
                                                    {/* <!--end::Title--> */}
                                                    {/* <!--begin::Icons--> */}
                                                    <div className="d-flex align-items-center">
                                                        <span className="ms-1" data-bs-toggle="tooltip" title="Resolved">
                                                            <i className="ki-duotone ki-check-circle text-success fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </span>
                                                    </div>
                                                    {/* <!--end::Icons--> */}
                                                </div>
                                                {/* <!--end::Head--> */}
                                                {/* <!--begin::Summary--> */}
                                                <div className="fs-base fw-normal text-gray-700 mb-4">Your Metronic theme is so good but the reactjs version is typescript only. The description did not write any warn about it. Since I only know javascript, I can not do anything with your theme. I want to refund.</div>
                                                {/* <!--end::Summary--> */}
                                                {/* <!--begin::Foot--> */}
                                                <div className="d-flex flex-stack flex-wrap">
                                                    {/* <!--begin::Author--> */}
                                                    <div className="d-flex align-items-center py-1">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-35px me-2">
                                                            <img src="/fe/dist/assets/media/avatars/300-23.jpg" alt="user" />
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Name--> */}
                                                        <div className="d-flex flex-column align-items-start justify-content-center">
                                                            <span className="text-gray-900 fs-7 fw-semibold lh-1 mb-2">Alex Bold</span>
                                                            <span className="text-muted fs-8 fw-semibold lh-1">1 day ago</span>
                                                        </div>
                                                        {/* <!--end::Name--> */}
                                                    </div>
                                                    {/* <!--end::Author--> */}
                                                    {/* <!--begin::Info--> */}
                                                    <div className="d-flex align-items-center py-1">
                                                        {/* <!--begin::Answers--> */}
                                                        <a href="../../demo5/dist/apps/devs/question.html#answers" className="btn btn-sm btn-outline btn-outline-dashed btn-outline-default px-4 me-2">22 Answers</a>
                                                        {/* <!--end::Answers--> */}
                                                        {/* <!--begin::Tags--> */}
                                                        <a href="../../demo5/dist/apps/devs/tag.html" className="btn btn-sm btn-light px-4 me-2">React</a>
                                                        <a href="../../demo5/dist/apps/devs/tag.html" className="btn btn-sm btn-light px-4 me-2">Demo 1</a>
                                                        {/* <!--end::Tags--> */}
                                                        {/* <!--begin::Upvote--> */}
                                                        <a href="#" className="btn btn-sm btn-flex btn-light px-3" data-bs-toggle="tooltip" title="Upvote this question" data-bs-dismiss="click">11
                                                            <i className="ki-duotone ki-black-right fs-3ms-2 me-0 fs-3"></i></a>
                                                        {/* <!--end::Upvote--> */}
                                                    </div>
                                                    {/* <!--end::Info--> */}
                                                </div>
                                                {/* <!--end::Foot--> */}
                                            </div>
                                            {/* <!--end::Question--> */}
                                            {/* <!--begin::Separator--> */}
                                            <div className="separator separator-dashed border-gray-300 my-8"></div>
                                            {/* <!--end::Separator--> */}
                                            {/* <!--begin::Question--> */}
                                            <div className="mb-0">
                                                {/* <!--begin::Head--> */}
                                                <div className="d-flex align-items-center mb-4">
                                                    {/* <!--begin::Title--> */}
                                                    <a href="../../demo5/dist/apps/devs/question.html" className="fs-2 fw-bold text-gray-900 text-hover-primary me-1">How to integrate Metronic with Blazor Server Side ?</a>
                                                    {/* <!--end::Title--> */}
                                                    {/* <!--begin::Icons--> */}
                                                    <div className="d-flex align-items-center">
                                                        <span className="ms-1" data-bs-toggle="tooltip" title="In-process">
                                                            <i className="ki-duotone ki-check-circle text-success fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </span>
                                                    </div>
                                                    {/* <!--end::Icons--> */}
                                                </div>
                                                {/* <!--end::Head--> */}
                                                {/* <!--begin::Summary--> */}
                                                <div className="fs-base fw-normal text-gray-700 mb-4">could not get demo7 working from latest metronic version. Had a lot of issues installing, I had to downgrade my npm to 6.14.4 as someone else recommended here in the comments, this goot it to compile but when I ran it, the browser showed errors TypeErr..</div>
                                                {/* <!--end::Summary--> */}
                                                {/* <!--begin::Foot--> */}
                                                <div className="d-flex flex-stack flex-wrap">
                                                    {/* <!--begin::Author--> */}
                                                    <div className="d-flex align-items-center py-1">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-35px me-2">
                                                            <div className="symbol-label bg-light-success fs-3 fw-semibold text-success text-uppercase">T</div>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Name--> */}
                                                        <div className="d-flex flex-column align-items-start justify-content-center">
                                                            <span className="text-gray-900 fs-7 fw-semibold lh-1 mb-2">Tim Nilson</span>
                                                            <span className="text-muted fs-8 fw-semibold lh-1">3 days ago</span>
                                                        </div>
                                                        {/* <!--end::Name--> */}
                                                    </div>
                                                    {/* <!--end::Author--> */}
                                                    {/* <!--begin::Info--> */}
                                                    <div className="d-flex align-items-center py-1">
                                                        {/* <!--begin::Answers--> */}
                                                        <a href="../../demo5/dist/apps/devs/question.html#answers" className="btn btn-sm btn-outline btn-outline-dashed btn-outline-default px-4 me-2">44 Answers</a>
                                                        {/* <!--end::Answers--> */}
                                                        {/* <!--begin::Tags--> */}
                                                        <a href="../../demo5/dist/apps/devs/tag.html" className="btn btn-sm btn-light px-4 me-2">Blazor</a>
                                                        {/* <!--end::Tags--> */}
                                                        {/* <!--begin::Upvote--> */}
                                                        <a href="#" className="btn btn-sm btn-flex btn-light px-3" data-bs-toggle="tooltip" title="Upvote this question" data-bs-dismiss="click">3
                                                            <i className="ki-duotone ki-black-right fs-3ms-2 me-0 fs-3"></i></a>
                                                        {/* <!--end::Upvote--> */}
                                                    </div>
                                                    {/* <!--end::Info--> */}
                                                </div>
                                                {/* <!--end::Foot--> */}
                                            </div>
                                            {/* <!--end::Question--> */}
                                            {/* <!--begin::Separator--> */}
                                            <div className="separator separator-dashed border-gray-300 my-8"></div>
                                            {/* <!--end::Separator--> */}
                                            {/* <!--begin::Question--> */}
                                            <div className="mb-0">
                                                {/* <!--begin::Head--> */}
                                                <div className="d-flex align-items-center mb-4">
                                                    {/* <!--begin::Title--> */}
                                                    <a href="../../demo5/dist/apps/devs/question.html" className="fs-2 fw-bold text-gray-900 text-hover-primary me-1">Using Metronic with .NET multi tenant application</a>
                                                    {/* <!--end::Title--> */}
                                                    {/* <!--begin::Icons--> */}
                                                    <div className="d-flex align-items-center">
                                                        <span className="ms-1" data-bs-toggle="tooltip" title="Resolved">
                                                            <i className="ki-duotone ki-check-circle text-success fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </span>
                                                    </div>
                                                    {/* <!--end::Icons--> */}
                                                </div>
                                                {/* <!--end::Head--> */}
                                                {/* <!--begin::Summary--> */}
                                                <div className="fs-base fw-normal text-gray-700 mb-4">When approx. is the next update for the Laravel version planned? Waiting for the CRUD, 2nd factor etc. features before starting my project. Also can we expect the Laravel + Vue version in the next update ?</div>
                                                {/* <!--end::Summary--> */}
                                                {/* <!--begin::Foot--> */}
                                                <div className="d-flex flex-stack flex-wrap">
                                                    {/* <!--begin::Author--> */}
                                                    <div className="d-flex align-items-center py-1">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-35px me-2">
                                                            <img src="/fe/dist/assets/media/avatars/300-10.jpg" alt="user" />
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Name--> */}
                                                        <div className="d-flex flex-column align-items-start justify-content-center">
                                                            <span className="text-gray-900 fs-7 fw-semibold lh-1 mb-2">Ana Quil</span>
                                                            <span className="text-muted fs-8 fw-semibold lh-1">5 days ago</span>
                                                        </div>
                                                        {/* <!--end::Name--> */}
                                                    </div>
                                                    {/* <!--end::Author--> */}
                                                    {/* <!--begin::Info--> */}
                                                    <div className="d-flex align-items-center py-1">
                                                        {/* <!--begin::Answers--> */}
                                                        <a href="../../demo5/dist/apps/devs/question.html#answers" className="btn btn-sm btn-outline btn-outline-dashed btn-outline-default px-4 me-2">2 Answers</a>
                                                        {/* <!--end::Answers--> */}
                                                        {/* <!--begin::Tags--> */}
                                                        <a href="../../demo5/dist/apps/devs/tag.html" className="btn btn-sm btn-light px-4 me-2">Aspdotnet</a>
                                                        {/* <!--end::Tags--> */}
                                                        {/* <!--begin::Upvote--> */}
                                                        <a href="#" className="btn btn-sm btn-flex btn-light px-3" data-bs-toggle="tooltip" title="Upvote this question" data-bs-dismiss="click">4
                                                            <i className="ki-duotone ki-black-right fs-3ms-2 me-0 fs-3"></i></a>
                                                        {/* <!--end::Upvote--> */}
                                                    </div>
                                                    {/* <!--end::Info--> */}
                                                </div>
                                                {/* <!--end::Foot--> */}
                                            </div>
                                            {/* <!--end::Question--> */}
                                            {/* <!--begin::Separator--> */}
                                            <div className="separator separator-dashed border-gray-300 my-8"></div>
                                            {/* <!--end::Separator--> */}
                                        </div>
                                        {/* <!--end::Questions--> */}
                                        {/* <!--begin::Pagination--> */}
                                        <div className="d-flex flex-center mb-0">
                                            <a href="#" className="btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-semibold fs-6 mx-2">1</a>
                                            <a href="#" className="btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-semibold fs-6 mx-2 active">2</a>
                                            <a href="#" className="btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-semibold fs-6 mx-2">3</a>
                                            <a href="#" className="btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-semibold fs-6 mx-2">4</a>
                                            <a href="#" className="btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-semibold fs-6 mx-2">5</a>
                                            <span className="text-muted fw-semibold fs-6 mx-2">..</span>
                                            <a href="#" className="btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-semibold fs-6 mx-2">19</a>
                                        </div>
                                        {/* <!--end::Questions--> */}
                                    </div>
                                    {/* <!--end::Post--> */}
                                </div>
                                {/* <!--end::Content--> */}
                                {/* <!--begin::Footer--> */}
                                <div className="footer pt-10 pb-5 d-flex flex-column flex-md-row flex-stack" id="kt_footer">
                                    {/* <!--begin::Copyright--> */}
                                    <div className="text-dark order-2 order-md-1">
                                        <span className="text-muted fw-semibold me-1">2023&copy;</span>
                                        <a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
                                    </div>
                                    {/* <!--end::Copyright--> */}
                                    {/* <!--begin::Menu--> */}
                                    <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                                        <li className="menu-item">
                                            <a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link ps-2 pe-0">Purchase</a>
                                        </li>
                                    </ul>
                                    {/* <!--end::Menu--> */}
                                </div>
                                {/* <!--end::Footer--> */}
                            </div>
                            {/* <!--end::Wrapper--> */}
                            {/* <!--begin::Sidebar--> */}
                            <div className="sidebar p-5 px-lg-0 py-lg-11" data-kt-drawer="true" data-kt-drawer-name="sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="275px" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_sidebar_toggle">
                                {/* <!--begin::Quick Search--> */}
                                <form id="kt_sidebar_search_form" action="../../demo5/dist/apps/devs/search.html" className="w-100 position-relative mb-5 mb-lg-10" autocomplete="off">
                                    {/* <!--begin::Hidden input(Added to disable form autocomplete)--> */}
                                    <input type="hidden" />
                                    {/* <!--end::Hidden input--> */}
                                    {/* <!--begin::Icon--> */}
                                    <i className="ki-duotone ki-magnifier fs-2 text-gray-700 position-absolute top-50 translate-middle-y ms-4">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Input--> */}
                                    <input type="text" className="form-control bg-transparent ps-13 fs-7 h-40px" name="search" value="" placeholder="Search" />
                                    {/* <!--end::Input--> */}
                                </form>
                                {/* <!--end::Quick Search--> */}
                                {/* <!--begin::Popular Questions--> */}
                                <div className="card bg-light mb-5 mb-lg-10 shadow-none border-0">
                                    {/* <!--begin::Header--> */}
                                    <div className="card-header align-items-center border-0">
                                        {/* <!--begin::Title--> */}
                                        <h3 className="card-title fw-bold text-gray-900 fs-3">Popular Questions</h3>
                                        {/* <!--end::Title--> */}
                                    </div>
                                    {/* <!--end::Header--> */}
                                    {/* <!--begin::Body--> */}
                                    <div className="card-body pt-0">
                                        {/* <!--begin::Item--> */}
                                        <div className="d-flex mb-5">
                                            {/* <!--begin::Arrow--> */}
                                            <i className="ki-duotone ki-right-square fs-2 mt-0 me-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            {/* <!--end::Arrow--> */}
                                            {/* <!--begin::Title--> */}
                                            <a href="../../demo5/dist/apps/devs/question.html" className="text-gray-700 text-hover-primary fs-6 fw-bold">How to use Metrponic with Django Framework ?</a>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Item--> */}
                                        {/* <!--begin::Item--> */}
                                        <div className="d-flex mb-5">
                                            {/* <!--begin::Arrow--> */}
                                            <i className="ki-duotone ki-right-square fs-2 mt-0 me-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            {/* <!--end::Arrow--> */}
                                            {/* <!--begin::Title--> */}
                                            <a href="../../demo5/dist/apps/devs/question.html" className="text-gray-700 text-hover-primary fs-6 fw-bold">When to expect new version of Metronic Laravel ?</a>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Item--> */}
                                        {/* <!--begin::Item--> */}
                                        <div className="d-flex mb-5">
                                            {/* <!--begin::Arrow--> */}
                                            <i className="ki-duotone ki-right-square fs-2 mt-0 me-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            {/* <!--end::Arrow--> */}
                                            {/* <!--begin::Title--> */}
                                            <a href="../../demo5/dist/apps/devs/question.html" className="text-gray-700 text-hover-primary fs-6 fw-bold">Could not get Metronic Demo 7 working</a>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Item--> */}
                                        {/* <!--begin::Item--> */}
                                        <div className="d-flex mb-5">
                                            {/* <!--begin::Arrow--> */}
                                            <i className="ki-duotone ki-right-square fs-2 mt-0 me-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            {/* <!--end::Arrow--> */}
                                            {/* <!--begin::Title--> */}
                                            <a href="../../demo5/dist/apps/devs/question.html" className="text-gray-700 text-hover-primary fs-6 fw-bold">I want to get a refund</a>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Item--> */}
                                        {/* <!--begin::Item--> */}
                                        <div className="d-flex">
                                            {/* <!--begin::Arrow--> */}
                                            <i className="ki-duotone ki-right-square fs-2 mt-0 me-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            {/* <!--end::Arrow--> */}
                                            {/* <!--begin::Title--> */}
                                            <a href="../../demo5/dist/apps/devs/question.html" className="text-gray-700 text-hover-primary fs-6 fw-bold">How to use Metrponic with Rails Framework ?</a>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Item--> */}
                                    </div>
                                    {/* <!--end: Card Body--> */}
                                </div>
                                {/* <!--end::Popular Questions--> */}
                                {/* <!--begin::Popular Questions--> */}
                                <div className="card bg-light mb-5 mb-lg-10 shadow-none border-0">
                                    {/* <!--begin::Header--> */}
                                    <div className="card-header align-items-center border-0">
                                        {/* <!--begin::Title--> */}
                                        <h3 className="card-title fw-bold text-gray-900 fs-3">Latest Tutorials</h3>
                                        {/* <!--end::Title--> */}
                                    </div>
                                    {/* <!--end::Header--> */}
                                    {/* <!--begin::Body--> */}
                                    <div className="card-body pt-0">
                                        {/* <!--begin::Item--> */}
                                        <div className="d-flex mb-5">
                                            {/* <!--begin::Arrow--> */}
                                            <i className="ki-duotone ki-right-square fs-2 mt-0 me-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            {/* <!--end::Arrow--> */}
                                            {/* <!--begin::Title--> */}
                                            <a href="../../demo5/dist/apps/devs/question.html" className="text-gray-700 text-hover-primary fs-6 fw-bold">How to use customize Metronoc's SASS</a>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Item--> */}
                                        {/* <!--begin::Item--> */}
                                        <div className="d-flex mb-5">
                                            {/* <!--begin::Arrow--> */}
                                            <i className="ki-duotone ki-right-square fs-2 mt-0 me-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            {/* <!--end::Arrow--> */}
                                            {/* <!--begin::Title--> */}
                                            <a href="../../demo5/dist/apps/devs/question.html" className="text-gray-700 text-hover-primary fs-6 fw-bold">How to change web font globally</a>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Item--> */}
                                        {/* <!--begin::Item--> */}
                                        <div className="d-flex mb-5">
                                            {/* <!--begin::Arrow--> */}
                                            <i className="ki-duotone ki-right-square fs-2 mt-0 me-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            {/* <!--end::Arrow--> */}
                                            {/* <!--begin::Title--> */}
                                            <a href="../../demo5/dist/apps/devs/question.html" className="text-gray-700 text-hover-primary fs-6 fw-bold">How to setup dark mode</a>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Item--> */}
                                        {/* <!--begin::Item--> */}
                                        <div className="d-flex mb-5">
                                            {/* <!--begin::Arrow--> */}
                                            <i className="ki-duotone ki-right-square fs-2 mt-0 me-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            {/* <!--end::Arrow--> */}
                                            {/* <!--begin::Title--> */}
                                            <a href="../../demo5/dist/apps/devs/question.html" className="text-gray-700 text-hover-primary fs-6 fw-bold">Metronic file structure and build tools</a>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Item--> */}
                                        {/* <!--begin::Item--> */}
                                        <div className="d-flex">
                                            {/* <!--begin::Arrow--> */}
                                            <i className="ki-duotone ki-right-square fs-2 mt-0 me-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            {/* <!--end::Arrow--> */}
                                            {/* <!--begin::Title--> */}
                                            <a href="../../demo5/dist/apps/devs/question.html" className="text-gray-700 text-hover-primary fs-6 fw-bold">Metronic integration with Blazor server side</a>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Item--> */}
                                    </div>
                                    {/* <!--end: Card Body--> */}
                                </div>
                                {/* <!--end::Popular Questions--> */}
                            </div>
                            {/* <!--end::Sidebar--> */}
                        </div>
                        {/* <!--end::Container--> */}
                    </div>
                    {/* <!--end::Page--> */}
                </div>
                {/* <!--end::Root--> */}
                {/* <!--begin::Drawers--> */}
                {/* <!--begin::Activities drawer--> */}
                <div id="kt_activities" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="activities" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '900px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_activities_toggle" data-kt-drawer-close="#kt_activities_close">
                    <div className="card shadow-none border-0 rounded-0">
                        {/* <!--begin::Header--> */}
                        <div className="card-header" id="kt_activities_header">
                            <h3 className="card-title fw-bold text-dark">Activity Logs</h3>
                            <div className="card-toolbar">
                                <button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
                                    <i className="ki-duotone ki-cross fs-1">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </button>
                            </div>
                        </div>
                        {/* <!--end::Header--> */}
                        {/* <!--begin::Body--> */}
                        <div className="card-body position-relative" id="kt_activities_body">
                            {/* <!--begin::Content--> */}
                            <div id="kt_activities_scroll" className="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_activities_body" data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" data-kt-scroll-offset="5px">
                                {/* <!--begin::Timeline items--> */}
                                <div className="timeline">
                                    {/* <!--begin::Timeline item--> */}
                                    <div className="timeline-item">
                                        {/* <!--begin::Timeline line--> */}
                                        <div className="timeline-line w-40px"></div>
                                        {/* <!--end::Timeline line--> */}
                                        {/* <!--begin::Timeline icon--> */}
                                        <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                            <div className="symbol-label bg-light">
                                                <i className="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                </i>
                                            </div>
                                        </div>
                                        {/* <!--end::Timeline icon--> */}
                                        {/* <!--begin::Timeline content--> */}
                                        <div className="timeline-content mb-10 mt-n1">
                                            {/* <!--begin::Timeline heading--> */}
                                            <div className="pe-3 mb-5">
                                                {/* <!--begin::Title--> */}
                                                <div className="fs-5 fw-semibold mb-2">There are 2 new tasks for you in “AirPlus Mobile App” project:</div>
                                                {/* <!--end::Title--> */}
                                                {/* <!--begin::Description--> */}
                                                <div className="d-flex align-items-center mt-1 fs-6">
                                                    {/* <!--begin::Info--> */}
                                                    <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                                                    {/* <!--end::Info--> */}
                                                    {/* <!--begin::User--> */}
                                                    <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                        <img src="/fe/dist/assets/media/avatars/300-14.jpg" alt="img" />
                                                    </div>
                                                    {/* <!--end::User--> */}
                                                </div>
                                                {/* <!--end::Description--> */}
                                            </div>
                                            {/* <!--end::Timeline heading--> */}
                                            {/* <!--begin::Timeline details--> */}
                                            <div className="overflow-auto pb-5">
                                                {/* <!--begin::Record--> */}
                                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                                                    {/* <!--begin::Title--> */}
                                                    <a href="../../demo5/dist/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Meeting with customer</a>
                                                    {/* <!--end::Title--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <div className="min-w-175px pe-2">
                                                        <span className="badge badge-light text-muted">Application Design</span>
                                                    </div>
                                                    {/* <!--end::Label--> */}
                                                    {/* <!--begin::Users--> */}
                                                    <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                                                        {/* <!--begin::User--> */}
                                                        <div className="symbol symbol-circle symbol-25px">
                                                            <img src="/fe/dist/assets/media/avatars/300-2.jpg" alt="img" />
                                                        </div>
                                                        {/* <!--end::User--> */}
                                                        {/* <!--begin::User--> */}
                                                        <div className="symbol symbol-circle symbol-25px">
                                                            <img src="/fe/dist/assets/media/avatars/300-14.jpg" alt="img" />
                                                        </div>
                                                        {/* <!--end::User--> */}
                                                        {/* <!--begin::User--> */}
                                                        <div className="symbol symbol-circle symbol-25px">
                                                            <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">A</div>
                                                        </div>
                                                        {/* <!--end::User--> */}
                                                    </div>
                                                    {/* <!--end::Users--> */}
                                                    {/* <!--begin::Progress--> */}
                                                    <div className="min-w-125px pe-2">
                                                        <span className="badge badge-light-primary">In Progress</span>
                                                    </div>
                                                    {/* <!--end::Progress--> */}
                                                    {/* <!--begin::Action--> */}
                                                    <a href="../../demo5/dist/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
                                                    {/* <!--end::Action--> */}
                                                </div>
                                                {/* <!--end::Record--> */}
                                                {/* <!--begin::Record--> */}
                                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                                                    {/* <!--begin::Title--> */}
                                                    <a href="../../demo5/dist/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Project Delivery Preparation</a>
                                                    {/* <!--end::Title--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <div className="min-w-175px">
                                                        <span className="badge badge-light text-muted">CRM System Development</span>
                                                    </div>
                                                    {/* <!--end::Label--> */}
                                                    {/* <!--begin::Users--> */}
                                                    <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                                                        {/* <!--begin::User--> */}
                                                        <div className="symbol symbol-circle symbol-25px">
                                                            <img src="/fe/dist/assets/media/avatars/300-20.jpg" alt="img" />
                                                        </div>
                                                        {/* <!--end::User--> */}
                                                        {/* <!--begin::User--> */}
                                                        <div className="symbol symbol-circle symbol-25px">
                                                            <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">B</div>
                                                        </div>
                                                        {/* <!--end::User--> */}
                                                    </div>
                                                    {/* <!--end::Users--> */}
                                                    {/* <!--begin::Progress--> */}
                                                    <div className="min-w-125px">
                                                        <span className="badge badge-light-success">Completed</span>
                                                    </div>
                                                    {/* <!--end::Progress--> */}
                                                    {/* <!--begin::Action--> */}
                                                    <a href="../../demo5/dist/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
                                                    {/* <!--end::Action--> */}
                                                </div>
                                                {/* <!--end::Record--> */}
                                            </div>
                                            {/* <!--end::Timeline details--> */}
                                        </div>
                                        {/* <!--end::Timeline content--> */}
                                    </div>
                                    {/* <!--end::Timeline item--> */}
                                    {/* <!--begin::Timeline item--> */}
                                    <div className="timeline-item">
                                        {/* <!--begin::Timeline line--> */}
                                        <div className="timeline-line w-40px"></div>
                                        {/* <!--end::Timeline line--> */}
                                        {/* <!--begin::Timeline icon--> */}
                                        <div className="timeline-icon symbol symbol-circle symbol-40px">
                                            <div className="symbol-label bg-light">
                                                <i className="ki-duotone ki-flag fs-2 text-gray-500">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </div>
                                        </div>
                                        {/* <!--end::Timeline icon--> */}
                                        {/* <!--begin::Timeline content--> */}
                                        <div className="timeline-content mb-10 mt-n2">
                                            {/* <!--begin::Timeline heading--> */}
                                            <div className="overflow-auto pe-3">
                                                {/* <!--begin::Title--> */}
                                                <div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
                                                {/* <!--end::Title--> */}
                                                {/* <!--begin::Description--> */}
                                                <div className="d-flex align-items-center mt-1 fs-6">
                                                    {/* <!--begin::Info--> */}
                                                    <div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                                                    {/* <!--end::Info--> */}
                                                    {/* <!--begin::User--> */}
                                                    <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
                                                        <img src="/fe/dist/assets/media/avatars/300-1.jpg" alt="img" />
                                                    </div>
                                                    {/* <!--end::User--> */}
                                                </div>
                                                {/* <!--end::Description--> */}
                                            </div>
                                            {/* <!--end::Timeline heading--> */}
                                        </div>
                                        {/* <!--end::Timeline content--> */}
                                    </div>
                                    {/* <!--end::Timeline item--> */}
                                    {/* <!--begin::Timeline item--> */}
                                    <div className="timeline-item">
                                        {/* <!--begin::Timeline line--> */}
                                        <div className="timeline-line w-40px"></div>
                                        {/* <!--end::Timeline line--> */}
                                        {/* <!--begin::Timeline icon--> */}
                                        <div className="timeline-icon symbol symbol-circle symbol-40px">
                                            <div className="symbol-label bg-light">
                                                <i className="ki-duotone ki-disconnect fs-2 text-gray-500">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                    <span className="path4"></span>
                                                    <span className="path5"></span>
                                                </i>
                                            </div>
                                        </div>
                                        {/* <!--end::Timeline icon--> */}
                                        {/* <!--begin::Timeline content--> */}
                                        <div className="timeline-content mb-10 mt-n1">
                                            {/* <!--begin::Timeline heading--> */}
                                            <div className="mb-5 pe-3">
                                                {/* <!--begin::Title--> */}
                                                <a href="#" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
                                                {/* <!--end::Title--> */}
                                                {/* <!--begin::Description--> */}
                                                <div className="d-flex align-items-center mt-1 fs-6">
                                                    {/* <!--begin::Info--> */}
                                                    <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                                                    {/* <!--end::Info--> */}
                                                    {/* <!--begin::User--> */}
                                                    <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
                                                        <img src="/fe/dist/assets/media/avatars/300-23.jpg" alt="img" />
                                                    </div>
                                                    {/* <!--end::User--> */}
                                                </div>
                                                {/* <!--end::Description--> */}
                                            </div>
                                            {/* <!--end::Timeline heading--> */}
                                            {/* <!--begin::Timeline details--> */}
                                            <div className="overflow-auto pb-5">
                                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                    {/* <!--begin::Item--> */}
                                                    <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                        {/* <!--begin::Icon--> */}
                                                        <img alt="" className="w-30px me-3" src="/fe/dist/assets/media/svg/files/pdf.svg" />
                                                        {/* <!--end::Icon--> */}
                                                        {/* <!--begin::Info--> */}
                                                        <div className="ms-1 fw-semibold">
                                                            {/* <!--begin::Desc--> */}
                                                            <a href="../../demo5/dist/apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
                                                            {/* <!--end::Desc--> */}
                                                            {/* <!--begin::Number--> */}
                                                            <div className="text-gray-400">1.9mb</div>
                                                            {/* <!--end::Number--> */}
                                                        </div>
                                                        {/* <!--begin::Info--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                        {/* <!--begin::Icon--> */}
                                                        <img alt="../../demo5/dist/apps/projects/project.html" className="w-30px me-3" src="/fe/dist/assets/media/svg/files/doc.svg" />
                                                        {/* <!--end::Icon--> */}
                                                        {/* <!--begin::Info--> */}
                                                        <div className="ms-1 fw-semibold">
                                                            {/* <!--begin::Desc--> */}
                                                            <a href="#" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
                                                            {/* <!--end::Desc--> */}
                                                            {/* <!--begin::Number--> */}
                                                            <div className="text-gray-400">18kb</div>
                                                            {/* <!--end::Number--> */}
                                                        </div>
                                                        {/* <!--end::Info--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <div className="d-flex flex-aligns-center">
                                                        {/* <!--begin::Icon--> */}
                                                        <img alt="../../demo5/dist/apps/projects/project.html" className="w-30px me-3" src="/fe/dist/assets/media/svg/files/css.svg" />
                                                        {/* <!--end::Icon--> */}
                                                        {/* <!--begin::Info--> */}
                                                        <div className="ms-1 fw-semibold">
                                                            {/* <!--begin::Desc--> */}
                                                            <a href="#" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
                                                            {/* <!--end::Desc--> */}
                                                            {/* <!--begin::Number--> */}
                                                            <div className="text-gray-400">20mb</div>
                                                            {/* <!--end::Number--> */}
                                                        </div>
                                                        {/* <!--end::Icon--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                </div>
                                            </div>
                                            {/* <!--end::Timeline details--> */}
                                        </div>
                                        {/* <!--end::Timeline content--> */}
                                    </div>
                                    {/* <!--end::Timeline item--> */}
                                    {/* <!--begin::Timeline item--> */}
                                    <div className="timeline-item">
                                        {/* <!--begin::Timeline line--> */}
                                        <div className="timeline-line w-40px"></div>
                                        {/* <!--end::Timeline line--> */}
                                        {/* <!--begin::Timeline icon--> */}
                                        <div className="timeline-icon symbol symbol-circle symbol-40px">
                                            <div className="symbol-label bg-light">
                                                <i className="ki-duotone ki-abstract-26 fs-2 text-gray-500">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </div>
                                        </div>
                                        {/* <!--end::Timeline icon--> */}
                                        {/* <!--begin::Timeline content--> */}
                                        <div className="timeline-content mb-10 mt-n1">
                                            {/* <!--begin::Timeline heading--> */}
                                            <div className="pe-3 mb-5">
                                                {/* <!--begin::Title--> */}
                                                <div className="fs-5 fw-semibold mb-2">Task
                                                    <a href="#" className="text-primary fw-bold me-1">#45890</a>merged with
                                                    <a href="#" className="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
                                                {/* <!--end::Title--> */}
                                                {/* <!--begin::Description--> */}
                                                <div className="d-flex align-items-center mt-1 fs-6">
                                                    {/* <!--begin::Info--> */}
                                                    <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                                                    {/* <!--end::Info--> */}
                                                    {/* <!--begin::User--> */}
                                                    <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                        <img src="/fe/dist/assets/media/avatars/300-14.jpg" alt="img" />
                                                    </div>
                                                    {/* <!--end::User--> */}
                                                </div>
                                                {/* <!--end::Description--> */}
                                            </div>
                                            {/* <!--end::Timeline heading--> */}
                                        </div>
                                        {/* <!--end::Timeline content--> */}
                                    </div>
                                    {/* <!--end::Timeline item--> */}
                                    {/* <!--begin::Timeline item--> */}
                                    <div className="timeline-item">
                                        {/* <!--begin::Timeline line--> */}
                                        <div className="timeline-line w-40px"></div>
                                        {/* <!--end::Timeline line--> */}
                                        {/* <!--begin::Timeline icon--> */}
                                        <div className="timeline-icon symbol symbol-circle symbol-40px">
                                            <div className="symbol-label bg-light">
                                                <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </div>
                                        </div>
                                        {/* <!--end::Timeline icon--> */}
                                        {/* <!--begin::Timeline content--> */}
                                        <div className="timeline-content mb-10 mt-n1">
                                            {/* <!--begin::Timeline heading--> */}
                                            <div className="pe-3 mb-5">
                                                {/* <!--begin::Title--> */}
                                                <div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
                                                {/* <!--end::Title--> */}
                                                {/* <!--begin::Description--> */}
                                                <div className="d-flex align-items-center mt-1 fs-6">
                                                    {/* <!--begin::Info--> */}
                                                    <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                                                    {/* <!--end::Info--> */}
                                                    {/* <!--begin::User--> */}
                                                    <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
                                                        <img src="/fe/dist/assets/media/avatars/300-2.jpg" alt="img" />
                                                    </div>
                                                    {/* <!--end::User--> */}
                                                </div>
                                                {/* <!--end::Description--> */}
                                            </div>
                                            {/* <!--end::Timeline heading--> */}
                                            {/* <!--begin::Timeline details--> */}
                                            <div className="overflow-auto pb-5">
                                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                                    {/* <!--begin::Item--> */}
                                                    <div className="overlay me-10">
                                                        {/* <!--begin::Image--> */}
                                                        <div className="overlay-wrapper">
                                                            <img alt="img" className="rounded w-150px" src="/fe/dist/assets/media/stock/600x400/img-29.jpg" />
                                                        </div>
                                                        {/* <!--end::Image--> */}
                                                        {/* <!--begin::Link--> */}
                                                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                            <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                        </div>
                                                        {/* <!--end::Link--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <div className="overlay me-10">
                                                        {/* <!--begin::Image--> */}
                                                        <div className="overlay-wrapper">
                                                            <img alt="img" className="rounded w-150px" src="/fe/dist/assets/media/stock/600x400/img-31.jpg" />
                                                        </div>
                                                        {/* <!--end::Image--> */}
                                                        {/* <!--begin::Link--> */}
                                                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                            <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                        </div>
                                                        {/* <!--end::Link--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <div className="overlay">
                                                        {/* <!--begin::Image--> */}
                                                        <div className="overlay-wrapper">
                                                            <img alt="img" className="rounded w-150px" src="/fe/dist/assets/media/stock/600x400/img-40.jpg" />
                                                        </div>
                                                        {/* <!--end::Image--> */}
                                                        {/* <!--begin::Link--> */}
                                                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                            <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                        </div>
                                                        {/* <!--end::Link--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                </div>
                                            </div>
                                            {/* <!--end::Timeline details--> */}
                                        </div>
                                        {/* <!--end::Timeline content--> */}
                                    </div>
                                    {/* <!--end::Timeline item--> */}
                                    {/* <!--begin::Timeline item--> */}
                                    <div className="timeline-item">
                                        {/* <!--begin::Timeline line--> */}
                                        <div className="timeline-line w-40px"></div>
                                        {/* <!--end::Timeline line--> */}
                                        {/* <!--begin::Timeline icon--> */}
                                        <div className="timeline-icon symbol symbol-circle symbol-40px">
                                            <div className="symbol-label bg-light">
                                                <i className="ki-duotone ki-sms fs-2 text-gray-500">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </div>
                                        </div>
                                        {/* <!--end::Timeline icon--> */}
                                        {/* <!--begin::Timeline content--> */}
                                        <div className="timeline-content mb-10 mt-n1">
                                            {/* <!--begin::Timeline heading--> */}
                                            <div className="pe-3 mb-5">
                                                {/* <!--begin::Title--> */}
                                                <div className="fs-5 fw-semibold mb-2">New case
                                                    <a href="#" className="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
                                                {/* <!--end::Title--> */}
                                                {/* <!--begin::Description--> */}
                                                <div className="overflow-auto pb-5">
                                                    {/* <!--begin::Wrapper--> */}
                                                    <div className="d-flex align-items-center mt-1 fs-6">
                                                        {/* <!--begin::Info--> */}
                                                        <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                                                        {/* <!--end::Info--> */}
                                                        {/* <!--begin::User--> */}
                                                        <a href="#" className="text-primary fw-bold me-1">Alice Tan</a>
                                                        {/* <!--end::User--> */}
                                                    </div>
                                                    {/* <!--end::Wrapper--> */}
                                                </div>
                                                {/* <!--end::Description--> */}
                                            </div>
                                            {/* <!--end::Timeline heading--> */}
                                        </div>
                                        {/* <!--end::Timeline content--> */}
                                    </div>
                                    {/* <!--end::Timeline item--> */}
                                    {/* <!--begin::Timeline item--> */}
                                    <div className="timeline-item">
                                        {/* <!--begin::Timeline line--> */}
                                        <div className="timeline-line w-40px"></div>
                                        {/* <!--end::Timeline line--> */}
                                        {/* <!--begin::Timeline icon--> */}
                                        <div className="timeline-icon symbol symbol-circle symbol-40px">
                                            <div className="symbol-label bg-light">
                                                <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </div>
                                        </div>
                                        {/* <!--end::Timeline icon--> */}
                                        {/* <!--begin::Timeline content--> */}
                                        <div className="timeline-content mb-10 mt-n1">
                                            {/* <!--begin::Timeline heading--> */}
                                            <div className="pe-3 mb-5">
                                                {/* <!--begin::Title--> */}
                                                <div className="fs-5 fw-semibold mb-2">You have received a new order:</div>
                                                {/* <!--end::Title--> */}
                                                {/* <!--begin::Description--> */}
                                                <div className="d-flex align-items-center mt-1 fs-6">
                                                    {/* <!--begin::Info--> */}
                                                    <div className="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
                                                    {/* <!--end::Info--> */}
                                                    {/* <!--begin::User--> */}
                                                    <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
                                                        <img src="/fe/dist/assets/media/avatars/300-4.jpg" alt="img" />
                                                    </div>
                                                    {/* <!--end::User--> */}
                                                </div>
                                                {/* <!--end::Description--> */}
                                            </div>
                                            {/* <!--end::Timeline heading--> */}
                                            {/* <!--begin::Timeline details--> */}
                                            <div className="overflow-auto pb-5">
                                                {/* <!--begin::Notice--> */}
                                                <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                                                    {/* <!--begin::Icon--> */}
                                                    <i className="ki-duotone ki-devices-2 fs-2tx text-primary me-4">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                    </i>
                                                    {/* <!--end::Icon--> */}
                                                    {/* <!--begin::Wrapper--> */}
                                                    <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                                                        {/* <!--begin::Content--> */}
                                                        <div className="mb-3 mb-md-0 fw-semibold">
                                                            <h4 className="text-gray-900 fw-bold">Database Backup Process Completed!</h4>
                                                            <div className="fs-6 text-gray-700 pe-7">Login into Admin Dashboard to make sure the data integrity is OK</div>
                                                        </div>
                                                        {/* <!--end::Content--> */}
                                                        {/* <!--begin::Action--> */}
                                                        <a href="#" className="btn btn-primary px-6 align-self-center text-nowrap">Proceed</a>
                                                        {/* <!--end::Action--> */}
                                                    </div>
                                                    {/* <!--end::Wrapper--> */}
                                                </div>
                                                {/* <!--end::Notice--> */}
                                            </div>
                                            {/* <!--end::Timeline details--> */}
                                        </div>
                                        {/* <!--end::Timeline content--> */}
                                    </div>
                                    {/* <!--end::Timeline item--> */}
                                    {/* <!--begin::Timeline item--> */}
                                    <div className="timeline-item">
                                        {/* <!--begin::Timeline line--> */}
                                        <div className="timeline-line w-40px"></div>
                                        {/* <!--end::Timeline line--> */}
                                        {/* <!--begin::Timeline icon--> */}
                                        <div className="timeline-icon symbol symbol-circle symbol-40px">
                                            <div className="symbol-label bg-light">
                                                <i className="ki-duotone ki-basket fs-2 text-gray-500">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                    <span className="path4"></span>
                                                </i>
                                            </div>
                                        </div>
                                        {/* <!--end::Timeline icon--> */}
                                        {/* <!--begin::Timeline content--> */}
                                        <div className="timeline-content mt-n1">
                                            {/* <!--begin::Timeline heading--> */}
                                            <div className="pe-3 mb-5">
                                                {/* <!--begin::Title--> */}
                                                <div className="fs-5 fw-semibold mb-2">New order
                                                    <a href="#" className="text-primary fw-bold me-1">#67890</a>is placed for Workshow Planning & Budget Estimation</div>
                                                {/* <!--end::Title--> */}
                                                {/* <!--begin::Description--> */}
                                                <div className="d-flex align-items-center mt-1 fs-6">
                                                    {/* <!--begin::Info--> */}
                                                    <div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                                                    {/* <!--end::Info--> */}
                                                    {/* <!--begin::User--> */}
                                                    <a href="#" className="text-primary fw-bold me-1">Jimmy Bold</a>
                                                    {/* <!--end::User--> */}
                                                </div>
                                                {/* <!--end::Description--> */}
                                            </div>
                                            {/* <!--end::Timeline heading--> */}
                                        </div>
                                        {/* <!--end::Timeline content--> */}
                                    </div>
                                    {/* <!--end::Timeline item--> */}
                                </div>
                                {/* <!--end::Timeline items--> */}
                            </div>
                            {/* <!--end::Content--> */}
                        </div>
                        {/* <!--end::Body--> */}
                        {/* <!--begin::Footer--> */}
                        <div className="card-footer py-5 text-center" id="kt_activities_footer">
                            <a href="../../demo5/dist/pages/user-profile/activity.html" className="btn btn-bg-body text-primary">View All Activities
                                <i className="ki-duotone ki-arrow-right fs-3 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i></a>
                        </div>
                        {/* <!--end::Footer--> */}
                    </div>
                </div>
                {/* <!--end::Activities drawer--> */}
                {/* <!--begin::Chat drawer--> */}
                <div id="kt_drawer_chat" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle" data-kt-drawer-close="#kt_drawer_chat_close">
                    {/* <!--begin::Messenger--> */}
                    <div className="card w-100 border-0 rounded-0" id="kt_drawer_chat_messenger">
                        {/* <!--begin::Card header--> */}
                        <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
                            {/* <!--begin::Title--> */}
                            <div className="card-title">
                                {/* <!--begin::User--> */}
                                <div className="d-flex justify-content-center flex-column me-3">
                                    <a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">Brian Cox</a>
                                    {/* <!--begin::Info--> */}
                                    <div className="mb-0 lh-1">
                                        <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                                        <span className="fs-7 fw-semibold text-muted">Active</span>
                                    </div>
                                    {/* <!--end::Info--> */}
                                </div>
                                {/* <!--end::User--> */}
                            </div>
                            {/* <!--end::Title--> */}
                            {/* <!--begin::Card toolbar--> */}
                            <div className="card-toolbar">
                                {/* <!--begin::Menu--> */}
                                <div className="me-0">
                                    <button className="btn btn-sm btn-icon btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        <i className="ki-duotone ki-dots-square fs-2">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                        </i>
                                    </button>
                                    {/* <!--begin::Menu 3--> */}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                        {/* <!--begin::Heading--> */}
                                        <div className="menu-item px-3">
                                            <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Contacts</div>
                                        </div>
                                        {/* <!--end::Heading--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Contact</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Invite Contacts
                                                <span className="ms-2" data-bs-toggle="tooltip" title="Specify a contact email to send an invitation">
                                                    <i className="ki-duotone ki-information fs-7">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                    </i>
                                                </span></a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                            <a href="#" className="menu-link px-3">
                                                <span className="menu-title">Groups</span>
                                                <span className="menu-arrow"></span>
                                            </a>
                                            {/* <!--begin::Menu sub--> */}
                                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-3">
                                                    <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Create Group</a>
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-3">
                                                    <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Invite Members</a>
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item px-3">
                                                    <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                            </div>
                                            {/* <!--end::Menu sub--> */}
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3 my-1">
                                            <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                    </div>
                                    {/* <!--end::Menu 3--> */}
                                </div>
                                {/* <!--end::Menu--> */}
                                {/* <!--begin::Close--> */}
                                <div className="btn btn-sm btn-icon btn-active-color-primary" id="kt_drawer_chat_close">
                                    <i className="ki-duotone ki-cross-square fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                                {/* <!--end::Close--> */}
                            </div>
                            {/* <!--end::Card toolbar--> */}
                        </div>
                        {/* <!--end::Card header--> */}
                        {/* <!--begin::Card body--> */}
                        <div className="card-body" id="kt_drawer_chat_messenger_body">
                            {/* <!--begin::Messages--> */}
                            <div className="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">
                                {/* <!--begin::Message(in)--> */}
                                <div className="d-flex justify-content-start mb-10">
                                    {/* <!--begin::Wrapper--> */}
                                    <div className="d-flex flex-column align-items-start">
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex align-items-center mb-2">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/fe/dist/assets/media/avatars/300-25.jpg" />
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-3">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                <span className="text-muted fs-7 mb-1">2 mins</span>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::Text--> */}
                                        <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
                                        {/* <!--end::Text--> */}
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Message(in)--> */}
                                {/* <!--begin::Message(out)--> */}
                                <div className="d-flex justify-content-end mb-10">
                                    {/* <!--begin::Wrapper--> */}
                                    <div className="d-flex flex-column align-items-end">
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex align-items-center mb-2">
                                            {/* <!--begin::Details--> */}
                                            <div className="me-3">
                                                <span className="text-muted fs-7 mb-1">5 mins</span>
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/fe/dist/assets/media/avatars/300-1.jpg" />
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::Text--> */}
                                        <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
                                        {/* <!--end::Text--> */}
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Message(out)--> */}
                                {/* <!--begin::Message(in)--> */}
                                <div className="d-flex justify-content-start mb-10">
                                    {/* <!--begin::Wrapper--> */}
                                    <div className="d-flex flex-column align-items-start">
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex align-items-center mb-2">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/fe/dist/assets/media/avatars/300-25.jpg" />
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-3">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                <span className="text-muted fs-7 mb-1">1 Hour</span>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::Text--> */}
                                        <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Ok, Understood!</div>
                                        {/* <!--end::Text--> */}
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Message(in)--> */}
                                {/* <!--begin::Message(out)--> */}
                                <div className="d-flex justify-content-end mb-10">
                                    {/* <!--begin::Wrapper--> */}
                                    <div className="d-flex flex-column align-items-end">
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex align-items-center mb-2">
                                            {/* <!--begin::Details--> */}
                                            <div className="me-3">
                                                <span className="text-muted fs-7 mb-1">2 Hours</span>
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/fe/dist/assets/media/avatars/300-1.jpg" />
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::Text--> */}
                                        <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">You’ll receive notifications for all issues, pull requests!</div>
                                        {/* <!--end::Text--> */}
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Message(out)--> */}
                                {/* <!--begin::Message(in)--> */}
                                <div className="d-flex justify-content-start mb-10">
                                    {/* <!--begin::Wrapper--> */}
                                    <div className="d-flex flex-column align-items-start">
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex align-items-center mb-2">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/fe/dist/assets/media/avatars/300-25.jpg" />
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-3">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                <span className="text-muted fs-7 mb-1">3 Hours</span>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::Text--> */}
                                        <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">You can unwatch this repository immediately by clicking here:
                                            <a href="https://keenthemes.com">Keenthemes.com</a></div>
                                        {/* <!--end::Text--> */}
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Message(in)--> */}
                                {/* <!--begin::Message(out)--> */}
                                <div className="d-flex justify-content-end mb-10">
                                    {/* <!--begin::Wrapper--> */}
                                    <div className="d-flex flex-column align-items-end">
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex align-items-center mb-2">
                                            {/* <!--begin::Details--> */}
                                            <div className="me-3">
                                                <span className="text-muted fs-7 mb-1">4 Hours</span>
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/fe/dist/assets/media/avatars/300-1.jpg" />
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::Text--> */}
                                        <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Most purchased Business courses during this sale!</div>
                                        {/* <!--end::Text--> */}
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Message(out)--> */}
                                {/* <!--begin::Message(in)--> */}
                                <div className="d-flex justify-content-start mb-10">
                                    {/* <!--begin::Wrapper--> */}
                                    <div className="d-flex flex-column align-items-start">
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex align-items-center mb-2">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/fe/dist/assets/media/avatars/300-25.jpg" />
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-3">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                <span className="text-muted fs-7 mb-1">5 Hours</span>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::Text--> */}
                                        <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>
                                        {/* <!--end::Text--> */}
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Message(in)--> */}
                                {/* <!--begin::Message(template for out)--> */}
                                <div className="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
                                    {/* <!--begin::Wrapper--> */}
                                    <div className="d-flex flex-column align-items-end">
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex align-items-center mb-2">
                                            {/* <!--begin::Details--> */}
                                            <div className="me-3">
                                                <span className="text-muted fs-7 mb-1">Just now</span>
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/fe/dist/assets/media/avatars/300-1.jpg" />
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::Text--> */}
                                        <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text"></div>
                                        {/* <!--end::Text--> */}
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Message(template for out)--> */}
                                {/* <!--begin::Message(template for in)--> */}
                                <div className="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">
                                    {/* <!--begin::Wrapper--> */}
                                    <div className="d-flex flex-column align-items-start">
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex align-items-center mb-2">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="/fe/dist/assets/media/avatars/300-25.jpg" />
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-3">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                <span className="text-muted fs-7 mb-1">Just now</span>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::Text--> */}
                                        <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Right before vacation season we have the next Big Deal for you.</div>
                                        {/* <!--end::Text--> */}
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Message(template for in)--> */}
                            </div>
                            {/* <!--end::Messages--> */}
                        </div>
                        {/* <!--end::Card body--> */}
                        {/* <!--begin::Card footer--> */}
                        <div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
                            {/* <!--begin::Input--> */}
                            <textarea className="form-control form-control-flush mb-3" rows="1" data-kt-element="input" placeholder="Type a message"></textarea>
                            {/* <!--end::Input--> */}
                            {/* <!--begin:Toolbar--> */}
                            <div className="d-flex flex-stack">
                                {/* <!--begin::Actions--> */}
                                <div className="d-flex align-items-center me-2">
                                    <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
                                        <i className="ki-duotone ki-paper-clip fs-3"></i>
                                    </button>
                                    <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
                                        <i className="ki-duotone ki-cloud-add fs-3">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </button>
                                </div>
                                {/* <!--end::Actions--> */}
                                {/* <!--begin::Send--> */}
                                <button className="btn btn-primary" type="button" data-kt-element="send">Send</button>
                                {/* <!--end::Send--> */}
                            </div>
                            {/* <!--end::Toolbar--> */}
                        </div>
                        {/* <!--end::Card footer--> */}
                    </div>
                    {/* <!--end::Messenger--> */}
                </div>
                {/* <!--end::Chat drawer--> */}
                {/* <!--begin::Chat drawer--> */}
                <div id="kt_shopping_cart" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="cart" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle" data-kt-drawer-close="#kt_drawer_shopping_cart_close">
                    {/* <!--begin::Messenger--> */}
                    <div className="card card-flush w-100 rounded-0">
                        {/* <!--begin::Card header--> */}
                        <div className="card-header">
                            {/* <!--begin::Title--> */}
                            <h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>
                            {/* <!--end::Title--> */}
                            {/* <!--begin::Card toolbar--> */}
                            <div className="card-toolbar">
                                {/* <!--begin::Close--> */}
                                <div className="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_shopping_cart_close">
                                    <i className="ki-duotone ki-cross fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                                {/* <!--end::Close--> */}
                            </div>
                            {/* <!--end::Card toolbar--> */}
                        </div>
                        {/* <!--end::Card header--> */}
                        {/* <!--begin::Card body--> */}
                        <div className="card-body hover-scroll-overlay-y h-400px pt-5">
                            {/* <!--begin::Item--> */}
                            <div className="d-flex flex-stack">
                                {/* <!--begin::Wrapper--> */}
                                <div className="d-flex flex-column me-3">
                                    {/* <!--begin::Section--> */}
                                    <div className="mb-3">
                                        <a href="../../demo5/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Iblender</a>
                                        <span className="text-gray-400 fw-semibold d-block">The best kitchen gadget in 2022</span>
                                    </div>
                                    {/* <!--end::Section--> */}
                                    {/* <!--begin::Section--> */}
                                    <div className="d-flex align-items-center">
                                        <span className="fw-bold text-gray-800 fs-5">$ 350</span>
                                        <span className="text-muted mx-2">for</span>
                                        <span className="fw-bold text-gray-800 fs-5 me-3">5</span>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                            <i className="ki-duotone ki-minus fs-4"></i>
                                        </a>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            <i className="ki-duotone ki-plus fs-4"></i>
                                        </a>
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                                {/* <!--begin::Pic--> */}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="/fe/dist/assets/media/stock/600x400/img-1.jpg" alt="" />
                                </div>
                                {/* <!--end::Pic--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Separator--> */}
                            <div className="separator separator-dashed my-6"></div>
                            {/* <!--end::Separator--> */}
                            {/* <!--begin::Item--> */}
                            <div className="d-flex flex-stack">
                                {/* <!--begin::Wrapper--> */}
                                <div className="d-flex flex-column me-3">
                                    {/* <!--begin::Section--> */}
                                    <div className="mb-3">
                                        <a href="../../demo5/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">SmartCleaner</a>
                                        <span className="text-gray-400 fw-semibold d-block">Smart tool for cooking</span>
                                    </div>
                                    {/* <!--end::Section--> */}
                                    {/* <!--begin::Section--> */}
                                    <div className="d-flex align-items-center">
                                        <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                                        <span className="text-muted mx-2">for</span>
                                        <span className="fw-bold text-gray-800 fs-5 me-3">4</span>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                            <i className="ki-duotone ki-minus fs-4"></i>
                                        </a>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            <i className="ki-duotone ki-plus fs-4"></i>
                                        </a>
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                                {/* <!--begin::Pic--> */}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="/fe/dist/assets/media/stock/600x400/img-3.jpg" alt="" />
                                </div>
                                {/* <!--end::Pic--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Separator--> */}
                            <div className="separator separator-dashed my-6"></div>
                            {/* <!--end::Separator--> */}
                            {/* <!--begin::Item--> */}
                            <div className="d-flex flex-stack">
                                {/* <!--begin::Wrapper--> */}
                                <div className="d-flex flex-column me-3">
                                    {/* <!--begin::Section--> */}
                                    <div className="mb-3">
                                        <a href="../../demo5/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">CameraMaxr</a>
                                        <span className="text-gray-400 fw-semibold d-block">Professional camera for edge</span>
                                    </div>
                                    {/* <!--end::Section--> */}
                                    {/* <!--begin::Section--> */}
                                    <div className="d-flex align-items-center">
                                        <span className="fw-bold text-gray-800 fs-5">$ 150</span>
                                        <span className="text-muted mx-2">for</span>
                                        <span className="fw-bold text-gray-800 fs-5 me-3">3</span>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                            <i className="ki-duotone ki-minus fs-4"></i>
                                        </a>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            <i className="ki-duotone ki-plus fs-4"></i>
                                        </a>
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                                {/* <!--begin::Pic--> */}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="/fe/dist/assets/media/stock/600x400/img-8.jpg" alt="" />
                                </div>
                                {/* <!--end::Pic--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Separator--> */}
                            <div className="separator separator-dashed my-6"></div>
                            {/* <!--end::Separator--> */}
                            {/* <!--begin::Item--> */}
                            <div className="d-flex flex-stack">
                                {/* <!--begin::Wrapper--> */}
                                <div className="d-flex flex-column me-3">
                                    {/* <!--begin::Section--> */}
                                    <div className="mb-3">
                                        <a href="../../demo5/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
                                        <span className="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
                                    </div>
                                    {/* <!--end::Section--> */}
                                    {/* <!--begin::Section--> */}
                                    <div className="d-flex align-items-center">
                                        <span className="fw-bold text-gray-800 fs-5">$ 1450</span>
                                        <span className="text-muted mx-2">for</span>
                                        <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                            <i className="ki-duotone ki-minus fs-4"></i>
                                        </a>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            <i className="ki-duotone ki-plus fs-4"></i>
                                        </a>
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                                {/* <!--begin::Pic--> */}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="/fe/dist/assets/media/stock/600x400/img-26.jpg" alt="" />
                                </div>
                                {/* <!--end::Pic--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Separator--> */}
                            <div className="separator separator-dashed my-6"></div>
                            {/* <!--end::Separator--> */}
                            {/* <!--begin::Item--> */}
                            <div className="d-flex flex-stack">
                                {/* <!--begin::Wrapper--> */}
                                <div className="d-flex flex-column me-3">
                                    {/* <!--begin::Section--> */}
                                    <div className="mb-3">
                                        <a href="../../demo5/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">MotionWire</a>
                                        <span className="text-gray-400 fw-semibold d-block">Perfect animation tool</span>
                                    </div>
                                    {/* <!--end::Section--> */}
                                    {/* <!--begin::Section--> */}
                                    <div className="d-flex align-items-center">
                                        <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                                        <span className="text-muted mx-2">for</span>
                                        <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                            <i className="ki-duotone ki-minus fs-4"></i>
                                        </a>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            <i className="ki-duotone ki-plus fs-4"></i>
                                        </a>
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                                {/* <!--begin::Pic--> */}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="/fe/dist/assets/media/stock/600x400/img-21.jpg" alt="" />
                                </div>
                                {/* <!--end::Pic--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Separator--> */}
                            <div className="separator separator-dashed my-6"></div>
                            {/* <!--end::Separator--> */}
                            {/* <!--begin::Item--> */}
                            <div className="d-flex flex-stack">
                                {/* <!--begin::Wrapper--> */}
                                <div className="d-flex flex-column me-3">
                                    {/* <!--begin::Section--> */}
                                    <div className="mb-3">
                                        <a href="../../demo5/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Samsung</a>
                                        <span className="text-gray-400 fw-semibold d-block">Profile info,Timeline etc</span>
                                    </div>
                                    {/* <!--end::Section--> */}
                                    {/* <!--begin::Section--> */}
                                    <div className="d-flex align-items-center">
                                        <span className="fw-bold text-gray-800 fs-5">$ 720</span>
                                        <span className="text-muted mx-2">for</span>
                                        <span className="fw-bold text-gray-800 fs-5 me-3">6</span>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                            <i className="ki-duotone ki-minus fs-4"></i>
                                        </a>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            <i className="ki-duotone ki-plus fs-4"></i>
                                        </a>
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                                {/* <!--begin::Pic--> */}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="/fe/dist/assets/media/stock/600x400/img-34.jpg" alt="" />
                                </div>
                                {/* <!--end::Pic--> */}
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Separator--> */}
                            <div className="separator separator-dashed my-6"></div>
                            {/* <!--end::Separator--> */}
                            {/* <!--begin::Item--> */}
                            <div className="d-flex flex-stack">
                                {/* <!--begin::Wrapper--> */}
                                <div className="d-flex flex-column me-3">
                                    {/* <!--begin::Section--> */}
                                    <div className="mb-3">
                                        <a href="../../demo5/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
                                        <span className="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
                                    </div>
                                    {/* <!--end::Section--> */}
                                    {/* <!--begin::Section--> */}
                                    <div className="d-flex align-items-center">
                                        <span className="fw-bold text-gray-800 fs-5">$ 430</span>
                                        <span className="text-muted mx-2">for</span>
                                        <span className="fw-bold text-gray-800 fs-5 me-3">8</span>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                            <i className="ki-duotone ki-minus fs-4"></i>
                                        </a>
                                        <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                            <i className="ki-duotone ki-plus fs-4"></i>
                                        </a>
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                                {/* <!--begin::Pic--> */}
                                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                    <img src="/fe/dist/assets/media/stock/600x400/img-27.jpg" alt="" />
                                </div>
                                {/* <!--end::Pic--> */}
                            </div>
                            {/* <!--end::Item--> */}
                        </div>
                        {/* <!--end::Card body--> */}
                        {/* <!--begin::Card footer--> */}
                        <div className="card-footer">
                            {/* <!--begin::Item--> */}
                            <div className="d-flex flex-stack">
                                <span className="fw-bold text-gray-600">Total</span>
                                <span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--begin::Item--> */}
                            <div className="d-flex flex-stack">
                                <span className="fw-bold text-gray-600">Sub total</span>
                                <span className="text-primary fw-bolder fs-5">$ 246.35</span>
                            </div>
                            {/* <!--end::Item--> */}
                            {/* <!--end::Action--> */}
                            <div className="d-flex justify-content-end mt-9">
                                <a href="#" className="btn btn-primary d-flex justify-content-end">Pleace Order</a>
                            </div>
                            {/* <!--end::Action--> */}
                        </div>
                        {/* <!--end::Card footer--> */}
                    </div>
                    {/* <!--end::Messenger--> */}
                </div>
                {/* <!--end::Chat drawer--> */}
                {/* <!--end::Drawers--> */}
                {/* <!--end::Main--> */}
                {/* <!--begin::Scrolltop--> */}
                <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
                    <i className="ki-duotone ki-arrow-up">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                </div>
                {/* <!--end::Scrolltop--> */}
                {/* <!--begin::Modals--> */}
                {/* <!--begin::Modal - Upgrade plan--> */}
                <div className="modal fade" id="kt_modal_upgrade_plan" tabindex="-1" aria-hidden="true">
                    {/* <!--begin::Modal dialog--> */}
                    <div className="modal-dialog modal-xl">
                        {/* <!--begin::Modal content--> */}
                        <div className="modal-content rounded">
                            {/* <!--begin::Modal header--> */}
                            <div className="modal-header justify-content-end border-0 pb-0">
                                {/* <!--begin::Close--> */}
                                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                    <i className="ki-duotone ki-cross fs-1">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                                {/* <!--end::Close--> */}
                            </div>
                            {/* <!--end::Modal header--> */}
                            {/* <!--begin::Modal body--> */}
                            <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                                {/* <!--begin::Heading--> */}
                                <div className="mb-13 text-center">
                                    <h1 className="mb-3">Upgrade a Plan</h1>
                                    <div className="text-muted fw-semibold fs-5">If you need more info, please check
                                        <a href="#" className="link-primary fw-bold">Pricing Guidelines</a>.</div>
                                </div>
                                {/* <!--end::Heading--> */}
                                {/* <!--begin::Plans--> */}
                                <div className="d-flex flex-column">
                                    {/* <!--begin::Nav group--> */}
                                    <div className="nav-group nav-group-outline mx-auto" data-kt-buttons="true">
                                        <button className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active" data-kt-plan="month">Monthly</button>
                                        <button className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3" data-kt-plan="annual">Annual</button>
                                    </div>
                                    {/* <!--end::Nav group--> */}
                                    {/* <!--begin::Row--> */}
                                    <div className="row mt-10">
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-6 mb-10 mb-lg-0">
                                            {/* <!--begin::Tabs--> */}
                                            <div className="nav flex-column">
                                                {/* <!--begin::Tab link--> */}
                                                <label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_startup">
                                                    {/* <!--end::Description--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Radio--> */}
                                                        <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                            <input className="form-check-input" type="radio" name="plan" checked="checked" value="startup" />
                                                        </div>
                                                        {/* <!--end::Radio--> */}
                                                        {/* <!--begin::Info--> */}
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Startup</div>
                                                            <div className="fw-semibold opacity-75">Best for startups</div>
                                                        </div>
                                                        {/* <!--end::Info--> */}
                                                    </div>
                                                    {/* <!--end::Description--> */}
                                                    {/* <!--begin::Price--> */}
                                                    <div className="ms-5">
                                                        <span className="mb-2">$</span>
                                                        <span className="fs-3x fw-bold" data-kt-plan-price-month="39" data-kt-plan-price-annual="399">39</span>
                                                        <span className="fs-7 opacity-50">/
                                                            <span data-kt-element="period">Mon</span></span>
                                                    </div>
                                                    {/* <!--end::Price--> */}
                                                </label>
                                                {/* <!--end::Tab link--> */}
                                                {/* <!--begin::Tab link--> */}
                                                <label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_advanced">
                                                    {/* <!--end::Description--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Radio--> */}
                                                        <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                            <input className="form-check-input" type="radio" name="plan" value="advanced" />
                                                        </div>
                                                        {/* <!--end::Radio--> */}
                                                        {/* <!--begin::Info--> */}
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Advanced</div>
                                                            <div className="fw-semibold opacity-75">Best for 100+ team size</div>
                                                        </div>
                                                        {/* <!--end::Info--> */}
                                                    </div>
                                                    {/* <!--end::Description--> */}
                                                    {/* <!--begin::Price--> */}
                                                    <div className="ms-5">
                                                        <span className="mb-2">$</span>
                                                        <span className="fs-3x fw-bold" data-kt-plan-price-month="339" data-kt-plan-price-annual="3399">339</span>
                                                        <span className="fs-7 opacity-50">/
                                                            <span data-kt-element="period">Mon</span></span>
                                                    </div>
                                                    {/* <!--end::Price--> */}
                                                </label>
                                                {/* <!--end::Tab link--> */}
                                                {/* <!--begin::Tab link--> */}
                                                <label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_enterprise">
                                                    {/* <!--end::Description--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Radio--> */}
                                                        <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                            <input className="form-check-input" type="radio" name="plan" value="enterprise" />
                                                        </div>
                                                        {/* <!--end::Radio--> */}
                                                        {/* <!--begin::Info--> */}
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Enterprise
                                                                <span className="badge badge-light-success ms-2 py-2 px-3 fs-7">Popular</span></div>
                                                            <div className="fw-semibold opacity-75">Best value for 1000+ team</div>
                                                        </div>
                                                        {/* <!--end::Info--> */}
                                                    </div>
                                                    {/* <!--end::Description--> */}
                                                    {/* <!--begin::Price--> */}
                                                    <div className="ms-5">
                                                        <span className="mb-2">$</span>
                                                        <span className="fs-3x fw-bold" data-kt-plan-price-month="999" data-kt-plan-price-annual="9999">999</span>
                                                        <span className="fs-7 opacity-50">/
                                                            <span data-kt-element="period">Mon</span></span>
                                                    </div>
                                                    {/* <!--end::Price--> */}
                                                </label>
                                                {/* <!--end::Tab link--> */}
                                                {/* <!--begin::Tab link--> */}
                                                <label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_custom">
                                                    {/* <!--end::Description--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Radio--> */}
                                                        <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                            <input className="form-check-input" type="radio" name="plan" value="custom" />
                                                        </div>
                                                        {/* <!--end::Radio--> */}
                                                        {/* <!--begin::Info--> */}
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Custom</div>
                                                            <div className="fw-semibold opacity-75">Requet a custom license</div>
                                                        </div>
                                                        {/* <!--end::Info--> */}
                                                    </div>
                                                    {/* <!--end::Description--> */}
                                                    {/* <!--begin::Price--> */}
                                                    <div className="ms-5">
                                                        <a href="#" className="btn btn-sm btn-success">Contact Us</a>
                                                    </div>
                                                    {/* <!--end::Price--> */}
                                                </label>
                                                {/* <!--end::Tab link--> */}
                                            </div>
                                            {/* <!--end::Tabs--> */}
                                        </div>
                                        {/* <!--end::Col--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-6">
                                            {/* <!--begin::Tab content--> */}
                                            <div className="tab-content rounded h-100 bg-light p-10">
                                                {/* <!--begin::Tab Pane--> */}
                                                <div className="tab-pane fade show active" id="kt_upgrade_plan_startup">
                                                    {/* <!--begin::Heading--> */}
                                                    <div className="pb-5">
                                                        <h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
                                                        <div className="text-muted fw-semibold">Optimal for 10+ team size and new startup</div>
                                                    </div>
                                                    {/* <!--end::Heading--> */}
                                                    {/* <!--begin::Body--> */}
                                                    <div className="pt-1">
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-muted flex-grow-1">Finance Module</span>
                                                            <i className="ki-duotone ki-cross-circle fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-muted flex-grow-1">Accounting Module</span>
                                                            <i className="ki-duotone ki-cross-circle fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-muted flex-grow-1">Network Platform</span>
                                                            <i className="ki-duotone ki-cross-circle fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center">
                                                            <span className="fw-semibold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
                                                            <i className="ki-duotone ki-cross-circle fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                    </div>
                                                    {/* <!--end::Body--> */}
                                                </div>
                                                {/* <!--end::Tab Pane--> */}
                                                {/* <!--begin::Tab Pane--> */}
                                                <div className="tab-pane fade" id="kt_upgrade_plan_advanced">
                                                    {/* <!--begin::Heading--> */}
                                                    <div className="pb-5">
                                                        <h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
                                                        <div className="text-muted fw-semibold">Optimal for 100+ team size and grown company</div>
                                                    </div>
                                                    {/* <!--end::Heading--> */}
                                                    {/* <!--begin::Body--> */}
                                                    <div className="pt-1">
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-muted flex-grow-1">Network Platform</span>
                                                            <i className="ki-duotone ki-cross-circle fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center">
                                                            <span className="fw-semibold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
                                                            <i className="ki-duotone ki-cross-circle fs-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                    </div>
                                                    {/* <!--end::Body--> */}
                                                </div>
                                                {/* <!--end::Tab Pane--> */}
                                                {/* <!--begin::Tab Pane--> */}
                                                <div className="tab-pane fade" id="kt_upgrade_plan_enterprise">
                                                    {/* <!--begin::Heading--> */}
                                                    <div className="pb-5">
                                                        <h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
                                                        <div className="text-muted fw-semibold">Optimal for 1000+ team and enterpise</div>
                                                    </div>
                                                    {/* <!--end::Heading--> */}
                                                    {/* <!--begin::Body--> */}
                                                    <div className="pt-1">
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Network Platform</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Cloud Space</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                    </div>
                                                    {/* <!--end::Body--> */}
                                                </div>
                                                {/* <!--end::Tab Pane--> */}
                                                {/* <!--begin::Tab Pane--> */}
                                                <div className="tab-pane fade" id="kt_upgrade_plan_custom">
                                                    {/* <!--begin::Heading--> */}
                                                    <div className="pb-5">
                                                        <h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
                                                        <div className="text-muted fw-semibold">Optimal for corporations</div>
                                                    </div>
                                                    {/* <!--end::Heading--> */}
                                                    {/* <!--begin::Body--> */}
                                                    <div className="pt-1">
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Users</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Project Integrations</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center mb-7">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Network Platform</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div className="d-flex align-items-center">
                                                            <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Cloud Space</span>
                                                            <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                    </div>
                                                    {/* <!--end::Body--> */}
                                                </div>
                                                {/* <!--end::Tab Pane--> */}
                                            </div>
                                            {/* <!--end::Tab content--> */}
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    {/* <!--end::Row--> */}
                                </div>
                                {/* <!--end::Plans--> */}
                                {/* <!--begin::Actions--> */}
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-primary" id="kt_modal_upgrade_plan_btn">
                                        {/* <!--begin::Indicator label--> */}
                                        <span className="indicator-label">Upgrade Plan</span>
                                        {/* <!--end::Indicator label--> */}
                                        {/* <!--begin::Indicator progress--> */}
                                        <span className="indicator-progress">Please wait...
                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                        {/* <!--end::Indicator progress--> */}
                                    </button>
                                </div>
                                {/* <!--end::Actions--> */}
                            </div>
                            {/* <!--end::Modal body--> */}
                        </div>
                        {/* <!--end::Modal content--> */}
                    </div>
                    {/* <!--end::Modal dialog--> */}
                </div>
                {/* <!--end::Modal - Upgrade plan--> */}
                {/* <!--begin::Modal - Users Search--> */}
                <div className="modal fade" id="kt_modal_users_search" tabindex="-1" aria-hidden="true">
                    {/* <!--begin::Modal dialog--> */}
                    <div className="modal-dialog modal-dialog-centered mw-650px">
                        {/* <!--begin::Modal content--> */}
                        <div className="modal-content">
                            {/* <!--begin::Modal header--> */}
                            <div className="modal-header pb-0 border-0 justify-content-end">
                                {/* <!--begin::Close--> */}
                                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                    <i className="ki-duotone ki-cross fs-1">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                                {/* <!--end::Close--> */}
                            </div>
                            {/* <!--begin::Modal header--> */}
                            {/* <!--begin::Modal body--> */}
                            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                                {/* <!--begin::Content--> */}
                                <div className="text-center mb-13">
                                    <h1 className="mb-3">Search Users</h1>
                                    <div className="text-muted fw-semibold fs-5">Invite Collaborators To Your Project</div>
                                </div>
                                {/* <!--end::Content--> */}
                                {/* <!--begin::Search--> */}
                                <div id="kt_modal_users_search_handler" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="inline">
                                    {/* <!--begin::Form--> */}
                                    <form data-kt-search-element="form" className="w-100 position-relative mb-5" autocomplete="off">
                                        {/* <!--begin::Hidden input(Added to disable form autocomplete)--> */}
                                        <input type="hidden" />
                                        {/* <!--end::Hidden input--> */}
                                        {/* <!--begin::Icon--> */}
                                        <i className="ki-duotone ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                        {/* <!--end::Icon--> */}
                                        {/* <!--begin::Input--> */}
                                        <input type="text" className="form-control form-control-lg form-control-solid px-15" name="search" value="" placeholder="Search by username, full name or email..." data-kt-search-element="input" />
                                        {/* <!--end::Input--> */}
                                        {/* <!--begin::Spinner--> */}
                                        <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
                                            <span className="spinner-border h-15px w-15px align-middle text-muted"></span>
                                        </span>
                                        {/* <!--end::Spinner--> */}
                                        {/* <!--begin::Reset--> */}
                                        <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
                                            <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </span>
                                        {/* <!--end::Reset--> */}
                                    </form>
                                    {/* <!--end::Form--> */}
                                    {/* <!--begin::Wrapper--> */}
                                    <div className="py-5">
                                        {/* <!--begin::Suggestions--> */}
                                        <div data-kt-search-element="suggestions">
                                            {/* <!--begin::Heading--> */}
                                            <h3 className="fw-semibold mb-5">Recently searched:</h3>
                                            {/* <!--end::Heading--> */}
                                            {/* <!--begin::Users--> */}
                                            <div className="mh-375px scroll-y me-n7 pe-7">
                                                {/* <!--begin::User--> */}
                                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                    {/* <!--begin::Avatar--> */}
                                                    <div className="symbol symbol-35px symbol-circle me-5">
                                                        <img alt="Pic" src="/fe/dist/assets/media/avatars/300-6.jpg" />
                                                    </div>
                                                    {/* <!--end::Avatar--> */}
                                                    {/* <!--begin::Info--> */}
                                                    <div className="fw-semibold">
                                                        <span className="fs-6 text-gray-800 me-2">Emma Smith</span>
                                                        <span className="badge badge-light">Art Director</span>
                                                    </div>
                                                    {/* <!--end::Info--> */}
                                                </a>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::User--> */}
                                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                    {/* <!--begin::Avatar--> */}
                                                    <div className="symbol symbol-35px symbol-circle me-5">
                                                        <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                                                    </div>
                                                    {/* <!--end::Avatar--> */}
                                                    {/* <!--begin::Info--> */}
                                                    <div className="fw-semibold">
                                                        <span className="fs-6 text-gray-800 me-2">Melody Macy</span>
                                                        <span className="badge badge-light">Marketing Analytic</span>
                                                    </div>
                                                    {/* <!--end::Info--> */}
                                                </a>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::User--> */}
                                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                    {/* <!--begin::Avatar--> */}
                                                    <div className="symbol symbol-35px symbol-circle me-5">
                                                        <img alt="Pic" src="/fe/dist/assets/media/avatars/300-1.jpg" />
                                                    </div>
                                                    {/* <!--end::Avatar--> */}
                                                    {/* <!--begin::Info--> */}
                                                    <div className="fw-semibold">
                                                        <span className="fs-6 text-gray-800 me-2">Max Smith</span>
                                                        <span className="badge badge-light">Software Enginer</span>
                                                    </div>
                                                    {/* <!--end::Info--> */}
                                                </a>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::User--> */}
                                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                    {/* <!--begin::Avatar--> */}
                                                    <div className="symbol symbol-35px symbol-circle me-5">
                                                        <img alt="Pic" src="/fe/dist/assets/media/avatars/300-5.jpg" />
                                                    </div>
                                                    {/* <!--end::Avatar--> */}
                                                    {/* <!--begin::Info--> */}
                                                    <div className="fw-semibold">
                                                        <span className="fs-6 text-gray-800 me-2">Sean Bean</span>
                                                        <span className="badge badge-light">Web Developer</span>
                                                    </div>
                                                    {/* <!--end::Info--> */}
                                                </a>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::User--> */}
                                                <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                    {/* <!--begin::Avatar--> */}
                                                    <div className="symbol symbol-35px symbol-circle me-5">
                                                        <img alt="Pic" src="/fe/dist/assets/media/avatars/300-25.jpg" />
                                                    </div>
                                                    {/* <!--end::Avatar--> */}
                                                    {/* <!--begin::Info--> */}
                                                    <div className="fw-semibold">
                                                        <span className="fs-6 text-gray-800 me-2">Brian Cox</span>
                                                        <span className="badge badge-light">UI/UX Designer</span>
                                                    </div>
                                                    {/* <!--end::Info--> */}
                                                </a>
                                                {/* <!--end::User--> */}
                                            </div>
                                            {/* <!--end::Users--> */}
                                        </div>
                                        {/* <!--end::Suggestions--> */}
                                        {/* <!--begin::Results(add d-none to below element to hide the users list by default)--> */}
                                        <div data-kt-search-element="results" className="d-none">
                                            {/* <!--begin::Users--> */}
                                            <div className="mh-375px scroll-y me-n7 pe-7">
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="0">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" value="0" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="/fe/dist/assets/media/avatars/300-6.jpg" />
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                                                            <div className="fw-semibold text-muted">smith@kpmg.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1">Guest</option>
                                                            <option value="2" selected="selected">Owner</option>
                                                            <option value="3">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="1">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" value="1" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                                                            <div className="fw-semibold text-muted">melody@altbox.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" selected="selected">Guest</option>
                                                            <option value="2">Owner</option>
                                                            <option value="3">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="2">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" value="2" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="/fe/dist/assets/media/avatars/300-1.jpg" />
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                                                            <div className="fw-semibold text-muted">max@kt.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1">Guest</option>
                                                            <option value="2">Owner</option>
                                                            <option value="3" selected="selected">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="3">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" value="3" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="/fe/dist/assets/media/avatars/300-5.jpg" />
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                                                            <div className="fw-semibold text-muted">sean@dellito.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1">Guest</option>
                                                            <option value="2" selected="selected">Owner</option>
                                                            <option value="3">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="4">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" value="4" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="/fe/dist/assets/media/avatars/300-25.jpg" />
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                                                            <div className="fw-semibold text-muted">brian@exchange.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1">Guest</option>
                                                            <option value="2">Owner</option>
                                                            <option value="3" selected="selected">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="5">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" value="5" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                                                            <div className="fw-semibold text-muted">mik@pex.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1">Guest</option>
                                                            <option value="2" selected="selected">Owner</option>
                                                            <option value="3">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="6">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" value="6" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="/fe/dist/assets/media/avatars/300-9.jpg" />
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                                                            <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1">Guest</option>
                                                            <option value="2">Owner</option>
                                                            <option value="3" selected>Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="7">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" value="7" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                                                            <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1">Guest</option>
                                                            <option value="2" selected="selected">Owner</option>
                                                            <option value="3">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="8">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" value="8" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                                                            <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" selected="selected">Guest</option>
                                                            <option value="2">Owner</option>
                                                            <option value="3">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="9">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" value="9" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="/fe/dist/assets/media/avatars/300-23.jpg" />
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                                                            <div className="fw-semibold text-muted">dam@consilting.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1">Guest</option>
                                                            <option value="2">Owner</option>
                                                            <option value="3" selected="selected">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="10">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" value="10" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                                                            <div className="fw-semibold text-muted">emma@intenso.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1">Guest</option>
                                                            <option value="2" selected="selected">Owner</option>
                                                            <option value="3">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="11">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" value="11" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="/fe/dist/assets/media/avatars/300-12.jpg" />
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
                                                            <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" selected="selected">Guest</option>
                                                            <option value="2">Owner</option>
                                                            <option value="3">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="12">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" value="12" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
                                                            <div className="fw-semibold text-muted">robert@benko.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1">Guest</option>
                                                            <option value="2">Owner</option>
                                                            <option value="3" selected="selected">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="13">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" value="13" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="/fe/dist/assets/media/avatars/300-13.jpg" />
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
                                                            <div className="fw-semibold text-muted">miller@mapple.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1">Guest</option>
                                                            <option value="2">Owner</option>
                                                            <option value="3" selected="selected">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="14">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" value="14" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                                                            <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1">Guest</option>
                                                            <option value="2" selected="selected">Owner</option>
                                                            <option value="3">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="15">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" value="15" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <img alt="Pic" src="/fe/dist/assets/media/avatars/300-21.jpg" />
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
                                                            <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1" selected="selected">Guest</option>
                                                            <option value="2">Owner</option>
                                                            <option value="3">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                                {/* <!--begin::Separator--> */}
                                                <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                                {/* <!--end::Separator--> */}
                                                {/* <!--begin::User--> */}
                                                <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="16">
                                                    {/* <!--begin::Details--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Checkbox--> */}
                                                        <label className="form-check form-check-custom form-check-solid me-5">
                                                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" value="16" />
                                                        </label>
                                                        {/* <!--end::Checkbox--> */}
                                                        {/* <!--begin::Avatar--> */}
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                                                        </div>
                                                        {/* <!--end::Avatar--> */}
                                                        {/* <!--begin::Details--> */}
                                                        <div className="ms-5">
                                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                                                            <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Details--> */}
                                                    {/* <!--begin::Access menu--> */}
                                                    <div className="ms-2 w-100px">
                                                        <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                            <option value="1">Guest</option>
                                                            <option value="2">Owner</option>
                                                            <option value="3" selected="selected">Can Edit</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Access menu--> */}
                                                </div>
                                                {/* <!--end::User--> */}
                                            </div>
                                            {/* <!--end::Users--> */}
                                            {/* <!--begin::Actions--> */}
                                            <div className="d-flex flex-center mt-15">
                                                <button type="reset" id="kt_modal_users_search_reset" data-bs-dismiss="modal" className="btn btn-active-light me-3">Cancel</button>
                                                <button type="submit" id="kt_modal_users_search_submit" className="btn btn-primary">Add Selected Users</button>
                                            </div>
                                            {/* <!--end::Actions--> */}
                                        </div>
                                        {/* <!--end::Results--> */}
                                        {/* <!--begin::Empty--> */}
                                        <div data-kt-search-element="empty" className="text-center d-none">
                                            {/* <!--begin::Message--> */}
                                            <div className="fw-semibold py-10">
                                                <div className="text-gray-600 fs-3 mb-2">No users found</div>
                                                <div className="text-muted fs-6">Try to search by username, full name or email...</div>
                                            </div>
                                            {/* <!--end::Message--> */}
                                            {/* <!--begin::Illustration--> */}
                                            <div className="text-center px-5">
                                                <img src="/fe/dist/assets/media/illustrations/sketchy-1/1.png" alt="" className="w-100 h-200px h-sm-325px" />
                                            </div>
                                            {/* <!--end::Illustration--> */}
                                        </div>
                                        {/* <!--end::Empty--> */}
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Search--> */}
                            </div>
                            {/* <!--end::Modal body--> */}
                        </div>
                        {/* <!--end::Modal content--> */}
                    </div>
                    {/* <!--end::Modal dialog--> */}
                </div>
                {/* <!--end::Modal - Users Search--> */}
                {/* <!--begin::Modal - Invite Friends--> */}
                <div className="modal fade" id="kt_modal_invite_friends" tabindex="-1" aria-hidden="true">
                    {/* <!--begin::Modal dialog--> */}
                    <div className="modal-dialog mw-650px">
                        {/* <!--begin::Modal content--> */}
                        <div className="modal-content">
                            {/* <!--begin::Modal header--> */}
                            <div className="modal-header pb-0 border-0 justify-content-end">
                                {/* <!--begin::Close--> */}
                                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                    <i className="ki-duotone ki-cross fs-1">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                                {/* <!--end::Close--> */}
                            </div>
                            {/* <!--begin::Modal header--> */}
                            {/* <!--begin::Modal body--> */}
                            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                                {/* <!--begin::Heading--> */}
                                <div className="text-center mb-13">
                                    {/* <!--begin::Title--> */}
                                    <h1 className="mb-3">Invite a Friend</h1>
                                    {/* <!--end::Title--> */}
                                    {/* <!--begin::Description--> */}
                                    <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                        <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
                                    {/* <!--end::Description--> */}
                                </div>
                                {/* <!--end::Heading--> */}
                                {/* <!--begin::Google Contacts Invite--> */}
                                <div className="btn btn-light-primary fw-bold w-100 mb-8">
                                    <img alt="Logo" src="/fe/dist/assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Invite Gmail Contacts</div>
                                {/* <!--end::Google Contacts Invite--> */}
                                {/* <!--begin::Separator--> */}
                                <div className="separator d-flex flex-center mb-8">
                                    <span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">or</span>
                                </div>
                                {/* <!--end::Separator--> */}
                                {/* <!--begin::Textarea--> */}
                                <textarea className="form-control form-control-solid mb-8" rows="3" placeholder="Type or paste emails here"></textarea>
                                {/* <!--end::Textarea--> */}
                                {/* <!--begin::Users--> */}
                                <div className="mb-10">
                                    {/* <!--begin::Heading--> */}
                                    <div className="fs-6 fw-semibold mb-2">Your Invitations</div>
                                    {/* <!--end::Heading--> */}
                                    {/* <!--begin::List--> */}
                                    <div className="mh-300px scroll-y me-n7 pe-7">
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="/fe/dist/assets/media/avatars/300-6.jpg" />
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                                                    <div className="fw-semibold text-muted">smith@kpmg.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1">Guest</option>
                                                    <option value="2" selected="selected">Owner</option>
                                                    <option value="3">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                                                    <div className="fw-semibold text-muted">melody@altbox.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" selected="selected">Guest</option>
                                                    <option value="2">Owner</option>
                                                    <option value="3">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="/fe/dist/assets/media/avatars/300-1.jpg" />
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                                                    <div className="fw-semibold text-muted">max@kt.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1">Guest</option>
                                                    <option value="2">Owner</option>
                                                    <option value="3" selected="selected">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="/fe/dist/assets/media/avatars/300-5.jpg" />
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                                                    <div className="fw-semibold text-muted">sean@dellito.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1">Guest</option>
                                                    <option value="2" selected="selected">Owner</option>
                                                    <option value="3">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="/fe/dist/assets/media/avatars/300-25.jpg" />
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                                                    <div className="fw-semibold text-muted">brian@exchange.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1">Guest</option>
                                                    <option value="2">Owner</option>
                                                    <option value="3" selected="selected">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                                                    <div className="fw-semibold text-muted">mik@pex.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1">Guest</option>
                                                    <option value="2" selected="selected">Owner</option>
                                                    <option value="3">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="/fe/dist/assets/media/avatars/300-9.jpg" />
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                                                    <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1">Guest</option>
                                                    <option value="2">Owner</option>
                                                    <option value="3" selected="selected">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                                                    <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1">Guest</option>
                                                    <option value="2" selected="selected">Owner</option>
                                                    <option value="3">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                                                    <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" selected="selected">Guest</option>
                                                    <option value="2">Owner</option>
                                                    <option value="3">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="/fe/dist/assets/media/avatars/300-23.jpg" />
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                                                    <div className="fw-semibold text-muted">dam@consilting.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1">Guest</option>
                                                    <option value="2">Owner</option>
                                                    <option value="3" selected="selected">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                                                    <div className="fw-semibold text-muted">emma@intenso.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1">Guest</option>
                                                    <option value="2" selected="selected">Owner</option>
                                                    <option value="3">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="/fe/dist/assets/media/avatars/300-12.jpg" />
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
                                                    <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" selected="selected">Guest</option>
                                                    <option value="2">Owner</option>
                                                    <option value="3">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
                                                    <div className="fw-semibold text-muted">robert@benko.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1">Guest</option>
                                                    <option value="2">Owner</option>
                                                    <option value="3" selected="selected">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="/fe/dist/assets/media/avatars/300-13.jpg" />
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
                                                    <div className="fw-semibold text-muted">miller@mapple.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1">Guest</option>
                                                    <option value="2">Owner</option>
                                                    <option value="3" selected="selected">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                                                    <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1">Guest</option>
                                                    <option value="2" selected="selected">Owner</option>
                                                    <option value="3">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="/fe/dist/assets/media/avatars/300-21.jpg" />
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
                                                    <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1" selected="selected">Guest</option>
                                                    <option value="2">Owner</option>
                                                    <option value="3">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-stack py-4">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex align-items-center">
                                                {/* <!--begin::Avatar--> */}
                                                <div className="symbol symbol-35px symbol-circle">
                                                    <img alt="Pic" src="/fe/dist/assets/media/avatars/300-13.jpg" />
                                                </div>
                                                {/* <!--end::Avatar--> */}
                                                {/* <!--begin::Details--> */}
                                                <div className="ms-5">
                                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
                                                    <div className="fw-semibold text-muted">miller@mapple.com</div>
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            {/* <!--begin::Access menu--> */}
                                            <div className="ms-2 w-100px">
                                                <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                    <option value="1">Guest</option>
                                                    <option value="2">Owner</option>
                                                    <option value="3" selected="selected">Can Edit</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Access menu--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                    </div>
                                    {/* <!--end::List--> */}
                                </div>
                                {/* <!--end::Users--> */}
                                {/* <!--begin::Notice--> */}
                                <div className="d-flex flex-stack">
                                    {/* <!--begin::Label--> */}
                                    <div className="me-5 fw-semibold">
                                        <label className="fs-6">Adding Users by Team Members</label>
                                        <div className="fs-7 text-muted">If you need more info, please check budget planning</div>
                                    </div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Switch--> */}
                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                        <input className="form-check-input" type="checkbox" value="1" checked="checked" />
                                        <span className="form-check-label fw-semibold text-muted">Allowed</span>
                                    </label>
                                    {/* <!--end::Switch--> */}
                                </div>
                                {/* <!--end::Notice--> */}
                            </div>
                            {/* <!--end::Modal body--> */}
                        </div>
                        {/* <!--end::Modal content--> */}
                    </div>
                    {/* <!--end::Modal dialog--> */}
                </div>
                {/* <!--end::Modal - Invite Friend--> */}
                {/* <!--end::Modals--> */}
                {/* {/* <!--begin::Javascript--> */}
                <script>var hostUrl = "/fe/dist/assets/";</script>
                {/* <!--begin::Global Javascript Bundle(mandatory for all pages)--> */}
                <script src="/fe/dist/assets/plugins/global/plugins.bundle.js"></script>
                <script src="/fe/dist/assets/js/scripts.bundle.js"></script>
                {/* <!--end::Global Javascript Bundle--> */}
                {/* <!--begin::Vendors Javascript(used for this page only)--> */}
                <script src="/fe/dist/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/radar.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/map.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/geodata/continentsLow.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/geodata/usaLow.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZonesLow.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZoneAreasLow.js"></script>
                <script src="/fe/dist/assets/plugins/custom/datatables/datatables.bundle.js"></script>
                {/* <!--end::Vendors Javascript--> */}
                {/* <!--begin::Custom Javascript(used for this page only)--> */}
                <script src="/fe/dist/assets/js/widgets.bundle.js"></script>
                <script src="/fe/dist/assets/js/custom/widgets.js"></script>
                <script src="/fe/dist/assets/js/custom/apps/chat/chat.js"></script>
                <script src="/fe/dist/assets/js/custom/utilities/modals/upgrade-plan.js"></script>
                <script src="/fe/dist/assets/js/custom/utilities/modals/users-search.js"></script>
                {/* <!--end::Custom Javascript--> */}
                {/* <!--end::Javascript--> */} */}
            </div>
        </>
    )
}

export default Dashboard;