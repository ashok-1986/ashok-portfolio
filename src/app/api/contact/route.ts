import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Standard recipient from the implementation plan
const CONTACT_EMAIL = 'verma.86ashok@gmail.com';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
            from: 'Ashok Portfolio <onboarding@resend.dev>', // Resend default for unverified domains
            to: [CONTACT_EMAIL],
            subject: `New Lead: ${name}`,
            reply_to: email,
            text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, id: data?.id });
    } catch (err) {
        console.error('Contact API Error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
