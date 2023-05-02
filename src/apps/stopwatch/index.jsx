import '../../lib/joy-jsx';

JOY.router.page("stopwatch", () => {
    window.onload = function () {

        var seconds = "00";
        var tens = "00";
        var appendTens = document.getElementById("tens")
        var appendSeconds = document.getElementById("seconds")
        var buttonStart = document.getElementById('button-start');
        var buttonStop = document.getElementById('button-stop');
        var buttonReset = document.getElementById('button-reset');
        var Interval;

        buttonStart.onclick = function () {

            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
        }

        buttonStop.onclick = function () {
            clearInterval(Interval);
        }


        buttonReset.onclick = function () {
            clearInterval(Interval);
            tens = "00";
            seconds = "00";
            appendTens.innerHTML = tens;
            appendSeconds.innerHTML = seconds;
        }



        function startTimer() {
            tens++;

            if (tens <= 9) {
                appendTens.innerHTML = "0" + tens;
            }

            if (tens > 9) {
                appendTens.innerHTML = tens;

            }

            if (tens > 99) {
                console.log("seconds");
                seconds++;
                appendSeconds.innerHTML = "0" + seconds;
                tens = 0;
                appendTens.innerHTML = "0" + 0;
            }

            if (seconds > 9) {
                appendSeconds.innerHTML = seconds;
            }

        }


    }
 })
