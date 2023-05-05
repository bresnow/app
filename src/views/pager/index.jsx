JOY.router.page("demo", () => {
  console.log('PAGER')
 })

export default function (params) {
    return (
        <div id="demo" class="section__ font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style="background-image:url('https://source.unsplash.com/1L71sPT5XKc');">
            <header>
                <nav class=" xl:flex w-full inline-block justify-between py-6 bg-gray-100 ">
                    <div class="">
                        <h2 class="xl:mr-10 text-center text-3xl font-bold text-gray-800 duration-500">
                            <a href="" class="ml-3">Oceans</a>
                        </h2>
                    </div>

                    <div class=" xl:flex items-center font-bold xl:ml-28 ml-0 inline-block ">
                        <a class="xl:ml-56 ml-0 text-sm hover:text-gray-500 py-2 px-4" href="">Home</a>
                        <a class="xl:ml-5 text-sm hover:text-gray-500 py-2 px-6" href="">Shop</a>
                        <a class="xl:ml-5 text-sm hover:text-gray-500 py-2 px-6" href="">Blog</a>
                        <a class="xl:ml-5 text-sm hover:text-gray-500 py-2 px-4" href="">Contact</a>
                    </div>
                    <div class="flex justify-center  xl:ml-64 ml-0">
                        <img src="img/img1.jpg" class="mr-4 w-6" alt=""/>
                            <img src="img/img1.jpg" class="mr-4 w-6" alt=""/>
                                <img src="img/img1.jpg" class="mr-4 w-6" alt=""/>
                                    <img src="img/img1.jpg" class="cart mr-4 w-5" alt=""/> <span id="count"></span>

                                    </div>
                                </nav>
                                <div class="mySlides fade mx-auto px-lg-5 px-sm-o space-y-6 my-20">
                                    <img src="img/img1.jpg"/>
                                </div>
                                <div class="mySlides fade  mx-auto px-lg-5 px-sm-o space-y-6 my-20">
                                    <img src="img/img1.jpg"/>
                                </div>



                                <div class="flex justify-center">
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                </div>

                            </header>
                            <div>
                                <h1 class="text-lg lg:text-3xl m-5 ml-14 mx-auto">The Newest Brand</h1>
                            </div>
                            <div class="flex flex-col lg:flex-row text-center py-6 px-10 space-y-4 lg:space-y-0 space-x-0 lg:space-x-2" >
                                <div class="shadow-lg w-1/5 rounded-lg">
                                    <img src="img/img1.jpg" class="p-14 w-full object-cover"/>
                                        <a class="underline">Spring Affair</a>
                                </div>
                                <div class="shadow-lg w-1/5 rounded-lg ">
                                    <img src="img/img1.jpg" class="p-14"/>
                                        <p class="underline">Le Cle</p>
                                </div>
                                <div class="shadow-lg w-1/5 rounded-lg">
                                    <img src="img/img1.jpg" class="p-14"/>
                                        <p class="mb-8 underline">10pm</p>

                                </div>
                                <div class="shadow-lg w-1/5 rounded-lg">
                                    <img src="img/img1.jpg" class="p-14"/>
                                        <p class="underline">Haze of Monk</p>

                                </div>
                                <div class="shadow-lg w-1/5 rounded-lg">
                                    <img src="img/img1.jpg" class="p-14"/>
                                        <p class="underline">Wayt</p>

                                </div>
                            </div>

                            <div>
                                <h1 class="text-lg lg:text-3xl m-5 ml-14 mx-auto">Editor's Picks</h1>
                            </div>
                            <div class="flex flex-col lg:flex-row py-6 px-10 space-y-4 lg:space-y-0 space-x-0 lg:space-x-2">
                                <div class="flex w-full max-w-none lg:max-w-md bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-110">
                                    <div class="w-1/3 bg-cover">
                                        <img src="img/img1.jpg"/>
                                    </div>
                                    <div class="w-2/3 p-4">
                                        <h1 class="text-gray-900 font-bold text-2xl">Dress</h1>
                                        <p class="mt-2 text-gray-600 text-sm">VIA DELL\'AMORE DRESS</p>
                                        <p class="mt-2 text-gray-600 text-sm">Ayera Studio</p>
                                        <div class="flex item-center mt-10">
                                        </div>
                                        <div class="flex item-center justify-between">
                                            <h1 class="text-gray-700 font-bold text-xl">$220</h1>
                                            <span></span>
                                            <button id="basketButton" class="px-2 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-yellow-600 transition-colors duration-300">Add to Basket</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-full max-w-none lg:max-w-md bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-110">
                                    <div class="w-1/3 bg-cover">
                                        <img src="img/img1.jpg"/>
                                    </div>
                                    <div class="w-2/3 p-4">
                                        <h1 class="text-gray-900 font-bold text-2xl">Jacket</h1>
                                        <p class="mt-2 text-gray-600 text-sm">DI PROJECT</p>
                                        <p class="mt-2 text-gray-600 text-sm">Talia</p>
                                        <div class="flex item-center mt-10">
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <h1 class="text-gray-700 font-bold text-xl">$300</h1>
                                            <span></span>
                                            <button id="basketButton" class="px-2 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-red-500 transition-colors duration-300">Add to Basket</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-full max-w-none lg:max-w-md bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-110">
                                    <div class="w-1/3 bg-cover">
                                        <img src="img/img1.jpg"/>
                                    </div>
                                    <div class="w-2/3 p-4">
                                        <h1 class="text-gray-900 font-bold text-2xl">Dress</h1>
                                        <p class="mt-2 text-gray-600 text-sm">SPRING AFFAIR</p>
                                        <p class="mt-2 text-gray-600 text-sm">Kelly</p>
                                        <div class="flex item-center mt-10">
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <h1 class="text-gray-700 font-bold text-xl">$100</h1>
                                            <span></span>
                                            <button id="basketButton" class="px-2 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-black transition-colors duration-300">Add to Basket</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-full max-w-none lg:max-w-md bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-110">
                                    <div class="w-1/3 bg-cover">
                                        <img src="img/img1.jpg"/>
                                    </div>
                                    <div class="w-2/3 p-4">
                                        <h1 class="text-gray-900 font-bold text-2xl">Jewelry</h1>
                                        <p class="mt-2 text-gray-600 text-sm">LIRI</p>
                                        <p class="mt-2 text-gray-600 text-sm">Mookee Crossbody Bag</p>
                                        <div class="flex item-center mt-10">
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <h1 class="text-gray-700 font-bold text-xl">$300</h1>
                                            <span></span>
                                            <button id="basketButton" class="px-2 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-300 transition-colors duration-300">Add to Basket</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 class="text-lg lg:text-3xl m-5 ml-14 mx-auto">Men Collection</h1>
                            </div>
                            <div class="flex flex-col lg:flex-row py-6 px-10 space-y-4 lg:space-y-0 space-x-0 lg:space-x-2">
                                <div class="flex w-full max-w-none lg:max-w-md bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-110">
                                    <div class="w-1/3 bg-cover object-cover">
                                        <img src="img/img1.jpg"/>
                                    </div>
                                    <div class="w-2/3 p-4">
                                        <h1 class="text-gray-900 font-bold text-2xl">T-shirts</h1>
                                        <p class="mt-2 text-gray-600 text-sm">UNDER ARMOUR</p>
                                        <div class="flex item-center mt-10">
                                        </div>
                                        <div class="flex item-center justify-between">
                                            <h1 class="text-gray-700 font-bold text-xl">$100</h1>
                                            <span></span>
                                            <button id="basketButton" class="px-2 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-yellow-600 transition-colors duration-300">Add to Basket</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-full max-w-none lg:max-w-md bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-110">
                                    <div class="w-1/3 bg-cover object-cover">
                                        <img src="img/img1.jpg"/>
                                    </div>
                                    <div class="w-2/3 p-4">
                                        <h1 class="text-gray-900 font-bold text-2xl">T-shirts</h1>
                                        <p class="mt-2 text-gray-600 text-sm">UNDER ARMOUR</p>
                                        <div class="flex item-center mt-10">
                                        </div>
                                        <div class="flex item-center justify-between">
                                            <h1 class="text-gray-700 font-bold text-xl">$100</h1>
                                            <span></span>
                                            <button id="basketButton" class="px-2 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-yellow-600 transition-colors duration-300">Add to Basket</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-full max-w-none lg:max-w-md bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-110">
                                    <div class="w-1/3 bg-cover object-cover">
                                        <img src="img/img1.jpg"/>
                                    </div>
                                    <div class="w-2/3 p-4">
                                        <h1 class="text-gray-900 font-bold text-2xl">T-shirts</h1>
                                        <p class="mt-2 text-gray-600 text-sm">UNDER ARMOUR</p>
                                        <div class="flex item-center mt-10">
                                        </div>
                                        <div class="flex item-center justify-between">
                                            <h1 class="text-gray-700 font-bold text-xl">$100</h1>
                                            <span></span>
                                            <button id="basketButton" class="px-2 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-yellow-600 transition-colors duration-300">Add to Basket</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-full max-w-none lg:max-w-md bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-110">
                                    <div class="w-1/3 bg-cover object-cover">
                                        <img src="img/img1.jpg"/>
                                    </div>
                                    <div class="w-2/3 p-4">
                                        <h1 class="text-gray-900 font-bold text-2xl">T-shirts</h1>
                                        <p class="mt-2 text-gray-600 text-sm">UNDER ARMOUR</p>
                                        <div class="flex item-center mt-10">
                                        </div>
                                        <div class="flex item-center justify-between">
                                            <h1 class="text-gray-700 font-bold text-xl">$100</h1>
                                            <span></span>
                                            <button id="basketButton" class="px-2 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-yellow-600 transition-colors duration-300">Add to Basket</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="select">

                            </div>


        </div>
    )
};
