<script>
	import { page } from '$app/stores';
</script>

<header class="bg-violet-400 shadow-lg mb-5 w-full">
	<h1 class="text-6xl font-bold text-white p-4 m-3 absolute">GoodLedger</h1>
	<div class="flex justify-center font-poppins text-3xl">
		<nav>
			<!--
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/home'}>
				<a href="/home">Home</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
        -->
			<ul class="flex justify-center gap-x-28">
				<li
					class="mx-6 mt-10 mb-9 bg-violet-200 rounded-3xl shadow-sm hover:cursor-pointer hover:shadow-lg px-4 py-2 w-40 text-center"
					aria-current={$page.url.pathname === '/'}
				>
					<a href="/">data</a>
				</li>
				<li
					class="mx-6 mt-10 mb-9 bg-violet-200 rounded-3xl shadow-sm hover:cursor-pointer hover:shadow-lg px-4 py-2 w-40 text-center"
					aria-current={$page.url.pathname === '/about'}
				>
					<a href="/about">about</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
