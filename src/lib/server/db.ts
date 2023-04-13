import { createClient } from "@supabase/supabase-js";
import type SupabaseClient from "@supabase/supabase-js/dist/module/SupabaseClient";
import { env } from "$env/dynamic/private";

let client: SupabaseClient | null = null;

export function getClient() {
	if (client === null) {
		client = createClient(env.DB_URL!, env.DB_KEY!);
	}

	return client;
}

export async function getTestImage() {
	let dbClient = getClient();

	let { data } = await dbClient.storage
		.from("videos")
		.getPublicUrl("image.jpg");
	//.createSignedUrl("image.jpg", 60000);

	if (data === null) {
		return null;
	} else {
		return data?.publicUrl;
	}
}

export async function getVideos(id: string) {
	let dbClient = getClient();

	let { data: jsonUrl } = dbClient.storage
		.from("videos")
		.getPublicUrl(`${id}.json`);

	if (jsonUrl !== null) {
		let json = await (await fetch(jsonUrl.publicUrl)).json();
		if (json.statusCode === "404") {
			return [];
		}
		return json.map((video: object) => video as VideoData);
	}

	return [];
}

export async function getCourses() {
	let dbClient = getClient();

	let { data: jsonUrl } = dbClient.storage
		.from("videos")
		.getPublicUrl(`courses.json`);

	if (jsonUrl !== null) {
		let json = await (await fetch(jsonUrl.publicUrl)).json();
		if (json.statusCode === "404") {
			return [];
		}
		return json.map((course: object) => course as CourseData);
	}

	return [];
}

export type VideoData = {
	title: string;
	url: string;
	challengeurl: string;
};

export type CourseData = {
	title: string;
	id: string;
};
