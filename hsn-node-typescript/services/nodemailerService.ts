// Placeholder mail service. Replace with real nodemailer implementation.
export async function sendAccountActivationMail(payload: { email: string; [k: string]: any }, activationUrl: string): Promise<void> {
  console.log(`Sending activation mail to ${payload.email} with URL: ${activationUrl}`);
  // Implement actual email sending here.
}
