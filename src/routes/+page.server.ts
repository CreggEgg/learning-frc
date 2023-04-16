import { getCourses } from "$lib/server/db";
import { error } from "@sveltejs/kit";
export async function load() {
	let courses = await getCourses();

	if (courses !== null && courses.length > 0) {
		return { courses };
	} else {
		throw error(404);

		//return { courses: null };
	}
}
