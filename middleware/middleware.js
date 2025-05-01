export async function middleware(req, res, next) {
  console.log("Middleware is running");
  next();
}