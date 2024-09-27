import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <div className="flex flex-col flex-grow justify-center">
      <h1 className="p-4">Contact Us</h1>
      <form className="flex flex-col flex-grow">
        <div className="grid p-4 gap-1.5">
          <Label htmlFor="email">Your Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid p-4 gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
        <div className="grid p-4 gap-1.5">
          <Button className="w-24" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
