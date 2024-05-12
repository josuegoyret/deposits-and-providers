import ProviderSelfExclusion from "@/components/provider-self-exclusion/provider-self-exclusion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProviderSelfExclusion />
    </main>
  );
}
