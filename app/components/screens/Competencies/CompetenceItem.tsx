import { ICompetence } from "@/core/shared/types/competencies.types";
import Link from "next/link";
import { FC } from "react";
import Heading from "../../ui/Heading";
import styles from "./Competencies.module.scss";

const CompetenceItem: FC<{ competence: ICompetence }> = ({ competence }) => {
    return (
        <Link href={competence.slug}>
            <div className={styles.item}>
                <Heading>{competence.title}</Heading>
            </div>
        </Link>
    );
};

export default CompetenceItem;
