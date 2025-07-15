export const PAGES = {
  HOME: "/",
  EXPLORE: "/explore",
  SHOP: "/shop",
  SSG: "/shop/ssg",
  ISR: "/shop/isr",
  PROFILE: (username: string) => `/u/${username}`,
};
