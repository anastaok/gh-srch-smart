declare module "*.css" {
  const resource: { [key: string]: string };
  export = resource;
}

declare module "*.scss" {
  const resource: { [key: string]: string };
  export = resource;
}

declare module "*.svg";
declare module "*.jpg";
declare module "*.png";
declare module "*.woff";
declare module "*.woff2";
