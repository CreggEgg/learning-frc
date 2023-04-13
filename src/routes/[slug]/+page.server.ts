import { getVideos } from "$lib/server/db";
import { error } from "@sveltejs/kit";
export async function load({ params, url }) {
	url.searchParams;
	let videos = await getVideos(params.slug);

	if (videos !== null && videos.length > 0) {
		console.log("videos", videos);
		return { videos, slug: params.slug };
	} else {
		error(404);

		return null;
	}

	return null;
}
