import clsx from "clsx";
import React from "react";
import type { ComponentPropsWithoutRef } from "react";
import type { ResponsiveSize } from "../../types/image";
import { useResponsiveImage } from "../../utils";
import classes from "./Image.module.scss";

export interface ImageProps extends ComponentPropsWithoutRef<"img"> {
  loaderUrl?: string;
  responsive?: ResponsiveSize[];
}

const Image: React.FC<ImageProps> = ({
  className,
  loaderUrl = "/api/image",
  responsive = [],
  ...imgProps
}) => {
  const responsiveProps = useResponsiveImage(imgProps, loaderUrl, responsive);

  return (
    <img
      className={clsx(classes.root, className)}
      {...imgProps}
      {...responsiveProps}
    />
  );
};

export default Image;