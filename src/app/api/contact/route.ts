import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `🚀 Portfolio Lead: ${name}`,
      text: `New message from ${name} (${email}): ${message}`,
      html: `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden; }
          .header { background-color: #121212; color: #e7b31f; padding: 20px; text-align: center; border-bottom: 4px solid #e7b31f; }
          .content { padding: 30px; background-color: #ffffff; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #666; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
          .value { font-size: 16px; color: #1a1a1a; margin-top: 5px; }
          .message-box { background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #e7b31f; font-style: italic; }
          .footer { background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #999; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Portfolio Inquiry</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Sender Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #e7b31f; text-decoration: none;">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">Message Content</div>
              <div class="message-box">
                ${message ? message.replace(/\n/g, "<br>") : "No message provided."}
              </div>
            </div>
          </div>
          <div class="footer">
            Sent from <strong>alex.sadzak.net</strong><br />
            Internal Notification System
          </div>
        </div>
      </body>
    </html>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
