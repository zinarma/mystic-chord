"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";

const ContactForm = () => {
  const { toast } = useToast();

  const sendEmail = (event: FormEvent) => {
    event.preventDefault();
    toast({
      title: "Success: Email Sent",
      description: "We will get back to you as soon as possible.",
    });
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center p-4 items-center w-screen h-screen"
    >
      <div className="flex flex-col rounded-xl p-4 bg-gray-800 w-full max-w-[64ch]">
        <h1 className="p-4">Contact Us</h1>
        <form className="flex flex-col">
          <div className="grid p-4 gap-1.5">
            <Label htmlFor="email">Your Email</Label>
            <Input
              className="bg-gray-900"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="grid p-4 gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              className="bg-gray-900"
              placeholder="Type your message here."
              id="message"
            />
          </div>
          <div className="grid p-4 gap-1.5">
            <Button onClick={sendEmail} className="w-24" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
