import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>Dashboard Page(protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
