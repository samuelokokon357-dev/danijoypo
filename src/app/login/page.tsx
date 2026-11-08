import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f6f8fc] px-4 py-10">
      <div className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-amber-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-20 size-96 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="relative z-10 w-full max-w-md animate-rise-in">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-brand-navy"><ArrowLeft className="size-4" /> Back to home</Link>
        <Card className="overflow-hidden rounded-[1.75rem] border-white/90">
          <div className="h-2 bg-gradient-to-r from-brand-navy via-[#344b7b] to-brand-gold" />
          <CardHeader className="items-center px-7 pb-2 pt-8 text-center">
            <div className="mb-4 flex size-24 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-white p-1 shadow-sm">
              <Image src="/danijoy-school-logo.jpg" alt="Danijoy International Schools logo" width={90} height={100} className="h-full w-full object-contain" priority />
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#9b7900]">Danijoy International Schools</p>
            <CardTitle className="mt-2 text-2xl">Welcome back</CardTitle>
            <CardDescription className="max-w-xs">Sign in to access the school pocket money portal.</CardDescription>
          </CardHeader>
          <CardContent className="px-7 pb-8 pt-6">
            <LoginForm />
            <div className="mt-7 flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-[11px] text-slate-400"><ShieldCheck className="size-3.5 text-brand-navy" /> Protected school access</div>
          </CardContent>
        </Card>
        <p className="mt-6 text-center text-[11px] leading-5 text-slate-400">Honesty and Learning Is Our Legacy.</p>
      </div>
    </main>
  );
}
