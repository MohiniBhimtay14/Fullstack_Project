import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/Apiresponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponse>{
    try {   
        await resend.emails.send({
            from: 'you@example.com',
            to: email,
            subject: 'Mystry message | Verification code',
            react:VerificationEmail({
                username,otp: verifyCode,
          }),
        });
         return {
            success: false,
            message: "Error sending verification email",
        };
}catch (error) {
        console.error("Error sending verification email", Error);
        return {
            success: false,
            message: "Error sending verification email",
        };
    }
}


