import { z } from "zod";

export type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message?: string;
};

export const FormSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().optional(),
});
