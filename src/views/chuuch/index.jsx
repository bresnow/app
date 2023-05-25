import HashRoute from "../../components/joy-jsx/hash-route"
import Audio from './components/audio';

// MUST Use JOY.route.page to add/remove events in the dom. 
// Otherwise Ui manipulation and data models can be run in JOY.route.page or in any component function



export default function () {
	const $class = "bg-gray-200 font-sans leading-normal tracking-normal"
	return (
		<HashRoute route={"home"} className={$class} >
			<Header />
			<Card/>
			{/* <LeadCard/> */}
		</HashRoute>
	)
};

export function Card() {
	gun.get('card').put({ imageSource: "/Logo/FMLOGO.svg"})
	return (
		<div name="card" class="flex flex-col justify-center items-center h-[100vh]">
			<div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
				<div class="h-full w-full">
					<div class="relative w-full">
						<iframe src="https://checkit.16score13.com">

						</iframe>
					</div>
					<div class="mb-3 flex items-center justify-between px-1 md:items-start">
						<div class="mb-2">
							<p class="text-lg font-bold text-navy-700"> Abstract Colors </p>
							<p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">By Esthera Jackson </p>
						</div>
						<div class="flex flex-row-reverse md:mt-2 lg:mt-0">
							<span class="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">+5</span><span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
								<img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png" alt="" />
							</span>
							<span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
								<img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png" alt="" />
							</span>
							<span class="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
								<img class="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png" alt="" />
							</span>
						</div>
					</div>
					<div class="flex items-center justify-between md:items-center lg:justify-between ">
						<div class="flex">
							<p class="!mb-0 text-sm font-bold text-brand-500">Current Bid: 0.91 <span>ETH</span></p>
						</div>
						<button href="" class="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">Place Bid</button>
					</div>
				</div>
			</div>
		</div>
	)

};
function TwoThirdColumn() {
	return (
		<div class="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
			<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
				<a href="#" class="flex flex-wrap no-underline hover:no-underline">
					<img src="https://source.unsplash.com/collection/325867/800x600" class="h-full w-full rounded-t pb-6" />
					<p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
					<div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
					<p class="text-gray-800 font-serif text-base px-6 mb-5">
						Lorem ipsum eu nunc commodo posuere et sit amet ligula.
					</p>
				</a>
			</div>
			<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
				<div class="flex items-center justify-between">
					<img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
					<p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
				</div>
			</div>
		</div>

	)
};
function HalfColumn({children}) {
	return (
		<div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
{children}
		</div>

	)

};
function AuthorSection(params) {
	return (
		<div class="flex w-full items-center font-sans p-8 md:p-24">
			<img class="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
			<div class="flex-1">
				<p class="text-base font-bold text-base md:text-xl leading-none">Ghostwind</p>
				<p class="text-gray-600 text-xs md:text-base">Theme by <a class="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="#">FltngMmth.com</a></p>
			</div>
			<div class="justify-end">
				<button class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read More</button>
			</div>
		</div>
	)
};
function FooterSection() {
	return (
		<footer class="bg-gray-900">
			<div class="container max-w-6xl mx-auto flex items-center px-2 py-8">

				<div class="w-full mx-auto flex flex-wrap items-center">
					<div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
						<a class="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" href="#">
							👻 <span class="text-base text-gray-200">Ghostwind CSS</span>
						</a>
					</div>
					<div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
						<ul class="list-reset flex justify-center flex-1 md:flex-none items-center">
							<li>
								<a class="inline-block py-2 px-3 text-white no-underline" href="#">Active</a>
							</li>
							<li>
								<a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>
							</li>
							<li>
								<a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>
							</li>
							<li>
								<a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>
							</li>
						</ul>
					</div>
				</div>



			</div>
		</footer>
	)
};
// Welcome to JoyJSX - the revolutionary Javascript UI Framework for building Reactive Progressive Web Apps!
function SubscribeSection() {
	return (
		<div class="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
			<h2 class="font-bold break-normal text-2xl md:text-4xl">Subscribe to Floating Mammoth</h2>
			<h3 class="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Get the latest posts delivered right to your inbox</h3>
			<div class="w-full text-center pt-4">
				<form action="#">
					<div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
						<input type="email" placeholder="youremail@example.com" class="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none" />
						<button type="submit" class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">Subscribe</button>
					</div>
				</form>
			</div>
		</div>
	)
}
function Header({src, children}) {
	return (
		<div class="w-full m-0 p-0 bg-cover bg-bottom" style={`background-image:url('${src ?? "/Logo/FMLOGO.svg"}'); height: 60vh; max-height:460px;`}>
{children}
		</div>
	)
}
function LeadCard() {
	return (
		<div class="flex h-full bg-white rounded overflow-hidden shadow-lg">
			<div class="flex flex-wrap no-underline hover:no-underline">
				<div class="w-full rounded-t">
					<img src="https://source.unsplash.com/collection/494263/800x600" class="h-full w-full shadow" />
				</div>

				<Audio src="/DarkHillDont.ogg" />
				<div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
				
				</div>

			</div>
		</div>
	)
}
function Nav(params) {
	return (
		<nav class="mt-0 w-full">
			<div class="container mx-auto flex items-center">

				<div class="flex w-1/2 pl-4 text-sm">
					<ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
						<li class="mr-2">
							<a class="inline-block py-2 px-2 text-white no-underline hover:underline" href="post.html">POST</a>
						</li>
						<li class="mr-2">
							<a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2" href="#">LINK</a>
						</li>
						<li class="mr-2">
							<a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2" href="#">LINK</a>
						</li>
						<li class="mr-2">
							<a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2" href="post_vue.html">POST_VUE</a>
						</li>
					</ul>
				</div>


				<div class="flex w-1/2 justify-end content-center">
					<a class="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" data-tippy-content="@twitter_handle" href="https://twitter.com/intent/tweet?url=#">
						<svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>
					</a>
					<a class="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" data-tippy-content="#facebook_id" href="https://www.facebook.com/sharer/sharer.php?u=#">
						<svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
					</a>
				</div>
			</div>
		</nav>
	)
}