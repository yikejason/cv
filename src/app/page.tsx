import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon, GlobeIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">天天</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              我是一名前端工程师, 目前工作在成都, 如果看到我的简历请联系我
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href="/"
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                四川,成都
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              <Button className="size-8" variant="outline" size="icon">
                <a href={`mailto:18215513386@163.com`}>
                  <MailIcon className="size-4" />
                </a>
              </Button>
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={`tel:18215513386`}>
                  <PhoneIcon className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt="jason" src="https://github.com/shadcn.png" />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">关于我</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            作为一名前端工程师，我已经从0到1开发了多个产品。我领导过团队，构建过最好的工作环境，目前，我使用TypeScript，React，和
            Node.js。我已经拥有了6年的开发经验在前端开发的工作上。所以我能够胜任前端任何方面的工作。
          </p>
        </Section>
      </section>
    </main>
  );
}
