// All routes that should be tested
export const routes = [
  { path: '/', name: 'Home' },
  { path: '/team', name: 'Team' },
  { path: '/preview/join', name: 'Join the Research Preview' },
  { path: '/products/agent-behaviors', name: 'Agent Behaviors' },
  { path: '/products/raegent', name: 'raegent' },
  { path: '/products/rae-skills', name: 'rae skills' },
  { path: '/products/rae-trace', name: 'rae trace' },
  { path: '/services', name: 'Services' },
  { path: '/blog', name: 'Blog Index' },
  { path: '/blog/year-of-autonomous-engineering', name: 'Launch Post' },
];

// Routes that should have specific SEO requirements
export const seoRoutes = routes;
