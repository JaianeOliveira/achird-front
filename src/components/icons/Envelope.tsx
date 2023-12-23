import Image from "next/image";
import EnvelopeRegularLogo from "public/envelope-regular.svg";
import EnvelopeFillLogo from "public/envelope-fill.svg";
import EnvelopeBoldLogo from "public/envelope-bold.svg";

type EnvelopeIconProps = {
  weight?: "regular" | "bold" | "fill";
  className?: string;
};

export function Envelope({ weight = "regular", className }: EnvelopeIconProps) {
  switch (weight) {
    case "regular":
      return (
        <Image
          src={EnvelopeRegularLogo}
          alt="Envelope Icon"
          className={`${className}`}
        />
      );
    case "bold":
      return (
        <Image
          src={EnvelopeRegularLogo}
          alt="Envelope Icon"
          className={`${className}`}
        />
      );
    case "fill":
      return (
        <Image
          src={EnvelopeFillLogo}
          alt="Envelope Icon"
          className={`${className}`}
        />
      );
    default:
      return (
        <Image
          src={EnvelopeBoldLogo}
          alt="Envelope Icon"
          className={`${className}`}
        />
      );
  }
}
