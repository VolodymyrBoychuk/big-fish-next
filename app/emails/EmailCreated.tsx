import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Tailwind,
} from "@react-email/components";

interface EmailCreatedProps {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

export const EmailCreated = ({
  name,
  email,
  message,
  phone,
}: EmailCreatedProps) => {
  return (
    <Html>
      <Head />
      <Preview>Support Confirmation Email 🎉</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              We are interested in your offer.
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello my name is {name},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>My Phone</strong> ({phone ? phone : "Not provided"}),{" "}
              <br />
              <strong>Email</strong> ({email})
              <br />
            </Text>
            <Text className="text-black text-[16px] leading-[24px]">
              <strong>Message</strong>
              <br />
              {message}.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

EmailCreated.PreviewProps = {
  name: "Alex",
  email: "aaa@gmail2.com",
  message: "Hello, I am interested in your offer.",
  phone: "123-456-7890",
} as EmailCreatedProps;

export default EmailCreated;
