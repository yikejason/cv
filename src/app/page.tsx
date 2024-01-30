import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon, GlobeIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MY_RESUME_DATA } from "@/data/my-resume-data";

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{MY_RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {MY_RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href="/"
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {MY_RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              <Button className="size-8" variant="outline" size="icon">
                <a href={`mailto:${MY_RESUME_DATA.email}`}>
                  <MailIcon className="size-4" />
                </a>
              </Button>
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={`tel:${MY_RESUME_DATA.tel}`}>
                  <PhoneIcon className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt="jason" src={MY_RESUME_DATA.avatarUrl} />
            <AvatarFallback>{MY_RESUME_DATA.avatarInit}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">关于我</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {MY_RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">工作经验</h2>
          {MY_RESUME_DATA.workExperience.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
      </section>
    </main>
  );
}
