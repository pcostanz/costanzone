interface Env {
  SCHEDULE_CACHE: KVNamespace;
}

export async function onRequest(context: EventContext<Env, string, unknown>) {
  // Optional: Add authentication to prevent unauthorized updates
  // const authHeader = context.request.headers.get('Authorization');
  // if (authHeader !== `Bearer ${context.env.API_KEY}`) {
  //   return new Response('Unauthorized', { status: 401 });
  // }

  try {
    // Fetch the schedule from the external API
    const response = await fetch(
      "https://ritualmoves.marianatek.com/api/customer/v1/classes?min_start_date=2025-06-11&max_start_date=2025-06-11&page_size=500&location=48718&region=48542",
    );
    const scheduleData = await response.text();

    // Store in KV with a timestamp
    const cacheData = {
      data: scheduleData,
      timestamp: new Date().toISOString(),
    };

    await context.env.SCHEDULE_CACHE.put("schedule", JSON.stringify(cacheData));

    return new Response(
      JSON.stringify({ success: true, timestamp: cacheData.timestamp }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error(
      "Failed to update schedule cache:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
