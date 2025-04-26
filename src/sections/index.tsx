import { DressCode } from "./dress-code";
import { Hero } from "./hero";
import { Timings } from "./timings.tsx";
import { Venue } from "./venue.tsx";
import { Wishes } from "./wishes.tsx";
import { GuestForm } from "./guest-form";
import { Footer } from "./footer.tsx";

export const Section: {
  Hero: typeof Hero;
  DressCode: typeof DressCode;
  Timings: typeof Timings;
  Venue: typeof Venue;
  Wishes: typeof Wishes;
  GuestForm: typeof GuestForm;
  Footer: typeof Footer;
} = {
  Hero,
  DressCode,
  Timings,
  Venue,
  Wishes,
  GuestForm,
  Footer,
};
