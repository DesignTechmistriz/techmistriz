export async function POST() {
  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
}

export async function GET() {
  return new Response("API WORKING", { status: 200 });
}
