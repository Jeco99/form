import { Container, Flex, TextInput, Button, Title } from "@mantine/core";
import { signup } from "./action";
import Link from "next/link";

export default function Signup() {
  return (
    <Container>
      <Title ta={"center"}>Create an Account</Title>
      <form action={signup}>
        <Flex
          mih={50}
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="nowrap"
        >
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email address"
            required
            name="email"
            id="email"
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
            name="password"
            id="password"
          />
          <Button variant="filled" color="gray" type="submit">
            Sign Up
          </Button>
          <Link href={"/login"}>
            <Button variant="filled" color="blue" type="button">
              Already have an account
            </Button>
          </Link>
        </Flex>
      </form>
    </Container>
  );
}