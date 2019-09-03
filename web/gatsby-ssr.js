/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import { ThemeProvider } from "emotion-theming"
import theme from "@rebass/preset"
import { ApolloProvider } from "react-apollo-hooks"
import { navigate } from "gatsby"

import { AuthProvider } from "react-use-auth"

import { client } from "./src/apollo"

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="dev-9wkgkxkl.eu.auth0.com"
    auth0_client_id="97067nHiw6L9yDbq8Z7DkHo8S4TEwQuL">
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </ApolloProvider>
  </AuthProvider>
)
