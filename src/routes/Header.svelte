<script>
	import { page } from '$app/stores';
	let showMenu = false;
</script>

<header class="bg-gradient-to-l from-rose-400 to-violet-400 shadow-lg w-full sticky inset-0 z-30">
	<a href="/" class="font-limelight text-4xl sm:text-5xl font-bold text-white p-2 m-3 absolute"
		>OpenBook</a
	>
	<div class="flex justify-end text-2xl mx-10">
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
			<ul class="sm:flex gap-x-10 hidden">
				<li
					class=" mt-8 mb-7 text-white hover:text-opacity-50"
					aria-current={$page.url.pathname === '/'}
				>
					<a href="/">home</a>
				</li>
				<li
					class="mt-8 mb-7 text-white hover:text-opacity-50"
					aria-current={$page.url.pathname === '/about'}
				>
					<a href="/about">about</a>
				</li>
				<li
					class=" mt-8 mb-7 text-white hover:text-opacity-50"
					aria-current={$page.url.pathname === '/donations'}
				>
					<a href="/donations">add</a>
				</li>
			</ul>
			<div class="flex mt-5 mb-4 sm:hidden hover:cursor-pointer" on:click={() => (showMenu = true)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="white"
					class="w-10 h-10 relative left-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</div>
			{#if showMenu}
				<div class="fixed top-0 left-0 w-full h-full bg-violet-400 z-30">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="white"
						class="w-12 h-12 fixed top-5 right-5 hover:cursor-pointer"
						on:click={() => (showMenu = false)}
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>

					<div class="flex flex-col justify-center items-center h-full text-center">
						<ul class="flex flex-col gap-y-10">
							<li
								class="text-3xl text-white hover:text-opacity-50"
								aria-current={$page.url.pathname === '/'}
								on:click={() => (showMenu = false)}
							>
								<a href="/">home</a>
							</li>
							<li
								class="text-3xl text-white hover:text-opacity-50"
								aria-current={$page.url.pathname === '/about'}
								on:click={() => (showMenu = false)}
							>
								<a href="/about">about</a>
							</li>
							<li
								class="text-3xl text-white hover:text-opacity-50"
								aria-current={$page.url.pathname === '/donations'}
								on:click={() => (showMenu = false)}
							>
								<a href="/donations">add</a>
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</nav>
	</div>
</header>
