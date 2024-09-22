import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"

import "../../mdx.css"
import type { Metadata } from "next"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import Balancer from "react-wrap-balancer"

import { getTableOfContents } from "@/lib/toc"
import { cn } from "@/lib/utils"
import { DashboardTableOfContents } from "@/components/toc"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Mdx } from "@/components/mdx-component"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <div className="truncate">Docs</div>
          <ChevronRightIcon className="h-3.5 w-3.5" />
          <div className="text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-base text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        {/* <DocsPager doc={doc} /> */}
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] pt-4">
          <ScrollArea className="h-full pb-10">
            {doc.toc && <DashboardTableOfContents toc={toc} />}
          </ScrollArea>
        </div>
      </div>
    </main>
  )
}