import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, ShieldCheck, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: WalletCards,
    title: "Clear wallet records",
    text: "See available pocket money and a clear record of every completed credit and withdrawal.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable approvals",
    text: "Withdrawal requests move through a controlled review process with a traceable record.",
  },
  {
    icon: GraduationCap,
    title: "School-centred access",
    text: "A dedicated portal experience for school administrators, students and parents or guardians.",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f8fc]">
      <div className="pointer-events-none absolute -right-24 -top-28 size-[28rem] rounded-full bg-amber-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-0 size-[26rem] rounded-full bg-blue-100/60 blur-3xl" />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <Image src="/danijoy-school-logo.jpg" alt="Danijoy International Schools crest" width={48} height={52} className="h-full w-full object-contain" priority />
          </div>
          <div>
            <p className="text-sm font-extrabold tracking-wide text-brand-navy">DANIJOY</p>
            <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-slate-500">International Schools</p>
          </div>
        </div>
        <Link href="/login">
          <Button variant="outline" size="sm">Portal sign in <ArrowRight className="size-4" /></Button>
        </Link>
      </header>

      <section className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-8 sm:px-8 md:pt-16 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:pb-24">
        <div className="animate-rise-in max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3.5 py-2 text-xs font-bold tracking-wide text-brand-navy shadow-sm">
            <span className="size-2 rounded-full bg-brand-gold" />
            SCHOOL POCKET MONEY PORTAL
          </div>
          <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            Pocket money, handled with <span className="relative whitespace-nowrap text-[#b58d00]">clarity.<span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-brand-gold/70" /></span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            A simple, accountable way for Danijoy International Schools to manage student pocket money, withdrawal requests and parent visibility.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/login"><Button size="lg" variant="gold" className="gold-pulse">Access the portal <ArrowRight className="size-4" /></Button></Link>
            <span className="inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-slate-500"><ShieldCheck className="size-4 text-brand-navy" /> Secure, role-based access</span>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-slate-200 pt-6">
            <div className="flex -space-x-2">
              <span className="flex size-9 items-center justify-center rounded-full border-2 border-[#f6f8fc] bg-brand-navy text-white"><ShieldCheck className="size-4" /></span>
              <span className="flex size-9 items-center justify-center rounded-full border-2 border-[#f6f8fc] bg-brand-gold text-brand-navy"><WalletCards className="size-4" /></span>
              <span className="flex size-9 items-center justify-center rounded-full border-2 border-[#f6f8fc] bg-slate-200 text-brand-navy"><GraduationCap className="size-4" /></span>
            </div>
            <p className="text-xs leading-5 text-slate-500">Designed for school administrators, students<br className="hidden sm:block" /> and parents or guardians.</p>
          </div>
        </div>

        <div className="animate-rise-in-delay relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-200/60 via-white to-blue-200/70 blur-xl" />
          <Card className="relative overflow-hidden rounded-[1.75rem] border-white/80 bg-white/90 p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-amber-50 text-brand-navy"><WalletCards className="size-5" /></div>
                <div><p className="text-sm font-bold text-brand-navy">Pocket money overview</p><p className="text-xs text-slate-500">Illustrative portal preview</p></div>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">ACCOUNTABLE</span>
            </div>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-brand-navy to-[#1d376d] p-6 text-white shadow-lg shadow-blue-950/15">
              <p className="text-xs font-medium tracking-wide text-blue-100">AVAILABLE BALANCE</p>
              <p className="mt-3 text-4xl font-black tracking-tight">₦ — — —</p>
              <div className="mt-8 flex items-center justify-between text-xs text-blue-100"><span>Student wallet</span><span>NGN · Nigerian Naira</span></div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4"><p className="text-xs text-slate-500">Withdrawal requests</p><p className="mt-2 text-xl font-bold text-brand-navy">Tracked</p></div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4"><p className="text-xs text-slate-500">Transaction history</p><p className="mt-2 text-xl font-bold text-brand-navy">Recorded</p></div>
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-amber-100 bg-amber-50/70 p-4">
              <ShieldCheck className="size-5 shrink-0 text-brand-navy" />
              <p className="text-xs leading-5 text-slate-600">Financial actions are intended to be processed through controlled, auditable workflows.</p>
            </div>
          </Card>
          <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-lg sm:block"><p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">School motto</p><p className="mt-1 text-xs font-bold text-brand-navy">Honesty and Learning Is Our Legacy</p></div>
        </div>
      </section>

      <section className="relative z-10 border-t border-slate-200/80 bg-white/70 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#9b7900]">Built around trust</p><h2 className="mt-3 text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">One clear record. Better oversight.</h2></div>
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return <Card key={item.title} className="group rounded-2xl border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"><CardContent className="p-6"><div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-amber-50 text-brand-navy transition-colors group-hover:bg-brand-gold"><Icon className="size-5" /></div><h3 className="font-bold text-brand-navy">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p></CardContent></Card>;
            })}
          </div>
          <footer className="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Danijoy International Schools.</span><span>Honesty and Learning Is Our Legacy.</span></footer>
        </div>
      </section>
    </main>
  );
}
