import { component$ } from "@builder.io/qwik";
// import { routeLoader$ } from '@builder.io/qwik-city';

// interface ScheduleData {
//   data: string;
//   timestamp: string;
// }

// export const useSchedule = routeLoader$(async ({ url }) => {
//   console.log('useSchedule')
//   try {
//     // During SSG, we need to use an absolute URL
//     const baseUrl = process.env.NODE_ENV === 'production'
//       ? 'https://costanzone.com'  // Replace with your actual production URL
//       : url.origin;
//     const response = await fetch(`${baseUrl}/api/get-schedule`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch schedule');
//     }
//     const data = await response.json() as ScheduleData;
//     return data;
//   } catch (error) {
//     console.error('Error fetching schedule:', error);
//     return null;
//   }
// });

export default component$(() => {
  // const schedule = useSchedule();

  // if (!schedule.value) {
  //   return <div>Loading schedule...</div>;
  // }

  return (
    <div>
      <h1>Pilates Schedule</h1>
      {/* <div>Last updated: {new Date(schedule.value.timestamp).toLocaleString()}</div> */}
      {/* <div dangerouslySetInnerHTML={schedule.value.data} /> */}
    </div>
  );
});
