<button
	on:click
	{...$$restProps}
	class={'bg-violet-400 py-2 px-4 rounded-md shadow-sm hover:cursor-pointer hover:shadow-xl text-white relative bottom-1' +
		$$restProps.class}
>
	<slot />
</button>
