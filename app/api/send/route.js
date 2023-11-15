// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "Arlind <support@arlind-isa.de>",
      to: ["arlind.31@hotmail.de", email],
      subject: subject,
      react: (
        <>
          <div style={{ background: '#f5f5f5', padding: '20px', textAlign: 'center' }}>
            <img src="/images/logo.png" alt="Ihr Logo" style={{ maxWidth: '200px' }} />
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <p>Hallo {email},</p>
            <p>Danke für deine Nachricht! Wir werden uns in Kürze mit Dir in Kontakt setzen.</p>
            <p>Neue Nachricht übermittelt:</p>
            <p>{message}</p>
          </div>
          <div style={{ background: '#f5f5f5', padding: '20px', textAlign: 'center' }}>
            <p>Dies ist eine automatisch generierte E-Mail. Bitte antworte nicht auf diese Nachricht.</p>
          </div>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}