import React from "react";
import styles from "./WelcomeBanner.module.scss";
import Image from "next/image";
import welcomeBannerImage from "@/assets/welcome_banner_image.png";

import Button from "@/components/global/Button";

export default function WelcomeBanner() {
    return (
        <header className={styles.welcomeBanner}>
            <div className={styles.welcomeBannerContent}>
                <div className={styles.welcomeBannerText}>
                    <h1>Przygotuj się na Maturzystnie.</h1>
                    <p className="light-text-muted">
                        Oprogramowanie, które sprawi ci przyjemność oraz znacząco poprawi Twoje wyniki w nauce.
                    </p>
                    <div className={styles.welcomeBannerButtons}>
                        <Button>Kliknij</Button>
                        <Button type="outline">Oferta</Button>
                    </div>
                </div>
                <div className={styles.welcomeBannerImage}>
                    <Image src={welcomeBannerImage} alt="Student with laptop" className={styles.welcomeBannerImage} />
                </div>
            </div>
        </header>
    );
}
