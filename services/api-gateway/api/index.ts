let appHandler: any = null;

export default async function handler(req: any, res: any) {
  try {
    if (!appHandler) {
      const mod = await import("../dist/app.js");
      appHandler = mod.default || mod.app || mod;
    }
    return appHandler(req, res);
  } catch (err: any) {
    console.error("Vercel Serverless Function Crash:", err);
    return res.status(500).json({
      error: "Vercel Function Error",
      name: err?.name,
      message: err?.message,
      stack: err?.stack,
    });
  }
}
