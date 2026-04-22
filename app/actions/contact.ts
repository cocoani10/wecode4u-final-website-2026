"use server"

export async function submitContactForm(formData: {
  name: string
  email: string
  company: string
  projectDetails: string
  budgetRange: string
}) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY

  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable")
    return { success: false, error: "Server configuration error: Email service is not configured." }
  }

  try {
    const htmlBody = `
      <h2>New WeCode4U Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Company:</strong> ${formData.company || "Not provided"}</p>
      <p><strong>Budget Range:</strong> ${formData.budgetRange || "Not selected"}</p>
      <br />
      <h3>Project Details:</h3>
      <p style="white-space: pre-wrap;">${formData.projectDetails}</p>
    `

    // By default Resend provides an onboarding email domain for testing.
    // In production, this should be set to an authenticated domain the user owns.
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "alind.gupta@wecode4u.com",
        subject: `New WeCode4U Contact Form Submission — ${formData.name}`,
        html: htmlBody,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      console.error("Resend API error:", errorData)
      return { success: false, error: "Failed to send email. Please try again later." }
    }

    return { success: true }
  } catch (error) {
    console.error("Form submission error:", error)
    return { success: false, error: "An unexpected error occurred." }
  }
}
