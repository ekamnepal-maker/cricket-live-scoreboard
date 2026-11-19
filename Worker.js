

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const apiUrl = "https://api.cricketdata.org/";

    return new Response(
      JSON.stringify({
        message: "Cricket API backend ready",
        status: "Please configure API endpoint"
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
};
