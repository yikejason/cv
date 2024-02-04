import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon, GlobeIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { PrintButton } from "@/components/print-button";
import { MY_RESUME_DATA } from "@/data/my-resume-data";
import { GitHubIcon } from "@/components/icons/githubIcon";

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
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
              <a
                className="flex items-center"
                href={`mailto:${MY_RESUME_DATA.email}`}
              >
                {MY_RESUME_DATA.email}
              </a>
            </div>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={`tel:${MY_RESUME_DATA.tel}`}>
                  <PhoneIcon className="size-4" />
                </a>
              </Button>
              <a
                className="flex items-center"
                href={`tel:${MY_RESUME_DATA.tel}`}
              >
                {MY_RESUME_DATA.tel}
              </a>
            </div>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={MY_RESUME_DATA.gitHub.link}>
                  <GitHubIcon className="size-4" />
                </a>
              </Button>
              <a
                className="flex items-center"
                href={MY_RESUME_DATA.gitHub.link}
              >
                {MY_RESUME_DATA.gitHub.name}
              </a>
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {MY_RESUME_DATA.email ? (
                <a href={`mailto:${MY_RESUME_DATA.email}`}>
                  <span className="underline">{MY_RESUME_DATA.email}</span>
                </a>
              ) : null}
              {MY_RESUME_DATA.tel ? (
                <a href={`tel:${MY_RESUME_DATA.tel}`}>
                  <span className="underline">{MY_RESUME_DATA.tel}</span>
                </a>
              ) : null}
              {MY_RESUME_DATA.gitHub.name ? (
                <a href={MY_RESUME_DATA.gitHub.link}>
                  <span className="underline">
                    {MY_RESUME_DATA.gitHub.name}
                  </span>
                </a>
              ) : null}
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
                      {work.link ? (
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>
                      ) : (
                        <span>{work.company}</span>
                      )}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>
                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-sm text-muted-foreground">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section className="print-force-new-page">
          <h2 className="text-xl font-bold">教育</h2>
          {MY_RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 text-sm text-muted-foreground">
                  {education.degree}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">技能</h2>
          <div className="flex flex-wrap gap-1">
            {MY_RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">个人优势</h2>
          <div className="flex min-h-0 flex-col">
            {MY_RESUME_DATA.personalStrengths.map((personal) => (
              <p
                className="text-pretty p-0 font-mono text-sm text-muted-foreground"
                key={personal}
              >
                {personal}
              </p>
            ))}
          </div>
        </Section>
        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">项目</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 print:grid-cols-2 print:gap-2">
            {MY_RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project?.link?.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>
      <PrintButton />
    </main>
  );
}
