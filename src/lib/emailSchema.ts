"use client"

import { z } from "zod"

const formSchema = z.object({
  email: z.string().email().min(2).max(100),
  message: z.string().min(1).max(1000)
})
