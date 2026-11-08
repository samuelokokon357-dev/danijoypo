import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowUpRight, Bell, ClipboardList, LogOut, ShieldCheck, Wallet } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { signOutAction } from "@/app/login/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default async function DashboardPage() {
  let supabase;
  try {
    supabase = await createClient();
  } catch {
    redirect("/login");
  }

  const { data: { claims }, error } = await supabase.auth.getClaims();
  if (error || !claims?.sub) redirect("/login");

  const email = typeof claims.email === "string" ? claims.email : "Signed-in user";

  return (
    <main className="min-h-screen bg-[#f6f8fc]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3"><div className="flex size-11 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white"><Image src="/danijoy-school-logo.jpg" alt="Danijoy crest" width={44} height={48} className="h-full w-full object-contain" /></div><div><p className="text-sm font-extrabold text-brand-navy">DANIJOY</p><p className="text-[10px] font-semibold uppercase tracking-[.14em] text-slate-500">Pocket Money Portal</p></div></div>
          <form action={signOutAction}><Button variant="outline" size="sm"><LogOut className="size-4" /> Sign out</Button></form>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#9b7900]">School workspace</p><h1 className="mt-2 text-3xl font-black tracking-tight text-brand-navy">Dashboard scaffold</h1><p className="mt-2 text-sm text-slate-500">Signed in as {email}</p></div><div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 sm:self-auto"><ShieldCheck className="size-4" /> Authenticated session</div></div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { icon: Wallet, title: "Wallet balances", text: "Connect the approved ledger balance view here." },
            { icon: ClipboardList, title: "Withdrawal queue", text: "Connect pending withdrawal requests here." },
            { icon: Bell, title: "Notifications", text: "Add approval and transaction notifications here." },
          ].map((item) => { const Icon = item.icon; return <Card key={item.title}><CardContent className="p-6"><div className="flex size-11 items-center justify-center rounded-xl bg-amber-50 text-brand-navy"><Icon className="size-5" /></div><h2 className="mt-5 font-bold text-brand-navy">{item.title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p></CardContent></Card>; })}
        </div>
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/80 p-5"><p className="font-semibold text-brand-navy">Next integration step</p><p className="mt-1 text-sm leading-6 text-slate-600">The authentication shell is active. Role-based routing and financial data will be connected after the final database schema, balance rules and Row Level Security policies have been reviewed and deployed.</p><Link href="/" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:underline">Return to portal home <ArrowUpRight className="size-4" /></Link></div>
      </section>
    </main>
  );
}
