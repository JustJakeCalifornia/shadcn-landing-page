"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactForm } from "@/components/forms/contact-form";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Web Development",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Contact
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 text-foreground">
            Connect With Us
          </h2>
          <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
            Experience the power of GonzoCity's municipal operations platform.
            Fill out the form below to begin your journey towards more efficient
            city management.
          </h3>
        </div>
        <div className="mt-12 max-w-md mx-auto">
          <Card className="bg-muted/50 dark:bg-card p-8 rounded-xl shadow-lg">
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
