import axios from 'axios';

// Function to fetch bar chart data for daily traffic
// export const fetchBarChartDataDailyTraffic = async (period) => {
//   try {
//     const response = await axios.get('data.json');
//     return response.data[period];
//   } catch (error) {
//     console.error('Error fetching bar chart data for daily traffic:', error);
//     throw error;
//   }
// };

export const fetchBarChartDataDailyTraffic = async (period) => {
  try {
    const response = await axios.post("https://jobpartal-backend.onrender.com/api/Industry/Graphics", {
      Name: "c2VsZWN0IENvdW50KCopIGNvdW50cyxJbmR1c3RyeSxPcmdhbml6YXRpb25UeXBlIGZyb20gRW1wbG95ZXJNYXN0ZXIKZ3JvdXAgYnkgSW5kdXN0cnksT3JnYW5pemF0aW9uVHlwZQ=="
    });
    return response.data.Response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchBarChartCandidateGraphics = async (period) => {
  try {
    const response = await axios.post("https://jobpartal-backend.onrender.com/api/Candidate/Graphics", {
      Name: "c2VsZWN0IEN1cnJlbnRMb2NhdGlvbixDb3VudCgqKSBjb3VudHMsR2VuZGVyIGZyb20gVXNlck1hc3RlciAKZ3JvdXAgYnkgQ3VycmVudExvY2F0aW9uLEdlbmRlcg=="
    });
    return response.data.Response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchBarChartCandidateGraphicsDetail = async () => {
  try {
    const response = await axios.post("https://jobpartal-backend.onrender.com/api/Candidate/Graphics/Detail", {
      Name: "c2VsZWN0IENPVU5UKCopIENvdW50cyxBZ2VHcm91cCBUeXBlLCAnQWdlR3JvdXAnIENvdW50Rm9yICBmcm9tICgKc2VsZWN0IENhc2Ugd2hlbiBBZ2VZZWFycyBiZXR3ZWVuIDE4IGFuZCAyNSB0aGVuICcxOC0yNScKd2hlbiAgQWdlWWVhcnMgYmV0d2VlbiAyNSBhbmQgMzAgdGhlbiAnMjUtMzAnCndoZW4gIEFnZVllYXJzIGJldHdlZW4gMzAgYW5kIDM1IHRoZW4gJzMwLTM1JwplbHNlICczNSsnIGVuZCBBZ2VHcm91cCBmcm9tICgKU0VMRUNUIENPTlZFUlQoaW50LFJPVU5EKERBVEVESUZGKGhvdXIsRE9CLEdFVERBVEUoKSkvODc2Ni4wLDApKSBBUyBBZ2VZZWFycyAKZnJvbSBVc2VyTWFzdGVyIGdyb3VwIGJ5IENPTlZFUlQoaW50LFJPVU5EKERBVEVESUZGKGhvdXIsRE9CLEdFVERBVEUoKSkvODc2Ni4wLDApKSkgdCkgdDIKZ3JvdXAgYnkgQWdlR3JvdXAKdW5pb24Kc2VsZWN0IGNvdW50KCopIENvdW50cyxpc251bGwoR2VuZGVyLCdPdGhlcicpIFR5cGUsICdHZW5kZXInIENvdW50Rm9yICBmcm9tIFVzZXJNYXN0ZXIgCmdyb3VwIGJ5IEdlbmRlcgp1bmlvbgpzZWxlY3QgY291bnQoKikgQ291bnRzLGlzbnVsbChDdXJyZW50TG9jYXRpb24sJ0luZGlhJykgVHlwZSwgJ0xvY2F0aW9uJyBDb3VudEZvciBmcm9tIFVzZXJNYXN0ZXIgCmdyb3VwIGJ5IEN1cnJlbnRMb2NhdGlvbgp1bmlvbgpzZWxlY3QgY291bnQoKikgQ291bnRzLGlzbnVsbChlZC5OYW1lLCcxMHRoJykgVHlwZSAsJ0hpZ2hlclF1YWxpZmljYXRpb24nIENvdW50Rm9yIGZyb20gVXNlck1hc3RlciB1CmxlZnQgb3V0ZXIgam9pbiBNYXN0ZXJFZHVjYXRpb24gZWQgb24gZWQuSWQ9dS5IaWdoZXJRdWFsaWZpY2F0aW9uCmdyb3VwIGJ5IGVkLk5hbWU="
    });
    return response.data.Response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};



// Function to fetch bar chart options for daily traffic
// export const fetchBarChartOptionsDailyTraffic = async () => {
//   try {
//     const response = await axios.get('data.json');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching bar chart options for daily traffic:', error);
//     throw error;
//   }
// };



export const fetchWeeklyJobs = async (period) => {
  try {
    const response = await axios.get('Weekly.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching bar chart data for daily traffic:', error);
    throw error;
  }
};