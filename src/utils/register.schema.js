// schemas/register.schema.js

import { z } from "zod"

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(
        3,
        "Name must be at least 3 characters"
      ),

    phone_number: z
      .string()
      .min(
        10,
        "Phone number must be at least 10 digits"
      ),

    email: z
      .string()
      .email("Enter valid email"),

    password: z
      .string()
      .min(
        6,
        "Password must be at least 6 characters"
      ),

    password_confirmation:
      z.string(),
  })

  .refine(
    (data) =>
      data.password ===
      data.password_confirmation,
    {
      message:
        "Passwords do not match",

      path: [
        "password_confirmation",
      ],
    }
  )



export const loginSchema =
  z.object({
    email: z
      .string()
      .email(
        "Please enter a valid email"
      ),

    password: z
      .string()
      .min(
        6,
        "Password must be at least 6 characters"
      ),
  })



export const forgetPasswordSchema =
  z.object({
    phone_number: z
      .string()
      .min(
        10,
        "Phone number must be at least 10 digits"
      ),
  })