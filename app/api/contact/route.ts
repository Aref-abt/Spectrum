import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, project, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured. Email will not be sent.');
      
      // Log the submission to console for testing
      console.log('Contact Form Submission:', {
        name,
        email,
        phone,
        project,
        message,
        timestamp: new Date().toISOString()
      });

      return NextResponse.json({ 
        success: true, 
        message: 'Form received successfully (email not configured)' 
      }, { status: 200 });
    }

    // Send email using Resend
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Spectrum Contact Form <onboarding@resend.dev>',
      to: ['contact@manalsroujy.com', 'aref.aboutrabi7@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 8px;
                border-left: 4px solid #1a1a1a;
              }
              .label {
                font-weight: 600;
                color: #666;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                color: #1a1a1a;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #1a1a1a;
                white-space: pre-wrap;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding: 20px;
                color: #666;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px; font-weight: 600;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Spectrum Interior Design</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #1a1a1a; text-decoration: none;">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${phone}" style="color: #1a1a1a; text-decoration: none;">${phone}</a></div>
              </div>
              ` : ''}
              
              ${project ? `
              <div class="field">
                <div class="label">Project Type</div>
                <div class="value">${project}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              <p style="margin: 0;">This email was sent from the Spectrum Interior Design contact form.</p>
              <p style="margin: 10px 0 0 0;">Reply directly to this email to contact ${name}.</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
                background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 8px;
                border-left: 4px solid #1a1a1a;
              }
              .label {
                font-weight: 600;
                color: #666;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                color: #1a1a1a;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #1a1a1a;
                white-space: pre-wrap;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding: 20px;
                color: #666;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px; font-weight: 600;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Spectrum Interior Design</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #1a1a1a; text-decoration: none;">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${phone}" style="color: #1a1a1a; text-decoration: none;">${phone}</a></div>
              </div>
              ` : ''}
              
              ${project ? `
              <div class="field">
                <div class="label">Project Type</div>
                <div class="value">${project}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              <p style="margin: 0;">This email was sent from the Spectrum Interior Design contact form.</p>
              <p style="margin: 10px 0 0 0;">Reply directly to this email to contact ${name}.</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
