import Link from "next/link";
import { AuthCard } from "../components/auth-card";
import RegisterForm from "./components/register-form";

const RegisterDisplay = () => {
  return (
    <AuthCard
      title="Create an account"
      description="Get started with real-time collaboration today."
      footer={
        <p className="text-xs text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Sign up for free
          </Link>
        </p>
      }
    >
      <RegisterForm />
    </AuthCard>
  );
};

export default RegisterDisplay;