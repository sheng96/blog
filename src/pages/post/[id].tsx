import { useRouter } from "next/router";
import $request from "@/utils/http/axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import remarkBreaks from 'remark-breaks'
import MarkdownNavbar from 'markdown-navbar';
// The default style of markdown-navbar should be imported additionally
import 'markdown-navbar/dist/navbar.css';
import 'github-markdown-css/github-markdown.css'

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await $request.get("/post");
  const posts = (await res.data) as any[];

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
  const data = await $request.get(`/post/${params.id}`);
  return {
    props: {
      detail: data,
      revalidate: 60 * 60 * 12,
    },
  };
}

const Post = ({ detail }: any) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="markdown-body m-auto px-10 md:px-0 md:w-2/3 w-full">
      <ReactMarkdown
        remarkPlugins={[remarkGfm,remarkBreaks]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus as any}
                showLineNumbers={true}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {detail.content}
      </ReactMarkdown>
      <div className="navigation">
        <MarkdownNavbar source={detail.content} />
      </div>
      {/*<div dangerouslySetInnerHTML={{__html:detail.contentHtml}} ></div>*/}
    </div>
  );
};

export default Post;
