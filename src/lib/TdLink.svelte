<script lang="ts">
	export let url: string;
</script>

<td
	{...$$restProps}
	class="hover:underline hidden lg:table-cell max-w-xs min-w-full text-left px-6 truncate overflow-hidden ..."
>
	<a href={url}><slot /></a></td
>
