<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import type { VideoData } from "$lib/types";

	import Button from "@smui/button";

	export let data: { videos: VideoData[]; slug: string } | null;
	let selectedVideo: VideoData | undefined;

	let indexParam: string | null = $page.url.searchParams.get("index");

	let index = 0;
	$: if (
		data !== null &&
		data.videos !== null &&
		data.videos !== undefined &&
		Object.keys(data).length > 0
	) {
		selectedVideo = data.videos[index];
	}

	if (indexParam !== null) {
		index = parseInt(indexParam);
	}
</script>

<main>
	{#if data !== null && Object.keys(data).length > 0}
		<div class="videolist">
			{#each data.videos as video, i}
				<div class="videolink">
					<a
						href={`/${data.slug}?index=${i}`}
						on:click={() => {
							index = i;
						}}
						><Button style="width: 100%;" class="videobutton" variant="raised">
							{i + 1} {video.title}</Button
						></a
					>
				</div>
			{/each}
		</div>
		{#if index !== undefined && selectedVideo !== undefined && index !== null && selectedVideo !== null}
			<div class="videopanel">
				<div class="video">
					<iframe
						src={selectedVideo.url}
						title={selectedVideo.title}
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					/>
				</div>

				{#each selectedVideo.challenges as challenge}
					<a href={challenge.url} target="_blank"
						><Button style="width: 100%;" class="videobutton" variant="raised">
							{challenge.callToAction}!
						</Button></a
					>
				{/each}
			</div>
		{/if}
	{:else}
		<h1>This video series does not exist</h1>
	{/if}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: [start] 20% [view] auto;
		gap: 8px;
		height: 100vh;
	}
	iframe {
		aspect-ratio: 1920 / 1080;
		width: 100%;
		border-radius: 25px;
	}

	.videolist {
		overflow-y: scroll;
		overflow-x: hidden;
		height: 100%;
	}

	.videolink {
		text-align: center;
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
		border-radius: 10px;
		margin: 5%;
		margin-right: 5%;
	}
	a {
		text-decoration: none;
		color: white;
	}

	.videopanel {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 3vh;
	}
	.video {
		width: 90%;
	}
</style>