JOY.css()
export default function (params) {
    return (
        <div id="stopwatch" class="section__ container">
            <h1>&TIME</h1>
            <h2>Basic Stopwatch Application</h2>
            <p><span id="seconds">00</span>:<span id="tens">00</span></p>
            <button id="button-start">Start</button>
            <button id="button-stop">Stop</button>
            <button id="button-reset">Reset</button>

            <main>
                <section class="relative py-24">
                    <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="img/wallet/gradient_light.jpg" alt="gradient" class="h-full w-full" />
                    </picture>
                    <div class="container">
                        <h1 class="font-display text-secondary-700 py-16 text-center text-4xl font-medium dark:text-white">Activity</h1>

                        <div class="lg:flex">
                            <div class="mb-10 shrink-0 basis-8/12 space-y-5 lg:mb-0 lg:pr-10">
                                <a
                                    href="item.html"
                                    class="dark:bg-secondary-700 dark:border-secondary-700 border-secondary-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg"
                                >
                                    <figure class="mr-5 self-start">
                                        <img src="img/wallet/avatars/avatar_2.jpg" alt="avatar 2" class="rounded-2lg" loading="lazy" />
                                    </figure>

                                    <div>
                                        <h3 class="font-display text-secondary-700 mb-1 text-base font-semibold dark:text-white">
                                            Lazyone Panda
                                        </h3>
                                        <span class="dark:text-secondary-200 text-secondary-500 mb-3 block text-sm">sold for 1.515 ETH</span>
                                        <span class="text-secondary-300 block text-xs">30 minutes 45 seconds ago</span>
                                    </div>

                                    <div class="dark:border-secondary-600 border-secondary-100 ml-auto rounded-full border p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-700 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"
                                            />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    href="item.html"
                                    class="dark:bg-secondary-700 dark:border-secondary-700 border-secondary-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg"
                                >
                                    <figure class="mr-5 self-start">
                                        <img src="img/wallet/products/item_21_sm.jpg" alt="item 2" class="rounded-2lg" loading="lazy" />
                                    </figure>

                                    <div>
                                        <h3 class="font-display text-secondary-700 mb-1 text-base font-semibold dark:text-white">
                                            NFT Funny Cat
                                        </h3>
                                        <span class="dark:text-secondary-200 text-secondary-500 mb-3 block text-sm"
                                        >listed by 051_Hart .08095 ETH</span
                                        >
                                        <span class="text-secondary-300 block text-xs">40 minutes 36 seconds ago</span>
                                    </div>

                                    <div class="dark:border-secondary-600 border-secondary-100 ml-auto rounded-full border p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-700 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"
                                            />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    href="item.html"
                                    class="dark:bg-secondary-700 dark:border-secondary-700 border-secondary-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg"
                                >
                                    <figure class="mr-5 self-start">
                                        <img src="img/wallet/products/item_22_sm.jpg" alt="item 3" class="rounded-2lg" loading="lazy" />
                                    </figure>

                                    <div>
                                        <h3 class="font-display text-secondary-700 mb-1 text-base font-semibold dark:text-white">
                                            Prince Ape Planet
                                        </h3>
                                        <span class="dark:text-secondary-200 text-secondary-500 mb-3 block text-sm">tranferred from 027ab52</span>
                                        <span class="text-secondary-300 block text-xs">1 hour 15 minutes ago</span>
                                    </div>

                                    <div class="dark:border-secondary-600 border-secondary-100 ml-auto rounded-full border p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-700 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"
                                            />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    href="item.html"
                                    class="dark:bg-secondary-700 dark:border-secondary-700 border-secondary-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg"
                                >
                                    <figure class="mr-5 self-start">
                                        <img src="img/wallet/products/item_23_sm.jpg" alt="item 3" class="rounded-2lg" loading="lazy" />
                                    </figure>

                                    <div>
                                        <h3 class="font-display text-secondary-700 mb-1 text-base font-semibold dark:text-white">
                                            Origin Morish
                                        </h3>
                                        <span class="dark:text-secondary-200 text-secondary-500 mb-3 block text-sm">bid cancelled by 0397fd</span>
                                        <span class="text-secondary-300 block text-xs">1 hour 55 minutes ago</span>
                                    </div>

                                    <div class="dark:border-secondary-600 border-secondary-100 ml-auto rounded-full border p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-700 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"
                                            />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    href="item.html"
                                    class="dark:bg-secondary-700 dark:border-secondary-700 border-secondary-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg"
                                >
                                    <figure class="mr-5 self-start">
                                        <img src="img/wallet/products/item_24_sm.jpg" alt="item 3" class="rounded-2lg" loading="lazy" />
                                    </figure>

                                    <div>
                                        <h3 class="font-display text-secondary-700 mb-1 text-base font-semibold dark:text-white">
                                            Portrait Gallery#029
                                        </h3>
                                        <span class="dark:text-secondary-200 text-secondary-500 mb-3 block text-sm">liked by Trina_more</span>
                                        <span class="text-secondary-300 block text-xs">2 hours 24 minutes ago</span>
                                    </div>

                                    <div class="dark:border-secondary-600 border-secondary-100 ml-auto rounded-full border p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-700 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path
                                                d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>

                            <aside class="basis-4/12 lg:pl-5">
                                <form action="search" class="relative mb-12 block">
                                    <input
                                        type="search"
                                        class="text-secondary-700 placeholder-secondary-500 focus:ring-accent border-secondary-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                                        placeholder="Search"
                                    />
                                    <button
                                        type="submit"
                                        class="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-500 h-4 w-4 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                            ></path>
                                        </svg>
                                    </button>
                                </form>

                                <h3 class="font-display text-secondary-500 mb-4 font-semibold dark:text-white">Filters</h3>
                                <div class="flex flex-wrap">
                                    <button
                                        class="dark:border-secondary-600 dark:bg-secondary-700 group dark:hover:bg-accent hover:bg-accent border-secondary-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"
                                            />
                                        </svg>
                                        <span class="text-2xs font-medium">Listing</span>
                                    </button>
                                    <button
                                        class="dark:border-secondary-600 dark:bg-secondary-700 group dark:hover:bg-accent hover:bg-accent border-secondary-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"
                                            />
                                        </svg>
                                        <span class="text-2xs font-medium">Bids</span>
                                    </button>
                                    <button
                                        class="dark:border-secondary-600 dark:bg-secondary-700 group dark:hover:bg-accent hover:bg-accent border-secondary-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"
                                            />
                                        </svg>
                                        <span class="text-2xs font-medium">Transfer</span>
                                    </button>
                                    <button
                                        class="dark:border-secondary-600 dark:bg-secondary-700 group dark:hover:bg-accent hover:bg-accent border-secondary-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path
                                                d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                                            />
                                        </svg>
                                        <span class="text-2xs font-medium">Likes</span>
                                    </button>
                                    <button
                                        class="dark:border-secondary-600 dark:bg-secondary-700 group dark:hover:bg-accent hover:bg-accent border-secondary-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-secondary-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"
                                            />
                                        </svg>
                                        <span class="text-2xs font-medium">Purchases</span>
                                    </button>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>

            <div class="modal fade" id="walletModal" tabindex="-1" aria-labelledby="walletModalLabel" aria-hidden="true">
                <div class="modal-dialog max-w-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="walletModalLabel">Connect your wallet</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-secondary-700 h-6 w-6 dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div class="modal-body p-6 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                viewBox="0 0 318.6 318.6"
                                xml:space="preserve"
                                class="mb-4 inline-block h-8 w-8"
                            >

                                <path
                                    fill="#e2761b"
                                    stroke="#e2761b"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M274.1 35.5l-99.5 73.9L193 65.8z"
                                />
                                <path
                                    class="st1"
                                    d="M44.4 35.5l98.7 74.6-17.5-44.3zm193.9 171.3l-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z"
                                />
                                <path
                                    class="st1"
                                    d="M103.6 138.2l-15.8 23.9 56.3 2.5-2-60.5zm111.3 0l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5l33.9 16.5-4.7-39.3z"
                                />
                                <path
                                    d="M211.8 247.4l-33.9-16.5 2.7 22.1-.3 9.3zm-105 0l31.5 14.9-.2-9.3 2.5-22.1z"
                                    fill="#d7c1b3"
                                    stroke="#d7c1b3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M138.8 193.5l-28.2-8.3 19.9-9.1zm40.9 0l8.3-17.4 20 9.1z"
                                    fill="#233447"
                                    stroke="#233447"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M106.8 247.4l4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
                                    fill="#cd6116"
                                    stroke="#cd6116"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M87.8 162.1l23.6 46-.8-22.9zm120.3 23.1l-1 22.9 23.7-46zm-64-20.6l-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0l-2.7 18 1.2 45 6.7-34.1z"
                                    fill="#e4751f"
                                    stroke="#e4751f"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    class="st6"
                                    d="M179.8 193.5l-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
                                />
                                <path
                                    fill="#c0ad9e"
                                    stroke="#c0ad9e"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M180.3 262.3l.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
                                />
                                <path
                                    fill="#161616"
                                    stroke="#161616"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M177.9 230.9l-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
                                />
                                <path
                                    d="M278.3 114.2l8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
                                    fill="#763d16"
                                    stroke="#763d16"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    class="st6"
                                    d="M267.2 153.5l-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
                                />
                            </svg>
                            <p class="text-center dark:text-white">
                                You don't have MetaMask in your browser, please download it from
                                <a href="https://metamask.io/" class="text-accent" target="_blank" rel="noreferrer noopener">MetaMask</a>
                            </p>
                        </div>

                        <div class="modal-footer">
                            <div class="flex items-center justify-center space-x-4">
                                <a
                                    href="https://metamask.io/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    class="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                                >
                                    Get Metamask
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="buyNowModal" tabindex="-1" aria-labelledby="buyNowModalLabel" aria-hidden="true">
                <div class="modal-dialog max-w-2xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="buyNowModalLabel">Complete checkout</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-secondary-700 h-6 w-6 dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div class="modal-body p-6">
                            <div class="mb-2 flex items-center justify-between">
                                <span class="font-display text-secondary-700 text-sm font-semibold dark:text-white">Item</span>
                                <span class="font-display text-secondary-700 text-sm font-semibold dark:text-white">Subtotal</span>
                            </div>

                            <div class="dark:border-secondary-600 border-secondary-100 relative flex items-center border-t border-b py-4">
                                <figure class="mr-5 self-start">
                                    <img src="img/wallet/avatars/avatar_2.jpg" alt="avatar 2" class="rounded-2lg" loading="lazy" />
                                </figure>

                                <div>
                                    <a href="collection.html" class="text-accent text-sm">Elon Musk #709</a>
                                    <h3 class="font-display text-secondary-700 mb-1 text-base font-semibold dark:text-white">
                                        Lazyone Panda
                                    </h3>
                                    <div class="flex flex-wrap items-center">
                                        <span class="dark:text-secondary-300 text-secondary-500 mr-1 block text-sm">Creator Earnings: 5%</span>
                                        <span
                                            data-tippy-content="The creator of this collection will receive 5% of the sale total from future sales of this item."
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                class="dark:fill-secondary-300 fill-secondary-700 h-4 w-4"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path
                                                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div class="ml-auto">
                                    <span class="mb-1 flex items-center whitespace-nowrap">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xml:space="preserve"
                                                class="h-4 w-4"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                                                <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                                            </svg>
                                        </span>
                                        <span class="dark:text-secondary-100 text-sm font-medium tracking-tight">1.55 ETH</span>
                                    </span>
                                    <div class="dark:text-secondary-300 text-right text-sm">$130.82</div>
                                </div>
                            </div>

                            <div
                                class="dark:border-secondary-600 border-secondary-100 mb-2 flex items-center justify-between border-b py-2.5"
                            >
                                <span class="font-display text-secondary-700 font-semibold dark:text-white">Total</span>
                                <div class="ml-auto">
                                    <span class="flex items-center whitespace-nowrap">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xml:space="preserve"
                                                class="h-4 w-4"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                                                <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                                            </svg>
                                        </span>
                                        <span class="text-green font-medium tracking-tight">1.55 ETH</span>
                                    </span>
                                    <div class="dark:text-secondary-300 text-right">$130.82</div>
                                </div>
                            </div>

                            <div class="mt-4 flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="buyNowTerms"
                                    class="checked:bg-accent dark:bg-secondary-600 text-accent border-secondary-200 focus:ring-accent/20 dark:border-secondary-500 h-5 w-5 self-start rounded focus:ring-offset-0"
                                />
                                <label for="buyNowTerms" class="dark:text-secondary-200 text-sm"
                                >By checking this box, I agree to Xhibiter's <a href="#" class="text-accent">Terms of Service</a></label
                                >
                            </div>
                        </div>

                        <div class="modal-footer">
                            <div class="flex items-center justify-center space-x-4">
                                <button
                                    type="button"
                                    class="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                                >
                                    Confirm Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <footer class="dark:bg-secondary-900 page-footer bg-white">
                <div class="container">
                    <div class="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
                        <div class="col-span-3 md:col-span-4">
                            {/* <a href="index.html" class="mb-6 inline-block">
                                <img src="img/wallet/wallet/logo.png" class="max-h-7 dark:hidden" alt="Xhibiter | NFT Marketplace" />
                                <img src="img/wallet/wallet/logo_white.png" class="hidden max-h-7 dark:block" alt="Xhibiter | NFT Marketplace" />
                            </a> */}
                            <p class="dark:text-secondary-300 mb-12">
                                Create, sell and collect truly rare digital artworks. Powered by blockchain technology.
                            </p>
                            <div class="flex space-x-5">
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

                        <div class="col-span-full sm:col-span-3 md:col-span-2 md:col-start-7">
                            <h3 class="font-display text-secondary-700 mb-6 text-sm dark:text-white">Marketplace</h3>
                            <ul class="dark:text-secondary-300 flex flex-col space-y-1">
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">All NFTs</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Art</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Music</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Domain Names</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Collectibles</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Virtual World</a></li>
                            </ul>
                        </div>

                        <div class="col-span-full sm:col-span-3 md:col-span-2">
                            <h3 class="font-display text-secondary-700 mb-6 text-sm dark:text-white">Company</h3>
                            <ul class="dark:text-secondary-300 flex flex-col space-y-1">
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Explore</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">About</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Contact Us</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Our Blog</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">FAQ</a></li>
                            </ul>
                        </div>

                        <div class="col-span-full sm:col-span-3 md:col-span-2">
                            <h3 class="font-display text-secondary-700 mb-6 text-sm dark:text-white">My Account</h3>
                            <ul class="dark:text-secondary-300 flex flex-col space-y-1">
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Authors</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Collection</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Author Profile</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Create Item</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
                        <span class="dark:text-secondary-400 text-sm"
                        >&copy;<span id="year"></span>
                            Designed By:
                            <a href="https://fltngmmth.com" class="hover:text-accent dark:hover:text-white">Bresnow</a></span>
                        <ul class="dark:text-secondary-400 flex flex-wrap space-x-4 text-sm">
                            <li><a href="#" class="hover:text-accent dark:hover:text-white">Terms and conditions</a></li>
                            <li><a href="#" class="hover:text-accent dark:hover:text-white">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

            <script src="/js/app.bundle.js"></script>
        </div> 
    )
};
