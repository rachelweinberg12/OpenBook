<button
	{...$$restProps}
	class={'bg-violet-400 py-2 px-3 rounded-md shadow-sm hover:cursor-pointer hover:shadow-xl text-white relative bottom-1' +
		$$restProps.class}
	on:click|preventDefault
>
	<slot />
</button>
