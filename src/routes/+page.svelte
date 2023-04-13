<script>
	import Button from "@smui/button";

	export let data;
</script>

<main>
	<div class="banner">
		<h1>Welcome to the Earthquakers 9094 FRC Learning Website</h1>
	</div>
	<div class="content">
		<h2>Get Started</h2>
		{#each data.courses as course}
			<a style="margin-bottom: 2vh;" href="/{course.id}?index=0"
				><Button style="width: 100%;" variant="raised">
					{course.title}
				</Button></a
			>
		{/each}
	</div>
</main>

<style>
	main {
		display: flex;

		justify-content: center;

		flex-direction: column;
		margin: none;
		background-image: url("https://media.discordapp.net/attachments/1044080898905231430/1096184886315991152/banner.jpg?width=1014&height=676");
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
</style>
