import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <>
      <div>
        <h3 className="text-heading mb-3 text-lg font-semibold">
          Contact Information
        </h3>
        <p className="text-foreground">
          Have a question or want to work together? Send me a message and I’ll
          get back to you as soon as I can.
        </p>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex gap-3">
          <Mail className="text-primary mt-1 h-5 w-5" />
          <div>
            <h4 className="text-foreground font-medium">Email</h4>
            <p className="text-muted text-sm">
              <a href="mailto:hramir94@gmail.com">hramir94@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Phone className="text-primary mt-1 h-5 w-5" />
          <div>
            <h4 className="text-foreground font-medium">Phone</h4>
            <p className="text-muted text-sm">
              <a href="tel:+17792790100">(779) 279-0100</a>
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <MapPin className="text-primary mt-1 h-5 w-5" />
          <div>
            <h4 className="text-foreground font-medium">Location</h4>
            <p className="text-muted text-sm">Chicago, IL</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
