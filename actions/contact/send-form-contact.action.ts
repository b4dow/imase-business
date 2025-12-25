"use server";
import { EmailTemplate } from "@/components";
import { Resend } from "resend";

interface Props {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

export const SendFormContactAction = async ({
  name,
  email,
  subject,
  phone,
  message,
}: Props) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const resend_email = process.env.RESEND_EMAIL;
  console.log({ name, email, subject, phone, message });
  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <${email}>`,
      to: [`${resend_email}`],
      subject: `${subject}`,
      react: EmailTemplate({ name, email, phone, message }),
    });

    if (error)
      return {
        ok: false,
      };

    return {
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message:
        "No hubo conexión con la respuesta a la información de contacto.",
    };
  }
};
