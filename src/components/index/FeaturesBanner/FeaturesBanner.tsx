import React from "react";
import styles from "./FeaturesBanner.module.scss";
import FeaturesBannerCard from "./FeaturesBannerCard";
import rubyImage from "@/assets/ruby.png";
import rocketImage from "@/assets/rocket.png";
import notepadImage from "@/assets/notepad.png";

export default function FeaturesBanner() {
    return (
        <div className={styles.featuresBanner}>
            <div className={styles.featuresBannerContent}>
                <h2>Jak jesteśmy w stanie pomóc?</h2>
                <p className="dark-text-muted">
                    W naszej aplikacji znajdziesz wiele różnorodnych materiałów edukacyjnych. Dostępne są także testy i
                    quizy, które pozwolą Ci w interesujący sposób utrwalać zdobytą wiedzę.
                </p>
            </div>
            <div className={styles.featuresBannerCards}>
                <FeaturesBannerCard name={"Quizy"} image={notepadImage} />
                <FeaturesBannerCard name={"Testy"} image={rubyImage} bottom={true} />
                <FeaturesBannerCard name={"Filmy"} image={rocketImage} />
            </div>
        </div>
    );
}
