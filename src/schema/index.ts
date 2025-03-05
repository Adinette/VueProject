import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Email is invalid."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});
