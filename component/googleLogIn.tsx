"use client";

import { loginWithGoogle } from "@/app/login/loginWithGoogle";
import { Button } from "@mantine/core";

export default function GoogleSignIn() {
  return (
    <>
      <Button
        variant="filled"
        color="gray"
        type="submit"
        onClick={() => loginWithGoogle}
      >
        Log in
      </Button>
    </>
  );
}
