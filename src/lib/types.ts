export type VideoData = {
	title: string;
	url: string;
	challenges: Challenge[];
};

export type Challenge = {
	callToAction: string;
	url: string;
};

export type CourseData = {
	title: string;
	id: string;
};
