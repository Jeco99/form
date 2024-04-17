import { Container, Flex, TextInput, Button } from "@mantine/core";
import { login } from "./action";
import Link from "next/link";
import LogInWithGoogle from "../../component/googleauth/loginwithgoogle";

export default function LoginPage() {
  return (
    <Container>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="nowrap"
      >
        <form action={login}>
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
          <Flex>
            <Button variant="filled" color="gray" type="submit">
              Log in
            </Button>
          </Flex>
        </form>

        <Link href={"/signup"}>
          <Button variant="filled" color="blue" type="button">
            Sign Up
          </Button>
        </Link>

        <LogInWithGoogle />


        {/* <button formAction={login}>Log in</button>
          <button formAction={signup}>Sign up</button> */}
      </Flex>
    </Container>
  );
}
