import { Experience } from "../typings";

export const fetchExperiences = async () => {
    const res = await fetch('http://127.0.0.1:3000/api/getExperience')
    const data = await res.json();
    const experiences: Experience[] = data.experiences

    return experiences;
}