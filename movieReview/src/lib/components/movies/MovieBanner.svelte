<script lang="ts">
	import type { Movie, Review } from '$lib/types/movies';

	const { backdrop,title }: { backdrop: string|undefined,title:string
     } = $props();

</script>

<div class="pointer-events-none relative h-[600px] w-full">
	<div class="absolute inset-0">
		<img src={backdrop} alt={title} class="h-full w-full object-cover" />
		<div
			class="from-background via-background/30 absolute inset-0 bg-gradient-to-t to-transparent"
		></div>
		<div
			class="from-background  via-background/30 absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r to-transparent"
		></div>
		<div
			class="from-background  via-background/30 absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l to-transparent"
		></div>
		<div
			class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_100%,_#09090b_100%)]"
		></div>
	</div>
</div>

