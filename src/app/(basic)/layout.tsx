import React from "react";
// import '/public/fe/dist/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css';
// import '/public/fe/dist/assets/plugins/custom/datatables/datatables.bundle.css';
// import '/public/fe/dist/assets/plugins/global/plugins.bundle.css';
// import '/public/fe/dist/assets/css/style.bundle.css';

import Scripts from "@/components/fe/inc/Scripts";
import Image from "next/image";

export default function FrontEndLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div id="kt_body" data-kt-app-header-stacked="true" data-kt-app-header-primary-enabled="true"
			data-kt-app-header-secondary-enabled="true" className="app-default">
			{/*<script>var defaultThemeMode = "light"; var themeMode; if ( document.documentElement*/}
			{/*    ) {if ( document.documentElement.hasAttribute("data-bs-theme-mode")) {themeMode = document.documentElement.getAttribute("data-bs-theme-mode");} else {if ( localStorage.getItem("data-bs-theme") !== null ) {themeMode = localStorage.getItem("data-bs-theme");} else {themeMode = defaultThemeMode;}} if (themeMode === "system") {themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";} document.documentElement.setAttribute("data-bs-theme", themeMode);}</script>*/}
			<div className="d-flex flex-column flex-root app-root" id="kt_app_root">
				<div className="app-page flex-column flex-column-fluid" id="kt_app_page">
					<div id="kt_app_header" className="app-header">
						{/* <!--begin::Header primary--> */}
						<div className="app-header-primary" data-kt-sticky="true" data-kt-sticky-name="app-header-primary-sticky" data-kt-sticky-offset="{default: 'false', lg: '300px'}">
							{/* <!--begin::Header primary container--> */}
							<div className="app-container container-xxl d-flex align-items-stretch justify-content-between">
								{/* <!--begin::Logo and search--> */}
								<div className="d-flex flex-grow-1 flex-lg-grow-0">
									{/* <!--begin::Logo wrapper--> */}
									<div className="d-flex align-items-center me-7" id="kt_app_header_logo_wrapper">
										{/* <!--begin::Header toggle--> */}
										<button className="d-lg-none btn btn-icon btn-flex btn-color-gray-600 btn-active-color-primary w-35px h-35px ms-n2 me-2" id="kt_app_header_menu_toggle">
											<i className="ki-outline ki-abstract-14 fs-2"></i>
										</button>
										{/* <!--end::Header toggle--> */}
										{/* <!--begin::Logo--> */}
										<a href="../../demo35/dist/index.html" className="d-flex align-items-center me-lg-20 me-5">
											<Image width={80} height={80} alt="Logo" src="/fe/dist/assets/media/logos/demo-35-small.svg" className="h-20px d-sm-none d-inline" />
											<Image width={40} height={40} alt="Logo" src="/fe/dist/assets/media/logos/demo-35.svg" className="h-20px h-lg-25px theme-light-show d-none d-sm-inline" />
											<Image width={40} height={40} alt="Logo" src="/fe/dist/assets/media/logos/demo-35-dark.png" className="h-20px h-lg-25px theme-dark-show d-none d-sm-inline" />
										</a>
										{/* <!--end::Logo--> */}
									</div>
									{/* <!--end::Logo wrapper--> */}
									{/* <!--begin::Menu wrapper--> */}
									<div className="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="{default: 'append', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">
										{/* <!--begin::Menu--> */}
										<div className="menu menu-rounded menu-active-bg menu-state-primary menu-column menu-lg-row menu-title-gray-700 menu-icon-gray-500 menu-arrow-gray-500 menu-bullet-gray-500 my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0" id="kt_app_header_menu" data-kt-menu="true">
											{/* <!--begin:Menu item--> */}
											<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
												{/* <!--begin:Menu link--> */}
												<span className="menu-link py-3">
													<span className="menu-title">Dashboards</span>
													<span className="menu-arrow d-lg-none"></span>
												</span>
												{/* <!--end:Menu link--> */}

												{/* <!--begin:Menu sub--> */}
												{/* <!--end:Menu sub--> */}

											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-offset="-200,0" className="menu-item menu-lg-down-accordion me-0 me-lg-2">
												{/* <!--begin:Menu link--> */}
												<span className="menu-link py-3">
													<span className="menu-title">Pages</span>
													<span className="menu-arrow d-lg-none"></span>
												</span>
												{/* <!--end:Menu link--> */}
												{/* <!--begin:Menu sub--> */}
												{/* <!--end:Menu sub--> */}
											</div>
											{/* <!--end:Menu item--> */}

											{/* <!--begin:Menu item--> */}
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

												{/* <!--end:Menu sub--> */}
											</div>
											{/* <!--end:Menu item--> */}
										</div>
										{/* <!--end::Menu--> */}
									</div>
									{/* <!--end::Menu wrapper--> */}
								</div>
								{/* <!--end::Logo and search--> */}
								{/* <!--begin::Navbar--> */}
								<div className="app-navbar flex-shrink-0">
									{/* <!--begin::Notifications--> */}
									<div className="app-navbar-item">
										{/* <!--begin::Menu- wrapper--> */}
										<div className="btn btn-icon btn-icon-gray-600 btn-active-color-primary" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom">
											<i className="ki-outline ki-notification-on fs-1"></i>
										</div>
										{/* <!--begin::Menu--> */}
										<div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true" id="kt_menu_notifications">
											{/* <!--begin::Heading--> */}
											<div className="d-flex flex-column bgi-no-repeat rounded-top"
												style={{ backgroundImage: "url('/fe/dist/assets/media/misc/menu-header-bg.jpg')" }}
											>
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

											{/* <!--end::Tab content--> */}
										</div>
										{/* <!--end::Menu--> */}
										{/* <!--end::Menu wrapper--> */}
									</div>
									{/* <!--end::Notifications--> */}

									{/* <!--begin::User menu--> */}
									<div className="app-navbar-item ms-3 ms-lg-9" id="kt_header_user_menu_toggle">
										{/* <!--begin::Menu wrapper--> */}
										<div className="d-flex align-items-center" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
											{/* <!--begin:Info--> */}
											<div className="text-end d-none d-sm-flex flex-column justify-content-center me-3">
												<span className="text-gray-500 fs-8 fw-bold">Hello</span>
												<a href="../../demo35/dist/pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-7 fw-bold d-block">Esther</a>
											</div>
											{/* <!--end:Info--> */}
											{/* <!--begin::User--> */}
											<div className="cursor-pointer symbol symbol symbol-circle symbol-35px symbol-md-40px">
												<Image width={40} height={40} className="" src="/fe/dist/assets/media/avatars/300-2.jpg" alt="user" />
												<div className="position-absolute translate-middle bottom-0 mb-1 start-100 ms-n1 bg-success rounded-circle h-8px w-8px"></div>
											</div>
											{/* <!--end::User--> */}
										</div>
										{/* <!--begin::User account menu--> */}
										<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">

										</div>
										{/* <!--end::User account menu--> */}
										{/* <!--end::Menu wrapper--> */}
									</div>
									{/* <!--end::User menu--> */}
									{/* <!--begin::Header menu toggle--> */}
									<div className="app-navbar-item d-lg-none ms-2 me-n3" title="Show header menu">
										<div className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px" id="kt_app_header_menu_toggle">
											<i className="ki-outline ki-text-align-left fs-1"></i>
										</div>
									</div>
									{/* <!--end::Header menu toggle--> */}
								</div>
								{/* <!--end::Navbar--> */}
							</div>
							{/* <!--end::Header primary container--> */}
						</div>
						{/* <!--end::Header primary--> */}
						{/* <!--begin::Header secondary--> */}
						<div className="app-header-secondary">
							{/* <!--begin::Header secondary container--> */}
							<div className="app-container container-xxl">
								{/* <!--begin::Wrapper slider--> */}
								<div className="app-header-slider d-flex flex-stack h-100">
									{/* <!--begin::Slider button--> */}
									<button className="btn btn-icon btn-color-gray-500 btn-active-color-primary ms-xxl-n18" id="kt_app_header_slider_prev">
										<i className="ki-outline ki-left-square fs-2x"></i>
									</button>
									{/* <!--end::Slider button--> */}
									{/* <!--begin::Header slider--> */}
									<div className="tns tns-fit w-100">
										{/* <!--begin::Slider--> */}
										<div data-tns="true" data-tns-loop="false" data-tns-swipe-angle="false" data-tns-speed="2000" data-tns-autoplay="true" data-tns-autoplay-timeout="10000" data-tns-controls="true" data-tns-nav="false" data-tns-items="1" data-tns-gutter="0" data-tns-responsive="{470: {items: 2}, 670: {items: 3, gutter: 15}, 992: {items: 5, gutter: 20}, 1300: {items: 6, gutter: 40}}" data-tns-center="false" data-tns-dots="false" data-tns-prev-button="#kt_app_header_slider_prev" data-tns-next-button="#kt_app_header_slider_next">
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/feeds.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#6441A5" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/twitch-2.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">Twitch Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">4 active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/activity.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#E34984" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/dribbble-2.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">Dribbble Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">1 active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/feeds.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#00BF6D" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/gab.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">Gab Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">no active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/followers.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#001935" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/tumblr.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">Tumblr Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">3 active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/feeds.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#E60000" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/youtube-2.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">Youtube Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">28 active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/settings.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#0B66C3" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/linkedin-3.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">LinkedIn Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">no active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/feeds.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#001935" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/tumblr.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">Tumblr Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">3 active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/feeds.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#00BF6D" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/gab.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">Gab Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">no active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/followers.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#001935" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/tumblr.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">Tumblr Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">3 active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/feeds.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#E60000" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/youtube-2.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">Youtube Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">28 active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/activity.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#E34984" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/dribbble-2.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">Dribbble Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">1 active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/feeds.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#2682ff" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/eolic-energy.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">Eolic Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">no active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/followers.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#cfe2ff" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/vimeo.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">Vimeo Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">3 active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
											{/* <!--begin::Item--> */}
											<a href="../../demo35/dist/pages/social/feeds.html" className="parent-hover cursor-pointer d-flex align-items-center flex-md-row-fluid py-lg-2 px-0">
												{/* <!--begin::Symbol--> */}
												<div className="symbol symbol-35px symbol-lg-40px me-3">
													<span className="symbol-label rounded-4" style={{ backgroundColor: "#f1aeb5" }}>
														<Image width={40} height={40} src="/fe/dist/assets/media/svg/brand-logos/foursquare.svg" className="mw-25px" alt="" />
													</span>
												</div>
												{/* <!--end::Symbol--> */}
												{/* <!--begin::Info--> */}
												<div className="d-flex justify-content-center flex-column">
													<span className="fw-bold text-gray-800 parent-hover-primary fs-5 mb-1">Foursquare Ads</span>
													<span className="text-gray-500 fw-semibold d-block fs-7">5 active campaings</span>
												</div>
												{/* <!--end::Info--> */}
											</a>
											{/* <!--end::Item--> */}
										</div>
										{/* <!--end::Slider--> */}
									</div>
									{/* <!--end::Header slider--> */}
									{/* <!--begin::Slider button--> */}
									<button className="btn btn-icon btn-color-gray-500 btn-active-color-primary me-xxl-n18" id="kt_app_header_slider_next">
										<i className="ki-outline ki-right-square fs-2x"></i>
									</button>
									{/* <!--end::Slider button--> */}
								</div>
								{/* <!--end::Wrapper slider--> */}
							</div>
							{/* <!--end::Header secondary container--> */}
						</div>
						{/* <!--end::Header secondary--> */}
					</div>

					<div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
						<div className="app-container container-xxl d-flex flex-row flex-column-fluid">
							<div className="app-main flex-column flex-row-fluid" id="kt_app_main">
								{children}
								<div id="kt_app_footer"
									className="app-footer align-items-center justify-content-center justify-content-md-between flex-column flex-md-row py-3 py-lg-6">
									<div className="text-dark order-2 order-md-1">
										<span className="text-muted fw-semibold me-1">2023&copy;</span>
										<a href="https://keenthemes.com" target="_blank"
											className="text-gray-800 text-hover-primary">Keenthemes</a>
									</div>
									<ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
										<li className="menu-item">
											<a href="https://keenthemes.com" target="_blank"
												className="menu-link px-2">About</a>
										</li>
										<li className="menu-item">
											<a href="https://devs.keenthemes.com" target="_blank"
												className="menu-link px-2">Support</a>
										</li>
										<li className="menu-item">
											<a href="https://1.envato.market/EA4JP" target="_blank"
												className="menu-link px-2">Purchase</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <Scripts /> */}
		</div>
	);
}
