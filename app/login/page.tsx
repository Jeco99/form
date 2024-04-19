"use client";

import { Container, Flex, TextInput, Button, Title } from "@mantine/core";
import { login } from "./action";
import Link from "next/link";
import LogInWithGoogle from "@/component/googleauth/loginwithgoogle";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const search = searchParams?.get("message");
  return (
    <Container h={50} mt={100}>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="nowrap"
      >
        <Title order={1}>Welcome</Title>
        {search}
        <form action={login}>
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email address"
            name="email"
            id="email"
            variant="filled"
            size="md"
            w={300}
            required
          />
          <TextInput
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            variant="filled"
            size="md"
            w={300}
            mt={10}
            required
          />
          <Flex
            mih={50}
            gap="md"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
            mt={20}
          >
            <Button
              justify="center"
              fullWidth
              variant="filled"
              color="blue"
              type="submit"
            >
              Log in
            </Button>

            <Link
              href={"/signup"}
              style={{ textDecoration: "none", color: "white", width: "100%" }}
            >
              <Button
                justify="center"
                fullWidth
                variant="filled"
                color="blue"
                type="button"
              >
                Sign Up
              </Button>
            </Link>

            <LogInWithGoogle />
          </Flex>
        </form>
      </Flex>
    </Container>
  );
}
