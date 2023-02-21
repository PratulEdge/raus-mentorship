import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Navdata = () => {
    const history = useHistory();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApps, setIsApps] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isBaseUi, setIsBaseUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Apps
    const [isEmail, setEmail] = useState(false);
    const [isSubEmail, setSubEmail] = useState(false);
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const [isTasks, setIsTasks] = useState(false);
    const [isCRM, setIsCRM] = useState(false);
    const [isCrypto, setIsCrypto] = useState(false);
    const [isInvoices, setIsInvoices] = useState(false);
    const [isSupportTickets, setIsSupportTickets] = useState(false);
    const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);


    // Authentication
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const [isPasswordCreate, setIsPasswordCreate] = useState(false);
    const [isLockScreen, setIsLockScreen] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [isVerification, setIsVerification] = useState(false);
    const [isError, setIsError] = useState(false);

    // Pages
    const [isProfile, setIsProfile] = useState(false);
    const [isMentor, setIsMentor] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    const [isSession, setIsSession] = useState(false);
    const [isLanding, setIsLanding] = useState(false);


    // Charts
    const [isApex, setIsApex] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Apps') {
            setIsApps(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'BaseUi') {
            setIsBaseUi(false);
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }
        if (iscurrentState !== 'MuliLevel') {
            setIsMultiLevel(false);
        }
        if (iscurrentState === 'Widgets') {
            history.push("/widgets");
            document.body.classList.add('twocolumn-panel');
        }
        if (iscurrentState !== 'Landing') {
            setIsLanding(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isApps,
        isAuth,
        isPages,
        isBaseUi,
        isAdvanceUi,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps,
        isMultiLevel
    ]);

    const user_type = localStorage.getItem("user_type")
    console.log(user_type, "User type")


    const menuItems = user_type === '2' ? [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboards",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "ecommerce",
                    label: "Ecommerce",
                    link: "/dashboard",
                    parentId: "dashboard",
                },
            ],
        },
        {
            label: "pages",
            isHeader: true,
        },
        //Admin Pages
        {
            id: "pages",
            label: "Category",
            icon: "ri-pages-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsPages(!isPages);
                setIscurrentState('Pages');
                updateIconSidebar(e);
            },
            stateVariables: isPages,
            subItems: [
                {
                    id: "mentor",
                    label: "Mentors",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsMentor(!isMentor);
                    },
                    parentId: "pages",
                    stateVariables: isMentor,
                    childItems: [
                        { id: 1, label: "Mentor List", link: "/mentor-list", parentId: "Mentor List" },
                        { id: 2, label: "Mentor Availability", link: "/mentor-avail", parentId: "Mentor Availibility" },
                    ]
                },
                {
                    id: "student",
                    label: "Student",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsStudent(!isStudent);
                    },
                    parentId: "pages",
                    stateVariables: isStudent,
                    childItems: [
                        { id: 1, label: "Student List", link: "/student-list", parentId: "pages" },
                    ]
                },
                {
                    id: "session",
                    label: "Session",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSession(!isSession);
                    },
                    parentId: "pages",
                    stateVariables: isSession,
                    childItems: [
                        { id: 1, label: "Sessions List", link: "/session-list", parentId: "pages" },
                        { id: 2, label: "UpComing Session", link: "/upcoming-sessions", parentId: "pages" },
                    ]
                },
                //end SideBar
            ],
        },
        //
    ] : user_type === '3' ? [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboards",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "ecommerce",
                    label: "Mentor Ecommerce",
                    link: "/mentor-dashboard",
                    parentId: "dashboard",
                },
            ],
        },
        {
            label: "pages",
            isHeader: true,
        },
        //Admin Pages
        {
            id: "pages",
            label: "Category",
            icon: "ri-pages-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsPages(!isPages);
                setIscurrentState('Pages');
                updateIconSidebar(e);
            },
            stateVariables: isPages,
            subItems: [
                {
                    id: "student_list",
                    label: "Student List",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsMentor(!isMentor);
                    },
                    parentId: "pages",
                    stateVariables: isMentor,
                    childItems: [
                        { id: 1, label: "Active Student List", link: "/student-details", parentId: "Active Student List" },
                        // { id: 2, label: "Mentor Availability", link: "/mentor-avail", parentId: "Mentor Availibility" },
                    ]
                },
                {
                    id: "upcoming_session",
                    label: "Sessions",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsStudent(!isStudent);
                    },
                    parentId: "pages",
                    stateVariables: isStudent,
                    childItems: [
                        { id: 1, label: "Past Sessions", link: "/past-sessions", parentId: "pages" },
                        { id: 2, label: "UpComing Sessions", link: "/upcoming-sessions", parentId: "pages" },
                        { id: 3, label: "Availability", link: "/ms_mentor_availability", parentId: "pages" },
                    ]
                },
                {
                    id: "report",
                    label: "Report",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSession(!isSession);
                    },
                    parentId: "pages",
                    stateVariables: isSession,
                    childItems: [
                        { id: 1, label: "Student Report", link: "/session-list", parentId: "pages" },
                        { id: 2, label: "Mentor Report", link: "/session-list", parentId: "pages" },
                        { id: 3, label: "Session Report", link: "/session-list", parentId: "pages" },
                        { id: 4, label: "Over All Report", link: "/upcoming-sessions", parentId: "pages" },
                    ]
                },
                //end SideBar
            ],
        },
    ]:user_type === '1' ? [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboards",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "ecommerce",
                    label: "Student Ecommerce",
                    link: "/student-dashboard",
                    parentId: "dashboard",
                },
            ],
        },
        {
            label: "pages",
            isHeader: true,
        },
        //Admin Pages
        {
            id: "pages",
            label: "Category",
            icon: "ri-pages-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsPages(!isPages);
                setIscurrentState('Pages');
                updateIconSidebar(e);
            },
            stateVariables: isPages,
            subItems: [
                {
                    id: "session_list",
                    label: "Session List",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsMentor(!isMentor);
                    },
                    parentId: "pages",
                    stateVariables: isMentor,
                    childItems: [
                        { id: 1, label: "Past Sessions List", link: "/s-past-sessions", parentId: "session_list" },
                        { id: 2, label: "Active Sessions List", link: "/student-active-sessions", parentId: "session_list" },
                        { id: 3, label: "Book Sessions", link: "/book-session", parentId: "session_list" },
                        // { id: 2, label: "Mentor Availability", link: "/mentor-avail", parentId: "Mentor Availibility" },
                    ]
                },
                // {
                //     id: "upcoming_session",
                //     label: "Sessions",
                //     link: "/#",
                //     isChildItem: true,
                //     click: function (e) {
                //         e.preventDefault();
                //         setIsStudent(!isStudent);
                //     },
                //     parentId: "pages",
                //     stateVariables: isStudent,
                //     childItems: [
                //         { id: 1, label: "Past Sessions", link: "/past-sessions", parentId: "pages" },
                //         { id: 2, label: "UpComing Sessions", link: "/upcoming-sessions", parentId: "pages" },
                //         { id: 3, label: "Availability", link: "/ms_mentor_availability", parentId: "pages" },
                //     ]
                // },
                // {
                //     id: "report",
                //     label: "Report",
                //     link: "/#",
                //     isChildItem: true,
                //     click: function (e) {
                //         e.preventDefault();
                //         setIsSession(!isSession);
                //     },
                //     parentId: "pages",
                //     stateVariables: isSession,
                //     childItems: [
                //         { id: 1, label: "Student Report", link: "/session-list", parentId: "pages" },
                //         { id: 2, label: "Mentor Report", link: "/session-list", parentId: "pages" },
                //         { id: 3, label: "Session Report", link: "/session-list", parentId: "pages" },
                //         { id: 4, label: "Over All Report", link: "/upcoming-sessions", parentId: "pages" },
                //     ]
                // },
                //end SideBar
            ],
        },
    ]:[];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;