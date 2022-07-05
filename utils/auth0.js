import { initAuth0 } from '@auth0/nextjs-auth0';

const auth0 = initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'openid profile',
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
  },
});

export default auth0;

export const isAuthorized = (user, role) => {
  return (
    user && user['http://portfolio-next-course.com' + '/roles'].includes(role)
  );
};

export const authorizeUser = async (req, res) => {
  const session = await auth0.getSession(req);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/v1/login',
    });
    res.end();
    return null;
  } else {
    return session.user;
  }
};

export const withAuth =
  (getData) =>
  async ({ req, res }) => {
    const session = await auth0.getSession(req);

    if (!session || !session.user) {
      res.writeHead(302, {
        Location: '/api/v1/login',
      });
      res.end();
      return { props: {} };
    }

    const data = getData ? await getData({ req, res }, session.user) : {};

    return { props: { user: session.user, ...data } };
  };
