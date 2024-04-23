
function Index() {
    return (
        <div className="page">
            {/* Navbar */}
            <header className="navbar navbar-expand-md d-print-none">
                <div className="container-xl">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar-menu"
                        aria-controls="navbar-menu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                        <a href=".">
                            <img
                                src="./static/logo.svg"
                                width={110}
                                height={32}
                                alt="Tabler"
                                className="navbar-brand-image"
                            />
                        </a>
                    </h1>
                    <div className="navbar-nav flex-row order-md-last">
                        <div className="nav-item d-none d-md-flex me-3">
                            <div className="btn-list">
                                <a
                                    href="https://github.com/tabler/tabler"
                                    className="btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {/* Download SVG icon from http://tabler-icons.io/i/brand-github */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path
                                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
                                    </svg>
                                    Source code
                                </a>
                                <a
                                    href="https://github.com/sponsors/codecalm"
                                    className="btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon text-pink"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path
                                            d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>
                                    </svg>
                                    Sponsor
                                </a>
                            </div>
                        </div>
                        <div className="d-none d-md-flex">
                            <a
                                href="?theme=dark"
                                className="nav-link px-0 hide-theme-dark"
                                title="Enable dark mode"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                            >
                                {/* Download SVG icon from http://tabler-icons.io/i/moon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
                                </svg>
                            </a>
                            <a
                                href="?theme=light"
                                className="nav-link px-0 hide-theme-light"
                                title="Enable light mode"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                            >
                                {/* Download SVG icon from http://tabler-icons.io/i/sun */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
                                    <path
                                        d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>
                                </svg>
                            </a>
                            <div className="nav-item dropdown d-none d-md-flex me-3">
                                <a
                                    href="#"
                                    className="nav-link px-0"
                                    data-bs-toggle="dropdown"
                                    tabIndex={-1}
                                    aria-label="Show notifications"
                                >
                                    {/* Download SVG icon from http://tabler-icons.io/i/bell */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path
                                            d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/>
                                        <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
                                    </svg>
                                    <span className="badge bg-red"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Last updates</h3>
                                        </div>
                                        <div className="list-group list-group-flush list-group-hoverable">
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span
                                                            className="status-dot status-dot-animated bg-red d-block"/>
                                                    </div>
                                                    <div className="col text-truncate">
                                                        <a href="#" className="text-body d-block">
                                                            Example 1
                                                        </a>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Change deprecated html tags to text decoration classes
                                                            (#29604)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="list-group-item-actions">
                                                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon text-muted"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path
                                                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="status-dot d-block"/>
                                                    </div>
                                                    <div className="col text-truncate">
                                                        <a href="#" className="text-body d-block">
                                                            Example 2
                                                        </a>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            justify-content:between ⇒
                                                            justify-content:space-between (#29734)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="list-group-item-actions show">
                                                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon text-yellow"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path
                                                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="status-dot d-block"/>
                                                    </div>
                                                    <div className="col text-truncate">
                                                        <a href="#" className="text-body d-block">
                                                            Example 3
                                                        </a>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Update change-version.js (#29736)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="list-group-item-actions">
                                                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon text-muted"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path
                                                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span
                                                            className="status-dot status-dot-animated bg-green d-block"/>
                                                    </div>
                                                    <div className="col text-truncate">
                                                        <a href="#" className="text-body d-block">
                                                            Example 4
                                                        </a>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Regenerate package-lock.json (#29730)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="list-group-item-actions">
                                                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon text-muted"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path
                                                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link d-flex lh-1 text-reset p-0"
                                data-bs-toggle="dropdown"
                                aria-label="Open user menu"
                            >
            <span
                className="avatar avatar-sm"
                style={{backgroundImage: "url(./static/avatars/000m.jpg)"}}
            />
                                <div className="d-none d-xl-block ps-2">
                                    <div>Paweł Kuna</div>
                                    <div className="mt-1 small text-muted">UI Designer</div>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <a href="#" className="dropdown-item">
                                    Status
                                </a>
                                <a href="./profile.html" className="dropdown-item">
                                    Profile
                                </a>
                                <a href="#" className="dropdown-item">
                                    Feedback
                                </a>
                                <div className="dropdown-divider"/>
                                <a href="./settings.html" className="dropdown-item">
                                    Settings
                                </a>
                                <a href="./sign-in.html" className="dropdown-item">
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="navbar-expand-md">
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <div className="navbar">
                        <div className="container-xl">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="./">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  {/* Download SVG icon from http://tabler-icons.io/i/home */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0"/>
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>
                  </svg>
                </span>
                                        <span className="nav-link-title">Home</span>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#navbar-base"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                        role="button"
                                        aria-expanded="false"
                                    >
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  {/* Download SVG icon from http://tabler-icons.io/i/package */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"/>
                    <path d="M12 12l8 -4.5"/>
                    <path d="M12 12l0 9"/>
                    <path d="M12 12l-8 -4.5"/>
                    <path d="M16 5.25l-8 4.5"/>
                  </svg>
                </span>
                                        <span className="nav-link-title">Interface</span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-menu-columns">
                                            <div className="dropdown-menu-column">
                                                <a className="dropdown-item" href="./accordion.html">
                                                    Accordion
                                                </a>
                                                <a className="dropdown-item" href="./blank.html">
                                                    Blank page
                                                </a>
                                                <a className="dropdown-item" href="./badges.html">
                                                    Badges
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./buttons.html">
                                                    Buttons
                                                </a>
                                                <div className="dropend">
                                                    <a
                                                        className="dropdown-item dropdown-toggle"
                                                        href="#sidebar-cards"
                                                        data-bs-toggle="dropdown"
                                                        data-bs-auto-close="outside"
                                                        role="button"
                                                        aria-expanded="false"
                                                    >
                                                        Cards
                                                        <span
                                                            className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                          New
                        </span>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a href="./cards.html" className="dropdown-item">
                                                            Sample cards
                                                        </a>
                                                        <a href="./card-actions.html" className="dropdown-item">
                                                            Card actions
                                                            <span
                                                                className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                            New
                          </span>
                                                        </a>
                                                        <a
                                                            href="./cards-masonry.html"
                                                            className="dropdown-item"
                                                        >
                                                            Cards Masonry
                                                        </a>
                                                    </div>
                                                </div>
                                                <a className="dropdown-item" href="./colors.html">
                                                    Colors
                                                </a>
                                                <a className="dropdown-item" href="./datagrid.html">
                                                    Data grid
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./datatables.html">
                                                    Datatables
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./dropdowns.html">
                                                    Dropdowns
                                                </a>
                                                <a className="dropdown-item" href="./modals.html">
                                                    Modals
                                                </a>
                                                <a className="dropdown-item" href="./maps.html">
                                                    Maps
                                                </a>
                                                <a className="dropdown-item" href="./map-fullsize.html">
                                                    Map fullsize
                                                </a>
                                                <a className="dropdown-item" href="./maps-vector.html">
                                                    Vector maps
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./navigation.html">
                                                    Navigation
                                                </a>
                                                <a className="dropdown-item" href="./charts.html">
                                                    Charts
                                                </a>
                                                <a className="dropdown-item" href="./pagination.html">
                                                    {/* Download SVG icon from http://tabler-icons.io/i/pie-chart */}
                                                    Pagination
                                                </a>
                                            </div>
                                            <div className="dropdown-menu-column">
                                                <a className="dropdown-item" href="./placeholder.html">
                                                    Placeholder
                                                </a>
                                                <a className="dropdown-item" href="./steps.html">
                                                    Steps
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./stars-rating.html">
                                                    Stars rating
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./tabs.html">
                                                    Tabs
                                                </a>
                                                <a className="dropdown-item" href="./tables.html">
                                                    Tables
                                                </a>
                                                <a className="dropdown-item" href="./carousel.html">
                                                    Carousel
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./lists.html">
                                                    Lists
                                                </a>
                                                <a className="dropdown-item" href="./typography.html">
                                                    Typography
                                                </a>
                                                <a className="dropdown-item" href="./offcanvas.html">
                                                    Offcanvas
                                                </a>
                                                <a className="dropdown-item" href="./markdown.html">
                                                    Markdown
                                                </a>
                                                <a className="dropdown-item" href="./dropzone.html">
                                                    Dropzone
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./lightbox.html">
                                                    Lightbox
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./tinymce.html">
                                                    TinyMCE
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./inline-player.html">
                                                    Inline player
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <div className="dropend">
                                                    <a
                                                        className="dropdown-item dropdown-toggle"
                                                        href="#sidebar-authentication"
                                                        data-bs-toggle="dropdown"
                                                        data-bs-auto-close="outside"
                                                        role="button"
                                                        aria-expanded="false"
                                                    >
                                                        Authentication
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a href="./sign-in.html" className="dropdown-item">
                                                            Sign in
                                                        </a>
                                                        <a href="./sign-in-link.html" className="dropdown-item">
                                                            Sign in link
                                                        </a>
                                                        <a
                                                            href="./sign-in-illustration.html"
                                                            className="dropdown-item"
                                                        >
                                                            Sign in with illustration
                                                        </a>
                                                        <a
                                                            href="./sign-in-cover.html"
                                                            className="dropdown-item"
                                                        >
                                                            Sign in with cover
                                                        </a>
                                                        <a href="./sign-up.html" className="dropdown-item">
                                                            Sign up
                                                        </a>
                                                        <a
                                                            href="./forgot-password.html"
                                                            className="dropdown-item"
                                                        >
                                                            Forgot password
                                                        </a>
                                                        <a
                                                            href="./terms-of-service.html"
                                                            className="dropdown-item"
                                                        >
                                                            Terms of service
                                                        </a>
                                                        <a href="./auth-lock.html" className="dropdown-item">
                                                            Lock screen
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="dropend">
                                                    <a
                                                        className="dropdown-item dropdown-toggle"
                                                        href="#sidebar-error"
                                                        data-bs-toggle="dropdown"
                                                        data-bs-auto-close="outside"
                                                        role="button"
                                                        aria-expanded="false"
                                                    >
                                                        {/* Download SVG icon from http://tabler-icons.io/i/file-minus */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon icon-inline me-1"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
                                                            <path
                                                                d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>
                                                            <path d="M9 14l6 0"/>
                                                        </svg>
                                                        Error pages
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <a href="./error-404.html" className="dropdown-item">
                                                            404 page
                                                        </a>
                                                        <a href="./error-500.html" className="dropdown-item">
                                                            500 page
                                                        </a>
                                                        <a
                                                            href="./error-maintenance.html"
                                                            className="dropdown-item"
                                                        >
                                                            Maintenance page
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./form-elements.html">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  {/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 11l3 3l8 -8"/>
                    <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"/>
                  </svg>
                </span>
                                        <span className="nav-link-title">Form elements</span>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#navbar-extra"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                        role="button"
                                        aria-expanded="false"
                                    >
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  {/* Download SVG icon from http://tabler-icons.io/i/star */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                  </svg>
                </span>
                                        <span className="nav-link-title">Extra</span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-menu-columns">
                                            <div className="dropdown-menu-column">
                                                <a className="dropdown-item" href="./empty.html">
                                                    Empty page
                                                </a>
                                                <a className="dropdown-item" href="./cookie-banner.html">
                                                    Cookie banner
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./activity.html">
                                                    Activity
                                                </a>
                                                <a className="dropdown-item" href="./gallery.html">
                                                    Gallery
                                                </a>
                                                <a className="dropdown-item" href="./invoice.html">
                                                    Invoice
                                                </a>
                                                <a className="dropdown-item" href="./search-results.html">
                                                    Search results
                                                </a>
                                                <a className="dropdown-item" href="./pricing.html">
                                                    Pricing cards
                                                </a>
                                                <a className="dropdown-item" href="./pricing-table.html">
                                                    Pricing table
                                                </a>
                                                <a className="dropdown-item" href="./faq.html">
                                                    FAQ
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./users.html">
                                                    Users
                                                </a>
                                                <a className="dropdown-item" href="./license.html">
                                                    License
                                                </a>
                                            </div>
                                            <div className="dropdown-menu-column">
                                                <a className="dropdown-item" href="./logs.html">
                                                    Logs
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./music.html">
                                                    Music
                                                </a>
                                                <a className="dropdown-item" href="./photogrid.html">
                                                    Photogrid
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./tasks.html">
                                                    Tasks
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./uptime.html">
                                                    Uptime monitor
                                                </a>
                                                <a className="dropdown-item" href="./widgets.html">
                                                    Widgets
                                                </a>
                                                <a className="dropdown-item" href="./wizard.html">
                                                    Wizard
                                                </a>
                                                <a className="dropdown-item" href="./settings.html">
                                                    Settings
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./trial-ended.html">
                                                    Trial ended
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./job-listing.html">
                                                    Job listing
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./page-loader.html">
                                                    Page loader
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#navbar-layout"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                        role="button"
                                        aria-expanded="false"
                                    >
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  {/* Download SVG icon from http://tabler-icons.io/i/layout-2 */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/>
                    <path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/>
                    <path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/>
                    <path d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/>
                  </svg>
                </span>
                                        <span className="nav-link-title">Layout</span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-menu-columns">
                                            <div className="dropdown-menu-column">
                                                <a
                                                    className="dropdown-item"
                                                    href="./layout-horizontal.html"
                                                >
                                                    Horizontal
                                                </a>
                                                <a className="dropdown-item" href="./layout-boxed.html">
                                                    Boxed
                                                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        New
                      </span>
                                                </a>
                                                <a className="dropdown-item" href="./layout-vertical.html">
                                                    Vertical
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="./layout-vertical-transparent.html"
                                                >
                                                    Vertical transparent
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="./layout-vertical-right.html"
                                                >
                                                    Right vertical
                                                </a>
                                                <a className="dropdown-item" href="./layout-condensed.html">
                                                    Condensed
                                                </a>
                                                <a className="dropdown-item" href="./layout-combo.html">
                                                    Combined
                                                </a>
                                            </div>
                                            <div className="dropdown-menu-column">
                                                <a
                                                    className="dropdown-item"
                                                    href="./layout-navbar-dark.html"
                                                >
                                                    Navbar dark
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="./layout-navbar-sticky.html"
                                                >
                                                    Navbar sticky
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="./layout-navbar-overlap.html"
                                                >
                                                    Navbar overlap
                                                </a>
                                                <a className="dropdown-item" href="./layout-rtl.html">
                                                    RTL mode
                                                </a>
                                                <a className="dropdown-item" href="./layout-fluid.html">
                                                    Fluid
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="./layout-fluid-vertical.html"
                                                >
                                                    Fluid vertical
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./icons.html">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  {/* Download SVG icon from http://tabler-icons.io/i/ghost */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path
                        d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7"/>
                    <path d="M10 10l.01 0"/>
                    <path d="M14 10l.01 0"/>
                    <path d="M10 14a3.5 3.5 0 0 0 4 0"/>
                  </svg>
                </span>
                                        <span className="nav-link-title">4158 icons</span>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#navbar-help"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                        role="button"
                                        aria-expanded="false"
                                    >
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  {/* Download SVG icon from http://tabler-icons.io/i/lifebuoy */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
                    <path d="M15 15l3.35 3.35"/>
                    <path d="M9 15l-3.35 3.35"/>
                    <path d="M5.65 5.65l3.35 3.35"/>
                    <path d="M18.35 5.65l-3.35 3.35"/>
                  </svg>
                </span>
                                        <span className="nav-link-title">Help</span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <a
                                            className="dropdown-item"
                                            href="https://tabler.io/docs"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            Documentation
                                        </a>
                                        <a className="dropdown-item" href="./changelog.html">
                                            Changelog
                                        </a>
                                        <a
                                            className="dropdown-item"
                                            href="https://github.com/tabler/tabler"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            Source code
                                        </a>
                                        <a
                                            className="dropdown-item text-pink"
                                            href="https://github.com/sponsors/codecalm"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-inline me-1"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path
                                                    d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>
                                            </svg>
                                            Sponsor project!
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                                <form action="./" method="get" autoComplete="off" noValidate="">
                                    <div className="input-icon">
                <span className="input-icon-addon">
                  {/* Download SVG icon from http://tabler-icons.io/i/search */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
                    <path d="M21 21l-6 -6"/>
                  </svg>
                </span>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            className="form-control"
                                            placeholder="Search…"
                                            aria-label="Search in website"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="page-wrapper">
                {/* Page header */}
                <div className="page-header d-print-none">
                    <div className="container-xl">
                        <div className="row g-2 align-items-center">
                            <div className="col">
                                {/* Page pre-title */}
                                <div className="page-pretitle">Overview</div>
                                <h2 className="page-title">Dashboard</h2>
                            </div>
                            {/* Page title actions */}
                            <div className="col-auto ms-auto d-print-none">
                                <div className="btn-list">
              <span className="d-none d-sm-inline">
                <a href="#" className="btn">
                  New view
                </a>
              </span>
                                    <a
                                        href="#"
                                        className="btn btn-primary d-none d-sm-inline-block"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modal-report"
                                    >
                                        {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 5l0 14"/>
                                            <path d="M5 12l14 0"/>
                                        </svg>
                                        Create new report
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-primary d-sm-none btn-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modal-report"
                                        aria-label="Create new report"
                                    >
                                        {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 5l0 14"/>
                                            <path d="M5 12l14 0"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page body */}
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-deck row-cards">
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="subheader">Sales</div>
                                            <div className="ms-auto lh-1">
                                                <div className="dropdown">
                                                    <a
                                                        className="dropdown-toggle text-muted"
                                                        href="#"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        Last 7 days
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item active" href="#">
                                                            Last 7 days
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Last 30 days
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Last 3 months
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h1 mb-3">75%</div>
                                        <div className="d-flex mb-2">
                                            <div>Conversion rate</div>
                                            <div className="ms-auto">
                    <span className="text-green d-inline-flex align-items-center lh-1">
                      7%{" "}
                        {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 17l6 -6l4 4l8 -8"/>
                        <path d="M14 7l7 0l0 7"/>
                      </svg>
                    </span>
                                            </div>
                                        </div>
                                        <div className="progress progress-sm">
                                            <div
                                                className="progress-bar bg-primary"
                                                style={{width: "75%"}}
                                                role="progressbar"
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                aria-label="75% Complete"
                                            >
                                                <span className="visually-hidden">75% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="subheader">Revenue</div>
                                            <div className="ms-auto lh-1">
                                                <div className="dropdown">
                                                    <a
                                                        className="dropdown-toggle text-muted"
                                                        href="#"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        Last 7 days
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item active" href="#">
                                                            Last 7 days
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Last 30 days
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Last 3 months
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline">
                                            <div className="h1 mb-0 me-2">$4,300</div>
                                            <div className="me-auto">
                    <span className="text-green d-inline-flex align-items-center lh-1">
                      8%{" "}
                        {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 17l6 -6l4 4l8 -8"/>
                        <path d="M14 7l7 0l0 7"/>
                      </svg>
                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="chart-revenue-bg" className="chart-sm"/>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="subheader">New clients</div>
                                            <div className="ms-auto lh-1">
                                                <div className="dropdown">
                                                    <a
                                                        className="dropdown-toggle text-muted"
                                                        href="#"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        Last 7 days
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item active" href="#">
                                                            Last 7 days
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Last 30 days
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Last 3 months
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline">
                                            <div className="h1 mb-3 me-2">6,782</div>
                                            <div className="me-auto">
                    <span className="text-yellow d-inline-flex align-items-center lh-1">
                      0%{" "}
                        {/* Download SVG icon from http://tabler-icons.io/i/minus */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 12l14 0"/>
                      </svg>
                    </span>
                                            </div>
                                        </div>
                                        <div id="chart-new-clients" className="chart-sm"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="subheader">Active users</div>
                                            <div className="ms-auto lh-1">
                                                <div className="dropdown">
                                                    <a
                                                        className="dropdown-toggle text-muted"
                                                        href="#"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        Last 7 days
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item active" href="#">
                                                            Last 7 days
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Last 30 days
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Last 3 months
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline">
                                            <div className="h1 mb-3 me-2">2,986</div>
                                            <div className="me-auto">
                    <span className="text-green d-inline-flex align-items-center lh-1">
                      4%{" "}
                        {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 17l6 -6l4 4l8 -8"/>
                        <path d="M14 7l7 0l0 7"/>
                      </svg>
                    </span>
                                            </div>
                                        </div>
                                        <div id="chart-active-users" className="chart-sm"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row row-cards">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="card card-sm">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                        <span className="bg-primary text-white avatar">
                          {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"/>
                            <path d="M12 3v3m0 12v3"/>
                          </svg>
                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="font-weight-medium">132 Sales</div>
                                                        <div className="text-muted">12 waiting payments</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="card card-sm">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                        <span className="bg-green text-white avatar">
                          {/* Download SVG icon from http://tabler-icons.io/i/shopping-cart */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                            <path d="M17 17h-11v-14h-2"/>
                            <path d="M6 5l14 1l-1 7h-13"/>
                          </svg>
                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="font-weight-medium">78 Orders</div>
                                                        <div className="text-muted">32 shipped</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="card card-sm">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                        <span className="bg-twitter text-white avatar">
                          {/* Download SVG icon from http://tabler-icons.io/i/brand-twitter */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"/>
                          </svg>
                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="font-weight-medium">623 Shares</div>
                                                        <div className="text-muted">16 today</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="card card-sm">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                        <span className="bg-facebook text-white avatar">
                          {/* Download SVG icon from http://tabler-icons.io/i/brand-facebook */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"/>
                          </svg>
                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <div className="font-weight-medium">132 Likes</div>
                                                        <div className="text-muted">21 today</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Traffic summary</h3>
                                        <div id="chart-mentions" className="chart-lg"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Locations</h3>
                                        <div className="ratio ratio-21x9">
                                            <div>
                                                <div id="map-world" className="w-100 h-100"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row row-cards">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="mb-3">
                                                    Using Storage <strong>6854.45 MB </strong>of 8 GB
                                                </p>
                                                <div className="progress progress-separated mb-3">
                                                    <div
                                                        className="progress-bar bg-primary"
                                                        role="progressbar"
                                                        style={{width: "44%"}}
                                                        aria-label="Regular"
                                                    />
                                                    <div
                                                        className="progress-bar bg-info"
                                                        role="progressbar"
                                                        style={{width: "19%"}}
                                                        aria-label="System"
                                                    />
                                                    <div
                                                        className="progress-bar bg-success"
                                                        role="progressbar"
                                                        style={{width: "9%"}}
                                                        aria-label="Shared"
                                                    />
                                                </div>
                                                <div className="row">
                                                    <div className="col-auto d-flex align-items-center pe-2">
                                                        <span className="legend me-2 bg-primary"/>
                                                        <span>Regular</span>
                                                        <span
                                                            className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">
                          915MB
                        </span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center px-2">
                                                        <span className="legend me-2 bg-info"/>
                                                        <span>System</span>
                                                        <span
                                                            className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">
                          415MB
                        </span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center px-2">
                                                        <span className="legend me-2 bg-success"/>
                                                        <span>Shared</span>
                                                        <span
                                                            className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">
                          201MB
                        </span>
                                                    </div>
                                                    <div className="col-auto d-flex align-items-center ps-2">
                                                        <span className="legend me-2"/>
                                                        <span>Free</span>
                                                        <span
                                                            className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">
                          612MB
                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card" style={{height: "28rem"}}>
                                            <div className="card-body card-body-scrollable card-body-scrollable-shadow">
                                                <div className="divide-y">
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                                                                <span className="avatar">JL</span>
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Jeffie Lewzey</strong> commented on
                                                                    your{" "}
                                                                    <strong>"I'm not a witch."</strong> post.
                                                                </div>
                                                                <div className="text-muted">yesterday</div>
                                                            </div>
                                                            <div className="col-auto align-self-center">
                                                                <div className="badge bg-primary"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                            <span
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/002m.jpg)"
                                }}
                            />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    It's <strong>Mallory Hulme</strong>'s birthday.
                                                                    Wish him well!
                                                                </div>
                                                                <div className="text-muted">2 days ago</div>
                                                            </div>
                                                            <div className="col-auto align-self-center">
                                                                <div className="badge bg-primary"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                            <span
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/003m.jpg)"
                                }}
                            />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Dunn Slane</strong> posted{" "}
                                                                    <strong>"Well, what do you want?"</strong>.
                                                                </div>
                                                                <div className="text-muted">today</div>
                                                            </div>
                                                            <div className="col-auto align-self-center">
                                                                <div className="badge bg-primary"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                            <span
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/000f.jpg)"
                                }}
                            />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Emmy Levet</strong> created a new
                                                                    project{" "}
                                                                    <strong>Morning alarm clock</strong>.
                                                                </div>
                                                                <div className="text-muted">4 days ago</div>
                                                            </div>
                                                            <div className="col-auto align-self-center">
                                                                <div className="badge bg-primary"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                            <span
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/001f.jpg)"
                                }}
                            />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Maryjo Lebarree</strong> liked your photo.
                                                                </div>
                                                                <div className="text-muted">2 days ago</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                                                                <span className="avatar">EP</span>
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Egan Poetz</strong> registered new client
                                                                    as <strong>Trilia</strong>.
                                                                </div>
                                                                <div className="text-muted">yesterday</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                            <span
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/002f.jpg)"
                                }}
                            />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Kellie Skingley</strong> closed a new deal
                                                                    on project{" "}
                                                                    <strong>Pen Pineapple Apple Pen</strong>.
                                                                </div>
                                                                <div className="text-muted">2 days ago</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                            <span
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/003f.jpg)"
                                }}
                            />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Christabel Charlwood</strong> created a
                                                                    new project for <strong>Wikibox</strong>.
                                                                </div>
                                                                <div className="text-muted">4 days ago</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                                                                <span className="avatar">HS</span>
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Haskel Shelper</strong> change status
                                                                    of{" "}
                                                                    <strong>Tabler Icons</strong> from{" "}
                                                                    <strong>open</strong> to <strong>closed</strong>.
                                                                </div>
                                                                <div className="text-muted">today</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                            <span
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/006m.jpg)"
                                }}
                            />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Lorry Mion</strong> liked{" "}
                                                                    <strong>Tabler UI Kit</strong>.
                                                                </div>
                                                                <div className="text-muted">yesterday</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                            <span
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/004f.jpg)"
                                }}
                            />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Leesa Beaty</strong> posted new video.
                                                                </div>
                                                                <div className="text-muted">2 days ago</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                            <span
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/007m.jpg)"
                                }}
                            />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Perren Keemar</strong> and 3 others
                                                                    followed you.
                                                                </div>
                                                                <div className="text-muted">2 days ago</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                                                                <span className="avatar">SA</span>
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Sunny Airey</strong> upload 3 new photos
                                                                    to category <strong>Inspirations</strong>.
                                                                </div>
                                                                <div className="text-muted">2 days ago</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                            <span
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/009m.jpg)"
                                }}
                            />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Geoffry Flaunders</strong> made a{" "}
                                                                    <strong>$10</strong> donation.
                                                                </div>
                                                                <div className="text-muted">2 days ago</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                            <span
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/010m.jpg)"
                                }}
                            />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Thatcher Keel</strong> created a profile.
                                                                </div>
                                                                <div className="text-muted">3 days ago</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                            <span
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/005f.jpg)"
                                }}
                            />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Dyann Escala</strong> hosted the event{" "}
                                                                    <strong>Tabler UI Birthday</strong>.
                                                                </div>
                                                                <div className="text-muted">4 days ago</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                            <span
                                className="avatar"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/006f.jpg)"
                                }}
                            />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Avivah Mugleston</strong> mentioned you
                                                                    on{" "}
                                                                    <strong>Best of 2020</strong>.
                                                                </div>
                                                                <div className="text-muted">2 days ago</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-auto">
                                                                <span className="avatar">AA</span>
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-truncate">
                                                                    <strong>Arlie Armstead</strong> sent a Review
                                                                    Request to <strong>Amanda Blake</strong>.
                                                                </div>
                                                                <div className="text-muted">2 days ago</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header border-0">
                                        <div className="card-title">Development activity</div>
                                    </div>
                                    <div className="position-relative">
                                        <div className="position-absolute top-0 left-0 px-3 mt-1 w-75">
                                            <div className="row g-2">
                                                <div className="col-auto">
                                                    <div
                                                        className="chart-sparkline chart-sparkline-square"
                                                        id="sparkline-activity"
                                                    />
                                                </div>
                                                <div className="col">
                                                    <div>Today's Earning: $4,262.40</div>
                                                    <div className="text-muted">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/trending-up */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon icon-inline text-green"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M3 17l6 -6l4 4l8 -8"/>
                                                            <path d="M14 7l7 0l0 7"/>
                                                        </svg>
                                                        +5% more than yesterday
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="chart-development-activity"/>
                                    </div>
                                    <div className="card-table table-responsive">
                                        <table className="table table-vcenter">
                                            <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Commit</th>
                                                <th>Date</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="w-1">
                        <span
                            className="avatar avatar-sm"
                            style={{
                                backgroundImage: "url(./static/avatars/000m.jpg)"
                            }}
                        />
                                                </td>
                                                <td className="td-truncate">
                                                    <div className="text-truncate">
                                                        Fix dart Sass compatibility (#29755)
                                                    </div>
                                                </td>
                                                <td className="text-nowrap text-muted">28 Nov 2019</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1">
                                                    <span className="avatar avatar-sm">JL</span>
                                                </td>
                                                <td className="td-truncate">
                                                    <div className="text-truncate">
                                                        Change deprecated html tags to text decoration classes
                                                        (#29604)
                                                    </div>
                                                </td>
                                                <td className="text-nowrap text-muted">27 Nov 2019</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1">
                        <span
                            className="avatar avatar-sm"
                            style={{
                                backgroundImage: "url(./static/avatars/002m.jpg)"
                            }}
                        />
                                                </td>
                                                <td className="td-truncate">
                                                    <div className="text-truncate">
                                                        justify-content:between ⇒
                                                        justify-content:space-between (#29734)
                                                    </div>
                                                </td>
                                                <td className="text-nowrap text-muted">26 Nov 2019</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1">
                        <span
                            className="avatar avatar-sm"
                            style={{
                                backgroundImage: "url(./static/avatars/003m.jpg)"
                            }}
                        />
                                                </td>
                                                <td className="td-truncate">
                                                    <div className="text-truncate">
                                                        Update change-version.js (#29736)
                                                    </div>
                                                </td>
                                                <td className="text-nowrap text-muted">26 Nov 2019</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1">
                        <span
                            className="avatar avatar-sm"
                            style={{
                                backgroundImage: "url(./static/avatars/000f.jpg)"
                            }}
                        />
                                                </td>
                                                <td className="td-truncate">
                                                    <div className="text-truncate">
                                                        Regenerate package-lock.json (#29730)
                                                    </div>
                                                </td>
                                                <td className="text-nowrap text-muted">25 Nov 2019</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card card-md">
                                    <div className="card-stamp card-stamp-lg">
                                        <div className="card-stamp-icon bg-primary">
                                            {/* Download SVG icon from http://tabler-icons.io/i/ghost */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path
                                                    d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7"/>
                                                <path d="M10 10l.01 0"/>
                                                <path d="M14 10l.01 0"/>
                                                <path d="M10 14a3.5 3.5 0 0 0 4 0"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-10">
                                                <h3 className="h1">Tabler Icons</h3>
                                                <div className="markdown text-muted">
                                                    All icons come from the Tabler Icons set and are
                                                    MIT-licensed. Visit
                                                    <a
                                                        href="https://tabler-icons.io"
                                                        target="_blank"
                                                        rel="noopener"
                                                    >
                                                        tabler-icons.io
                                                    </a>
                                                    , download any of the 4158 icons in SVG, PNG or&nbsp;React
                                                    and use them in your favourite design tools.
                                                </div>
                                                <div className="mt-3">
                                                    <a
                                                        href="https://tabler-icons.io"
                                                        className="btn btn-primary"
                                                        target="_blank"
                                                        rel="noopener"
                                                    >
                                                        Download icons
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Most Visited Pages</h3>
                                    </div>
                                    <div className="card-table table-responsive">
                                        <table className="table table-vcenter">
                                            <thead>
                                            <tr>
                                                <th>Page name</th>
                                                <th>Visitors</th>
                                                <th>Unique</th>
                                                <th colSpan={2}>Bounce rate</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    /
                                                    <a href="#" className="ms-1" aria-label="Open website">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/link */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M9 15l6 -6"/>
                                                            <path
                                                                d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/>
                                                            <path
                                                                d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/>
                                                        </svg>
                                                    </a>
                                                </td>
                                                <td className="text-muted">4,896</td>
                                                <td className="text-muted">3,654</td>
                                                <td className="text-muted">82.54%</td>
                                                <td className="text-end w-1">
                                                    <div
                                                        className="chart-sparkline chart-sparkline-sm"
                                                        id="sparkline-bounce-rate-1"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    /form-elements.html
                                                    <a href="#" className="ms-1" aria-label="Open website">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/link */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M9 15l6 -6"/>
                                                            <path
                                                                d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/>
                                                            <path
                                                                d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/>
                                                        </svg>
                                                    </a>
                                                </td>
                                                <td className="text-muted">3,652</td>
                                                <td className="text-muted">3,215</td>
                                                <td className="text-muted">76.29%</td>
                                                <td className="text-end w-1">
                                                    <div
                                                        className="chart-sparkline chart-sparkline-sm"
                                                        id="sparkline-bounce-rate-2"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    /index.html
                                                    <a href="#" className="ms-1" aria-label="Open website">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/link */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M9 15l6 -6"/>
                                                            <path
                                                                d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/>
                                                            <path
                                                                d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/>
                                                        </svg>
                                                    </a>
                                                </td>
                                                <td className="text-muted">3,256</td>
                                                <td className="text-muted">2,865</td>
                                                <td className="text-muted">72.65%</td>
                                                <td className="text-end w-1">
                                                    <div
                                                        className="chart-sparkline chart-sparkline-sm"
                                                        id="sparkline-bounce-rate-3"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    /icons.html
                                                    <a href="#" className="ms-1" aria-label="Open website">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/link */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M9 15l6 -6"/>
                                                            <path
                                                                d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/>
                                                            <path
                                                                d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/>
                                                        </svg>
                                                    </a>
                                                </td>
                                                <td className="text-muted">986</td>
                                                <td className="text-muted">865</td>
                                                <td className="text-muted">44.89%</td>
                                                <td className="text-end w-1">
                                                    <div
                                                        className="chart-sparkline chart-sparkline-sm"
                                                        id="sparkline-bounce-rate-4"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    /docs/
                                                    <a href="#" className="ms-1" aria-label="Open website">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/link */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M9 15l6 -6"/>
                                                            <path
                                                                d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/>
                                                            <path
                                                                d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/>
                                                        </svg>
                                                    </a>
                                                </td>
                                                <td className="text-muted">912</td>
                                                <td className="text-muted">822</td>
                                                <td className="text-muted">41.12%</td>
                                                <td className="text-end w-1">
                                                    <div
                                                        className="chart-sparkline chart-sparkline-sm"
                                                        id="sparkline-bounce-rate-5"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    /accordion.html
                                                    <a href="#" className="ms-1" aria-label="Open website">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/link */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M9 15l6 -6"/>
                                                            <path
                                                                d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/>
                                                            <path
                                                                d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/>
                                                        </svg>
                                                    </a>
                                                </td>
                                                <td className="text-muted">855</td>
                                                <td className="text-muted">798</td>
                                                <td className="text-muted">32.65%</td>
                                                <td className="text-end w-1">
                                                    <div
                                                        className="chart-sparkline chart-sparkline-sm"
                                                        id="sparkline-bounce-rate-6"
                                                    />
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a
                                    href="https://github.com/sponsors/codecalm"
                                    className="card card-sponsor"
                                    target="_blank"
                                    rel="noopener"
                                    style={{
                                        backgroundImage: "url(./static/sponsor-banner-homepage.svg)"
                                    }}
                                    aria-label="Sponsor Tabler!"
                                >
                                    <div className="card-body"/>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Social Media Traffic</h3>
                                    </div>
                                    <table className="table card-table table-vcenter">
                                        <thead>
                                        <tr>
                                            <th>Network</th>
                                            <th colSpan={2}>Visitors</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Instagram</td>
                                            <td>3,550</td>
                                            <td className="w-50">
                                                <div className="progress progress-xs">
                                                    <div
                                                        className="progress-bar bg-primary"
                                                        style={{width: "71.0%"}}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Twitter</td>
                                            <td>1,798</td>
                                            <td className="w-50">
                                                <div className="progress progress-xs">
                                                    <div
                                                        className="progress-bar bg-primary"
                                                        style={{width: "35.96%"}}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Facebook</td>
                                            <td>1,245</td>
                                            <td className="w-50">
                                                <div className="progress progress-xs">
                                                    <div
                                                        className="progress-bar bg-primary"
                                                        style={{width: "24.9%"}}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>TikTok</td>
                                            <td>986</td>
                                            <td className="w-50">
                                                <div className="progress progress-xs">
                                                    <div
                                                        className="progress-bar bg-primary"
                                                        style={{width: "19.72%"}}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Pinterest</td>
                                            <td>854</td>
                                            <td className="w-50">
                                                <div className="progress progress-xs">
                                                    <div
                                                        className="progress-bar bg-primary"
                                                        style={{width: "17.08%"}}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>VK</td>
                                            <td>650</td>
                                            <td className="w-50">
                                                <div className="progress progress-xs">
                                                    <div
                                                        className="progress-bar bg-primary"
                                                        style={{width: "13.0%"}}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Pinterest</td>
                                            <td>420</td>
                                            <td className="w-50">
                                                <div className="progress progress-xs">
                                                    <div
                                                        className="progress-bar bg-primary"
                                                        style={{width: "8.4%"}}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Tasks</h3>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table card-table table-vcenter">
                                            <tbody>
                                            <tr>
                                                <td className="w-1 pe-0">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input m-0 align-middle"
                                                        aria-label="Select task"
                                                        defaultChecked=""
                                                    />
                                                </td>
                                                <td className="w-100">
                                                    <a href="#" className="text-reset">
                                                        Extend the data model.
                                                    </a>
                                                </td>
                                                <td className="text-nowrap text-muted">
                                                    {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path
                                                            d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/>
                                                        <path d="M16 3v4"/>
                                                        <path d="M8 3v4"/>
                                                        <path d="M4 11h16"/>
                                                        <path d="M11 15h1"/>
                                                        <path d="M12 15v3"/>
                                                    </svg>
                                                    August 04, 2021
                                                </td>
                                                <td className="text-nowrap">
                                                    <a href="#" className="text-muted">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/check */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M5 12l5 5l10 -10"/>
                                                        </svg>
                                                        2/7
                                                    </a>
                                                </td>
                                                <td className="text-nowrap">
                                                    <a href="#" className="text-muted">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/message */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M8 9h8"/>
                                                            <path d="M8 13h6"/>
                                                            <path
                                                                d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/>
                                                        </svg>
                                                        3
                                                    </a>
                                                </td>
                                                <td>
                        <span
                            className="avatar avatar-sm"
                            style={{
                                backgroundImage: "url(./static/avatars/000m.jpg)"
                            }}
                        />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-1 pe-0">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input m-0 align-middle"
                                                        aria-label="Select task"
                                                    />
                                                </td>
                                                <td className="w-100">
                                                    <a href="#" className="text-reset">
                                                        Verify the event flow.
                                                    </a>
                                                </td>
                                                <td className="text-nowrap text-muted">
                                                    {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path
                                                            d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/>
                                                        <path d="M16 3v4"/>
                                                        <path d="M8 3v4"/>
                                                        <path d="M4 11h16"/>
                                                        <path d="M11 15h1"/>
                                                        <path d="M12 15v3"/>
                                                    </svg>
                                                    January 03, 2019
                                                </td>
                                                <td className="text-nowrap">
                                                    <a href="#" className="text-muted">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/check */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M5 12l5 5l10 -10"/>
                                                        </svg>
                                                        3/10
                                                    </a>
                                                </td>
                                                <td className="text-nowrap">
                                                    <a href="#" className="text-muted">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/message */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M8 9h8"/>
                                                            <path d="M8 13h6"/>
                                                            <path
                                                                d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/>
                                                        </svg>
                                                        6
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="avatar avatar-sm">JL</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-1 pe-0">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input m-0 align-middle"
                                                        aria-label="Select task"
                                                    />
                                                </td>
                                                <td className="w-100">
                                                    <a href="#" className="text-reset">
                                                        Database backup and maintenance
                                                    </a>
                                                </td>
                                                <td className="text-nowrap text-muted">
                                                    {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path
                                                            d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/>
                                                        <path d="M16 3v4"/>
                                                        <path d="M8 3v4"/>
                                                        <path d="M4 11h16"/>
                                                        <path d="M11 15h1"/>
                                                        <path d="M12 15v3"/>
                                                    </svg>
                                                    December 28, 2018
                                                </td>
                                                <td className="text-nowrap">
                                                    <a href="#" className="text-muted">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/check */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M5 12l5 5l10 -10"/>
                                                        </svg>
                                                        0/6
                                                    </a>
                                                </td>
                                                <td className="text-nowrap">
                                                    <a href="#" className="text-muted">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/message */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M8 9h8"/>
                                                            <path d="M8 13h6"/>
                                                            <path
                                                                d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/>
                                                        </svg>
                                                        1
                                                    </a>
                                                </td>
                                                <td>
                        <span
                            className="avatar avatar-sm"
                            style={{
                                backgroundImage: "url(./static/avatars/002m.jpg)"
                            }}
                        />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-1 pe-0">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input m-0 align-middle"
                                                        aria-label="Select task"
                                                        defaultChecked=""
                                                    />
                                                </td>
                                                <td className="w-100">
                                                    <a href="#" className="text-reset">
                                                        Identify the implementation team.
                                                    </a>
                                                </td>
                                                <td className="text-nowrap text-muted">
                                                    {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path
                                                            d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/>
                                                        <path d="M16 3v4"/>
                                                        <path d="M8 3v4"/>
                                                        <path d="M4 11h16"/>
                                                        <path d="M11 15h1"/>
                                                        <path d="M12 15v3"/>
                                                    </svg>
                                                    November 07, 2020
                                                </td>
                                                <td className="text-nowrap">
                                                    <a href="#" className="text-muted">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/check */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M5 12l5 5l10 -10"/>
                                                        </svg>
                                                        6/10
                                                    </a>
                                                </td>
                                                <td className="text-nowrap">
                                                    <a href="#" className="text-muted">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/message */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M8 9h8"/>
                                                            <path d="M8 13h6"/>
                                                            <path
                                                                d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/>
                                                        </svg>
                                                        12
                                                    </a>
                                                </td>
                                                <td>
                        <span
                            className="avatar avatar-sm"
                            style={{
                                backgroundImage: "url(./static/avatars/003m.jpg)"
                            }}
                        />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-1 pe-0">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input m-0 align-middle"
                                                        aria-label="Select task"
                                                    />
                                                </td>
                                                <td className="w-100">
                                                    <a href="#" className="text-reset">
                                                        Define users and workflow
                                                    </a>
                                                </td>
                                                <td className="text-nowrap text-muted">
                                                    {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path
                                                            d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/>
                                                        <path d="M16 3v4"/>
                                                        <path d="M8 3v4"/>
                                                        <path d="M4 11h16"/>
                                                        <path d="M11 15h1"/>
                                                        <path d="M12 15v3"/>
                                                    </svg>
                                                    November 23, 2021
                                                </td>
                                                <td className="text-nowrap">
                                                    <a href="#" className="text-muted">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/check */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M5 12l5 5l10 -10"/>
                                                        </svg>
                                                        3/7
                                                    </a>
                                                </td>
                                                <td className="text-nowrap">
                                                    <a href="#" className="text-muted">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/message */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M8 9h8"/>
                                                            <path d="M8 13h6"/>
                                                            <path
                                                                d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/>
                                                        </svg>
                                                        5
                                                    </a>
                                                </td>
                                                <td>
                        <span
                            className="avatar avatar-sm"
                            style={{
                                backgroundImage: "url(./static/avatars/000f.jpg)"
                            }}
                        />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-1 pe-0">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input m-0 align-middle"
                                                        aria-label="Select task"
                                                        defaultChecked=""
                                                    />
                                                </td>
                                                <td className="w-100">
                                                    <a href="#" className="text-reset">
                                                        Check Pull Requests
                                                    </a>
                                                </td>
                                                <td className="text-nowrap text-muted">
                                                    {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path
                                                            d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/>
                                                        <path d="M16 3v4"/>
                                                        <path d="M8 3v4"/>
                                                        <path d="M4 11h16"/>
                                                        <path d="M11 15h1"/>
                                                        <path d="M12 15v3"/>
                                                    </svg>
                                                    January 14, 2021
                                                </td>
                                                <td className="text-nowrap">
                                                    <a href="#" className="text-muted">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/check */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M5 12l5 5l10 -10"/>
                                                        </svg>
                                                        2/9
                                                    </a>
                                                </td>
                                                <td className="text-nowrap">
                                                    <a href="#" className="text-muted">
                                                        {/* Download SVG icon from http://tabler-icons.io/i/message */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M8 9h8"/>
                                                            <path d="M8 13h6"/>
                                                            <path
                                                                d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/>
                                                        </svg>
                                                        3
                                                    </a>
                                                </td>
                                                <td>
                        <span
                            className="avatar avatar-sm"
                            style={{
                                backgroundImage: "url(./static/avatars/001f.jpg)"
                            }}
                        />
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Invoices</h3>
                                    </div>
                                    <div className="card-body border-bottom py-3">
                                        <div className="d-flex">
                                            <div className="text-muted">
                                                Show
                                                <div className="mx-2 d-inline-block">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        defaultValue={8}
                                                        size={3}
                                                        aria-label="Invoices count"
                                                    />
                                                </div>
                                                entries
                                            </div>
                                            <div className="ms-auto text-muted">
                                                Search:
                                                <div className="ms-2 d-inline-block">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        aria-label="Search invoice"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table card-table table-vcenter text-nowrap datatable">
                                            <thead>
                                            <tr>
                                                <th className="w-1">
                                                    <input
                                                        className="form-check-input m-0 align-middle"
                                                        type="checkbox"
                                                        aria-label="Select all invoices"
                                                    />
                                                </th>
                                                <th className="w-1">
                                                    No.{" "}
                                                    {/* Download SVG icon from http://tabler-icons.io/i/chevron-up */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon-sm icon-thick"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M6 15l6 -6l6 6"/>
                                                    </svg>
                                                </th>
                                                <th>Invoice Subject</th>
                                                <th>Client</th>
                                                <th>VAT No.</th>
                                                <th>Created</th>
                                                <th>Status</th>
                                                <th>Price</th>
                                                <th/>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <input
                                                        className="form-check-input m-0 align-middle"
                                                        type="checkbox"
                                                        aria-label="Select invoice"
                                                    />
                                                </td>
                                                <td>
                                                    <span className="text-muted">001401</span>
                                                </td>
                                                <td>
                                                    <a
                                                        href="invoice.html"
                                                        className="text-reset"
                                                        tabIndex={-1}
                                                    >
                                                        Design Works
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="flag flag-country-us"/>
                                                    Carlson Limited
                                                </td>
                                                <td>87956621</td>
                                                <td>15 Dec 2017</td>
                                                <td>
                                                    <span className="badge bg-success me-1"/> Paid
                                                </td>
                                                <td>$887</td>
                                                <td className="text-end">
                        <span className="dropdown">
                          <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        className="form-check-input m-0 align-middle"
                                                        type="checkbox"
                                                        aria-label="Select invoice"
                                                    />
                                                </td>
                                                <td>
                                                    <span className="text-muted">001402</span>
                                                </td>
                                                <td>
                                                    <a
                                                        href="invoice.html"
                                                        className="text-reset"
                                                        tabIndex={-1}
                                                    >
                                                        UX Wireframes
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="flag flag-country-gb"/>
                                                    Adobe
                                                </td>
                                                <td>87956421</td>
                                                <td>12 Apr 2017</td>
                                                <td>
                                                    <span className="badge bg-warning me-1"/> Pending
                                                </td>
                                                <td>$1200</td>
                                                <td className="text-end">
                        <span className="dropdown">
                          <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        className="form-check-input m-0 align-middle"
                                                        type="checkbox"
                                                        aria-label="Select invoice"
                                                    />
                                                </td>
                                                <td>
                                                    <span className="text-muted">001403</span>
                                                </td>
                                                <td>
                                                    <a
                                                        href="invoice.html"
                                                        className="text-reset"
                                                        tabIndex={-1}
                                                    >
                                                        New Dashboard
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="flag flag-country-de"/>
                                                    Bluewolf
                                                </td>
                                                <td>87952621</td>
                                                <td>23 Oct 2017</td>
                                                <td>
                                                    <span className="badge bg-warning me-1"/> Pending
                                                </td>
                                                <td>$534</td>
                                                <td className="text-end">
                        <span className="dropdown">
                          <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        className="form-check-input m-0 align-middle"
                                                        type="checkbox"
                                                        aria-label="Select invoice"
                                                    />
                                                </td>
                                                <td>
                                                    <span className="text-muted">001404</span>
                                                </td>
                                                <td>
                                                    <a
                                                        href="invoice.html"
                                                        className="text-reset"
                                                        tabIndex={-1}
                                                    >
                                                        Landing Page
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="flag flag-country-br"/>
                                                    Salesforce
                                                </td>
                                                <td>87953421</td>
                                                <td>2 Sep 2017</td>
                                                <td>
                                                    <span className="badge bg-secondary me-1"/> Due in 2
                                                    Weeks
                                                </td>
                                                <td>$1500</td>
                                                <td className="text-end">
                        <span className="dropdown">
                          <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        className="form-check-input m-0 align-middle"
                                                        type="checkbox"
                                                        aria-label="Select invoice"
                                                    />
                                                </td>
                                                <td>
                                                    <span className="text-muted">001405</span>
                                                </td>
                                                <td>
                                                    <a
                                                        href="invoice.html"
                                                        className="text-reset"
                                                        tabIndex={-1}
                                                    >
                                                        Marketing Templates
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="flag flag-country-pl"/>
                                                    Printic
                                                </td>
                                                <td>87956621</td>
                                                <td>29 Jan 2018</td>
                                                <td>
                                                    <span className="badge bg-danger me-1"/> Paid Today
                                                </td>
                                                <td>$648</td>
                                                <td className="text-end">
                        <span className="dropdown">
                          <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        className="form-check-input m-0 align-middle"
                                                        type="checkbox"
                                                        aria-label="Select invoice"
                                                    />
                                                </td>
                                                <td>
                                                    <span className="text-muted">001406</span>
                                                </td>
                                                <td>
                                                    <a
                                                        href="invoice.html"
                                                        className="text-reset"
                                                        tabIndex={-1}
                                                    >
                                                        Sales Presentation
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="flag flag-country-br"/>
                                                    Tabdaq
                                                </td>
                                                <td>87956621</td>
                                                <td>4 Feb 2018</td>
                                                <td>
                                                    <span className="badge bg-secondary me-1"/> Due in 3
                                                    Weeks
                                                </td>
                                                <td>$300</td>
                                                <td className="text-end">
                        <span className="dropdown">
                          <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        className="form-check-input m-0 align-middle"
                                                        type="checkbox"
                                                        aria-label="Select invoice"
                                                    />
                                                </td>
                                                <td>
                                                    <span className="text-muted">001407</span>
                                                </td>
                                                <td>
                                                    <a
                                                        href="invoice.html"
                                                        className="text-reset"
                                                        tabIndex={-1}
                                                    >
                                                        Logo &amp; Print
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="flag flag-country-us"/>
                                                    Apple
                                                </td>
                                                <td>87956621</td>
                                                <td>22 Mar 2018</td>
                                                <td>
                                                    <span className="badge bg-success me-1"/> Paid Today
                                                </td>
                                                <td>$2500</td>
                                                <td className="text-end">
                        <span className="dropdown">
                          <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        className="form-check-input m-0 align-middle"
                                                        type="checkbox"
                                                        aria-label="Select invoice"
                                                    />
                                                </td>
                                                <td>
                                                    <span className="text-muted">001408</span>
                                                </td>
                                                <td>
                                                    <a
                                                        href="invoice.html"
                                                        className="text-reset"
                                                        tabIndex={-1}
                                                    >
                                                        Icons
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="flag flag-country-pl"/>
                                                    Tookapic
                                                </td>
                                                <td>87956621</td>
                                                <td>13 May 2018</td>
                                                <td>
                                                    <span className="badge bg-success me-1"/> Paid Today
                                                </td>
                                                <td>$940</td>
                                                <td className="text-end">
                        <span className="dropdown">
                          <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer d-flex align-items-center">
                                        <p className="m-0 text-muted">
                                            Showing <span>1</span> to <span>8</span> of <span>16</span>{" "}
                                            entries
                                        </p>
                                        <ul className="pagination m-0 ms-auto">
                                            <li className="page-item disabled">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                    tabIndex={-1}
                                                    aria-disabled="true"
                                                >
                                                    {/* Download SVG icon from http://tabler-icons.io/i/chevron-left */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M15 6l-6 6l6 6"/>
                                                    </svg>
                                                    prev
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    4
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    5
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    next{" "}
                                                    {/* Download SVG icon from http://tabler-icons.io/i/chevron-right */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M9 6l6 6l-6 6"/>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer footer-transparent d-print-none">
                    <div className="container-xl">
                        <div className="row text-center align-items-center flex-row-reverse">
                            <div className="col-lg-auto ms-lg-auto">
                                <ul className="list-inline list-inline-dots mb-0">
                                    <li className="list-inline-item">
                                        <a
                                            href="https://tabler.io/docs"
                                            target="_blank"
                                            className="link-secondary"
                                            rel="noopener"
                                        >
                                            Documentation
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="./license.html" className="link-secondary">
                                            License
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            href="https://github.com/tabler/tabler"
                                            target="_blank"
                                            className="link-secondary"
                                            rel="noopener"
                                        >
                                            Source code
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            href="https://github.com/sponsors/codecalm"
                                            target="_blank"
                                            className="link-secondary"
                                            rel="noopener"
                                        >
                                            {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon text-pink icon-filled icon-inline"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path
                                                    d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>
                                            </svg>
                                            Sponsor
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                                <ul className="list-inline list-inline-dots mb-0">
                                    <li className="list-inline-item">
                                        Copyright © 2023
                                        <a href="." className="link-secondary">
                                            Tabler
                                        </a>
                                        . All rights reserved.
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            href="./changelog.html"
                                            className="link-secondary"
                                            rel="noopener"
                                        >
                                            v1.0.0-beta19
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    )
}

export default Index