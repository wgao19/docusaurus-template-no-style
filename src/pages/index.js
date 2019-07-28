/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="A Docusaurus 2 template with opinionated minimum style for easy customization.">
      <main>
        <section>
          <img src="/img/diplodocus.png" />
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/darius-dan"
              title="Darius Dan"
            >
              Darius Dan
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
            >
              CC 3.0 BY
            </a>
          </div>
        </section>
        <article>
          <h1>Docusaurus no style</h1>
          <p>
            This site is bootstrapped from{" "}
            <a href="https://github.com/wgao19/docusaurus-template-no-style">
              @wgao19/docusaurus-template-no-style
            </a>{" "}
            using{" "}
            <a href="https://github.com/wgao19/docusaurus-theme-no-style">
              @wgao19/docusaurus-theme-no-style
            </a>
            , a trim-down from Docusaurus 2's classic theme that contains only{" "}
            <em>opinionated minimum styles</em>:
          </p>
          <ul>
            <li>
              all css selectors are using only semantic html tags with roles, no
              class names used
            </li>
            <li>
              accessory sections have paddings with a fixed value of{" "}
              <code>1rem</code>
            </li>
          </ul>
          <p>It also comes with minimum mobile display support:</p>

          <ul>
            <li>
              one break point at <code>980px</code>
            </li>
            <li>
              wide — docs and blog page layout with grid with 2 side sections
              and 1 main in middle
            </li>
            <li>narrow — fluid all content</li>
          </ul>

          <h2>Template no style</h2>
          <p>
            Docusaurus 2's
            {` `}
            <code>init</code> command allows you to easily create a Docusaurus 2
            site from a template repo:
          </p>
          <pre>
            <code>
              $ npx @docusaurus/init@next init [your-project-name]
              https://github.com/wgao19/docusaurus-template-no-style.git{" "}
            </code>
          </pre>
          <p>I've also included two customizations in this template:</p>
          <ul>
            <li>
              Font using{" "}
              <a href="https://fonts.google.com/specimen/IBM+Plex+Sans">
                IBM Plex Sans
              </a>{" "}
              specified with a custom CSS
            </li>
            <li>
              Swizzling out <code>Footer</code> that fits my eyes
            </li>
          </ul>

          <h2>Theme no style</h2>

          <p>
            The default Docusaurus 2 sites are generated from{" "}
            <a href="https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-theme-classic">
              classic theme
            </a>{" "}
            which includes a very beautiful styling that we believe will satisfy
            the need of most documenting sites. All Facebook Open Source
            projects are using the default theme and you should probably use it
            too.
          </p>
          <p>
            The motivation for me to create the{" "}
            <a href="https://github.com/wgao19/docusaurus-theme-no-style">
              theme no style
            </a>{" "}
            is that I want to create many more sites each with its own custom
            styling, as well as to learn more about Docusaurus 2.
          </p>
          <p>
            <a href="https://docusaurus.io">Docusaurus</a> is a static site
            generator with a focus on documentation sites. It is currently
            maintained by <a href="https://twitter.com/yangshunz">Yangshun</a>,{" "}
            <a href="https://twitter.com/endiliey">Endiliey</a>, and{" "}
            <a href="htts://twitter.com/wgao19">myself</a>. We are now rapidly
            iterating on{" "}
            <a href="https://docusaurus-2.netlify.com">Docusaurus 2</a>. It has
            been the most performant static site generator I've ever worked
            with. And we hope to deliver the best developer experience for the
            doc sites of future open source projects, as well as to help build
            the best doc sites for future users.
          </p>
          <h3>
            <Link to="/docs/doc1">Now start building</Link>
          </h3>
        </article>
      </main>
    </Layout>
  );
}

export default Home;
