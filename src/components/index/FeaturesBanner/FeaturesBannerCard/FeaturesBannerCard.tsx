import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./FeaturesBannerCards.module.scss";

interface FeaturesBannerCardProps {
    name: string;
    image: StaticImageData;
}

export default function FeaturesBannerCard(props: FeaturesBannerCardProps) {
    const { name, image } = props;
    return (
        <div className={styles.featuresBannerCard}>
            <Image src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
}
