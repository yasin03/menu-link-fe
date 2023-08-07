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
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { LuMail, LuLock, LuUnlock } from "react-icons/lu";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => setShowPassword(!showPassword);
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/admin");
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
          <Button color="primary" className="mr-2" href="/admin" as={Link}>
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
