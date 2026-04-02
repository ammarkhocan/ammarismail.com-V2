import { useMemo, useState } from "react";
import { Mail, Linkedin, Github, Copy, Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import SEO from "@/components/shared/seo";

export default function Contact() {
  const MY_EMAIL = "me@gmail.com";

  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const mailtoLink = useMemo(() => {
    const emailSubject = `Portfolio Contact — ${senderName || "Someone"}`;
    const emailBody = `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}\n`;

    return `mailto:${MY_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  }, [MY_EMAIL, senderName, senderEmail, message]);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(MY_EMAIL);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1200);
    } catch {
      console.error("Failed to copy email");
    }
  }

  const isFormValid = senderName.trim() && senderEmail.trim() && message.trim();

  return (
    <main className="min-h-[calc(100vh-6.3rem)] bg-background pt-24 text-foreground transition-colors duration-300">
      <SEO
        title="Contact"
        description="Portfolio of Ammar Ismail Khocan, a Frontend Web Developer building fast and interactive web applications."
      />
      <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground">
            <Sparkles className="h-4 w-4" />
            <span>Contact</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold md:text-4xl">Let's talk</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
            If you have a project idea, need frontend assistance, or want to
            collaborate feel free to reach out.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-base">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-muted/50 p-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-foreground">Email</div>
                      <div className="text-muted-foreground">{MY_EMAIL}</div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-transparent"
                    onClick={handleCopyEmail}
                    type="button"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    {isCopied ? "Copied" : "Copy"}
                  </Button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href="https://www.linkedin.com/in/ammarismailkhocan"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-border bg-muted/50 p-4 transition hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="text-foreground">LinkedIn</div>
                        <div className="text-muted-foreground">
                          Open profile
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/ammarkhocan"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-border bg-muted/50 p-4 transition hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="text-foreground">GitHub</div>
                        <div className="text-muted-foreground">
                          See repositories
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <Separator className="bg-border" />

                <div className="text-muted-foreground">
                  Prefer a quicker response? You can email me directly. I
                  usually reply within 1-2 business days.
                </div>

                <Button asChild className="w-fit">
                  <a
                    href={`mailto:${MY_EMAIL}`}
                    className="flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Email me directly
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-base">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Name</label>
                  <Input
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Your name"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Email</label>
                  <Input
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="you@email.com"
                    type="email"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Message</label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or idea..."
                  className="min-h-32 bg-background"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  This button will open your default email application.
                </p>

                <Button asChild disabled={!isFormValid}>
                  <a
                    href={isFormValid ? mailtoLink : "#"}
                    className="flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
