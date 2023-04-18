<script lang="ts">
	import Button, { Label } from "@smui/button";
	import Card, {
		Content,
		PrimaryAction,
		Media,
		MediaContent,
		Actions,
		ActionButtons,
		ActionIcons,
	} from "@smui/card";
	import IconButton, { Icon } from "@smui/icon-button";
	import type { CourseData } from "$lib/types";
	export let data: { courses: CourseData[] };
</script>

<main>
	<div class="banner">
		<h1>Welcome to the Earthquakers 9094 FRC Learning Website</h1>
	</div>
	<div class="content">
		<h2>Get Started</h2>
		{#each data.courses as course}
			<!-- <a style="margin-bottom: 2vh;" href="/{course.id}?index=0"
				><Button style="width: 100%;" variant="raised">
					{course.title}
				</Button></a
			> -->
			<Card>
				<Media
					style="background-image: url({course.image}); width: 100%;"
					aspectRatio="16x9"
				/>
				<Content class="mdc-typography--body2" style="width: 40vw;">
					<h2 class="mdc-typography--headline6" style="margin: 0; ">
						{course.topic}
					</h2>

					{course.description}
				</Content>

				<Actions>
					<ActionButtons>
						<a href="/{course.id}?index=0">
							<Button variant="raised">
								<Label>Learn</Label>
							</Button>
						</a>
					</ActionButtons>
				</Actions>
			</Card>
		{/each}
	</div>
</main>

<style>
	main {
		display: flex;

		justify-content: center;

		flex-direction: column;
		margin: none;
		background-image: url("/images/banner.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		color: white;
	}
	.banner {
		display: flex;
		padding-top: 10vh;
		padding-bottom: 10vh;
		align-items: center;
		justify-content: center;
	}

	.content {
		background-color: white;
		color: black;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	a {
		text-decoration: none;
	}

	* :global(.card-media-16x9) {
		background-image: url(https://placehold.co/320x180?text=16x9);
	}
</style>
