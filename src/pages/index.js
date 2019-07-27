/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <section>
          <img src="/img/diplodocus.png" />
          <p>Photo credit</p>
          <div>
            Icons made by{' '}
            <a
              href="https://www.flaticon.com/authors/darius-dan"
              title="Darius Dan">
              Darius Dan
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{' '}
            is licensed by{' '}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank">
              CC 3.0 BY
            </a>
          </div>
        </section>
        <article>
          <h1>Docusaurus Theme No Style</h1>
          <p>
            This theme is a trim down from{' '}
            <a href="https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-theme-classic">
              @docusaurus/theme-classic
            </a>{' '}
            of <a href="http://docusaurus-2.netlify.com/">Docusaurus 2</a> to
            contain only <em>opinionated minimum styles</em>:
          </p>
          <ul>
            <li>
              all css selectors are using only semantic html tags with roles, no
              class names used
            </li>
            <li>
              docs and blog page layout with grid with 2 side sections and 1
              main in middle
            </li>
            <li>accessory sections have paddings with a fixed value 1rem</li>
          </ul>
          <h2 id="overwriting-styles-for-this-theme">
            Overwriting styles for this theme
          </h2>
          <p>
            Depending on how fine-grained you wish to overwrite the styles, you
            have a few options:
          </p>
          <p>
            To modify the styling without changing the DOM structure of
            individual components, you may swizzle the <code>Layout</code>{' '}
            component and update the CSS there:
          </p>
          <pre>
            <code class="language-shell">
              $ yarn swizzle docusaurus-theme-no-style Layout
            </code>
          </pre>
          <p>
            This will copy the <code>Layout</code> component to your site's{' '}
            <code>src</code> directory. Restart your dev server, and then the
            site will be using the component in your code.
          </p>
          <p>
            Most of the styles provided in this theme is inside the{' '}
            <code>Layout</code> component.
          </p>
          <p>
            If you need to modify the DOM structure and / or styling for
            individual component, swizzle the corresponding component with the
            same command.
          </p>
          <p>
            To see the list of components provided by this theme, refer{' '}
            <a href="#">here</a>.
          </p>
          <h3>
            <Link to="/docs/doc1">Now start reading</Link>
          </h3>
        </article>
      </main>
    </Layout>
  );
}

export default Home;
