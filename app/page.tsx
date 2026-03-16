
import AppShell from "@/components/AppShell";
import { getHomepageContent } from "@/lib/cms/homepage";

export default async function Home() {
  const homepageContent = await getHomepageContent();

  return (
    <AppShell homepageContent={homepageContent} />
  );
}
