import { Job } from "../hooks/useFetchJobs";

export type RootStackParamList = {
  'Job Finder': undefined;
  'Saved Jobs': undefined;
  'ApplicationForm': {
    job: Job;
    fromSavedJobs: boolean;
  };
};