"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Divider,
  Input,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { LuMail, LuLock, LuUnlock } from "react-icons/lu";
import { signIn } from "next-auth/react";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => setShowPassword(!showPassword);
  const router = useRouter();

  const email = useRef("");
  const password = useRef("");

  const handleSubmit = async () => {
    try {
      const result = await signIn("credentials", {
        email: email.current,
        password: password.current,
        redirect: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-screen h-screen bg-red-400 flex  justify-center items-center bg-[url('/assets/img/login-bg.jpg')] bg-cover bg-no-repeat bg-center ">
      <Card className="w-96">
        <CardHeader className="flex flex-col gap-1">Log in</CardHeader>
        <Divider />
        <CardBody>
          <Input
            autoFocus
            endContent={
              <LuMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="Email"
            placeholder="Enter your email"
            variant="bordered"
            className="mb-4"
            onChange={(e) => (email.current = e.target.value)}
          />
          <Input
            endContent={
              showPassword ? (
                <LuUnlock
                  className="text-2xl text-default-400 cursor-pointer flex-shrink-0"
                  onClick={handlePassword}
                />
              ) : (
                <LuLock
                  className="text-2xl text-default-400 cursor-pointer flex-shrink-0"
                  onClick={handlePassword}
                />
              )
            }
            label="Password"
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            variant="bordered"
            className="mb-2"
            onChange={(e) => (password.current = e.target.value)}
          />
          <div className="flex py-2 px-1 justify-between">
            <Checkbox
              classNames={{
                label: "text-small",
              }}
            >
              Remember me
            </Checkbox>
            <Link color="primary" href="#" size="sm">
              Forgot password?
            </Link>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-row justify-end">
          <Button
            color="primary"
            className="mr-2"
            href="/admin"
            as={Link}
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
