import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { generateSimpleUUID } from "../utils/generateUUID";

export interface Job {
  id: string;
  title: string;
  company?: string;
  location?: string;
  description?: string;
  salary?: string;
  jobType?: string;
  companyName?: string;
  mainCategory?: string;
  expiryDate?: string;
}

export const useFetchJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        console.log("Fetching jobs...");  

        const response = await fetch("https://empllo.com/api/v1"); // Modified URL
        if (!response.ok) throw new Error("Failed to fetch jobs");

        const data = await response.json();
        console.log("Jobs fetched:", data.jobs); // use data.jobs not data.

        // Map the API response to your Job interface
        const jobsArray = Array.isArray(data.jobs) ? data.jobs : []; //use data.jobs not data.

        const formattedJobs = jobsArray.map((job: any) => ({
          id: job.id || generateSimpleUUID(),
          title: job.title || "No Title",
          company: job.companyName || job.company || "Unknown Company",
          location:
            job.locations?.join(", ") ||
            job.location ||
            "Location not specified",
          description: job.description || "No description available",
          salary: job.maxSalary
            ? `$${job.minSalary} - $${job.maxSalary}`
            : "Salary not specified",
          jobType: job.jobType || "Not specified",
        }));

        setJobs(formattedJobs);
      } catch (err: any) {
        console.error("Fetch error:", err.message);
        setError(err.message);
        Alert.alert("Error", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return { jobs, loading, error };
};
