
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  maxWidth: '600px',
  margin: '0 auto',
  border: '1px solid #e0e0e0',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  background: '#333333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px',
};

const logoStyle = {
  maxWidth: '70px',
};

const contentStyle = {
  padding: '20px',
  backgroundColor: '#ffffff',
};

const footerStyle = {
  padding: '10px',
  fontSize: '12px',
  textAlign: 'center',
  background: '#f5f5f5',
  borderBottomLeftRadius: '5px',
  borderBottomRightRadius: '5px',
};


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
        <div style={containerStyle}>
          <div style={headerStyle}>
            <img src="https://www.arlind-isa.de/images/logo.png" alt="AISoft" style={logoStyle} />
          </div>
          <div style={contentStyle}>
            <p><strong>Hallo {email}</strong>,</p>
            <br></br><p>Danke für deine Nachricht! Wir werden uns in Kürze mit Dir in Kontakt setzen.</p>
            <p>Neue Nachricht übermittelt:</p>
            <p>{message}</p>
          </div>
          <div style={footerStyle}>
            <p>Dies ist eine automatisch generierte E-Mail. Bitte antworte nicht auf diese Nachricht.</p>
          </div>
        </div>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}