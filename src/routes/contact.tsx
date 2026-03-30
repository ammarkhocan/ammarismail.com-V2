import { useMemo, useState } from "react";
import { Mail, Linkedin, Github, Copy, Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import SEO from "@/components/shared/seo";

export default function Contact() {
  const MY_EMAIL = "youremail@gmail.com";

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
    <main className="min-h-[calc(100vh-6.3rem)] bg-black pt-24 text-white">
      <SEO
        title="Contact"
        description="Portfolio of Ammar Ismail Khocan, a Frontend Web Developer building fast and interactive web applications."
      />
      <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <Sparkles className="h-4 w-4" />
            <span>Contact</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold md:text-4xl">Let's talk</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/60 md:text-base">
            If you have a project idea, need frontend assistance, or want to
            collaborate feel free to reach out.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-base text-white">
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-white/70">
                <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-white/70" />
                    <div>
                      <div className="text-white">Email</div>
                      <div className="text-white/60">{MY_EMAIL}</div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-white/15 bg-transparent text-white hover:bg-white/10"
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
                    className="rounded-xl border border-white/10 bg-black/20 p-4 transition hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-white/70" />
                      <div>
                        <div className="text-white">LinkedIn</div>
                        <div className="text-white/60">Open profile</div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/ammarkhocan"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-black/20 p-4 transition hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-white/70" />
                      <div>
                        <div className="text-white">GitHub</div>
                        <div className="text-white/60">See repositories</div>
                      </div>
                    </div>
                  </a>
                </div>

                <Separator className="bg-white/10" />

                <div className="text-white/60">
                  Prefer a quicker response? You can email me directly. I
                  usually reply within 1-2 business days.
                </div>

                <Button
                  asChild
                  className="bg-white text-black hover:bg-white/90"
                >
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

          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="text-base text-white">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Name</label>
                  <Input
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Your name"
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/70">Email</label>
                  <Input
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="you@email.com"
                    type="email"
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70">Message</label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or idea..."
                  className="min-h-32 border-white/10 bg-white/5 text-white placeholder:text-white/40"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-white/50">
                  This button will open your default email application.
                </p>

                <Button
                  asChild
                  disabled={!isFormValid}
                  className="bg-white text-black hover:bg-white/90 disabled:opacity-50"
                >
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
