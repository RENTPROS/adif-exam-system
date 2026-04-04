# Cloudflare API Custom GPT Action (Implementation Notes)

This guide captures a practical implementation flow for wiring Cloudflare DNS operations into a custom GPT action through a Worker-based MCP-style service.

## Prerequisites

1. Cloudflare account (free tier is sufficient for development).
2. Node.js v18+.
3. ChatGPT Plus/Team with access to GPT app/action configuration.
4. JavaScript/TypeScript familiarity.
5. Git (recommended).

## 1) Create a Worker project

```bash
npm create cloudflare@latest -- cloudflare-mcp-server
cd cloudflare-mcp-server
```

Recommended scaffold choices:
- Starter: **Hello World example**
- Template: **Worker only**
- Language: **TypeScript** (recommended)
- Git: **Yes**
- Deploy now: **No**

## 2) Install dependencies

```bash
npm install @modelcontextprotocol/sdk zod
```

> Note: `openai` is optional unless your Worker also calls OpenAI APIs directly.

## 3) MCP server code (example)

Use a server with tools for reading and creating DNS records. The two key operations are:
- Resolve zone by domain name.
- Call DNS records endpoints with a bearer token.

Make sure the implementation validates:
- Missing/empty `result` for zone lookups.
- API errors (`success: false`).
- Type-specific payload requirements (for example, MX records need priority).

## 4) Create Cloudflare API token

In Cloudflare Dashboard:
- **My Profile → API Tokens → Create Token**
- Grant minimum required scopes:
  - Zone DNS: Edit
  - Zone Zone: Read (for zone lookup)
- Restrict zone resources to only needed zones.

## 5) Add secret in Wrangler

```bash
npx wrangler secret put CLOUDFLARE_API_TOKEN
```

## 6) Deploy Worker

```bash
npx wrangler deploy
```

## 7) Configure ChatGPT custom action/app

In ChatGPT app/action settings:
- Set the base URL to your Worker deployment URL.
- Configure authentication as required by your endpoint.
- Define actions matching your exposed operations:
  - `get_dns_records`
  - `create_dns_record`

## 8) Test prompts

- “Get DNS records for example.com.”
- “Create an A record for app.example.com pointing to 1.2.3.4.”

## Security checklist

- Never hardcode Cloudflare tokens in source.
- Use Worker secrets for credentials.
- Scope tokens narrowly by permissions and zones.
- Log and surface Cloudflare API failures clearly.
- Add input validation for record names/types/content.

## Troubleshooting quick hits

- **401/403 from Cloudflare:** token scope or wrong account/zone scope.
- **Zone not found:** domain mismatch or token has no access to zone.
- **Action not visible in ChatGPT:** check endpoint URL, schema, and auth config.
- **Record creation fails for MX/TXT:** payload fields may require type-specific formatting.
