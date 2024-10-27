"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
  subject: z.string().min(2).max(100),
  body: z.string().min(10).max(1000),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [emailSent, setEmailSent] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      body: "",
    },
  });
  // const { isLoading } = form.formState;
  // console.log({ isLoading });

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log(values);
  //   const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
  //   await wait();
  //   setEmailSent(true);
  //   toast({
  //     title: "Success: Email Sent",
  //     description: "We will get back to you as soon as possible.",
  //   });
  // }

  if (emailSent)
    return (
      <div
        id="contact"
        className="flex flex-col justify-center p-4 items-center w-screen h-screen"
      >
        <div className="flex flex-col rounded-xl p-4 bg-gray-800 w-full max-w-[64ch]">
          <h1 className="underline-gradient p-4">All Done!</h1>
          <p className="p-8">
            Thank you for reaching out to us. Your Email was sent successfully.
            We will get back to you as soon as possible.
          </p>
        </div>
      </div>
    );

  return (
    <div
      id="contact"
      className="flex flex-col justify-center p-4 items-center w-screen h-screen"
    >
      <div className="flex flex-col rounded-xl p-4 bg-gray-800 w-full max-w-[64ch]">
        <h1 className="p-4">Contact Us</h1>
        <Form {...form}>
          <form
            method="POST"
            action="mailto: ross@mysticchordmusic.com"
            encType="text/plain"
            // onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 p-4"
          >
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-900"
                      placeholder="Email Title..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-gray-900"
                      placeholder="Your message..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
