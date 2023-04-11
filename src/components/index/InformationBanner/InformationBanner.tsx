import React from "react";
import styles from "./InformationBanner.module.scss";
import informationBannerimage from "@/assets/information_banner_image.png";


import Button from "@/components/global/Button";

export default function InformationBanner() {
    return (
        <div style={{ backgroundImage:`url(${informationBannerimage})`,backgroundRepeat:"no-repeat" }} className={styles.informationBanner}>
            <div className={styles.informationBannerTextUp}>
                <h1>loremo pomelo <br />ipsumo moreloelo<br/><span>ELOELOELOELO</span></h1>
                <p>Lorem ipsum Lorem ipsumLoremeeeee 
                   ipsumLorem ipsumLorem ipsumLorem 
                   ipsumLoremipsumLoremipsumLoremi
                </p>
                <Button>Read more?</Button>
            </div>
            <div className={styles.informationBannerTextDown}>
                <h1 className={styles.h1}>loremo pomelo <br />ipsumo moreloelo<br/><span>ELOELOELOELO</span></h1>
                <p className={styles.p}>Lorem ipsum Lorem ipsumLoremeeeee 
                   ipsumLorem ipsumLorem ipsumLorem 
                   ipsumLoremipsumLoremipsumLoremi
                </p>
                <Button>Read more?</Button>
            </div>
        </div>
    );
}