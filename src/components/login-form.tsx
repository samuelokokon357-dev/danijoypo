"use client";

import { useActionState } from "react";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { signInAction, type LoginState } from "@/app/login/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, action, pending] = useActionState(signInAction, initialState);

  return (
    <form action={action} className="space-y-5">
      <div>
        <Label htmlFor="email">Email address</Label>
        <div className="relative">
          <Mail aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <Input id="email" name="email" type="email" autoComplete="username" placeholder="name@school.com" className="pl-11" required />
        </div>
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <LockKeyhole aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <Input id="password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" className="pl-11" required />
        </div>
      </div>

      {state.error ? (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700">
          {state.error}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? "Signing in…" : "Sign in to portal"}
        {!pending ? <ArrowRight aria-hidden="true" className="size-4" /> : null}
      </Button>
      <p className="text-center text-xs leading-5 text-slate-500">
        Need access? Please contact the school administrator.
      </p>
    </form>
  );
}
