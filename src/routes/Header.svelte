<script>
	import { page } from '$app/stores';
</script>

<header class="bg-violet-400 shadow-lg w-full sticky inset-0">
	<h1 class="text-5xl font-bold text-white p-2 m-3 absolute">GoodLedger</h1>
	<div class="flex justify-center text-2xl">
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
			<ul class="flex justify-center gap-x-12">
				<li
					class="mt-8 mb-7 text-violet-50 text-center hover:text-opacity-50"
					aria-current={$page.url.pathname === '/'}
				>
					<a href="/">home</a>
				</li>
				<li class=" mt-8 mb-7 text-violet-50">|</li>
				<li
					class=" mt-8 mb-7 text-violet-50 text-center hover:text-opacity-50"
					aria-current={$page.url.pathname === '/about'}
				>
					<a href="/about">about</a>
				</li>
				<li class=" mt-8 mb-7 text-violet-50">|</li>
				<li
					class=" mt-8 mb-7 text-violet-50 text-center hover:text-opacity-50"
					aria-current={$page.url.pathname === '/donations'}
				>
					<a href="/donations">add</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
