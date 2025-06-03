export async function onRequest(context, next) {
  const response = await next();

  // Remove server identification headers
  response.headers.delete("X-Powered-By");
  response.headers.delete("Server");

  // Add security headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  return response;
}
