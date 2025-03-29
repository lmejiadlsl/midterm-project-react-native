import React, { createContext, useState, useContext } from 'react';
import { Job } from '../hooks/useFetchJobs';

type SavedJobsContextType = {
  savedJobs: Job[];
  addSavedJob: (job: Job) => void;
  removeSavedJob: (jobId: string) => void;
};

const SavedJobsContext = createContext<SavedJobsContextType>({
  savedJobs: [],
  addSavedJob: () => {},
  removeSavedJob: () => {},
});

export const SavedJobsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  const addSavedJob = (job: Job) => {
    setSavedJobs(current => 
      current.some(savedJob => savedJob.id === job.id) 
        ? current 
        : [...current, job]
    );
  };

  const removeSavedJob = (jobId: string) => {
    setSavedJobs(current => current.filter(job => job.id !== jobId));
  };

  return (
    <SavedJobsContext.Provider value={{ savedJobs, addSavedJob, removeSavedJob }}>
      {children}
    </SavedJobsContext.Provider>
  );
};

export const useSavedJobs = () => useContext(SavedJobsContext);