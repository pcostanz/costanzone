interface Env {
  SCHEDULE_CACHE: KVNamespace;
}

export async function onRequest(context: EventContext<Env, string, unknown>) {
  try {
    const cachedData = await context.env.SCHEDULE_CACHE.get("schedule");

    if (!cachedData) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "No cached schedule available",
        }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    return new Response(cachedData, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300", // Cache for 5 minutes
      },
    });
  } catch (error) {
    console.error(
      "Error fetching schedule:",
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
