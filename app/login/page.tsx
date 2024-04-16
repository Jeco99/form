import { Container, Flex, TextInput, Button } from "@mantine/core";
import { login } from "./action";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Container>
      <form action={login}>
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
            name="email"
            id="email"
            required
          />
          <TextInput
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
          <Button variant="filled" color="gray" type="submit">
            Log in
          </Button>
          <Link href={"/signup"}>
            <Button variant="filled" color="blue" type="button">
              Sign Up
            </Button>
          </Link>

          {/* <button formAction={login}>Log in</button>
          <button formAction={signup}>Sign up</button> */}
        </Flex>
      </form>
    </Container>
  );
}
