// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from "resend";

const resend = new Resend('re_THkbosgt_AYXKXoBawq6P7MwYHgUvoKVo');
const fromEmail = "arlind.31@hotmail.de";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;
    console.log(email, subject, message);

    try {
      const response = await resend.emails.send({
        from: fromEmail,
        to: [fromEmail, email],
        subject: subject,
        // Umwandlung von JSX in einen String, falls erforderlich
        html: `<h1>${subject}</h1><p>Vielen Dank für deine Nachricht!</p><p>Nachricht wurde übermittelt:</p><p>${message}</p>`,
      });

      // Verwenden Sie res.status(200).json(), um die Antwort zurückzusenden
      res.status(200).json(response);
    } catch (error) {
      // Verwenden Sie res.status(500).json(), um Fehler zurückzusenden
      res.status(500).json({ error: error.message });
    }
  } else {
    // Methode nicht erlaubt
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
