import Link from "next/link";
import { siteConfig } from "@/config/site";
import { AuthCard } from "../components/auth-card";
import { LoginForm } from "./components/login-form";

const LoginDisplay = () => {
  return (
    <AuthCard 
      title="Welcome back" 
      description={`Sign in to access your ${siteConfig.name} workspace.`}
      footer={
        <p className="text-xs text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Sign up for free
          </Link>
        </p>
      }
    >
      <LoginForm />
    </AuthCard>
  );
};

export default LoginDisplay;