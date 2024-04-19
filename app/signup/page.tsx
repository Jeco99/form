"use client";

import { Container, Flex, TextInput, Button, Title } from "@mantine/core";
import { signup } from "./action";
import Link from "next/link";
import LogInWithGoogle from "@/component/googleauth/loginwithgoogle";

import { useSearchParams } from "next/navigation";

export default function Signup() {
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
        <Title order={1}>Create An Account</Title>
        {search}
        <form action={signup}>
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email address"
            id="email"
            variant="filled"
            size="md"
            w={300}
            name="email"
            required
          />

          <TextInput
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            variant="filled"
            size="md"
            w={300}
            mt={10}
            name="password"
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
              Sign Up
            </Button>

            <Link
              href={"/login"}
              style={{ textDecoration: "none", color: "white", width: "100%" }}
            >
              <Button
                justify="center"
                fullWidth
                variant="filled"
                color="blue"
                type="button"
              >
                Already have an account
              </Button>
            </Link>

            <LogInWithGoogle />
          </Flex>
        </form>
      </Flex>
    </Container>
  );
}
