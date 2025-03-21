import { generateSimpleUUID } from "./generateUUID";

const API_URL = "https://empllo.com/api/v1";

export const fetchJobs = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }
    const jobs = await response.json();

    return jobs.map((job: any) => ({
      ...job,
      id: generateSimpleUUID(),
    }));
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};
