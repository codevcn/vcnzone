import { FacebookIcon, GithubIcon } from "@/components/icons"
import { AutosizeTextField } from "@/components/materials/autosize-textfield"
import { Button } from "@/components/materials/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/materials/card"
import { UnderlineInput } from "@/components/materials/input"
import { Mail, MapPin, Phone, Send } from "lucide-react"

const SendMeAMessage = () => {
  return (
    <Card className="bg-regular-slightgray-cl border-none">
      <CardHeader>
        <CardTitle className="text-regular-white-cl">Send Me a Message</CardTitle>
        <CardDescription className="text-regular-gray-txtcl">
          Fill out the form below and I'll get back to you as soon as possible
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4 text-regular-white-cl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-sm text-regular-gray-txtcl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <span>Name</span>
              </label>
              <UnderlineInput
                inputProps={{ id: "name", placeholder: "Your name...", className: "w-full" }}
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-sm text-regular-gray-txtcl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <span>Email</span>
              </label>
              <UnderlineInput
                inputProps={{
                  id: "email",
                  placeholder: "Your email...",
                  type: "email",
                  className: "w-full",
                }}
              />
            </div>
          </div>
          <div className="space-y-1">
            <label
              htmlFor="subject"
              className="text-sm text-regular-gray-txtcl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <span>Subject</span>
            </label>
            <UnderlineInput
              inputProps={{
                id: "subject",
                placeholder: "Subject of your message...",
                className: "w-full",
              }}
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="message"
              className="text-sm text-regular-gray-txtcl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <span>Message</span>
            </label>
            <AutosizeTextField
              id="message"
              placeholder="Your message..."
              className="STYLE-custom-scrollbar bg-regular-slightgray-cl"
              minHeight={100}
              maxHeight={300}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-transparent border-2 border-regular-blue-cl text-regular-white-cl hover:bg-regular-blue-cl hover:text-regular-white-cl"
          >
            <span>Send Message</span>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

const contacts = [
  {
    icon: <Mail className="h-5 w-5 text-inherit" />,
    text: "codevoicainay@gmail.com",
    href: "mailto:codevoicainay@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5 text-inherit" />,
    text: "0976154110",
    href: "tel:0976154110",
  },
  {
    icon: <GithubIcon className="h-5 w-5 fill-current" />,
    text: "github.com/codevcn",
    href: "https://github.com/codevcn",
  },
  {
    icon: <FacebookIcon className="h-5 w-5 fill-current" />,
    text: "fb.com/lthloi",
    href: "https://fb.com/lthloi",
  },
  {
    icon: <MapPin className="h-5 w-5 text-inherit" />,
    text: "Vietnam",
    href: "#",
  },
]

const ContactInformation = () => {
  return (
    <Card className="h-fit bg-regular-slightgray-cl border-none">
      <CardHeader>
        <CardTitle className="text-regular-white-cl">Contact Information</CardTitle>
        <CardDescription className="text-regular-gray-txtcl">
          Feel free to reach out through any of these channels
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {contacts.map(({ text, href, icon }) => (
          <div key={text} className="flex items-center gap-3 text-regular-white-cl">
            {icon}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              {text}
            </a>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-regular-darkgray-cl">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-1">
            <div className="inline-block rounded-lg bg-regular-blue-cl px-3 py-1 text-base text-regular-white-cl">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-regular-white-cl">
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-regular-gray-txtcl md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
          <ContactInformation />
          <SendMeAMessage />
        </div>
      </div>
    </section>
  )
}
