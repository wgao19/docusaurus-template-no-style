/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';

function Footer() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {themeConfig = {}} = siteConfig;
  const {footer} = themeConfig;

  if (!footer) {
    return null;
  }

  const {copyright, links = [], logo} = footer;

  return (
    <footer>
      {links && links.length > 0 && (
        <section>
          {links.map((linkItem, i) => (
            <div key={i} className={styles.linkSection}>
              {linkItem.title != null ? <h4>{linkItem.title}</h4> : null}
              {linkItem.items != null &&
              Array.isArray(linkItem.items) &&
              linkItem.items.length > 0 ? (
                <ul>
                  {linkItem.items.map(item => (
                    <li key={item.href || item.to}>
                      <Link
                        {...item}
                        {...(item.href
                          ? {
                              target: '_blank',
                              rel: 'noopener noreferrer',
                              href: item.href,
                            }
                          : {
                              to: withBaseUrl(item.to),
                            })}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>
      )}
      {(logo || copyright) && (
        <section className={styles.copyright}>
          {logo && logo.src && <img alt={logo.alt} src={logo.src} />}
          {copyright}
        </section>
      )}
    </footer>
  );
}

export default Footer;
