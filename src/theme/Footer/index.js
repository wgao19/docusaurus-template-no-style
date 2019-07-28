/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import withBaseUrl from "@docusaurus/withBaseUrl";
import styles from "./styles.module.css";

function Footer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;

  if (!footer) {
    return null;
  }

  const { copyright, links = [], logo } = footer;

  return (
    <footer>
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
