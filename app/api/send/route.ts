import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';



const sendEmail = async (name: string, email: string, message: string) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.GMAIL_EMAIL_ADDRESS,
    to: 'bartekkowalski465@gmail.com', // Replace with your own email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\Message: ${message}`,
  };
  await transporter.sendMail(mailOptions);
};

export async function POST(
  req: Request
  ) {
  if (req.method === 'POST') {
    const { name, email, phone } = await req.json();

    // Validate the form data (e.g., check if required fields are filled)

    // Send the email
    try {
      await sendEmail(name, email, phone);
      return NextResponse.json({ message: 'email sent succesfully' });
    } catch (error) {
      console.error(error);
      return new NextResponse('Internal Error', { status: 500 });
    }
  } else {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
