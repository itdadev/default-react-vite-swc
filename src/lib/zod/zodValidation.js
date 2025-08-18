import { z } from "zod";

export const loginSchema = z.object({
  user_id: z.string().min(1, { message: "아이디를 입력해주세요." }),
  user_pw: z.string().min(1, { message: "비밀번호를 입력해주세요." }),
});

export const resetPasswordSchema = z.object({
  user_id: z.string().min(1, { message: "아이디를 입력해주세요." }),
});

