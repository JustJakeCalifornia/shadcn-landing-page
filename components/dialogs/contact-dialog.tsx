"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "../forms/contact-form";

type Props = {
  buttonName: string;
  buttonSize: "default" | "sm" | "lg" | "icon" | null | undefined;
};

export const ContactDialog = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={props.buttonSize}>{props.buttonName}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign up for Free Trial</DialogTitle>
          <DialogDescription>
            Enter your details below to start your free trial of
            GonzoCity&apos;s municipal operations platform.
          </DialogDescription>
        </DialogHeader>
        <ContactForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
