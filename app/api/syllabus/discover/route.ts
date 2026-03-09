import { triggerOfficialDiscovery } from "@/lib/discovery";
import { Term } from "@/lib/types";

export async function POST(request: Request) {
  const body = (await request.json()) as { className: string; subject: string; term: Term };
  const discovered = await triggerOfficialDiscovery(body);
  return Response.json(discovered, { status: 202 });
}
