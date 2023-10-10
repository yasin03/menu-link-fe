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
import React, { useRef, useState } from "react";
import { LuMail, LuLock, LuUnlock } from "react-icons/lu";
import secureLocalStorage from "react-secure-storage";
import { login } from "@/component/api/user-service";
import { toast } from "@/component/utils/Swal";
import { useDispatch } from "react-redux";
import { loginFailed, loginSuccess } from "@/component/store/slices/auth-slice";
import { useRouter } from "next/navigation";
import Loading from "@/component/components/ui/Loading";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();
  const email = useRef("");
  const password = useRef("");
  const handlePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async () => {
    const values = {
      email: email.current,
      password: password.current,
      redirect: false,
    };
    try {
      setLoading(true);
      const respAuth = await login(values);

      if (respAuth.status === 200) {
        secureLocalStorage.setItem("token", respAuth.data.token);
        console.log("token->", respAuth.data.token);

        dispatch(loginSuccess(respAuth.config.data));
        toast("User logged in successfully", "success");
        router.push("/admin");
      }
    } catch (error) {
      toast("Kullanıcı adı veya şifre hatalı" + error, "error");
      dispatch(loginFailed());
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                      onPress={handlePassword}
                    />
                  ) : (
                    <LuLock
                      className="text-2xl text-default-400 cursor-pointer flex-shrink-0"
                      onPress={handlePassword}
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
                as={Link}
                onPress={handleSubmit}
              >
                Sign in
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default LoginPage;
