import '../../lib/joy-jsx';

JOY.router.page("payment-demo", () => {
    document.getElementsByTagName('body')[0].setAttribute("class", "dark:bg-secondary-900 font-body text-secondary-500 overflow-x-hidden")
    document.getElementsByTagName('body')[0].setAttribute("itemscope", "true")
    $("#year").text(new Date().getFullYear());
 })
JOY.css({
    ".st1,\n.st6": {
        fill: "#e4761b",
        stroke: "#e4761b",
        strokeLinecap: "round",
        strokeLinejoin: "round",
    },
    ".st6": {
        fill: "#f6851b",
        stroke: "#f6851b"
    }
})
const KpiProject = () => {
    return (
        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
            <div className="flex items-start justify-between">
                <div className="h-screen hidden lg:block shadow-lg relative w-80">
                    <div className="bg-white h-full dark:bg-gray-700">
                        <div className="flex items-center justify-start pt-6 ml-8">
                            <p className="font-bold dark:text-white text-xl">Plannifer</p>
                        </div>

                        <nav className="mt-6">
                            <div>
                                <a
                                    className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" />
                                        </svg>
                                    </span>
                                    <span className="mx-2 text-sm font-normal">Home</span>
                                </a>
                                <a
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 2048 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                                        </svg>
                                    </span>
                                    <span className="mx-2 text-sm font-normal">
                                        Refered Projects{' '}
                                        <span className="p-1 ml-4 rounded-lg w-4 h-2 bg-gray-200 text-gray-400 text-xs">
                                            0
                                        </span>
                                    </span>
                                </a>
                                <a
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z" />
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">Resources</span>
                                </a>
                                <a
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 2048 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M580 461q0-41-25-66t-66-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5zm743 507q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51zm-236-507q0-41-24.5-66t-65.5-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 65.5-24.5t24.5-65.5zm635 507q0-28-26-50t-65-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51zm-266-397q-31-4-70-4-169 0-311 77t-223.5 208.5-81.5 287.5q0 78 23 152-35 3-68 3-26 0-50-1.5t-55-6.5-44.5-7-54.5-10.5-50-10.5l-253 127 72-218q-290-203-290-490 0-169 97.5-311t264-223.5 363.5-81.5q176 0 332.5 66t262 182.5 136.5 260.5zm592 561q0 117-68.5 223.5t-185.5 193.5l55 181-199-109q-150 37-218 37-169 0-311-70.5t-223.5-191.5-81.5-264 81.5-264 223.5-191.5 311-70.5q161 0 303 70.5t227.5 192 85.5 263.5z" />
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">Store feedback</span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="flex flex-col w-full md:space-y-4">
                    <header className="w-full h-16 z-40 flex items-center justify-between">
                        <div className="block lg:hidden ml-6">
                            <button className="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
                                <svg
                                    width="20"
                                    height="20"
                                    className="text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                            <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
                                <button className="flex p-2 items-center rounded-full text-gray-400 hover:text-gray-700 bg-white shadow text-md">
                                    <svg
                                        width="20"
                                        height="20"
                                        className=""
                                        fill="currentColor"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" />
                                    </svg>
                                </button>
                                <button className="flex p-2 items-center rounded-full bg-white shadow text-gray-400 hover:text-gray-700 text-md">
                                    <svg
                                        width="20"
                                        height="20"
                                        className="text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z" />
                                    </svg>
                                </button>
                                <span className="w-1 h-8 rounded-lg bg-gray-200"></span>
                                {/* <Avatar size="small" /> */}
                                <button className="flex items-center text-gray-500 dark:text-white text-md">
                                    Charlie R
                                    <svg
                                        width="20"
                                        height="20"
                                        className="ml-2 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
                        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
                            Good afternoom, Charlie
                        </h1>
                        <h2 className="text-md text-gray-400">
                            Here's what's happening with your ambassador account today.
                        </h2>
                        <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                            <div className="w-full md:w-6/12">
                                {/* <SimpleLevelsCard /> */}
                            </div>
                            <div className="flex items-center w-full md:w-1/2 space-x-4">
                                <div className="w-1/2">
                                    <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                        <p className="text-2xl text-black dark:text-white font-bold">12</p>
                                        <p className="text-gray-400 text-sm">Active projects</p>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                        <p className="text-2xl text-black dark:text-white font-bold">$93.76</p>
                                        <p className="text-gray-400 text-sm">Commission in approval</p>
                                        <span className="rounded-full absolute p-4 bg-purple-500 top-2 right-4">
                                            <svg
                                                width="40"
                                                fill="currentColor"
                                                height="40"
                                                className="text-white h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="flex items-center text-gray-400 text-md border-gray-300 border px-4 py-2 rounded-tl-sm rounded-bl-full rounded-r-full">
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="mr-2 text-gray-400"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z" />
                                </svg>
                                Last month
                                <svg
                                    width="20"
                                    height="20"
                                    className="ml-2 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                                </svg>
                            </button>
                            <span className="text-sm text-gray-400">Compared to oct 1- otc 30, 2020</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                            <div className="w-full">
                                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                    <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                        Project Reffered
                                    </p>
                                    <div className="flex items-end space-x-2 my-6">
                                        <p className="text-5xl text-black dark:text-white font-bold">12</p>
                                        <span className="text-green-500 text-xl font-bold flex items-center">
                                            <svg
                                                width="20"
                                                fill="currentColor"
                                                height="20"
                                                className="h-3"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                            </svg>
                                            22%
                                        </span>
                                    </div>
                                    <div className="dark:text-white">
                                        <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12  justify-between border-b border-gray-200">
                                            <p>Unique URL</p>
                                            <div className="flex items-end text-xs">
                                                34
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    22%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Embedded form</p>
                                            <div className="flex items-end text-xs">
                                                13
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    12%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                            <p>New visitor</p>
                                            <div className="flex items-end text-xs">
                                                45
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    41%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                    <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                        Project Paid
                                    </p>
                                    <div className="flex items-end space-x-2 my-6">
                                        <p className="text-5xl text-black dark:text-white font-bold">23</p>
                                        <span className="text-green-500 text-xl font-bold flex items-center">
                                            <svg
                                                width="20"
                                                fill="currentColor"
                                                height="20"
                                                className="h-3"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                            </svg>
                                            12%
                                        </span>
                                    </div>
                                    <div className="dark:text-white">
                                        <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>User paid</p>
                                            <div className="flex items-end text-xs">
                                                21
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    20%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Income</p>
                                            <div className="flex items-end text-xs">
                                                10
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    2%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                            <p>Royal tees</p>
                                            <div className="flex items-end text-xs">
                                                434
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    12%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                    <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                        New features
                                    </p>
                                    <div className="flex items-end space-x-2 my-6">
                                        <p className="text-5xl text-black dark:text-white font-bold">12</p>
                                        <span className="text-red-500 text-xl font-bold flex items-center">
                                            <svg
                                                width="20"
                                                fill="currentColor"
                                                height="20"
                                                className="h-3 rotate-180 transform"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                            </svg>
                                            2%
                                        </span>
                                    </div>
                                    <div className="dark:text-white">
                                        <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Down</p>
                                            <div className="flex items-end text-xs">
                                                34
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    22%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Up</p>
                                            <div className="flex items-end text-xs">
                                                13
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    12%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                            <p>No developed</p>
                                            <div className="flex items-end text-xs">
                                                45
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    41%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                    <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                        Sign in
                                    </p>
                                    <div className="flex items-end space-x-2 my-6">
                                        <p className="text-5xl text-black dark:text-white font-bold">16</p>
                                        <span className="text-red-500 text-xl font-bold flex items-center">
                                            <svg
                                                width="20"
                                                fill="currentColor"
                                                height="20"
                                                className="h-3 transform rotate-180"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                            </svg>
                                            14%
                                        </span>
                                    </div>
                                    <div className="dark:text-white">
                                        <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Amercia</p>
                                            <div className="flex items-end text-xs">
                                                43
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    12%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Europe</p>
                                            <div className="flex items-end text-xs">
                                                133
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    19%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                            <p>Asia</p>
                                            <div className="flex items-end text-xs">
                                                23
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    4%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                    <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                        Sales
                                    </p>
                                    <div className="flex items-end space-x-2 my-6">
                                        <p className="text-5xl text-black dark:text-white font-bold">9</p>
                                        <span className="text-green-500 text-xl font-bold flex items-center">
                                            <svg
                                                width="20"
                                                fill="currentColor"
                                                height="20"
                                                className="h-3"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                            </svg>
                                            34%
                                        </span>
                                    </div>
                                    <div className="dark:text-white">
                                        <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Templates</p>
                                            <div className="flex items-end text-xs">
                                                345
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    12%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Components</p>
                                            <div className="flex items-end text-xs">
                                                139
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    10%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                            <p>Icons</p>
                                            <div className="flex items-end text-xs">
                                                421
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    4%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                    <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                        Maintenance
                                    </p>
                                    <div className="flex items-end space-x-2 my-6">
                                        <p className="text-5xl text-black dark:text-white font-bold">15</p>
                                        <span className="text-green-500 text-xl font-bold flex items-center">
                                            <svg
                                                width="20"
                                                fill="currentColor"
                                                height="20"
                                                className="h-3"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                            </svg>
                                            34%
                                        </span>
                                    </div>
                                    <div className="dark:text-white">
                                        <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Cloud</p>
                                            <div className="flex items-end text-xs">
                                                123
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    22%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Infra</p>
                                            <div className="flex items-end text-xs">
                                                134
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    9%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                            <p>Office</p>
                                            <div className="flex items-end text-xs">
                                                23
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    41%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default function (params) {
    return (
        <div id="payment-demo" class="section__">
            <header class="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
                <div class="flex items-center px-6 py-6 xl:px-24">
                    {/* <!-- Logo --> */}
                    <a href="" class="shrink-0">
                        <img src="/img/bresnow__logo_b.png" class="max-h-7 dark:hidden" alt="Xhibiter | NFT Marketplace" />
                        <img src="/img/bresnow_logo.png" class="hidden max-h-7 dark:block" alt="Xhibiter | NFT Marketplace" />
                    </a>

                    {/* <!-- Search --> */}
                    <form action="search" class="relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]">
                        <input
                            type="search"
                            class="text-secondary-700 placeholder-secondary-500 focus:ring-accent border-secondary-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                            placeholder="Search"
                        />
                        <span class="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                class="fill-secondary-500 h-4 w-4 dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                />
                            </svg>
                        </span>
                    </form>

                    {/* <!-- Menu / Actions --> */}
                    <div
                        class="js-mobile-menu dark:bg-secondary-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent"
                    >
                        {/* <!-- Mobile Logo / Menu Close --> */}
                        <div
                            class="t-0 dark:bg-secondary-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden"
                        >
                            {/* <!-- Mobile Logo --> */}
                            <a href="index.html" class="shrink-0">
                                <img src="img/bresnow_logo_b.png" class="max-h-7 dark:hidden" alt="Xhibiter | NFT Marketplace" />
                                <img src="img/bresnow_logo.png" class="hidden max-h-7 dark:block" alt="Xhibiter | NFT Marketplace" />
                            </a>

                            {/* <!-- Mobile Menu Close --> */}
                            <button
                                class="js-mobile-close border-secondary-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                                aria-label="close mobile menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-secondary-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* <!-- Mobile Search --> */}
                        <form action="search" class="relative mt-24 mb-8 w-full lg:hidden">
                            <input
                                type="search"
                                class="text-secondary-700 placeholder-secondary-500 focus:ring-accent border-secondary-100 w-full rounded-2xl border py-3 px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                                placeholder="Search"
                            />
                            <span class="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-secondary-500 h-4 w-4 dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                    />
                                </svg>
                            </span>
                        </form>

                        {/* <!-- Primary Nav --> */}
                        <nav class="navbar w-full">
                            <ul class="flex flex-col lg:flex-row">
                                <li class="js-nav-dropdown group relative">
                                    <a
                                        href="#"
                                        class="dropdown-toggle text-secondary-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
                                        id="navDropdown-1"
                                        aria-expanded="false"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >Home
                                        <i class="lg:hidden">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                class="h-4 w-4 dark:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </a>
                                    <ul
                                        class="dropdown-menu dark:bg-secondary-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                                        aria-labelledby="navDropdown-1"
                                    >
                                        <li>
                                            <a
                                                href="index.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Home 1</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-2.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Home 2</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-3.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Home 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="js-nav-dropdown group relative">
                                    <a
                                        href="#"
                                        class="dropdown-toggle text-secondary-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
                                        id="navDropdown-2"
                                        aria-expanded="false"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >Pages
                                        <i class="lg:hidden">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                class="h-4 w-4 dark:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </a>
                                    <ul
                                        class="dropdown-menu dark:bg-secondary-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                                        aria-labelledby="navDropdown-2"
                                    >
                                        <li>
                                            <a
                                                href="item.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Item Details</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Explore Collections</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collection.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Collection</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="activity.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Activity</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="rankings.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Rankings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="user.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">User</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="edit-profile.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Edit Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="about.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">About</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="contact.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Contact</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="wallet.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Wallet</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="login.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Login</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="404.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Page 404</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="tos.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Terms of Service</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="js-nav-dropdown nav-item dropdown group relative">
                                    <a
                                        href="collections.html"
                                        class="dropdown-toggle text-secondary-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
                                        id="navDropdown-3"
                                        aria-expanded="false"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >Explore
                                        <i class="lg:hidden">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                class="h-4 w-4 dark:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </a>
                                    <ul
                                        class="dropdown-menu dark:bg-secondary-800 -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                                        aria-labelledby="navDropdown-1"
                                    >
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="bg-light-base mr-3 rounded-xl p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="fill-secondary-700 h-4 w-4"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">All NFTs</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#E4FCF4] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#10B981]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Art</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#FDF7EE] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#FEB240]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M17.5 2a4.5 4.5 0 0 1 2.951 7.897c.355.967.549 2.013.549 3.103A9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9.05 9.05 0 0 1 3.32 0A4.494 4.494 0 0 1 17.5 2zm0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7.05 7.05 0 0 0-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 1 0 4.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1 0 19 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0 0 17.5 4zM10 13a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Collectibles</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#F2EEFF] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#8358FF]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Domain Names</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#FFEEFA] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#F35BC7]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z" />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Music</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#EAF2FE] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#428AF8]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Photography</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#EBEDFF] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#737EF2]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.366 11.366l-3.469 6.01a8.053 8.053 0 0 0 4.459.51 9.937 9.937 0 0 1 .784-5.494l-1.774-1.026zm3.518 2.031a7.956 7.956 0 0 0-.587 3.894 8.022 8.022 0 0 0 3.077-2.456l-2.49-1.438zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428 8.01 8.01 0 0 0 2.671 3.604l3.469-6.008-1.775-1.024zm11.103-.13l-.258.12a7.947 7.947 0 0 0-2.82 2.333l2.492 1.439a7.975 7.975 0 0 0 .586-3.893zM4 12c0 .266.013.53.038.789a7.95 7.95 0 0 0 3.078-2.454L4.624 8.897A7.975 7.975 0 0 0 4 12zm12.835-6.374l-3.469 6.008 1.775 1.025a9.95 9.95 0 0 1 4.366-3.43 8.015 8.015 0 0 0-2.419-3.402l-.253-.201zM12 4c-.463 0-.916.04-1.357.115a9.928 9.928 0 0 1-.784 5.494l1.775 1.025 3.469-6.01A7.975 7.975 0 0 0 12 4zm-3.297.71l-.191.088a8.033 8.033 0 0 0-2.886 2.367l2.49 1.438a7.956 7.956 0 0 0 .587-3.893z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Sports</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#F5FFED] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#8DD059]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Trading Cards</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#FFEEEE] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#EF3D3D]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Utility</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#EEFCFF] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#46C7E3]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Virtual Worlds</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="js-nav-dropdown group relative">
                                    <a
                                        href="#"
                                        class="dropdown-toggle text-secondary-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
                                        id="navDropdown-4"
                                        aria-expanded="false"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >Resources
                                        <i class="lg:hidden">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                class="h-4 w-4 dark:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </a>
                                    <ul
                                        class="dropdown-menu dark:bg-secondary-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                                        aria-labelledby="navDropdown-4"
                                    >
                                        <li>
                                            <a
                                                href="help-center.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Help Center</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="platform-status.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Platform Status</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="partners.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Partners</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="blog.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Blog</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="single-post.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Single Post</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="newsletter.html"
                                                class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-secondary-700 text-sm dark:text-white">Newsletter</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="group">
                                    <a
                                        href="create.html"
                                        class="text-secondary-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
                                    >Create</a
                                    >
                                </li>
                            </ul>
                        </nav>

                        {/* <!-- Mobile Connect Wallet / Socials --> */}
                        <div class="mt-10 w-full lg:hidden">
                            <a
                                href="#"
                                class="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                                data-bs-toggle="modal"
                                data-bs-target="#walletModal"
                            >
                                Connect Wallet
                            </a>

                            <hr class="dark:bg-secondary-600 bg-secondary-100 my-5 h-px border-0" />

                            {/* <!-- Socials --> */}
                            <div class="flex items-center justify-center space-x-5">
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="facebook"
                                        class="group-hover:fill-accent fill-secondary-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="twitter"
                                        class="group-hover:fill-accent fill-secondary-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="discord"
                                        class="group-hover:fill-accent fill-secondary-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                    >
                                        <path
                                            d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="instagram"
                                        class="group-hover:fill-accent fill-secondary-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="tiktok"
                                        class="group-hover:fill-accent fill-secondary-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* <!-- Actions --> */}
                        <div class="ml-8 hidden lg:flex xl:ml-12">
                            {/* <!-- Wallet --> */}
                            <a
                                href="#"
                                class="js-wallet border-secondary-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                                data-bs-toggle="modal"
                                data-bs-target="#walletModal"
                                aria-label="wallet"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-secondary-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"
                                    />
                                </svg>
                            </a>

                            {/* <!-- Profile --> */}
                            <div class="js-nav-dropdown group-dropdown relative">
                                <button
                                    class="dropdown-toggle border-secondary-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                                    id="profileDropdown"
                                    aria-expanded="false"
                                    data-bs-toggle="dropdown"
                                    aria-label="profile"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        class="fill-secondary-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    class="dropdown-menu dark:bg-secondary-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl"
                                    aria-labelledby="profileDropdown"
                                >
                                    <button
                                        class="js-copy-clipboard font-display text-secondary-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white"
                                        data-tippy-content="Copy"
                                    >
                                        <span class="max-w-[10rem] overflow-hidden text-ellipsis"
                                        >0x7a86c0b064171007716bbd6af96676935799a63e</span
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="dark:fill-secondary-300 fill-secondary-500 ml-1 mb-px h-4 w-4"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z"
                                            />
                                        </svg>
                                    </button>

                                    <div class="dark:border-secondary-600 border-secondary-100 mx-5 mb-6 rounded-lg border p-4">
                                        <span class="dark:text-secondary-200 text-sm font-medium tracking-tight">Balance</span>
                                        <div class="flex items-center">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xml:space="preserve"
                                                class="-ml-1 mr-1 h-[1.125rem] w-[1.125rem]"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                                                <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                                            </svg>
                                            <span class="text-green text-lg font-bold">10 ETH</span>
                                        </div>
                                    </div>
                                    <a
                                        href="user.html"
                                        class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-700 h-4 w-4 transition-colors dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                            ></path>
                                        </svg>
                                        <span class="font-display text-secondary-700 mt-1 text-sm dark:text-white">My Profile</span>
                                    </a>
                                    <a
                                        href="edit-profile.html"
                                        class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-700 h-4 w-4 transition-colors dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                                            />
                                        </svg>
                                        <span class="font-display text-secondary-700 mt-1 text-sm dark:text-white">Edit Profile</span>
                                    </a>
                                    <a
                                        href="#"
                                        class="dark:hover:bg-secondary-600 hover:text-accent focus:text-accent hover:bg-secondary-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-700 h-4 w-4 transition-colors dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z"
                                            />
                                        </svg>
                                        <span class="font-display text-secondary-700 mt-1 text-sm dark:text-white">Sign out</span>
                                    </a>
                                </div>
                            </div>

                            {/* <!-- Dark Mode --> */}
                            <a
                                href="#"
                                class="border-secondary-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent js-dark-mode-trigger ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-secondary-700 dark-mode-light h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-secondary-700 dark-mode-dark hidden h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Mobile Menu Actions --> */}
                    <div class="ml-auto flex lg:hidden">
                        {/* <!-- Profile --> */}
                        <a
                            href="edit-profile.html"
                            class="border-secondary-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                            aria-label="profile"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                class="fill-secondary-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                />
                            </svg>
                        </a>

                        {/* <!-- Dark Mode --> */}
                        <a
                            href="#"
                            class="js-dark-mode-trigger border-secondary-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                class="fill-secondary-700 dark-mode-light h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                class="fill-secondary-700 dark-mode-dark hidden h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                                />
                            </svg>
                        </a>

                        {/* <!-- Mobile Menu Toggle --> */}
                        <button
                            class="js-mobile-toggle border-secondary-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                            aria-label="open mobile menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                class="fill-secondary-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
<KpiProject/>

        </div>
    )
};
