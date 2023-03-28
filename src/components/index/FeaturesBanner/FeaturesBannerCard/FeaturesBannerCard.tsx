import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./FeaturesBannerCard.module.scss";

interface FeaturesBannerCardProps {
    name: string;
    image: StaticImageData;
    bottom?: boolean;
}

export default function FeaturesBannerCard(props: FeaturesBannerCardProps) {
    const { name, image, bottom: isBottom = false } = props;

    const classNames = [styles.featuresBannerCard];
    if (isBottom) classNames.push(styles.featuresBannerCard__bottom);

    return (
        <div className={classNames.join(" ")}>
            <Image src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
}
